# History

Append-only log of completed features, earliest to latest. Written by `/feature complete`.
Not imported into `CLAUDE.md` on purpose: read it when you need to know why something
was built the way it was.

Entry format:

```markdown
## YYYY-MM-DD — <feature name>
- **What:** <what changed>
- **Why:** <reasoning>
- **Deviations from spec:** <confirmed changes, or "none">
```

## 2026-10-31 — Fix Mobile Scroll Jank
- **What:** Hero section height `min-h-dvh` → `min-h-svh`. `ScrollToTop` now uses the
  shared `useScrolled(300)` hook (passive listener) instead of its own scroll listener.
- **Why:** On phones, `dvh` grows when the address bar hides on scroll down, so the Hero
  resized mid-scroll and everything below it jumped. `svh` (`dvh` came in with 65e9b83)
  stays fixed. The blurred blobs, `backdrop-blur` and pulse/bounce animations were
  measured under mobile emulation with 4× CPU throttling and made no clear difference,
  so they were left alone. Confirmed fixed on a real phone against the production build.
- **Deviations from spec:** The planned blur-to-gradient and mobile-only `backdrop-blur`
  changes were dropped (agreed) after measurement didn't support them; the Hero `svh`
  fix was added. Testing tip: a phone opening `next dev` via the LAN IP gets no JS
  (Next 16 blocks dev assets for non-localhost origins), so test phones against
  `next start -H 0.0.0.0`.

## 2026-10-31 — Fix About Text Delay on Mobile
- **What:** Removed the large `filter: blur()` background layers in `About` (the
  `blur-[80px]` blob and `blur-xl` photo halo) and `Hero` (two `blur-[100px]` blobs).
  The About profile photo is now a static import with `loading="eager"` and
  `placeholder="blur"`. Jest gained `jest.fileTransform.js` for static image imports, the
  `next/image` mock accepts imported images, and `tsconfig.spec.json` includes
  `next-env.d.ts` so `.png` imports typecheck.
- **Why:** On real phones (Chrome and Safari, production), scrolling into About right
  after load showed an empty photo circle and the text appeared ~3s late. It was not
  JS-gated: the text is server-rendered with no `opacity:0` or motion wrapper, and Inter
  uses `font-display: swap`. Desktop emulation with 4× CPU throttle never reproduced it,
  which pointed to mobile GPU raster: unpainted tiles show the background during a fast
  fling, and large blur filters are very expensive for phone GPUs. The photo was
  `loading="lazy"`, and the first `/_next/image` request is a cache MISS on Vercel.
  Confirmed fixed on a real phone against production. Lesson: blur cost has to be
  judged on a real device, not emulation (the earlier Fix Mobile Scroll Jank entry
  measured it in emulation only).
- **Deviations from spec:** `priority` replaced by `loading="eager"` (deprecated in
  Next 16). Added the blur photo placeholder; a text skeleton was considered and dropped
  because it would gate server-rendered text behind JS. Shipped straight to production
  instead of a Vercel preview. Blurs and the image change shipped together, so which one
  caused the text delay isn't isolated. Phase 2 (radial-gradient replacements for the
  glows) was not needed and was skipped. Skills, Journey and Projects still have
  `blur-[100px]` blobs. Section padding `py-24` → `py-16` shipped alongside as a separate
  `style:` commit.
