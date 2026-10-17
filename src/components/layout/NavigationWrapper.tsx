"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { FloatingNavbar } from "./FloatingNavbar";
import { MobileNavbar } from "./MobileNavbar";
import { LayoutPanelLeft, Sun, Moon } from "lucide-react";
import { useTheme } from "@teispace/next-themes";
import { NavigationContext } from "./NavigationContext";

export function NavigationWrapper({ children }: { children: React.ReactNode }) {
  const [useNavbarDesktop, setUseNavbarDesktop] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <NavigationContext.Provider value={{ useNavbarDesktop }}>
      {/* Desktop Mode Toggle Button - Only shown in Navbar mode */}
      {useNavbarDesktop && (
        <button
          onClick={() => setUseNavbarDesktop(false)}
          className="fixed top-6 right-[4.5rem] z-50 hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(255,255,255,0.02)] text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50/70 dark:hover:bg-zinc-800/70 transition-colors"
        >
          <LayoutPanelLeft size={16} />
          Use Sidebar
        </button>
      )}

      {/* Floating Theme Toggle for Tablet & Desktop Navbar mode */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`fixed top-6 right-6 z-50 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(255,255,255,0.02)] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors ${
          !useNavbarDesktop ? "lg:hidden" : ""
        }`}
        aria-label="Toggle Theme"
      >
        <Sun size={18} className="block dark:hidden" />
        <Moon size={18} className="hidden dark:block" />
      </button>

      {/* Desktop Navigation */}
      {!useNavbarDesktop && <Sidebar onToggleNavigation={() => setUseNavbarDesktop(true)} />}

      {/* Floating Navbar (Used for Tablet, and optionally Desktop) */}
      <FloatingNavbar showOnDesktop={useNavbarDesktop} />

      {/* Mobile Navigation */}
      <MobileNavbar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen w-full pt-16 md:pt-0">
        {children}
      </main>
    </NavigationContext.Provider>  );
}
