"use client";

import { useTheme } from "@teispace/next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900 p-1 rounded-full w-full justify-between h-[36px] border border-zinc-200 dark:border-zinc-800">
      </div>
    );
  }

  const tabs = [
    { id: "light", icon: Sun, label: "Light mode" },
    { id: "dark", icon: Moon, label: "Dark mode" }
  ];

  return (
    <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900 p-1 rounded-full w-full justify-between border border-zinc-200 dark:border-zinc-800">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = theme === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setTheme(tab.id)}
            className={`relative flex items-center justify-center w-full rounded-full py-1.5 transition-colors z-10 ${
              isActive
                ? (tab.id === "light" ? "text-zinc-900" : "text-zinc-100")
                : (tab.id === "light" ? "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300" : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300")
            }`}
            aria-label={tab.label}
          >
            {isActive && (
              <motion.div
                layoutId="theme-toggle-indicator"
                className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-full shadow-sm z-0"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center justify-center">
              <Icon size={14} className="stroke-[2.5px]" />
            </span>
          </button>
        );
      })}
    </div>
  );
}
