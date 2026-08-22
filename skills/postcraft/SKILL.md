---
name: postcraft
description: Use when building HTML email templates with React components, adding a visual email editor to an application using the Postcraft visual editor, rendering emails to HTML, or sending emails with Resend. Covers welcome emails, password resets, notifications, order confirmations, newsletters, transactional emails, and the embeddable email editor component.
license: MIT
metadata:
  author: Giorgi Kavtaradze
  version: "2.1.0"
  homepage: https://postcraft.dev
  source: https://github.com/GiorgiKavtaradze-prog/postcraft
  openclaw:
    install:
      - kind: node
        package: postcraft
        label: Postcraft
    links:
      repository: https://github.com/GiorgiKavtaradze-prog/postcraft
      documentation: https://postcraft.dev/docs
---

# Postcraft

Build and send HTML emails using React components — a modern, component-based approach to email development that works across all major email clients.

## Installation

```sh
npm i postcraft
```

Or scaffold a new project:

```sh
npx create-postcraft@latest
cd postcraft-starter
npm install
npm run dev
```

This works with any package manager (npm, yarn, pnpm, bun) — substitute accordingly.

The dev server runs at localhost:3000 with a preview interface for templates in the `emails` folder.

### Adding to an Existing Project

Install the packages and add a script to your `package.json`:

```json
{
  "scripts": {
    "email": "postcraft dev --dir emails --port 3000"
  }
}
```

Make sure the path to the emails folder is relative to the base project directory. Ensure `tsconfig.json` includes proper support for JSX.

## Basic Email Template

Create an email component with proper structure using the Tailwind component for styling:

```tsx
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Button,
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
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                brand: "#007bff",
              },
            },
          },
        }}
      >
        <Head />
        <Body className="bg-gray-100 font-sans">
          <Preview>Welcome - Verify your email address</Preview>
          <Container className="max-w-xl mx-auto p-5">
            <Heading className="text-2xl text-gray-800">Welcome!</Heading>
            <Text className="text-base text-gray-800">
              Hi {name}, thanks for signing up!
            </Text>
            <Button
              href={verificationUrl}
              className="bg-brand text-white px-5 py-3 rounded block text-center no-underline box-border"
            >
              Verify Email Address
            </Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

// Preview props for testing
WelcomeEmail.PreviewProps = {
  name: "John Doe",
  verificationUrl: "https://example.com/verify/abc123",
} satisfies WelcomeEmailProps;

export { WelcomeEmail };
```

## Behavioral Guidelines

- When iterating over the code, only update what the user asked for. Keep the rest intact.
- If the user asks to use media queries, inform them that most email clients don't support them and suggest a different approach.
- Never use template variables (like `{{name}}`) directly in TypeScript code. Instead, reference the underlying properties directly. If the user explicitly asks for `{{variableName}}`, place the mustache string only in PreviewProps, never in the component JSX:

```typescript
const EmailTemplate = (props) => {
  return (
    <h1>Hello, {props.variableName}!</h1>
  );
}

EmailTemplate.PreviewProps = {
  variableName: "{{variableName}}",
};

export default EmailTemplate;
```

- Never write the `{{variableName}}` pattern directly in the component structure. If the user insists, explain that this would make the template invalid.

## Essential Components

See [references/COMPONENTS.md](references/COMPONENTS.md) for complete component documentation.

**Core Structure:**

- `Html` - Root wrapper with `lang` attribute
- `Head` - Meta elements, styles, fonts
- `Body` - Main content wrapper
- `Container` - Outermost centering wrapper (has built-in `max-width: 37.5em`). Use only once per email.
- `Section` - Interior content blocks (no built-in max-width). Use for grouping content inside `Container`.
- `Row` & `Column` - Multi-column layouts
- `Tailwind` - Enables Tailwind CSS utility classes

**Content:**

- `Preview` - Inbox preview text, always first inside `<Body>`
- `Heading` - h1-h6 headings
- `Text` - Paragraphs
- `Button` - Styled link buttons (always include `box-border`)
- `Link` - Hyperlinks
- `Img` - Images (see Static Files section below)
- `Hr` - Horizontal dividers

**Specialized:**

- `CodeBlock` - Syntax-highlighted code
- `CodeInline` - Inline code
- `Markdown` - Render markdown
- `Font` - Custom web fonts

## Before Writing Code

When a user requests an email template, ask clarifying questions FIRST if they haven't provided:

1. **Brand colors** - Ask for primary brand color (hex code like #007bff)
2. **Logo** - Ask if they have a logo file and its format (PNG/JPG only - warn if SVG/WEBP)
3. **Style preference** - Professional, casual, or minimal tone
4. **Production URL** - Where will static assets be hosted in production?

## Static Files and Images

### Directory Structure

Local images must be placed in the `static` folder inside your emails directory:

```
project/
├── emails/
│   ├── welcome.tsx
│   └── static/           <-- Images go here
│       └── logo.png
```

### Dev vs Production URLs

Use this pattern for images that work in both dev preview and production:

```tsx
const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://cdn.example.com" // User's production CDN
    : "";

export default function Email() {
  return (
    <Img
      src={`${baseURL}/static/logo.png`}
      alt="Logo"
      width="150"
      height="50"
    />
  );
}
```

**How it works:**

- **Development:** `baseURL` is empty, so URL is `/static/logo.png` - served by Postcraft's dev server
- **Production:** `baseURL` is the CDN domain, so URL is `https://cdn.example.com/static/logo.png`

**Important:** Always ask the user for their production hosting URL. Do not hardcode `localhost:3000`.

## Styling

See [references/STYLING.md](references/STYLING.md) for comprehensive styling documentation including typography, layout patterns, dark mode, and brand consistency.

### Key Rules

- Use `Tailwind` with `pixelBasedPreset` (email clients don't support `rem`). Import `pixelBasedPreset` from `postcraft`.
- Never use flexbox or grid — use `Row`/`Column` components or tables for layouts.
- Avoid CSS/Tailwind media queries (`sm:`, `md:`, `lg:`, `xl:`) — limited email client support.
- Never use theme selectors (`dark:`, `light:`) — not supported.
- Never use SVG or WEBP images — warn users about rendering issues.
- Always specify border type (`border-solid`, `border-dashed`, etc.) — email clients don't inherit it.
- For single-side borders, reset others first (`border-none border-l border-solid`).

### Required Classes

| Component           | Required Class           | Why                                                |
| ------------------- | ------------------------ | -------------------------------------------------- |
| `Button`            | `box-border`             | Prevents padding from overflowing the button width |
| `Hr` / any border   | `border-solid`           | Email clients don't inherit border type            |
| Single-side borders | `border-none` + the side | Resets default borders on other sides              |

### Structure Notes

- Always define `<Head />` inside `<Tailwind>` when using Tailwind CSS
- `<Preview>` should always be the first element inside `<Body>`
- Only include props in `PreviewProps` that the component actually uses
- Use fixed width/height for known-size elements (logos, icons); responsive sizing (`w-full`, `h-auto`) for content images

## Rendering

### Convert to HTML

```tsx
import { render } from "postcraft";
import { WelcomeEmail } from "./emails/welcome";

const html = await render(
  <WelcomeEmail name="John" verificationUrl="https://example.com/verify" />,
);
```

### Convert to Plain Text

```tsx
const text = await render(
  <WelcomeEmail name="John" verificationUrl="https://example.com/verify" />,
  { plainText: true },
);
```

## Sending

Postcraft supports sending emails with any email service provider. See [references/SENDING.md](references/SENDING.md) for complete sending documentation including Resend, Nodemailer, and SendGrid examples.

Quick example using the Resend SDK:

```tsx
import { Resend } from "resend";
import { WelcomeEmail } from "./emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

const { data, error } = await resend.emails.send({
  from: "Acme <onboarding@resend.dev>",
  to: ["user@example.com"],
  subject: "Welcome to Acme",
  react: (
    <WelcomeEmail name="John" verificationUrl="https://example.com/verify" />
  ),
});
```

The Resend Node SDK automatically handles both HTML and plain-text rendering.

## CLI Commands

The `postcraft` package provides a CLI accessible via the `postcraft` command:

| Command                                                              | Description                                                           |
| -------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `postcraft dev --dir <path> --port <port>`                           | Start the preview development server (default: `./emails`, port 3000) |
| `postcraft build --dir <path>`                                       | Build the preview app for production deployment                       |
| `postcraft start`                                                    | Run the built preview app                                             |
| `postcraft export --outDir <path> --pretty --plainText --dir <path>` | Export templates to static HTML files                                 |
| `postcraft resend setup`                                             | Connect the CLI to your Resend account via API key                    |
| `postcraft resend reset`                                             | Remove the stored Resend API key                                      |

## Internationalization

See [references/I18N.md](references/I18N.md) for complete i18n documentation. Postcraft supports three libraries: next-intl, react-i18next, and react-intl.

## Postcraft Editor

Postcraft includes a visual editor (`@postcraft/editor`) that can be embedded in your app. It's built on TipTap/ProseMirror and produces email-ready HTML.

See [references/EDITOR.md](references/EDITOR.md) for complete documentation including:

- `EmailEditor` — batteries-included component with bubble menus, slash commands, and theming
- `StarterKit` — 35+ email-aware extensions (headings, lists, tables, columns, buttons, etc.)
- `Inspector` — contextual sidebar for editing styles
- `EmailTheming` — built-in themes (`basic`, `minimal`) with customizable CSS properties
- `composePostcraft` — export editor content to email-ready HTML and plain text
- Custom extensions via `EmailNode` and `EmailMark`

Quick example:

```tsx
import { EmailEditor, type EmailEditorRef } from "@postcraft/editor";
import "@postcraft/editor/themes/default.css";
import { useRef } from "react";

export function MyEditor() {
  const ref = useRef<EmailEditorRef>(null);

  return (
    <EmailEditor ref={ref} content="<p>Start typing...</p>" theme="basic" />
  );
}
```

## Common Patterns

See [references/PATTERNS.md](references/PATTERNS.md) for complete examples including:

- Password reset emails
- Order confirmations with product lists
- Notification emails with code blocks
- Multi-column layouts
- Team invitation emails

## Email Best Practices

1. **Test across email clients** - Gmail, Outlook, Apple Mail, Yahoo Mail
2. **Keep it responsive** - Max-width around 600px, test on mobile
3. **Use absolute image URLs** - Host on reliable CDN, always include `alt` text
4. **Provide plain text version** - Required for accessibility
5. **Keep file size under 102KB** - Gmail clips larger emails
6. **Add proper TypeScript types** - Define interfaces for all email props
7. **Include preview props** - Add `.PreviewProps` for development testing
8. **Use verified domains** - For production `from` addresses

## Additional Resources

- [Postcraft Documentation](https://postcraft.dev/docs/llms.txt)
- [Postcraft GitHub](https://github.com/GiorgiKavtaradze-prog/postcraft)
- [Resend Documentation](https://resend.com/docs/llms.txt)
- [Email Client CSS Support](https://www.caniemail.com)
- Component Reference: [references/COMPONENTS.md](references/COMPONENTS.md)
- Styling Guide: [references/STYLING.md](references/STYLING.md)
- Editor Reference: [references/EDITOR.md](references/EDITOR.md)
- Sending Guide: [references/SENDING.md](references/SENDING.md)
- Internationalization Guide: [references/I18N.md](references/I18N.md)
- Common Patterns: [references/PATTERNS.md](references/PATTERNS.md)
