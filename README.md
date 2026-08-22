```
██████╗  ██████╗ ███████╗████████╗ ██████╗██████╗  █████╗ ███████╗████████╗
██╔══██╗██╔═══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝
██████╔╝██║   ██║███████╗   ██║   ██║     ██████╔╝███████║█████╗     ██║
██╔═══╝ ██║   ██║╚════██║   ██║   ██║     ██╔══██╗██╔══██║██╔══╝     ██║
██║     ╚██████╔╝███████║   ██║   ╚██████╗██║  ██║██║  ██║██║        ██║
╚═╝      ╚═════╝ ╚══════╝   ╚═╝    ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝        ╚═╝
```

<h3>The next generation of writing emails.</h3>
<p>High-quality, unstyled components for creating beautiful, responsive emails with React and TypeScript.</p>

[![npm version](https://img.shields.io/npm/v/postcraft?style=flat-square\&color=0070f3\&label=postcraft)](https://www.npmjs.com/package/postcraft)
[![npm downloads](https://img.shields.io/npm/dm/postcraft?style=flat-square\&color=0070f3)](https://www.npmjs.com/package/postcraft)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)
[![GitHub Stars](https://img.shields.io/github/stars/GiorgiKavtaradze-prog/postcraft?style=flat-square\&color=yellow)](https://github.com/GiorgiKavtaradze-prog/postcraft/stargazers)

***

## ✨ Overview

**Postcraft** is a collection of high-quality, unstyled components for creating beautiful emails using **React** and **TypeScript**. It removes the pain of coding responsive emails with dark mode support, and handles inconsistencies between **Gmail**, **Apple Mail**, **Outlook**, and other email clients for you.

> 💡 **Why Postcraft?** We believe email is an extremely important medium for communication. It's time to stop developing emails like it's 2010 and rethink how email can be done in 2026 and beyond.

### Key Features

* 🧱 **Component-based** — Build emails with reusable React components
* 🎨 **Tailwind CSS support** — Use utility classes with email-safe pixel presets
* 📱 **Responsive by design** — Works beautifully across all screen sizes
* 🌙 **Dark mode aware** — Built-in dark mode handling for supporting clients
* ✍️ **Visual editor** — Drag-and-drop email building with `@postcraft/editor`
* 🔌 **Provider agnostic** — Send with Resend, Nodemailer, SendGrid, and more
* 🧪 **Fully typed** — First-class TypeScript support throughout
* 🚀 **CLI included** — `postcraft dev` for live preview, `postcraft export` for production

***

## 🧰 Technologies

This monorepo is built with the following stack.

### Languages & runtime

| Technology                                    | Purpose                                            |
| --------------------------------------------- | -------------------------------------------------- |
| [TypeScript](https://www.typescriptlang.org/) | Typed source across packages, apps, and the CLI    |
| [React](https://react.dev/) 19                | Email components, editor UI, preview, and websites |
| [Node.js](https://nodejs.org/) `>= 20`        | Runtime for CLI, rendering, and local tooling      |

### Email & product libraries

| Technology                                                                                | Purpose                                                       |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [Tailwind CSS](https://tailwindcss.com/) 4                                                | Utility styling in emails (`Tailwind` component) and apps     |
| [TipTap](https://tiptap.dev/)                                                             | Rich text editor framework (`@postcraft/editor`)              |
| [ProseMirror](https://prosemirror.net/)                                                   | Editor document model (via TipTap)                            |
| [Radix UI](https://www.radix-ui.com/)                                                     | Accessible primitives (popover, tabs, tooltip, etc.)          |
| [html-to-text](https://github.com/html-to-text/node-html-to-text)                         | Plain-text export from rendered HTML                          |
| [Prism](https://prismjs.com/)                                                             | Syntax highlighting in `CodeBlock` and editor                 |
| [marked](https://marked.js.org/)                                                          | Markdown rendering for emails                                 |
| [Socket.IO](https://socket.io/)                                                           | Live preview reloads in the CLI / UI                          |
| [Commander](https://github.com/tj/commander.js)                                           | CLI argument parsing                                          |
| [esbuild](https://esbuild.github.io/)                                                     | Fast bundling for the preview / email pipeline                |
| [Babel](https://babeljs.io/)                                                              | Parsing and traversing email source files                     |

### Apps & sites

| Technology                                                                                | Purpose                                                       |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [Next.js](https://nextjs.org/)                                                            | Marketing site (`apps/web`) and preview UI (`@postcraft/ui`)  |
| [Mintlify](https://mintlify.com/)                                                         | Documentation site (`apps/docs`)                              |
| [Framer Motion](https://www.framer.com/motion/)                                           | Motion on the web / preview UI                                |
| [Three.js](https://threejs.org/) / [React Three Fiber](https://r3f.docs.pmnd.rs/)         | 3D visuals on the marketing site                              |
| [Supabase](https://supabase.com/)                                                         | Backend used by the marketing site                            |
| [Resend](https://resend.com/)                                                             | Example sending integration and CLI helpers                   |
| [Zod](https://zod.dev/)                                                                   | Schema validation                                             |
| [Lucide](https://lucide.dev/)                                                             | Icons on the marketing site                                   |

### Monorepo, build & quality

| Technology                                                | Purpose                                    |
| --------------------------------------------------------- | -----------------------------------------  |
| [pnpm](https://pnpm.io/) 11                               | Workspaces, catalog versions, and installs |
| [Turborepo](https://turbo.build/)                         | Task graph, caching, and parallel builds   |
| [tsdown](https://tsdown.vercel.app/)                      | Library bundling for published packages    |
| [Vite](https://vite.dev/)                                 | Test / playground bundling                 |
| [tsx](https://tsx.is/)                                    | Run TypeScript scripts without a compile   |
| [Biome](https://biomejs.dev/)                             | Lint and format                            |
| [Vitest](https://vitest.dev/)                             | Unit and integration tests                 |
| [Playwright](https://playwright.dev/)                     | Browser tests for the editor               |
| [Testing Library](https://testing-library.com/)           | React component tests                      |
| [Changesets](https://github.com/changesets/changesets)    | Versioning and npm releases                |
| [GitHub Actions](https://github.com/features/actions)     | CI, releases, and automation               |

***

## 📦 Packages

This monorepo is organized into the following packages:

| Package                                                              | Version                                                                                                                                         | Description                                          |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [`postcraft`](packages/postcraft)                                    | [![npm](https://img.shields.io/npm/v/postcraft?style=flat-square)](https://www.npmjs.com/package/postcraft)                                     | Core React components for building email templates   |
| [`@postcraft/render`](packages/render)                               | [![npm](https://img.shields.io/npm/v/@postcraft/render?style=flat-square)](https://www.npmjs.com/package/@postcraft/render)                     | Transform React components into HTML email templates |
| [`@postcraft/editor`](packages/editor)                               | [![npm](https://img.shields.io/npm/v/@postcraft/editor?style=flat-square)](https://www.npmjs.com/package/@postcraft/editor)                     | Rich text editor built on Tiptap & ProseMirror       |
| [`create-postcraft`](packages/create-email)                          | [![npm](https://img.shields.io/npm/v/create-postcraft?style=flat-square)](https://www.npmjs.com/package/create-postcraft)                       | Scaffold a new Postcraft project in seconds          |
| [`@postcraft/ui`](packages/ui)                                       | [![npm](https://img.shields.io/npm/v/@postcraft/ui?style=flat-square)](https://www.npmjs.com/package/@postcraft/ui)                             | Shared UI components used across the monorepo        |
| [`@responsive-email/postcraft`](packages/responsive-email-postcraft) | [![npm](https://img.shields.io/npm/v/@responsive-email/postcraft?style=flat-square)](https://www.npmjs.com/package/@responsive-email/postcraft) | Responsive email layout components                   |

***

## 🚀 Getting Started

### Prerequisites

* **Node.js** `>= 20.0.0`
* **pnpm** `>= 11.0.0` (or npm / yarn / bun)

### Quick Start

Scaffold a new project in seconds:

```sh
npx create-postcraft@latest
cd my-email-project
npm install
npm run dev
```

The dev server starts at `http://localhost:3000` with a live preview interface for your email templates.

### Manual Installation

Add Postcraft to an existing project:

```sh
npm install postcraft
# or
pnpm add postcraft
# or
yarn add postcraft
```

### Your First Email

```tsx
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Button,
  Preview,
  Tailwind,
  pixelBasedPreset,
} from "postcraft";

interface WelcomeEmailProps {
  name: string;
  verificationUrl: string;
}

const tailwindConfig = {
  presets: [pixelBasedPreset],
};

export default function WelcomeEmail({
  name,
  verificationUrl,
}: WelcomeEmailProps) {
  return (
    <Html lang="en">
      <Tailwind config={tailwindConfig}>
        <Head />
        <Body className="bg-gray-100 font-sans">
          <Preview>Welcome to Postcraft — Verify your email</Preview>
          <Container className="max-w-xl mx-auto p-8">
            <Heading className="text-2xl font-bold text-gray-900">
              Welcome, {name}!
            </Heading>
            <Text className="text-base text-gray-600 mt-4">
              Thanks for signing up. Please verify your email address to get
              started.
            </Text>
            <Button
              href={verificationUrl}
              className="bg-blue-600 text-white px-6 py-3 rounded-md block text-center no-underline box-border mt-6"
            >
              Verify Email Address
            </Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

WelcomeEmail.PreviewProps = {
  name: "Giorgi",
  verificationUrl: "https://postcraft.dev/verify/abc123",
} satisfies WelcomeEmailProps;
```

### Rendering to HTML

Convert your React email component to an HTML string ready for sending:

```tsx
import { render } from "@postcraft/render";
import { WelcomeEmail } from "./emails/welcome";

const html = await render(
  <WelcomeEmail name="Giorgi" verificationUrl="https://example.com/verify" />,
);
const text = await render(
  <WelcomeEmail name="Giorgi" verificationUrl="https://example.com/verify" />,
  { plainText: true },
);
```

***

## 🧩 Components

A set of standard, cross-client compatible components to help you build beautiful emails without dealing with table-based layouts.

### Layout

| Component                                                  | Description                                  |
| ---------------------------------------------------------- | -------------------------------------------- |
| [`Html`](packages/postcraft/src/components/html)           | Root HTML wrapper with `lang` attribute      |
| [`Head`](packages/postcraft/src/components/head)           | Email head element for meta, styles, fonts   |
| [`Body`](packages/postcraft/src/components/body)           | Main body wrapper                            |
| [`Container`](packages/postcraft/src/components/container) | Centered content wrapper (max-width: 37.5em) |
| [`Section`](packages/postcraft/src/components/section)     | Interior content block for grouping          |
| [`Row`](packages/postcraft/src/components/row)             | Horizontal row for multi-column layouts      |
| [`Column`](packages/postcraft/src/components/column)       | Column within a Row                          |

### Content

| Component                                              | Description                               |
| ------------------------------------------------------ | ----------------------------------------- |
| [`Preview`](packages/postcraft/src/components/preview) | Inbox preview text (always first in Body) |
| [`Heading`](packages/postcraft/src/components/heading) | h1–h6 heading elements                    |
| [`Text`](packages/postcraft/src/components/text)       | Paragraph text blocks                     |
| [`Button`](packages/postcraft/src/components/button)   | Styled call-to-action link button         |
| [`Link`](packages/postcraft/src/components/link)       | Inline hyperlinks                         |
| [`Img`](packages/postcraft/src/components/img)         | Responsive image component                |
| [`Hr`](packages/postcraft/src/components/hr)           | Horizontal divider                        |

### Specialized

| Component                                                     | Description                       |
| ------------------------------------------------------------- | --------------------------------- |
| [`Tailwind`](packages/postcraft/src/components/tailwind)      | Tailwind CSS support for emails   |
| [`Font`](packages/postcraft/src/components/font)              | Custom web font loading           |
| [`Markdown`](packages/postcraft/src/components/markdown)      | Render Markdown content in emails |
| [`CodeBlock`](packages/postcraft/src/components/code-block)   | Syntax-highlighted code blocks    |
| [`CodeInline`](packages/postcraft/src/components/code-inline) | Inline code formatting            |

***

## ✍️ Visual Editor

Postcraft provides a **rich text email editor** built on [TipTap](https://tiptap.dev/) and [ProseMirror](https://prosemirror.net/). It serializes content to Postcraft components and exports email-ready HTML and plain text.

### Features

| Feature               | Description                                                 |
| --------------------- | ----------------------------------------------------------- |
| 🧠 **Bubble Menu**    | Contextual formatting toolbar on selection                  |
| 🎛️ **Inspector**      | Property editing panel for selected elements                |
| ⚡ **Slash Commands** | Type `/` to quickly insert elements                         |
| 🎨 **Theming**        | Built-in themes (`basic`, `minimal`) with CSS customization |
| 📐 **Column Layouts** | Drag-and-drop multi-column email structures                 |
| 🔗 **Link Editing**   | Inline link management                                      |
| 📤 **Email Export**   | `composeEmail()` to export email-ready HTML                 |
| 🖼️ **Image Upload**   | Built-in image upload support                               |

### Installation & Quick Start

```bash
npm install @postcraft/editor
```

```tsx
import { EmailEditor, type EmailEditorRef } from "@postcraft/editor";
import "@postcraft/editor/themes/default.css";
import { useRef } from "react";

export function MyEditor() {
  const ref = useRef<EmailEditorRef>(null);

  return (
    <EmailEditor
      ref={ref}
      content="<p>Start typing your email...</p>"
      theme="basic"
    />
  );
}
```

### Entry Points

| Import                         | Contents                                       |
| ------------------------------ | ---------------------------------------------- |
| `@postcraft/editor`            | Main `EmailEditor` component and top-level API |
| `@postcraft/editor/core`       | Serializer, types, and event bus               |
| `@postcraft/editor/extensions` | 35+ TipTap extensions for email elements       |
| `@postcraft/editor/ui`         | Bubble menus, slash command, inspector         |
| `@postcraft/editor/plugins`    | ProseMirror plugins                            |
| `@postcraft/editor/utils`      | Shared utilities                               |

***

## 🔌 Integrations

Emails built with Postcraft can be sent with any email service provider:

| Provider       | Example                                    |
| -------------- | ------------------------------------------ |
| **Resend**     | [examples/resend](examples/resend)         |
| **Nodemailer** | [examples/nodemailer](examples/nodemailer) |
| **SendGrid**   | [examples/sendgrid](examples/sendgrid)     |
| **MailerSend** | [examples/mailersend](examples/mailersend) |
| **Mailgun**    | [examples/mailgun](examples/mailgun)       |
| **Postmark**   | [examples/postmark](examples/postmark)     |
| **AWS SES**    | [examples/aws-ses](examples/aws-ses)       |
| **Plunk**      | [examples/plunk](examples/plunk)           |
| **Scaleway**   | [examples/scaleway](examples/scaleway)     |

**Example: Sending with Resend**

```tsx
import { Resend } from "resend";
import { WelcomeEmail } from "./emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

const { data, error } = await resend.emails.send({
  from: "Acme <onboarding@resend.dev>",
  to: ["user@example.com"],
  subject: "Welcome to Acme!",
  react: (
    <WelcomeEmail name="Giorgi" verificationUrl="https://example.com/verify" />
  ),
});
```

***

## 🛠️ CLI Reference

Postcraft ships with a powerful CLI to streamline your email development workflow.

| Command                                                              | Description                                                |
| -------------------------------------------------------------------- | ---------------------------------------------------------- |
| `postcraft dev`                                                      | Start live preview server (default: `./emails`, port 3000) |
| `postcraft dev --dir <path> --port <port>`                           | Start server with custom options                           |
| `postcraft export`                                                   | Export all templates to static HTML in `./out`             |
| `postcraft export --dir <path> --outDir <path> --pretty --plainText` | Export with options                                        |
| `postcraft build`                                                    | Build the preview app for production deployment            |
| `postcraft start`                                                    | Run the built preview app                                  |
| `postcraft resend setup`                                             | Connect CLI to Resend via API key                          |
| `postcraft resend reset`                                             | Remove stored Resend API key                               |

***

## 🏗️ Monorepo Structure

```
postcraft/
├── apps/
│   ├── demo/                    # Demo email templates showcase
│   ├── docs/                    # Documentation site (Mintlify)
│   └── web/                     # Marketing website (Next.js)
├── benchmarks/                  # Performance benchmarks
│   └── tailwind/
├── examples/                    # Email service provider integrations
│   ├── aws-ses/
│   ├── mailersend/
│   ├── mailgun/
│   ├── nodemailer/
│   ├── plunk/
│   ├── postmark/
│   ├── resend/
│   ├── scaleway/
│   └── sendgrid/
├── packages/
│   ├── create-email/            # Scaffolding CLI (npx create-postcraft)
│   ├── editor/                  # Rich text visual editor
│   ├── postcraft/               # Core email components & CLI
│   ├── render/                  # React → HTML renderer
│   ├── responsive-email-postcraft/  # Responsive email components
│   ├── tsconfig/                # Shared TypeScript configs
│   └── ui/                      # Shared UI components (preview server)
├── playground/                  # Interactive component playground
├── scripts/                     # Build & release automation scripts
└── skills/                      # AI agent skills for email development
    └── postcraft/
```

***

## 💻 Development

### Setting Up Your Environment

```sh
# Clone the repository
git clone https://github.com/GiorgiKavtaradze-prog/postcraft.git
cd postcraft

# Install all dependencies
pnpm install

# Build all packages
pnpm build

# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Lint the codebase
pnpm lint

# Auto-fix linting issues
pnpm lint:fix
```

### Linking the CLI Globally

To avoid rebuilding after every change when working on the CLI:

```sh
# Link the dev version globally
pnpm link ./dev -g

# Use it just like the regular CLI
postcraft-dev [command] [flags]
```

***

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guide](CONTRIBUTING.md) before getting started.

* 🐛 **Found a bug?** [Open an issue](https://github.com/GiorgiKavtaradze-prog/postcraft/issues/new?template=bug_report.md)
* 💡 **Have an idea?** [Start a discussion](https://github.com/GiorgiKavtaradze-prog/postcraft/discussions)
* 🔧 **Want to contribute code?** Read our [Contributing Guide](CONTRIBUTING.md)

***

## 🛡️ Security

Please read our [Security Policy](SECURITY.md) to learn how to report security vulnerabilities responsibly.

***

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE.md](LICENSE.md) file for details.

***

<sub>Built with ❤️ by <a href="https://github.com/GiorgiKavtaradze-prog">Giorgi Kavtaradze</a> and the Postcraft community</sub>
