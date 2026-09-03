"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Trophy, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@teispace/next-themes";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Achievements", href: "/achievements", icon: Trophy },
];

export function MobileNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 md:hidden">
      <div className="flex items-center justify-between px-6 h-16 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 -mr-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 bg-white dark:bg-[#0a0a0a] border-b border-zinc-200 dark:border-zinc-800 shadow-xl"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive 
                        ? "bg-blue-50 dark:bg-zinc-900 text-blue-700 dark:text-blue-400" 
                        : "text-zinc-600 dark:text-zinc-400 active:bg-zinc-50 dark:active:bg-zinc-900"
                    }`}
                  >
                    <Icon size={18} />
                    {item.name}
                  </Link>
                );
              })}
              
              <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800 my-2" />
              
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-400 active:bg-zinc-50 dark:active:bg-zinc-900 transition-colors text-left"
              >
                {/* Light mode: show Moon icon + text */}
                <span className="flex items-center gap-3 dark:hidden">
                  <Moon size={18} />
                  Switch to Dark Mode
                </span>
                {/* Dark mode: show Sun icon + text */}
                <span className="hidden dark:flex items-center gap-3">
                  <Sun size={18} />
                  Switch to Light Mode
                </span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
