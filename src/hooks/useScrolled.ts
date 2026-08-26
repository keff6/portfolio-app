"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD_PX = 50;

/** Tracks whether the page has been scrolled past `threshold` pixels. */
export function useScrolled(threshold: number = SCROLL_THRESHOLD_PX) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
