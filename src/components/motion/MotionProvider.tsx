"use client";

import { LazyMotion, domMax } from "framer-motion";

/**
 * Loads framer-motion's feature bundle once for the whole app instead of
 * every section pulling in the full `motion` component individually.
 * `domMax` (not the smaller `domAnimation`) is required because Navbar's
 * active-link indicator uses `layoutId`, which needs the layout-projection
 * feature. `strict` enforces that descendants use `m.*` (not `motion.*`),
 * which is what actually opts into this smaller, shared bundle.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion features={domMax} strict>
      {children}
    </LazyMotion>
  );
}
