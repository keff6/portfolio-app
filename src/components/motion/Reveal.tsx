"use client";

import { m } from "framer-motion";
import type { TargetAndTransition } from "framer-motion";
import type { ReactNode } from "react";
import { DURATION, itemVariants, revealViewport, type ItemVariant } from "@/lib/motion";

const tagMap = {
  div: m.div,
  p: m.p,
  span: m.span,
} as const;

type MotionTagName = keyof typeof tagMap;

/** Single-element reveal: the only IntersectionObserver for standalone content. */
export function Reveal({
  children,
  as = "div",
  variant = "fadeInUp",
  trigger = "view",
  delay = 0,
  duration = DURATION.slow,
  className,
}: {
  children: ReactNode;
  as?: MotionTagName;
  variant?: ItemVariant;
  trigger?: "view" | "mount";
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const MotionTag = tagMap[as];
  const { hidden, visible } = itemVariants[variant];
  const triggerProps =
    trigger === "view"
      ? { whileInView: visible, viewport: revealViewport }
      : { animate: visible };

  return (
    <MotionTag initial={hidden} transition={{ duration, delay }} className={className} {...triggerProps}>
      {children}
    </MotionTag>
  );
}

/**
 * Drives a `whileInView`-triggered stagger for a group of `RevealItem`s.
 * Set `root={false}` for a group nested inside another `RevealGroup` — it
 * then inherits its hidden/visible state from the ancestor instead of
 * running its own observer, keeping the observer count to one per section.
 */
export function RevealGroup({
  children,
  as = "div",
  variant,
  staggerChildren,
  root = true,
  className,
}: {
  children: ReactNode;
  as?: MotionTagName;
  variant?: ItemVariant;
  staggerChildren: number;
  root?: boolean;
  className?: string;
}) {
  const MotionTag = tagMap[as];
  const base = variant ? itemVariants[variant] : { hidden: {}, visible: {} };
  const variants = {
    hidden: base.hidden,
    visible: { ...base.visible, transition: { staggerChildren } },
  };
  const triggerProps = root
    ? { initial: "hidden", whileInView: "visible", viewport: revealViewport }
    : {};

  return (
    <MotionTag variants={variants} className={className} {...triggerProps}>
      {children}
    </MotionTag>
  );
}

/**
 * A member of a `RevealGroup`; inherits its hidden/visible state from the group.
 * `whileHover`/`whileTap` are passed through directly (rather than via CSS)
 * because this element's `transform` is already driven by framer-motion —
 * a CSS hover transform on the same node would be overridden by the
 * inline style motion leaves behind after the reveal animation completes.
 */
export function RevealItem({
  children,
  as = "div",
  variant = "fadeInUp",
  duration = DURATION.medium,
  className,
  whileHover,
  whileTap,
}: {
  children: ReactNode;
  as?: MotionTagName;
  variant?: ItemVariant;
  duration?: number;
  className?: string;
  whileHover?: TargetAndTransition;
  whileTap?: TargetAndTransition;
}) {
  const MotionTag = tagMap[as];
  return (
    <MotionTag
      variants={itemVariants[variant]}
      transition={{ duration }}
      className={className}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </MotionTag>
  );
}
