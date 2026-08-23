<h3 align="center">🧩 @postcraft/ui</h3>

<p align="center">
  Shared UI components for the Postcraft ecosystem.<br />
  Powers the live email preview server for the Postcraft CLI.
</p>

<p align="center">

[![npm version](https://img.shields.io/npm/v/@postcraft/ui?style=for-the-badge&color=0070f3&label=@postcraft/ui&logo=npm&logoColor=white)](https://www.npmjs.com/package/@postcraft/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e.svg?style=for-the-badge&logo=open-source-initiative&logoColor=white)](../../LICENSE.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge&logo=github&logoColor=white)](../../CONTRIBUTING.md)

</p>

---

## 🔎 Overview

> [!NOTE]
> This package is automatically installed when you run `postcraft dev`. You typically **don't need to install this directly** unless you're building tools that embed the Postcraft preview UI.

`@postcraft/ui` provides the preview server UI used by the Postcraft CLI. It is published as a standalone package so it can be installed and used by the CLI without bundling the full UI into the CLI package.

---

## 🛠️ Development Workflow

### 1️⃣ Seed email templates

Generate a boilerplate email directory to work with:

```bash
pnpm dev:seed
```

This creates a set of sample email template files you can use for local development. These files are not included in git and can be freely modified.

### 2️⃣ Start the development server

```bash
pnpm dev
```

This starts the preview server (similar to `next dev`). It does **not** support hot-reloading for email template files — for that, use the Postcraft CLI's `postcraft dev` command.

Use this command when working on the **UI** of the preview server itself (layouts, styling, navigation, etc.).

### 3️⃣ Open in your browser

Navigate to [http://localhost:3000](http://localhost:3000) to see the preview UI.

---

## 🏗️ Architecture

The preview server is a **Next.js application** that:

1. 📂 Reads email template files from the configured `--dir` directory
2. ⚛️ Imports and renders each template using `@postcraft/render`
3. 🖥️ Displays rendered HTML in an iframe with device and dark mode controls
4. 🧭 Provides navigation between templates
5. 📄 Shows the source code and plain-text version

---

## 🚀 Building for Production

```bash
# Build the production preview app
pnpm build

# Start the production server
pnpm start
```

---

## 📄 License

[MIT](../../LICENSE.md) © [Giorgi Kavtaradze](https://github.com/GiorgiKavtaradze-prog)
