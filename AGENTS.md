# Repository Guidelines

## Project Structure & Module Organization

This repository contains a Next.js 16 personal site built with TypeScript and React. Routes and layouts live in `app/`; the home page is `app/page.tsx`, and blog routes are under `app/blog/`. Reusable UI belongs in `components/`, blog content in `content/blog/`, and framework-independent helpers in `lib/`. Keep CSS modules beside the route or component that uses them. Tests are colocated with their subjects as `*.test.tsx`, and snapshot files live in adjacent `__snapshots__/` directories. The generated static site is written to `out/`; do not edit generated output directly.

## Build, Test, and Development Commands

Use Node.js 24 or 26 and install locked dependencies with `npm ci`.

- `npm run dev` starts the Next.js development server on port 3001.
- `npm run build` creates the production static export in `out/`.
- `npm start` serves the generated `out/` directory for local production checks.
- `npm test` runs the Vitest suite once.
- `npm run test:watch` reruns relevant tests during development.
- `npm run lint` checks all supported files with ESLint.

Run lint, tests, and a production build before opening a pull request.

## Coding Style & Naming Conventions

Follow the existing TypeScript style: two-space indentation, single quotes, and no semicolons. TypeScript runs in strict mode. Use PascalCase for React components and their files (`Footer.tsx`), camelCase for functions and hooks (`useDateNow`), and lowercase route directory names. Prefer small functional components, semantic HTML, and CSS modules over global styles. ESLint uses Next.js Core Web Vitals and TypeScript rules; Prettier compatibility is configured in `eslint.config.mjs`.

## Testing Guidelines

Tests use Vitest with the `jsdom` environment and React Testing Library. Name tests `*.test.ts` or `*.test.tsx` and colocate them with the implementation. Test observable behavior with accessible queries where possible; use snapshots only for stable, intentional markup. Mock time or hooks explicitly so tests remain deterministic. No coverage threshold is configured, so add focused regression tests for each behavior change.

## Commit & Pull Request Guidelines

Recent history favors concise, imperative subjects and Conventional Commit-style prefixes, such as `test: isolate fake timers` and `chore(deps): update ...`. Use a similarly scoped subject and avoid mixing unrelated changes. Pull requests should explain the purpose and implementation, link relevant issues, list verification commands, and include before/after screenshots for visible UI changes. Keep generated files and dependency updates limited to what the change requires.
