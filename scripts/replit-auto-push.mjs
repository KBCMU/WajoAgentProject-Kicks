#!/usr/bin/env node
import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const cwd = process.env.AUTO_PUSH_REPO_DIR || process.cwd();
const pollMs = Number(process.env.AUTO_PUSH_POLL_MS || 10_000);
const debounceMs = Number(process.env.AUTO_PUSH_DEBOUNCE_MS || 60_000);
const branch = process.env.AUTO_PUSH_BRANCH || await currentBranch();
const remote = process.env.GIT_PUSH_REMOTE || process.env.GIT_URL || "origin";
const commitMessage =
  process.env.AUTO_PUSH_MESSAGE || "[replit-auto] sync Replit changes";

let dirtySince = null;
let lastSignature = "";
let busy = false;

log(`Watching ${cwd}`);
log(`Branch: ${branch}; poll: ${pollMs}ms; debounce: ${debounceMs}ms`);

await ensureGitRepo();
await loop();

async function loop() {
  while (true) {
    try {
      if (!busy) {
        await tick();
      }
    } catch (error) {
      logError(error);
    }

    await sleep(pollMs);
  }
}

async function tick() {
  if (await hasInterruptedGitOperation()) {
    dirtySince = null;
    log("Git merge/rebase is in progress. Resolve it manually, then restart or let this script continue.");
    return;
  }

  const status = await git(["status", "--porcelain=v1", "--branch"]);
  const { dirtyLines, ahead } = parseStatus(status.stdout);

  if (dirtyLines.length === 0) {
    dirtySince = null;
    lastSignature = "";

    if (ahead) {
      busy = true;
      try {
        await pullRebase();
        await push();
      } finally {
        busy = false;
      }
    }
    return;
  }

  const signature = dirtyLines.join("\n");
  if (signature !== lastSignature) {
    lastSignature = signature;
    dirtySince = Date.now();
    log(`Detected ${dirtyLines.length} changed file(s); waiting for quiet period.`);
    return;
  }

  if (!dirtySince || Date.now() - dirtySince < debounceMs) {
    return;
  }

  busy = true;
  try {
    await commitPullPush();
  } finally {
    busy = false;
    dirtySince = null;
    lastSignature = "";
  }
}

async function commitPullPush() {
  await git(["add", "--all"]);

  const staged = await git(["diff", "--cached", "--quiet"], { allowFailure: true });
  if (staged.code === 0) {
    log("No staged changes after git add; skipping.");
    return;
  }

  await git(["commit", "-m", commitMessage]);
  await pullRebase();
  await push();
}

async function pullRebase() {
  log(`Rebasing on ${remoteLabel(remote)}/${branch}`);
  const result = await git(["pull", "--rebase", remote, branch], { allowFailure: true });
  if (result.code !== 0) {
    log("Pull/rebase failed. Resolve conflicts in Replit before auto-push can continue.");
    throw new Error(result.stderr || result.stdout || "git pull --rebase failed");
  }
}

async function push() {
  log(`Pushing to ${remoteLabel(remote)}/${branch}`);
  const result = await git(["push", remote, `HEAD:${branch}`], { allowFailure: true });
  if (result.code !== 0) {
    throw new Error(result.stderr || result.stdout || "git push failed");
  }
  log("Pushed Replit changes to GitHub.");
}

async function currentBranch() {
  const result = await git(["branch", "--show-current"]);
  const name = result.stdout.trim();
  return name || "main";
}

async function ensureGitRepo() {
  const result = await git(["rev-parse", "--is-inside-work-tree"], { allowFailure: true });
  if (result.stdout.trim() !== "true") {
    throw new Error(`${cwd} is not a Git repository`);
  }
}

async function hasInterruptedGitOperation() {
  const gitDirResult = await git(["rev-parse", "--git-dir"], { allowFailure: true });
  if (gitDirResult.code !== 0) return false;

  const gitDir = gitDirResult.stdout.trim();
  return (
    existsSync(join(cwd, gitDir, "MERGE_HEAD")) ||
    existsSync(join(cwd, gitDir, "rebase-merge")) ||
    existsSync(join(cwd, gitDir, "rebase-apply"))
  );
}

async function git(args, options = {}) {
  try {
    const result = await execFileAsync("git", args, { cwd, windowsHide: true });
    return { code: 0, stdout: result.stdout, stderr: result.stderr };
  } catch (error) {
    if (options.allowFailure) {
      return {
        code: error.code || 1,
        stdout: error.stdout || "",
        stderr: error.stderr || error.message,
      };
    }
    throw error;
  }
}

function parseStatus(stdout) {
  const lines = stdout.split(/\r?\n/).filter(Boolean);
  const branchLine = lines.find((line) => line.startsWith("##")) || "";
  const dirtyLines = lines.filter((line) => !line.startsWith("##"));

  return {
    dirtyLines,
    ahead: /\[ahead \d+/.test(branchLine),
  };
}

function remoteLabel(value) {
  if (!/^https?:\/\//.test(value)) return value;
  try {
    const url = new URL(value);
    if (url.username || url.password) {
      url.username = "***";
      url.password = "***";
    }
    return url.toString();
  } catch {
    return "<redacted remote url>";
  }
}

function log(message) {
  console.log(`[replit-auto-push] ${new Date().toISOString()} ${message}`);
}

function logError(error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`[replit-auto-push] ${new Date().toISOString()} ${message}`);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
