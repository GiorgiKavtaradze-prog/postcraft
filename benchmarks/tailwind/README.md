# ⚡ Tailwind Component Benchmarks

Performance benchmarks for the Postcraft `<Tailwind>` component using [`tinybench`](https://github.com/tinylibs/tinybench). These benchmarks are used to scientifically measure and improve the rendering performance of the Tailwind component.

---

## 🎯 Purpose

The `<Tailwind>` component processes Tailwind CSS utility classes and generates inline styles compatible with email clients. This involves CSS parsing, class resolution, and inlining — which can be computationally expensive at scale.

These benchmarks help us:

- 📊 Measure the performance overhead of using `<Tailwind>` vs. raw inline styles
- 🔄 Compare performance across Postcraft versions
- 🔥 Generate flame graphs to identify rendering bottlenecks

---

## 📂 Structure

```text
benchmarks/tailwind/
├── src/
│   ├── emails/                              # Sample email templates for benchmarks
│   ├── benchmark-with-vs-without.ts         # With Tailwind vs. without Tailwind
│   ├── benchmark-0.0.12-vs-local-version.ts # Previous version vs. current
│   └── tailwind-render.ts                   # Profiling / flame graph entry point
├── tailwind.config.js                       # Tailwind configuration for benchmarks
├── package.json
└── tsconfig.json
```

Each file in `./src` (except `tailwind-render.ts`) represents a standalone benchmark with a specific comparison goal. The `emails/` folder contains shared email templates used across benchmarks.

---

## 🚀 Running Benchmarks

Benchmarks must be compiled with `tsup` before running (to avoid ESM issues):

### 📊 With Tailwind vs. Without Tailwind

Measures the performance overhead of using the `<Tailwind>` component:

```bash
pnpm with-vs-without
# Equivalent to: pnpm compile && node ./dist/benchmark-with-vs-without.js
```

### 🔄 Previous Version vs. Current

Compares performance between an older published version and the current local version:

```bash
pnpm before-perf-vs-after-perf
# Equivalent to: pnpm compile && node ./dist/benchmark-0.0.12-vs-local-version.js
```

### 🔥 Flame Graph Profiling

Generate a flame graph to visualize the Tailwind rendering process:

```bash
pnpm flamegraph-render-tailwind
# Equivalent to:
# pnpm compile
# node --prof ./dist/tailwind-render
# node --prof-process --preprocess -j isolate*.log | flamebearer
```

> [!NOTE]
> `flamebearer` must be installed globally: `npm install -g flamebearer`

### 🛠️ Compile Only

Compile all benchmark files without running:

```bash
pnpm compile
# Equivalent to: tsup src/*.ts
# Output: ./dist/
```

---

## 📖 Interpreting Results

`tinybench` outputs results in the following format:

```text
┌─────────────────────────┬───────────┬─────────────┬────────────────────┐
│ Task Name               │ ops/sec   │ Average (ns)│ Margin             │
├─────────────────────────┼───────────┼─────────────┼────────────────────┤
│ With Tailwind           │ 1,234     │ 810,373     │ ± 2.31%            │
│ Without Tailwind        │ 45,678    │ 21,896      │ ± 0.87%            │
└─────────────────────────┴───────────┴─────────────┴────────────────────┘
```

Higher `ops/sec` = better performance. The margin indicates statistical variance.

---

## ➕ Adding New Benchmarks

1. Create a new TypeScript file in `./src/` (e.g., `benchmark-new-feature.ts`)
2. Add the corresponding script to `package.json`
3. Add sample email templates to `./src/emails/` if needed
4. Run `pnpm compile` and test your benchmark
