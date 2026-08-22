# Postcraft Marketing Website

The official Postcraft marketing website, built with **Next.js** and deployed on **Vercel**.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://postcraft.dev)

---

## Development

### Prerequisites

Before running the web app, install and build workspace dependencies from the **monorepo root**:

```bash
# From the repository root
pnpm install
pnpm build
```

### Start the Development Server

```bash
# From apps/web
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The page hot-reloads automatically as you edit files.

---

## Project Structure

```
apps/web/
├── app/                # Next.js App Router pages and layouts
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home / landing page
│   └── ...
├── components/         # Reusable React components
├── public/             # Static assets (images, favicons, OG images)
├── styles/             # Global styles
├── next.config.ts      # Next.js configuration
└── package.json
```

---

## Deployment

The website is automatically deployed to [Vercel](https://vercel.com) on every push to the `main` branch.

### Manual Deployment

```bash
# Build for production
pnpm build

# Start production server locally
pnpm start
```

### Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Connect your GitHub repository to Vercel
2. Set the root directory to `apps/web`
3. Vercel will automatically detect Next.js and configure the build

---

## Environment Variables

Create a `.env.local` file in `apps/web/` for local development:

```env
# Analytics
NEXT_PUBLIC_ANALYTICS_ID=

# API
NEXT_PUBLIC_API_URL=https://postcraft.dev
```

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Vercel Deployment](https://nextjs.org/docs/deployment)
