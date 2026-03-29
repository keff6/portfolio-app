"use client";

import { useState, useEffect } from "react";

/**
 * Renders a scroll-to-top button that appears when user scrolls down.
 * Clicking the button smoothly scrolls back to the top of the page.
 *
 * @returns The ScrollToTop button JSX element
 */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-12 h-12 bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors z-50"
      aria-label="Scroll to top"
    >
      <span className="text-white text-xl">↑</span>
    </button>
  );
}
