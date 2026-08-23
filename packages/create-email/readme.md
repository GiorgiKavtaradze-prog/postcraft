<h3 align="center">✨ The fastest way to start building emails with Postcraft</h3>

<p align="center">
  Scaffold a complete, production-ready email project with a single command.
</p>

<p align="center">

[![npm version](https://img.shields.io/npm/v/create-postcraft?style=for-the-badge&color=0070f3&label=create-postcraft&logo=npm&logoColor=white)](https://www.npmjs.com/package/create-postcraft)
[![npm downloads](https://img.shields.io/npm/dm/create-postcraft?style=for-the-badge&color=0070f3&logo=npm&logoColor=white)](https://www.npmjs.com/package/create-postcraft)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e.svg?style=for-the-badge&logo=open-source-initiative&logoColor=white)](../../LICENSE.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge&logo=github&logoColor=white)](../../CONTRIBUTING.md)

</p>

---

## 🚀 Quick Start

> [!TIP]
> No installation required — run directly with **`npx`**.

```bash
npx create-postcraft@latest
```

This will:

1. 🎯 Prompt you for a project name (default: `my-email-project`)
2. 📁 Create the project directory with starter templates
3. 📦 Install dependencies automatically
4. ▶️ Print instructions to start the dev server

### 📝 Specify a Project Name

Pass a name as the first argument to skip the prompt:

```bash
npx create-postcraft@latest my-email-project
```

### 📦 Package Manager Support

```bash
# npm
npx create-postcraft@latest

# pnpm
pnpm create postcraft@latest

# yarn
yarn create postcraft@latest

# bun
bunx create-postcraft@latest
```

---

## 📂 Generated Project Structure

```text
my-email-project/
├── emails/
│   ├── static/              # Static assets (images, fonts)
│   ├── welcome.tsx          # Welcome email template
│   ├── password-reset.tsx   # Password reset template
│   └── notification.tsx     # Notification template
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🎨 Starter Templates

The scaffolded project ships with **three production-ready** email templates:

| 🗂️ Template          | 📄 Description                                       |
| -------------------- | ---------------------------------------------------- |
| `welcome.tsx`        | User onboarding welcome email with verification CTA  |
| `password-reset.tsx` | Secure password reset email with expiry notice       |
| `notification.tsx`   | General notification email with customizable content |

---

## 🏃 After Scaffolding

```bash
cd my-email-project

# ▶️ Start the live preview server
npm run dev
# → http://localhost:3000

# 📤 Export templates to static HTML
npm run export
# → ./out/
```

---

## 🎛️ CLI Options

| Flag                     | Description                                                     |
| ------------------------ | --------------------------------------------------------------- |
| `--no-install`           | Skip automatic dependency installation                          |
| `--package-manager <pm>` | Force a specific package manager (`npm`, `pnpm`, `yarn`, `bun`) |

---

## 🧰 What's Included

|                          |                                                    |
| ------------------------ | -------------------------------------------------- |
| ✅ **TypeScript**        | Full type safety out of the box                    |
| ✅ **Tailwind CSS**      | Email-safe utility classes with `pixelBasedPreset` |
| ✅ **Live preview**      | `postcraft dev` for instant visual feedback        |
| ✅ **Export**            | `postcraft export` for email-ready static HTML     |
| ✅ **Starter templates** | 3 production-ready email templates                 |
| ✅ **`PreviewProps`**    | Test with realistic data in the preview server     |

---

## 📄 License

[MIT](../../LICENSE.md) © [Giorgi Kavtaradze](https://github.com/GiorgiKavtaradze-prog)
