# DSA Practice - Colt Steele

A TypeScript project for practicing data structures and algorithms, based on Colt Steele's teachings.

## Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm

### Installation

```bash
pnpm install
```

### Development

Run the development server with an interactive file selector:

```bash
pnpm dev
```

This will prompt you to select which TypeScript file you want to run. It automatically finds all `.ts` files in the `src/` directory and runs the selected file with hot reload.

### Build

Compile TypeScript to JavaScript:

```bash
pnpm build
```

### Run

Execute the compiled code:

```bash
pnpm start
```

### Clean

Remove build artifacts:

```bash
pnpm clean
```

## Project Structure

```
├── src/           # Source TypeScript files
│   ├── index.ts                    # Main entry point
│   └── problems/                   # Your DSA practice problems
│       └── 2-big-o/               # Example: Big O notation section
├── scripts/        # Helper scripts
│   └── dev-select.ts              # Interactive file selector
├── dist/           # Compiled JavaScript output
├── tsconfig.json    # TypeScript configuration
└── package.json     # Dependencies and scripts
```

## Features

- ✅ TypeScript with strict type checking
- ✅ Node.js environment
- ✅ Interactive file selector for development
- ✅ Hot reload with tsx
- ✅ TypeScript compiler for production builds
- ✅ pnpm package manager

## Adding New Problems

Create new files in `src/` for each algorithm or data structure you want to practice.
