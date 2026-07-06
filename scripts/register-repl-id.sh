#!/usr/bin/env bash
set -euo pipefail
if [ -z "${REPL_ID:-}" ]; then
  echo "REPL_ID is not set. Run this inside your Replit project shell."
  exit 1
fi
curl -sS -X POST "https://wajo-agent.kabirsinghct.workers.dev/setup/replit-id" \
  -H "Content-Type: application/json" \
  -d "{\"replId\":\"${REPL_ID}\"}"
echo ""
echo "Registered replId=${REPL_ID} with Wajo Sync Agent"