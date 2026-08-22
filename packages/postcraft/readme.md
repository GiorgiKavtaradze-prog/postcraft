<div align="center">
  <br />
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://postcraft.dev/static/covers/postcraft-dark.png" />
    <img alt="Postcraft" src="https://postcraft.dev/static/covers/postcraft.png" width="480" />
  </picture>
  <br />
  <br />
  <strong>postcraft</strong>
  <p>The next generation of writing emails.<br />High-quality, unstyled components for creating beautiful, responsive emails.</p>
</div>

<div align="center">

[![npm version](https://img.shields.io/npm/v/postcraft?style=flat-square&color=0070f3)](https://www.npmjs.com/package/postcraft)
[![npm downloads](https://img.shields.io/npm/dm/postcraft?style=flat-square&color=0070f3)](https://www.npmjs.com/package/postcraft)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](../../LICENSE.md)
[![Website](https://img.shields.io/badge/Website-postcraft.dev-06BCEE?style=flat-square)](https://postcraft.dev)

</div>

---

## Installation

```sh
npm install postcraft
# or
pnpm add postcraft
# or
yarn add postcraft
```

## Quick Start

Scaffold a new project instantly:

```sh
npx create-postcraft@latest
cd my-email-project
npm install
npm run dev
```

The dev server runs at `http://localhost:3000` with a live preview interface.

## Usage

Define your email template as a React component:

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

export default function WelcomeEmail({
  name,
  verificationUrl,
}: WelcomeEmailProps) {
  return (
    <Html lang="en">
      <Tailwind config={{ presets: [pixelBasedPreset] }}>
        <Head />
        <Body className="bg-gray-100 font-sans">
          <Preview>Welcome — Verify your email address</Preview>
          <Container className="max-w-xl mx-auto p-8">
            <Heading className="text-2xl font-bold text-gray-900">
              Welcome, {name}!
            </Heading>
            <Text className="text-base text-gray-600 mt-4">
              Thanks for joining. Please verify your email address.
            </Text>
            <Button
              href={verificationUrl}
              className="bg-blue-600 text-white px-6 py-3 rounded-md block text-center no-underline box-border mt-6"
            >
              Verify Email
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

## Components

### Layout

| Component   | Description                                                         |
| ----------- | ------------------------------------------------------------------- |
| `Html`      | Root HTML wrapper with `lang` attribute                             |
| `Head`      | Email head element — meta, styles, fonts                            |
| `Body`      | Main body wrapper                                                   |
| `Container` | Centered content wrapper (`max-width: 37.5em`) — use once per email |
| `Section`   | Interior content block — use for grouping inside `Container`        |
| `Row`       | Horizontal row for multi-column layouts                             |
| `Column`    | Column within a `Row`                                               |

### Content

| Component | Description                                                |
| --------- | ---------------------------------------------------------- |
| `Preview` | Inbox preview text — always first inside `<Body>`          |
| `Heading` | h1–h6 headings                                             |
| `Text`    | Paragraph text                                             |
| `Button`  | Styled call-to-action button (always include `box-border`) |
| `Link`    | Inline hyperlinks                                          |
| `Img`     | Responsive images                                          |
| `Hr`      | Horizontal dividers (always include `border-solid`)        |

### Specialized

| Component    | Description                                  |
| ------------ | -------------------------------------------- |
| `Tailwind`   | Tailwind CSS support with email-safe presets |
| `Font`       | Custom web font loading                      |
| `Markdown`   | Render Markdown content in emails            |
| `CodeBlock`  | Syntax-highlighted code blocks               |
| `CodeInline` | Inline code snippets                         |

## CLI Commands

| Command                                                 | Description                                        |
| ------------------------------------------------------- | -------------------------------------------------- |
| `postcraft dev`                                         | Start live preview dev server (default port: 3000) |
| `postcraft dev --dir <path> --port <port>`              | Custom directory and port                          |
| `postcraft export`                                      | Export templates to static HTML in `./out`         |
| `postcraft export --outDir <path> --pretty --plainText` | Export with options                                |
| `postcraft build`                                       | Build the preview app for production               |
| `postcraft start`                                       | Run the production preview app                     |

## Rendering to HTML

Use `@postcraft/render` to convert components to an HTML string for sending:

```tsx
import { render } from "@postcraft/render";
import { WelcomeEmail } from "./emails/welcome";

// HTML version
const html = await render(<WelcomeEmail name="Giorgi" verificationUrl="..." />);

// Plain text version
const text = await render(
  <WelcomeEmail name="Giorgi" verificationUrl="..." />,
  {
    plainText: true,
  },
);
```

## Linking the CLI for Development

When working on the CLI, avoid reinstalling on every change by linking globally:

```sh
# Link the dev version globally
pnpm link ./dev -g

# Use it like the standard CLI
postcraft-dev [command] [flags]
```

## Email Best Practices

- ✅ Use `Tailwind` with `pixelBasedPreset` — email clients don't support `rem`
- ✅ Always include `box-border` on `Button` components
- ✅ Always include `border-solid` (or `border-dashed`) on `Hr` and borders
- ✅ Place `<Preview>` as the first element inside `<Body>`
- ✅ Define `PreviewProps` for development testing
- ❌ Avoid flexbox / CSS grid — use `Row` / `Column` instead
- ❌ Avoid Tailwind responsive prefixes (`sm:`, `md:`) — limited email client support
- ❌ Avoid SVG and WebP images — use PNG or JPG
- ❌ Avoid `dark:` / `light:` theme selectors — not supported in email

## License

[MIT](../../LICENSE.md) © [Giorgi Kavtaradze](https://github.com/GiorgiKavtaradze-prog)
