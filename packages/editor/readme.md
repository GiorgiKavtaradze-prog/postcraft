<div align="center">
  <br />
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://postcraft.dev/static/covers/editor-dark.png" />
    <img alt="@postcraft/editor" src="https://postcraft.dev/static/covers/editor.png" width="480" />
  </picture>
  <br />
  <br />
  <strong>@postcraft/editor</strong>
  <p>A rich text visual email editor built on TipTap & ProseMirror.<br />Drag-and-drop email building that exports email-ready HTML.</p>
</div>

<div align="center">

[![npm version](https://img.shields.io/npm/v/@postcraft/editor?style=flat-square&color=0070f3)](https://www.npmjs.com/package/@postcraft/editor)
[![npm downloads](https://img.shields.io/npm/dm/@postcraft/editor?style=flat-square&color=0070f3)](https://www.npmjs.com/package/@postcraft/editor)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](../../LICENSE.md)

</div>

---

## Features

| Feature | Description |
|---|---|
| 🧠 **Bubble Menu** | Contextual formatting toolbar that appears on text selection |
| 🎛️ **Inspector** | Sidebar panel for editing element properties |
| ⚡ **Slash Commands** | Type `/` to quickly insert headings, images, buttons, columns |
| 🎨 **Theming** | Built-in `basic` and `minimal` themes with CSS custom properties |
| 📐 **Column Layouts** | Drag-and-drop multi-column email structures |
| 🔗 **Link Editing** | Inline link management with popover |
| 📤 **Email Export** | `composeEmail()` exports editor content to email-ready HTML |
| 🖼️ **Image Upload** | Built-in image upload with drag & drop support |
| 🧩 **35+ Extensions** | TipTap extensions tailored for email elements |
| 📝 **Serialization** | Serializes editor content to Postcraft React component tree |

---

## Installation

```bash
npm install @postcraft/editor
# or
pnpm add @postcraft/editor
# or
yarn add @postcraft/editor
```

---

## Quick Start

```tsx
import { EmailEditor, type EmailEditorRef } from "@postcraft/editor";
import "@postcraft/editor/themes/default.css";
import { useRef } from "react";

export function MyEmailEditor() {
  const editorRef = useRef<EmailEditorRef>(null);

  const handleExport = async () => {
    const editor = editorRef.current;
    if (!editor) return;

    const { html, text } = await editor.composeEmail();
    console.log("HTML:", html);
    console.log("Plain text:", text);
  };

  return (
    <div>
      <EmailEditor
        ref={editorRef}
        content="<p>Start writing your email...</p>"
        theme="basic"
        onUpdate={(editor) => {
          console.log("Content changed");
        }}
      />
      <button onClick={handleExport}>Export Email</button>
    </div>
  );
}
```

---

## Package Structure

```
packages/editor/src/
├── core/               # Hooks, serializer, event bus, types
│   ├── serializer.ts   # Converts editor state to Postcraft component tree
│   ├── event-bus.ts    # Cross-component event system
│   └── types.ts        # Shared TypeScript types
├── extensions/         # TipTap extensions for email elements
│   ├── button/         # Email button node
│   ├── columns/        # Multi-column layout node
│   ├── heading/        # Email heading node
│   ├── image/          # Image node with upload support
│   └── ...             # 30+ more extensions
├── plugins/            # ProseMirror plugins
├── ui/                 # React UI components
│   ├── bubble-menu/    # Contextual formatting toolbar
│   ├── slash-command/  # Slash command palette
│   └── inspector/      # Property editing sidebar
├── utils/              # Shared utility functions
└── email-editor/       # Main EmailEditor component
```

---

## Entry Points

The package exposes multiple granular entry points to optimize bundle size:

| Import Path | Contents |
|---|---|
| `@postcraft/editor` | `EmailEditor` component, `EmailEditorRef`, top-level API |
| `@postcraft/editor/core` | Serializer, types, event bus — for custom integrations |
| `@postcraft/editor/extensions` | All 35+ TipTap extensions for email elements |
| `@postcraft/editor/ui` | Bubble menus, slash command palette, inspector UI |
| `@postcraft/editor/plugins` | ProseMirror plugins |
| `@postcraft/editor/utils` | Shared utility functions |

---

## API Reference

### `<EmailEditor>`

The main batteries-included editor component.

```tsx
import { EmailEditor, type EmailEditorRef } from "@postcraft/editor";

<EmailEditor
  ref={ref}
  content="<p>Initial content</p>"    // Initial HTML content
  theme="basic"                        // "basic" | "minimal" | EmailTheme
  placeholder="Start writing..."      // Placeholder text
  editable={true}                      // Whether the editor is editable
  onUpdate={(editor) => void}          // Fired on every content change
  onFocus={(editor) => void}           // Fired when editor gains focus
  onBlur={(editor) => void}            // Fired when editor loses focus
/>
```

### `EmailEditorRef`

Access editor methods via a ref:

```tsx
const ref = useRef<EmailEditorRef>(null);

// Export email-ready HTML and plain text
const { html, text } = await ref.current.composeEmail();

// Get raw TipTap editor instance
const tiptap = ref.current.getEditor();

// Set content programmatically
ref.current.setContent("<p>New content</p>");

// Clear the editor
ref.current.clearContent();

// Focus the editor
ref.current.focus();
```

### Theming

Customize the editor appearance with CSS custom properties:

```tsx
import { EmailEditor } from "@postcraft/editor";

// Use a built-in theme
<EmailEditor theme="basic" />
<EmailEditor theme="minimal" />

// Provide a custom theme object
<EmailEditor
  theme={{
    name: "my-brand",
    variables: {
      "--editor-font-family": "Inter, sans-serif",
      "--editor-background": "#ffffff",
      "--editor-color": "#111111",
      "--editor-border-color": "#e5e7eb",
      "--editor-selection-color": "#dbeafe",
    },
  }}
/>
```

---

## Advanced: Custom Extensions

Extend the editor with custom email nodes:

```tsx
import { EmailNode } from "@postcraft/editor/extensions";

const CustomBannerNode = EmailNode.create({
  name: "customBanner",
  group: "block",
  atom: true,

  addAttributes() {
    return {
      backgroundColor: { default: "#f0f9ff" },
      text: { default: "" },
    };
  },

  renderHTML({ node }) {
    return [
      "table",
      { style: `background-color: ${node.attrs.backgroundColor}; width: 100%;` },
      ["tr", {}, ["td", { style: "padding: 16px;" }, node.attrs.text]],
    ];
  },
});
```

---

## Development

```bash
# Build the package
pnpm build

# Run type checking
pnpm typecheck

# Run all tests
pnpm test

# Run unit tests only
pnpm test:unit

# Run browser (Playwright) tests only
pnpm test:browser

# Watch mode for unit tests
pnpm test:watch
```

---

## Documentation

For the complete usage guide and API reference, see the [Editor Documentation](https://postcraft.dev/docs/editor/overview).

---

## License

[MIT](../../LICENSE.md) © [Giorgi Kavtaradze](https://github.com/GiorgiKavtaradze-prog)
