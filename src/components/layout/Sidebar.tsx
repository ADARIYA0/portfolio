"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "../ThemeToggle";
import {
  Home,
  User,
  Trophy,
  Briefcase,
  Mail,
  FolderGit2
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Achievements", href: "/achievements", icon: Trophy },
  { name: "Projects", href: "/projects", icon: FolderGit2 },
];

interface SidebarProps {
  onToggleNavigation?: () => void;
}

export function Sidebar({ onToggleNavigation }: SidebarProps) {
  const pathname = usePathname();

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <aside className="w-64 flex-shrink-0 hidden lg:flex flex-col border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0a0a0a] h-screen sticky top-0 overflow-y-auto py-8 px-6">

      <div className="flex flex-col items-center mb-2">
        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-1 border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800">
          <Image
            src="/images/profile.png"
            alt="Adrian Anugerah Maulana"
            fill
            className="object-cover"
            sizes="(max-width: 96px) 100vw, 96px"
          />
        </div>
        <h1 className="text-lg font-semibold text-zinc-900 dark:text-white text-center">
          Adrian Anugerah Maulana
        </h1>
      </div>

      <div className="mb-4">
        <ThemeToggle />
      </div>

      {/* Navigation Toggle Button inside Sidebar */}
      {onToggleNavigation && (
        <button
          onClick={onToggleNavigation}
          className="w-full mb-4 flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
          </svg>
          Use Navbar
        </button>
      )}

      <nav
        className="flex flex-col gap-1 flex-1 relative"
        onMouseLeave={() => setHoveredItem(null)}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const isHovered = hoveredItem === item.name;
          const isHighlighted = hoveredItem ? isHovered : isActive;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHoveredItem(item.name)}
              className={`relative flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium z-10 ${isHighlighted
                ? "text-blue-700 dark:text-blue-500"
                : "text-zinc-600 dark:text-zinc-400"
                }`}
            >
              {isHighlighted && (
                <motion.div
                  layoutId="sidebar-active-indicator"
                  className="absolute inset-0 bg-blue-600/10 dark:bg-blue-500/10 rounded-lg -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              <Icon size={18} className={`transition-colors ${isHighlighted ? "text-blue-700 dark:text-blue-500" : ""}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-center">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Adrian Anugerah Maulana.
          <br />
          All rights reserved.
        </p>
      </div>

    </aside>
  );
}
