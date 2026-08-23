# ⚡ Tailwind Component — Next.js E2E Test App

This is a **Next.js** project bootstrapped with `create-next-app` used for end-to-end testing of the Postcraft `<Tailwind>` component in a realistic Next.js build environment.

---

## 🎯 Purpose

This project exists to validate that the `<Tailwind>` component works correctly in a **production Next.js build** — not just in a local development environment with pnpm workspaces.

**Why a separate project?**

pnpm workspaces link local packages via symlinks, which doesn't fully replicate the behavior of a real `npm install`. This project uses [`yalc`](https://github.com/wclr/yalc) to publish and install the Postcraft package in a way that mirrors a real npm installation.

---

## ⚙️ How It Works

1. 📦 `yalc publish` — Publishes the local `postcraft` package to a local yalc store
2. 📥 `yalc add postcraft` — Adds it to this project's `node_modules` (just like `npm install`)
3. 🧪 The test builds the Next.js project and verifies the output

---

## 🚀 Running the Tests

Run from the monorepo root:

```bash
pnpm --filter @postcraft/postcraft test:e2e
```

Or see the [Playwright test file](../_tests/nextjs.spec.ts) for the full test specification.

---

## ✅ What's Tested

- The `<Tailwind>` component renders correctly within a Next.js Server Component
- All Tailwind utilities are properly inlined into the email HTML
- The `pixelBasedPreset` works correctly in a Next.js build
- No class resolution or inlining errors occur at build time
