<h3 align="center">⚙️ The rendering engine that powers Postcraft</h3>

<p align="center">
  Transform React email components into HTML strings and plain text.
</p>

<p align="center">

[![npm version](https://img.shields.io/npm/v/@postcraft/render?style=for-the-badge&color=0070f3&label=@postcraft/render&logo=npm&logoColor=white)](https://www.npmjs.com/package/@postcraft/render)
[![npm downloads](https://img.shields.io/npm/dm/@postcraft/render?style=for-the-badge&color=0070f3&logo=npm&logoColor=white)](https://www.npmjs.com/package/@postcraft/render)
[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e.svg?style=for-the-badge&logo=open-source-initiative&logoColor=white)](../../LICENSE.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge&logo=github&logoColor=white)](../../CONTRIBUTING.md)

</p>

---

## 📦 Installation

```bash
npm install @postcraft/render
# or
pnpm add @postcraft/render
# or
yarn add @postcraft/render
```

---

## 🚀 Usage

### 🖥️ Render to HTML

Convert a React email component into an email-ready HTML string:

```tsx
import { render } from "@postcraft/render";
import { WelcomeEmail } from "./emails/welcome";

const html = await render(<WelcomeEmail name="Giorgi" />);
// Returns: '<!DOCTYPE html><html lang="en">...'
```

### 📝 Render to Plain Text

Generate an accessible plain-text version of your email:

```tsx
import { render } from "@postcraft/render";
import { WelcomeEmail } from "./emails/welcome";

const text = await render(<WelcomeEmail name="Giorgi" />, {
  plainText: true,
});
// Returns: 'Welcome, Giorgi!\n\nThanks for signing up...'
```

### ⚙️ Render Options

```tsx
const html = await render(<MyEmail />, {
  /**
   * Output plain text instead of HTML.
   * @default false
   */
  plainText?: boolean;

  /**
   * Pretty-print the HTML output with indentation.
   * @default false
   */
  pretty?: boolean;
});
```

---

## 📋 Full Example

```tsx
import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Button,
  Tailwind,
  pixelBasedPreset,
} from "postcraft";
import { render } from "@postcraft/render";

function PasswordResetEmail({ resetUrl }: { resetUrl: string }) {
  return (
    <Html lang="en">
      <Tailwind config={{ presets: [pixelBasedPreset] }}>
        <Body className="bg-gray-50 font-sans">
          <Container className="max-w-xl mx-auto p-8">
            <Heading className="text-xl font-semibold text-gray-900">
              Reset your password
            </Heading>
            <Text className="text-gray-600 mt-2">
              Click the button below to reset your password. This link expires
              in 24 hours.
            </Text>
            <Button
              href={resetUrl}
              className="bg-red-600 text-white px-5 py-3 rounded no-underline box-border mt-4"
            >
              Reset Password
            </Button>
            <Text className="text-sm text-gray-400 mt-6">
              If you didn't request this, you can safely ignore this email.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

// Generate both HTML and plain text
const html = await render(
  <PasswordResetEmail resetUrl="https://example.com/reset/token" />,
);
const text = await render(
  <PasswordResetEmail resetUrl="https://example.com/reset/token" />,
  { plainText: true },
);

console.log(html); // Full HTML string
console.log(text); // Plain text fallback
```

---

## 🔌 Integration with Email Providers

### Resend

```tsx
import { Resend } from "resend";
import { render } from "@postcraft/render";
import { WelcomeEmail } from "./emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

// Resend's React integration handles rendering automatically
await resend.emails.send({
  from: "Acme <hello@acme.com>",
  to: "user@example.com",
  subject: "Welcome!",
  react: <WelcomeEmail name="Giorgi" />,
});

// Or render manually
const html = await render(<WelcomeEmail name="Giorgi" />);
const text = await render(<WelcomeEmail name="Giorgi" />, { plainText: true });
await resend.emails.send({ ..., html, text });
```

### Nodemailer

```tsx
import nodemailer from "nodemailer";
import { render } from "@postcraft/render";
import { WelcomeEmail } from "./emails/welcome";

const transporter = nodemailer.createTransport({ /* ... */ });

const html = await render(<WelcomeEmail name="Giorgi" />);
const text = await render(<WelcomeEmail name="Giorgi" />, { plainText: true });

await transporter.sendMail({
  from: '"Acme" <hello@acme.com>',
  to: "user@example.com",
  subject: "Welcome!",
  html,
  text,
});
```

### SendGrid

```tsx
import sendgrid from "@sendgrid/mail";
import { render } from "@postcraft/render";
import { WelcomeEmail } from "./emails/welcome";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

const html = await render(<WelcomeEmail name="Giorgi" />);
const text = await render(<WelcomeEmail name="Giorgi" />, { plainText: true });

await sendgrid.send({
  from: "hello@acme.com",
  to: "user@example.com",
  subject: "Welcome!",
  html,
  text,
});
```

---

## 📖 API Reference

### `render(component, options?)`

Renders a React email component to a string.

| Parameter           | Type                 | Description                                         |
| ------------------- | -------------------- | --------------------------------------------------- |
| `component`         | `React.ReactElement` | The email React component to render                 |
| `options.plainText` | `boolean`            | Output plain text instead of HTML. Default: `false` |
| `options.pretty`    | `boolean`            | Pretty-print the HTML output. Default: `false`      |

**Returns:** `Promise<string>`

---

## 📄 License

[MIT](../../LICENSE.md) © [Giorgi Kavtaradze](https://github.com/GiorgiKavtaradze-prog)