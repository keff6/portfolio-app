# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev            # dev server at http://localhost:3000
npm run build          # production build (run before committing; catches RSC/client boundary errors)
npm run lint           # eslint (flat config in eslint.config.mjs)
npx tsc --noEmit       # typecheck
npm test               # jest (CI runs this + test:coverage on Node 20)
npx jest src/components/Navbar                  # single component's tests
npx jest -t "renders the logo link"             # single test by name
npx jest -u src/components/Hero                 # update snapshots after an intentional markup change
```

## Architecture

Single-page portfolio (Next.js 16 App Router, React 19, Tailwind v4, framer-motion), deployed on Vercel.

- `src/app/page.tsx` composes the page from section components in `src/components/`. Each section renders a `<section id="...">`; those ids are the anchor targets for `Navbar`'s `navLinks` and `useActiveSection` (IntersectionObserver-based). Adding/renaming a section means updating both.
- **Server vs. client components:** sections are Server Components by default to keep mobile hydration cheap. Only `Navbar`, `Projects` (modal state), `ScrollToTop`, and `MotionProvider` are `"use client"`. Don't add `"use client"` to a section unless it truly needs state/effects; push interactivity into a small client child instead. Scroll-reveal animations were deliberately removed so no content visibility depends on JS.
- **framer-motion:** `MotionProvider` wraps the app in `<LazyMotion features={domMax} strict>`. Because of `strict`, client components must use `m.*`, never `motion.*` (it will throw). `domMax` is needed for Navbar's `layoutId` indicator.
- **Content lives in data files**, not components: `src/data/{projects,journey,skills}.ts`, typed by `src/lib/types.ts`. Contact/profile URLs come from `SITE` in `src/lib/site.ts`. Project thumbnails in `public/images/` need `thumbnailWidth`/`thumbnailHeight` for `next/image`.
- `src/app/layout.tsx` holds SEO metadata, the always-dark theme (`className="dark"`), Vercel Analytics, and an inline script forcing `history.scrollRestoration = 'manual'`.
- `next.config.ts` sets a strict Content-Security-Policy. Any new external script, font, image, or fetch origin must be added there or it will be blocked in production.

## Testing

- Tests live next to components at `src/components/<Name>/__tests__/<Name>.test.tsx` (note: the component itself is `src/components/<Name>.tsx`, so tests import `../../<Name>`). Most include a snapshot test.
- `jest.setup.js` globally mocks `framer-motion` (`m`/`motion` render as plain elements with animation props stripped), `next/image` (plain `<img>`), and `IntersectionObserver`. Extend these mocks there rather than per-test.
- ts-jest uses `tsconfig.spec.json`; `@/` maps to `src/`.

## Workflow conventions

The `/feature` skill (`.claude/skills/feature/`) drives a spec-based workflow using the `context/` directory (`current-feature.md`, `HISTORY.md`, `ai-interaction.md`). Key rules from `context/ai-interaction.md`:

- Branch per change: `feature/<name>` or `fix/<name>`; merge into `main` when done.
- Run lint/typecheck after each goal and the build before committing.
- Never commit without permission. Stage files by name (no `git add -A` / `git add .`). Use conventional commit messages (`feat:`, `fix:`, `chore:`…), and do not add "Generated with Claude" or co-author lines.
- Make minimal changes, preserve existing patterns, don't add unrequested features. After 2–3 failed attempts at something, stop and explain.
