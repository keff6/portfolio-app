"use client";

import { useEffect, useState } from "react";

// Treats a section as "active" once it crosses the middle 10% band of the viewport.
const ACTIVE_SECTION_ROOT_MARGIN = "-45% 0px -45% 0px";

/** Tracks which of the given section ids is currently active in the viewport. */
export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) {
          setActiveSection(mostVisible.target.id);
        }
      },
      { rootMargin: ACTIVE_SECTION_ROOT_MARGIN, threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
