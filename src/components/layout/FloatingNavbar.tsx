"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Achievements", href: "/achievements", icon: Trophy },
];

export function FloatingNavbar({ showOnDesktop = false }: { showOnDesktop?: boolean }) {
  const pathname = usePathname();

  return (
    <header className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex ${showOnDesktop ? '' : 'lg:hidden'}`}>
      <nav className="flex items-center gap-1 p-1.5 rounded-full bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(255,255,255,0.02)]">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors z-10 ${
                isActive 
                  ? "text-blue-700 dark:text-blue-400" 
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="floating-navbar-active"
                  className="absolute inset-0 bg-blue-50 dark:bg-zinc-800/80 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Icon size={16} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
