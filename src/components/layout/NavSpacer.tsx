"use client";

import { useNavigation } from "./NavigationContext";

/**
 * A spacer component that adds top padding when the floating navbar is visible.
 * Shows on tablet (md) always, and on desktop (lg) only when navbar mode is active.
 * Do NOT use this on the Home page.
 */
export function NavSpacer() {
  const { useNavbarDesktop } = useNavigation();

  return (
    <>
      {/* Tablet spacer — always visible on md, hidden on mobile and desktop */}
      <div className="hidden md:block lg:hidden h-12" aria-hidden="true" />
      {/* Desktop navbar spacer — only when navbar mode is active */}
      {useNavbarDesktop && (
        <div className="hidden lg:block h-16" aria-hidden="true" />
      )}
    </>
  );
}
