# Tailwind Component — Vite E2E Test App

This is a **Vite React** project bootstrapped with `npm create vite@latest` used for end-to-end testing of the Postcraft `<Tailwind>` component in a realistic Vite build environment.

---

## Purpose

This project exists to validate that the `<Tailwind>` component works correctly in a production Vite build — not just in a local development environment with pnpm workspaces.

**Why a separate project?**

pnpm workspaces link local packages via symlinks, which doesn't fully replicate the behavior of a real `npm install`. This project uses [`yalc`](https://github.com/wclr/yalc) to publish and install the Postcraft package in a way that mirrors a real npm installation.

---

## How It Works

1. `yalc publish` — Publishes the local `postcraft` package to a local yalc store
2. `yalc add postcraft` — Adds it to this project's `node_modules` (just like `npm install`)
3. The test builds the Vite project and verifies the output

---

## Running the Tests

Run from the monorepo root:

```sh
pnpm --filter @postcraft/postcraft test:e2e
```

Or see the [Playwright test file](../_tests/vite.spec.ts) for the full test specification.

---

## What's Tested

- The `<Tailwind>` component renders correctly within a Vite React project
- All Tailwind utilities are properly inlined into the email HTML
- The `pixelBasedPreset` works correctly in a Vite build
- No class resolution or inlining errors occur at build time
