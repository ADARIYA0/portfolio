import { Metadata } from "next";
import { NavSpacer } from "@/components/layout/NavSpacer";

export const metadata: Metadata = {
  title: "Projects | Portfolio of Adrian A.M.",
  description: "Portfolio projects and works of Adrian Anugerah Maulana.",
};

export default function ProjectsPage() {
  return (
    <div className="flex-1 w-full max-w-6xl mx-auto px-6 lg:px-12 flex flex-col pt-16 pb-12">
      <NavSpacer />
      
      <section className="py-8 lg:py-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
          Projects
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
          Explore my latest projects and technical works.
        </p>

        {/* Content placeholder - akan diisi nanti */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
              Project Coming Soon
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Projects will be displayed here soon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
