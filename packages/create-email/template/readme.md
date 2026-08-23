# 🚀 Postcraft Starter

> Generated with [`create-postcraft`](https://www.npmjs.com/package/create-postcraft)

A Postcraft starter project with **live email preview in your browser** — no more sending real emails during development.

---

## 🏁 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 2️⃣ Start the development server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your email templates in the browser with live preview.

---

## 📂 Project Structure

```text
my-email-project/
├── emails/
│   ├── static/          # Static assets (images, fonts)
│   ├── welcome.tsx      # Welcome / onboarding email
│   ├── password-reset.tsx
│   └── notification.tsx
├── package.json
└── tsconfig.json
```

---

## 📜 Available Scripts

| Script           | Description                                     |
| :--------------- | :---------------------------------------------- |
| `npm run dev`    | Start the live preview server at localhost:3000 |
| `npm run export` | Export all templates to static HTML in `./out`  |
| `npm run build`  | Build the preview app for production            |
| `npm start`      | Start the production preview server             |

---

## ➕ Adding a New Email Template

1. Create a new `.tsx` file in the `emails/` directory:

```tsx
// emails/my-email.tsx
import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Tailwind,
  pixelBasedPreset,
} from "postcraft";

interface MyEmailProps {
  name: string;
}

export default function MyEmail({ name }: MyEmailProps) {
  return (
    <Html lang="en">
      <Tailwind config={{ presets: [pixelBasedPreset] }}>
        <Head />
        <Body className="bg-gray-50 font-sans">
          <Container className="max-w-xl mx-auto p-8">
            <Heading>Hello, {name}!</Heading>
            <Text>Your new Postcraft email template.</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

MyEmail.PreviewProps = {
  name: "Giorgi",
} satisfies MyEmailProps;
```

2. It will automatically appear in the preview sidebar at [http://localhost:3000](http://localhost:3000).

---

## 📤 Sending Emails

When you're ready to send, use `@postcraft/render` with any email provider:

```tsx
import { render } from "@postcraft/render";
import { Resend } from "resend";
import { WelcomeEmail } from "./emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "You <hello@yourdomain.com>",
  to: "user@example.com",
  subject: "Welcome!",
  react: <WelcomeEmail name="Giorgi" />,
});
```

---

## 📚 Documentation

- [Postcraft Docs](https://postcraft.dev/docs)
- [Component Reference](https://postcraft.dev/docs/components)
- [Sending Guide](https://postcraft.dev/docs/integrations)

---

## 📄 License

[MIT](https://opensource.org/licenses/MIT) © [Giorgi Kavtaradze](https://github.com/GiorgiKavtaradze-prog)
