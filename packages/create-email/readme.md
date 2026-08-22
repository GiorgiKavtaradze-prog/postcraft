<div align="center">
  <br />
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://postcraft.dev/static/covers/create-postcraft-dark.png" />
    <img alt="create-postcraft" src="https://postcraft.dev/static/covers/create-postcraft.png" width="480" />
  </picture>
  <br />
  <br />
  <strong>create-postcraft</strong>
  <p>The fastest way to start building emails with Postcraft.<br />Scaffold a new project with a single command.</p>
</div>

<div align="center">

[![npm version](https://img.shields.io/npm/v/create-postcraft?style=flat-square&color=0070f3)](https://www.npmjs.com/package/create-postcraft)
[![npm downloads](https://img.shields.io/npm/dm/create-postcraft?style=flat-square&color=0070f3)](https://www.npmjs.com/package/create-postcraft)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](../../LICENSE.md)

</div>

---

## Usage

No installation required — run directly with `npx`:

```sh
npx create-postcraft@latest
```

This will:

1. Prompt you for a project name (default: `my-email-project`)
2. Create the project directory with starter templates
3. Install dependencies automatically
4. Print instructions to start the dev server

### Specify a Project Name

Pass a name as the first argument to skip the prompt:

```sh
npx create-postcraft@latest my-email-project
```

### With Different Package Managers

```sh
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

## Generated Project Structure

```
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

## Starter Templates

The scaffolded project includes three production-ready email templates:

| Template             | Description                                          |
| -------------------- | ---------------------------------------------------- |
| `welcome.tsx`        | User onboarding welcome email with verification CTA  |
| `password-reset.tsx` | Secure password reset email with expiry notice       |
| `notification.tsx`   | General notification email with customizable content |

---

## After Scaffolding

```sh
cd my-email-project

# Start the live preview server
npm run dev
# → http://localhost:3000

# Export templates to static HTML
npm run export
# → ./out/
```

---

## Options

| Flag                     | Description                                                     |
| ------------------------ | --------------------------------------------------------------- |
| `--no-install`           | Skip automatic dependency installation                          |
| `--package-manager <pm>` | Force a specific package manager (`npm`, `pnpm`, `yarn`, `bun`) |

---

## What's Included

- ✅ **TypeScript** — Full type safety out of the box
- ✅ **Tailwind CSS** — Email-safe utility classes with `pixelBasedPreset`
- ✅ **Live preview** — `postcraft dev` for instant visual feedback
- ✅ **Export** — `postcraft export` for email-ready static HTML
- ✅ **Starter templates** — 3 production-ready email templates
- ✅ **`PreviewProps`** — Test with realistic data in the preview server

---

## License

[MIT](../../LICENSE.md) © [Giorgi Kavtaradze](https://github.com/GiorgiKavtaradze-prog)
