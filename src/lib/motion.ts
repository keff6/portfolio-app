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

/**
 * Reveals content slightly before it's fully scrolled into view, so fast
 * mobile scrolling doesn't outrun the intersection trigger.
 */
export const revealViewport = {
  once: true,
  margin: "0px 0px -10% 0px",
} as const;

/** Hidden/visible pairs consumed by `Reveal`/`RevealGroup`/`RevealItem`. */
export const itemVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
} as const;

export type ItemVariant = keyof typeof itemVariants;
