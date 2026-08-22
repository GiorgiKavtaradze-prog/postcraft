# Contributing to Postcraft

Thank you for your interest in contributing to Postcraft! 🎉

We're building the next generation of email development and we'd love your help. Whether you're fixing a bug, adding a feature, improving documentation, or just sharing feedback — every contribution makes a difference.

This guide will help you get started, even if you've never contributed to an open-source project before.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Report Bugs](#how-to-report-bugs)
- [How to Suggest Features](#how-to-suggest-features)
- [How to Contribute Code](#how-to-contribute-code)
  - [Codebase Overview](#codebase-overview)
  - [Development Workflow](#development-workflow)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Commit Message Convention](#commit-message-convention)
- [Versioning & Changesets](#versioning--changesets)
- [License](#license)

---

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](https://github.com/GiorgiKavtaradze-prog/postcraft/blob/main/.github/CODE_OF_CONDUCT.md). We are committed to providing a welcoming and inclusive community for everyone.

---

## Getting Started

### Prerequisites

- **Node.js** `>= 20.0.0`
- **pnpm** `>= 11.0.0`
- **Git**

### Setup

```sh
# 1. Fork the repository on GitHub, then clone your fork
git clone https://github.com/<your-username>/postcraft.git
cd postcraft

# 2. Add the upstream remote
git remote add upstream https://github.com/GiorgiKavtaradze-prog/postcraft.git

# 3. Install all dependencies
pnpm install

# 4. Build all packages
pnpm build

# 5. Run the tests to confirm everything is working
pnpm test
```

---

## How to Report Bugs

Before submitting a bug report, please:

1. **Search existing issues** to make sure it hasn't already been reported.
2. **Reproduce the issue** with the latest version of Postcraft.
3. **Collect relevant information**: Node.js version, pnpm version, OS, email client where the issue occurs.

To report a bug, [open a new issue](https://github.com/GiorgiKavtaradze-prog/postcraft/issues/new?template=bug_report.md) and fill out the bug report template.

A good bug report includes:

- A clear and descriptive title
- Steps to reproduce the problem
- Expected behavior and what actually happened
- A minimal reproduction (CodeSandbox, StackBlitz, or a small repo)
- Screenshots or recordings if applicable

---

## How to Suggest Features

We love new ideas! Before submitting a feature request:

1. **Check existing issues and discussions** — it may already be planned.
2. **Think about scope** — consider whether the feature aligns with Postcraft's goals.

To suggest a feature, [start a discussion](https://github.com/GiorgiKavtaradze-prog/postcraft/discussions/new?category=ideas) or [open a feature request issue](https://github.com/GiorgiKavtaradze-prog/postcraft/issues/new?template=feature_request.md).

---

## How to Contribute Code

### Codebase Overview

Postcraft is a **Turborepo monorepo** using **pnpm workspaces**. Here's a quick map of what's where:

```
postcraft/
├── packages/
│   ├── postcraft/       # Core email components (Html, Body, Button, etc.)
│   ├── render/          # React → HTML renderer
│   ├── editor/          # @postcraft/editor visual editor
│   ├── create-email/    # create-postcraft CLI scaffolder
│   ├── ui/              # Shared UI components (preview server)
│   └── tsconfig/        # Shared TypeScript configurations
├── apps/
│   ├── web/             # Marketing website (Next.js)
│   ├── docs/            # Documentation (Mintlify)
│   └── demo/            # Demo email templates
├── examples/            # Integration examples (Resend, Nodemailer, etc.)
└── scripts/             # Build & release automation
```

### Development Workflow

**1. Create a feature branch**

```sh
# Always branch from main
git checkout main
git pull upstream main
git checkout -b feat/my-new-feature
```

**2. Set up your development environment**

```sh
pnpm install
pnpm build
```

**3. Make your changes**

When editing components in `packages/postcraft`, start the dev server for live preview:

```sh
pnpm dev
```

**4. Run tests**

```sh
# Run all tests
pnpm test

# Run tests in watch mode during development
pnpm test:watch

# Run tests for a specific package
pnpm --filter @postcraft/render test
```

**5. Lint your code**

```sh
# Check for linting issues
pnpm lint

# Auto-fix issues
pnpm lint:fix
```

**6. Build all packages**

```sh
pnpm build
```

**7. Type-check**

```sh
pnpm typecheck
```

**8. Write documentation**

If you're adding a new component or changing existing behavior, please update the relevant documentation in the `apps/docs` directory.

**9. Add an editing component** (if applicable)

If you're editing a component in `packages/postcraft`, please also add or update the corresponding documentation in `skills/postcraft/references/COMPONENTS.md`.

---

## Pull Request Guidelines

When you're ready to open a pull request:

1. **Keep it focused** — One feature or bug fix per PR makes reviews easier.
2. **Write a clear description** — Explain _what_ you changed and _why_.
3. **Reference related issues** — Use `Closes #123` or `Fixes #456` in your description.
4. **Add tests** — New features and bug fixes should include tests.
5. **Update documentation** — If you change behavior, update the relevant docs.
6. **Add a changeset** — Required for changes in `packages/` (see below).

### Pull Request Template

When opening a PR, fill out all sections of the PR template:

- **Summary**: What does this PR do?
- **Type of change**: Bug fix / Feature / Docs / Refactor / etc.
- **How was it tested?**: Describe how you tested your changes
- **Screenshots**: For UI changes, include before/after screenshots
- **Breaking changes**: Does this change any existing behavior?

---

## Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

**Types:**

| Type       | Description                                             |
| ---------- | ------------------------------------------------------- |
| `feat`     | A new feature                                           |
| `fix`      | A bug fix                                               |
| `docs`     | Documentation changes only                              |
| `style`    | Formatting, missing semicolons, etc. (no logic change)  |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `perf`     | Performance improvement                                 |
| `test`     | Adding or fixing tests                                  |
| `chore`    | Build process, dependency updates, tooling changes      |
| `ci`       | Changes to CI configuration files                       |

**Examples:**

```
feat(editor): add slash command for image insertion
fix(render): handle undefined children in Container component
docs(readme): update installation instructions for pnpm
chore(deps): bump @biomejs/biome to 2.4.12
```

---

## Versioning & Changesets

Postcraft uses [Changesets](https://github.com/changesets/changesets) for version management.

**When to add a changeset:**

Any change in the `packages/` directory that affects published packages requires a changeset.

**How to add a changeset:**

```sh
pnpm changeset
```

This will prompt you to:

1. Select which packages are affected
2. Choose a bump type: `major`, `minor`, or `patch`
3. Write a summary of the change (this appears in the CHANGELOG)

**Bump type guide:**

| Change                                          | Bump Type |
| ----------------------------------------------- | --------- |
| Breaking API change                             | `major`   |
| New feature (backward compatible)               | `minor`   |
| Bug fix, performance improvement, documentation | `patch`   |

Commit the generated changeset file along with your code changes.

---

## License

By contributing to Postcraft, you agree that your contributions will be licensed under the [MIT License](LICENSE.md).

---

<div align="center">
  <sub>Thank you for helping make Postcraft better! 💙</sub>
</div>
