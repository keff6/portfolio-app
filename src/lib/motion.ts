/** Shared framer-motion timing/variant constants, kept in sync across sections. */
export const DURATION = {
  fast: 0.2,
  base: 0.3,
  medium: 0.5,
  slow: 0.6,
} as const;

export const STAGGER_STEP = {
  category: 0.1,
  item: 0.05,
} as const;

/** Fade-and-rise-in triggered when the element scrolls into view. */
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
} as const;

/** Fade-and-rise-in that plays immediately on mount (above-the-fold content). */
export const fadeInUpOnMount = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
} as const;
