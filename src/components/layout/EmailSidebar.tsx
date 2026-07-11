"use client";

import Link from "next/link";

export function EmailSidebar() {
  return (
    <div className="fixed bottom-0 right-8 xl:right-12 hidden lg:flex flex-col items-center gap-6 z-50">
      <div className="flex flex-col items-center gap-6">
        <Link
          href="mailto:adrianianimportant@gmail.com"
          className="text-sm font-semibold tracking-wider text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors"
          style={{ writingMode: "vertical-rl" }}
        >
          adrianianimportant@gmail.com
        </Link>
        <div className="w-px h-24 bg-zinc-300 dark:bg-zinc-700" />
      </div>
    </div>
  );
}
