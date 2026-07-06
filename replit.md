# Kicks — Premium Sneakers Storefront

A sneaker e-commerce frontend built with TanStack Start (React + SSR), TanStack Router, TanStack Query, Tailwind CSS v4, and shadcn/ui components.

## Stack

- **Framework**: TanStack Start (SSR, file-based routing)
- **Router**: TanStack Router (type-safe routes in `src/routes/`)
- **Styling**: Tailwind CSS v4 with custom `kicks` brand tokens
- **UI Components**: shadcn/ui (in `src/components/ui/`)
- **Fonts**: Bebas Neue (display/headings), Inter (body)

## Running the project

```bash
npm run dev   # starts dev server on port 5000
npm run build # production build
```

The **Dev Server** workflow runs `npm run dev` automatically.

## Project structure

```
src/
  routes/         # File-based routes (__root.tsx, index.tsx, mens.tsx, womens.tsx, kids.tsx)
  components/     # Shared components (Header, shadcn/ui)
  lib/            # Utilities (cn, error handling)
  hooks/          # React hooks
  assets/         # Static image assets (hero-sneaker.png, category images)
  styles.css      # Global CSS + Tailwind theme tokens
  router.tsx      # Router + QueryClient setup
  server.ts       # SSR server entry
  start.ts        # TanStack Start entry
```

## Notes

- The `@/` import alias resolves to `src/` (set by `@lovable.dev/vite-tanstack-config`)
- Relative imports from `src/routes/` use `../` to reach `src/lib/`, `src/components/`, `src/styles.css`
- Image assets in `src/assets/` are placeholder 1×1 PNGs — replace with real sneaker images
- `nitro` is disabled in `vite.config.ts` (set `nitro: true` to enable Cloudflare/Vercel deploy targets)

## User preferences

- Keep the existing TanStack Start + file-based routing structure
