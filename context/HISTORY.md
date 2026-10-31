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
