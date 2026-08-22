# Postcraft Playground

An interactive playground for experimenting with Postcraft components in real-time, using direct source code imports and instant hot reloading.

> **Note:** Unlike the main `postcraft dev` CLI, the playground imports components **directly from source** — perfect for testing changes to components before publishing.

---

## When to Use the Playground

| Use Case | Tool |
|---|---|
| Building email templates for your project | `postcraft dev` (CLI) |
| Developing / testing core Postcraft components | This playground |
| Experimenting with new component ideas | This playground |
| Testing changes before publishing | This playground |

---

## Development Workflow

### 1. Install dependencies

From the monorepo root:

```sh
pnpm install
pnpm build
```

### 2. Create an email template

Create a new file at `playground/emails/testing.tsx`:

```tsx
import { Html, Head, Body, Container, Tailwind, Heading, Text, Button, pixelBasedPreset } from "postcraft";

export default function Testing() {
  return (
    <Tailwind config={{ presets: [pixelBasedPreset] }}>
      <Html lang="en">
        <Head />
        <Body className="bg-gray-50 font-sans">
          <Container className="max-w-xl mx-auto p-8">
            <Heading className="text-2xl font-bold text-gray-900">
              Hello from the Playground!
            </Heading>
            <Text className="text-gray-600 mt-4">
              Edit this template and see changes instantly.
            </Text>
            <Button
              href="https://postcraft.dev"
              className="bg-blue-600 text-white px-6 py-3 rounded no-underline box-border mt-4"
            >
              Visit Postcraft
            </Button>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
```

### 3. Start the playground server

```sh
# From the playground directory
pnpm dev
```

### 4. Open in your browser

Navigate to [http://localhost:3000](http://localhost:3000).

Your template will appear in the sidebar. Changes to the file are reflected immediately via hot reloading.

---

## Key Differences from `postcraft dev`

| Feature | `postcraft dev` | Playground |
|---|---|---|
| Component source | Published npm package | Local source files |
| Hot reloading | ✅ | ✅ |
| Use case | Building templates | Developing components |
| Template directory | Configurable | `playground/emails/` |

---

## Tips

- Create multiple templates in `playground/emails/` to test different scenarios
- Use `PreviewProps` to test your component with different data:

```tsx
Testing.PreviewProps = {
  name: "Test User",
};
```

- Files in `playground/emails/` are **gitignored** — feel free to experiment freely
