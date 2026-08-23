# 🤖 Postcraft Agent Skill

An [Agent Skills](https://agentskills.io) directory that gives AI assistants specialized knowledge for building, styling, and sending emails with Postcraft.

---

## ❓ What is This?

Agent Skills are a standardized format for giving AI coding assistants deep, structured knowledge about a specific library or framework. When an AI agent loads this skill, it gains expertise in:

- 🧱 Building HTML email templates with Postcraft React components
- 🎨 Styling emails with Tailwind CSS and email-safe patterns
- ✍️ Adding the `@postcraft/editor` visual editor to a React application
- 📤 Sending emails through Resend, Nodemailer, SendGrid, and other providers
- 🌍 Implementing internationalization (i18n) for multi-language emails
- ⚡ Following email development best practices (cross-client compatibility, accessibility, performance)

---

## 📂 Directory Structure

```text
skills/postcraft/
├── SKILL.md                    # Core skill instructions (< 350 lines)
│                               # Loaded when the skill is activated
├── TESTS.md                    # Test patterns and examples for email components
└── references/                 # Detailed docs loaded on-demand
    ├── COMPONENTS.md           # Complete component API reference
    ├── EDITOR.md               # @postcraft/editor visual editor reference
    ├── I18N.md                 # Internationalization guide
    ├── PATTERNS.md             # Common email patterns & production templates
    ├── SENDING.md              # Email sending guide for all providers
    └── STYLING.md              # Tailwind CSS, dark mode, layout patterns
```

---

## 🧠 Progressive Disclosure Architecture

The skill is structured for efficient token usage. Agents load only what they need:

| Layer                   | File                     | Size        | When Loaded                        |
| :---------------------- | :----------------------- | :---------- | :--------------------------------- |
| **Metadata**            | SKILL.md frontmatter     | ~100 tokens | On skill discovery                 |
| **Core Instructions**   | SKILL.md body            | ~3K tokens  | When skill is activated            |
| **Component Reference** | references/COMPONENTS.md | On demand   | When working with components       |
| **Styling Guide**       | references/STYLING.md    | On demand   | When styling emails                |
| **Editor Docs**         | references/EDITOR.md     | On demand   | When using `@postcraft/editor`     |
| **Sending Guide**       | references/SENDING.md    | On demand   | When integrating email providers   |
| **i18n Guide**          | references/I18N.md       | On demand   | When adding multi-language support |
| **Patterns**            | references/PATTERNS.md   | On demand   | When building from templates       |

---

## 📧 Covered Email Templates & Use Cases

The skill covers production-ready patterns for:

- 🎉 **Welcome emails** — Onboarding, email verification
- 🔐 **Password reset** — Secure reset links with expiry
- 📦 **Order confirmations** — Product lists, totals, shipping info
- 🔔 **Notifications** — System alerts, mentions, comments
- 📰 **Newsletters** — Multi-section layout, header/footer
- 👥 **Team invitations** — Invite links, team context
- 💳 **Billing / receipts** — Invoice line items, totals
- 🌍 **Multi-language** — i18n with next-intl, react-i18next, react-intl

---

## 🔗 Integration with AI Tools

This skill follows the [Agent Skills specification](https://agentskills.io/specification.md). It can be used with:

- **Antigravity / Claude** — Load skill via the skills directory
- **GitHub Copilot** — Use as context in custom instructions
- **Cursor** — Reference in `.cursorrules`
- Any AI tool that supports structured skill/context files

---

## 📚 Learn More

| Resource                    | Link                                                                       |
| :-------------------------- | :------------------------------------------------------------------------- |
| Postcraft Documentation     | [postcraft.dev/docs](https://postcraft.dev/docs)                           |
| Postcraft LLM-friendly docs | [postcraft.dev/docs/llms.txt](https://postcraft.dev/docs/llms.txt)         |
| Agent Skills Specification  | [agentskills.io/specification.md](https://agentskills.io/specification.md) |
| Resend Documentation        | [resend.com/docs](https://resend.com/docs)                                 |
| Can I Email (CSS support)   | [caniemail.com](https://www.caniemail.com)                                 |

---

<div align="center">
  <sub>Built by <a href="https://github.com/GiorgiKavtaradze-prog">Giorgi Kavtaradze</a> · MIT License</sub>
</div>
