# Security Policy

## Overview

Security is a top priority for Postcraft. We are committed to ensuring the safety of our users by promptly addressing any security vulnerabilities discovered in our project.

If you believe you've found a security issue, please **do not open a public GitHub issue**. Instead, follow the responsible disclosure process described below.

---

## Supported Versions

We actively maintain and provide security updates for the following versions:

| Version                | Supported                    |
| ---------------------- | ---------------------------- |
| `latest` (main branch) | ✅ Actively maintained       |
| `>= 2.0.0`             | ✅ Security patches provided |
| `1.x.x`                | ⚠️ Critical fixes only       |
| `< 1.0.0`              | ❌ No longer supported       |

We strongly encourage all users to keep their dependencies up to date. Running outdated versions means missing critical security patches.

---

## Reporting a Vulnerability

### Private Disclosure (Preferred)

For security vulnerabilities, please use one of the following private channels:

1. **GitHub Security Advisories** (preferred):
   Navigate to [Security → Report a vulnerability](https://github.com/GiorgiKavtaradze-prog/postcraft/security/advisories/new) in our repository and submit a private advisory.

2. **Email**:
   Send a detailed report to **[security@postcraft.dev](mailto:security@postcraft.dev)**

### What to Include

A good security report includes:

- **Description**: A clear explanation of the vulnerability
- **Impact**: What an attacker could do by exploiting this
- **Affected versions**: Which versions are impacted
- **Steps to reproduce**: A reliable, step-by-step reproduction
- **Proof of concept**: Code, scripts, or screenshots demonstrating the issue
- **Suggested fix**: If you have ideas for remediation

### What to Expect

| Timeline            | Action                                                     |
| ------------------- | ---------------------------------------------------------- |
| **Within 48 hours** | We acknowledge receipt of your report                      |
| **Within 7 days**   | We assess the severity and plan a fix                      |
| **Within 30 days**  | We aim to release a patch (complex issues may take longer) |
| **After patching**  | We coordinate public disclosure with you                   |

We follow [responsible disclosure](https://en.wikipedia.org/wiki/Coordinated_vulnerability_disclosure) principles and will credit reporters in our security advisories unless they prefer to remain anonymous.

---

## Scope

### In Scope

- Vulnerabilities in any published package under the `postcraft` or `@postcraft/*` namespace
- Security issues in the Postcraft CLI (`postcraft dev`, `postcraft export`, etc.)
- Vulnerabilities in the `@postcraft/editor` component that could affect host applications
- Server-side rendering security issues in `@postcraft/render`
- Supply chain / dependency vulnerabilities in published packages

### Out of Scope

- Vulnerabilities in example applications that aren't part of published packages
- Issues in development-only tooling that don't affect end users
- Attacks that require physical access to a user's machine
- Social engineering attacks
- Denial of service attacks on the project's CI/CD infrastructure

---

## Security Best Practices for Users

When using Postcraft in your applications, we recommend:

### Email Content Security

- **Sanitize user input** before passing it to email components — never render raw HTML from untrusted sources
- **Use typed props** — Postcraft's TypeScript support helps prevent accidental injection
- **Validate email addresses** before sending to prevent header injection

### Environment Variables

- **Never expose API keys** (e.g., `RESEND_API_KEY`) in client-side code
- **Use environment variables** for all secrets — never hardcode credentials
- Use `.env.local` (not committed to git) for local development secrets

### Dependencies

- **Keep Postcraft up to date** — run `pnpm update postcraft` regularly
- **Audit your dependencies** regularly with `pnpm audit`
- Enable [Dependabot](https://docs.github.com/en/code-security/dependabot) on your forks

### Image Handling

- **Use trusted CDNs** for hosting static email assets
- **Avoid `data:` URIs** for images in production — some email clients strip them
- **Validate image URLs** if they come from user input

---

## Known Issues

We maintain a list of resolved security issues in our [Security Advisories](https://github.com/GiorgiKavtaradze-prog/postcraft/security/advisories). Check there to see if a vulnerability has already been addressed.

---

## Attribution

We deeply appreciate security researchers and community members who help keep Postcraft safe. Reporters who responsibly disclose vulnerabilities will be credited in the relevant security advisory (with their permission).

---

<div>
  <sub>Thank you for helping keep Postcraft and its users safe. 🛡️</sub>
</div>
