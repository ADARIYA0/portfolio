"use client";

import { useTheme } from "@teispace/next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 p-1 rounded-full w-full justify-between h-[36px]">
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900 p-1 rounded-full w-full justify-between border border-zinc-200 dark:border-zinc-800">
      <button
        onClick={() => setTheme("light")}
        className={`flex items-center justify-center w-full rounded-full py-1.5 transition-colors ${theme === "light"
          ? "bg-white text-zinc-900 shadow-sm"
          : "text-zinc-500 hover:text-zinc-300"
          }`}
        aria-label="Light mode"
      >
        <Sun size={14} className="stroke-[2.5px]" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`flex items-center justify-center w-full rounded-full py-1.5 transition-colors ${theme === "dark"
          ? "bg-zinc-800 text-zinc-100 shadow-sm"
          : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
          }`}
        aria-label="Dark mode"
      >
        <Moon size={14} className="stroke-[2.5px]" />
      </button>
    </div>
  );
}
