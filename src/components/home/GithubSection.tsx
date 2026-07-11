"use client";

import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "@teispace/next-themes";
import { useEffect, useState } from "react";

const GITHUB_USERNAME = "ADARIYA0";
const GITHUB_THEME = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

export default function GithubSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState<number | "last">(currentYear);
  const [size, setSize] = useState({ blockSize: 14, blockMargin: 4, fontSize: 14 });

  const [overviewData, setOverviewData] = useState<any>(null);
  const [isOverviewEnabled, setIsOverviewEnabled] = useState(true);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setSize({ blockSize: 11, blockMargin: 3, fontSize: 11 });
      else if (width < 1024) setSize({ blockSize: 13, blockMargin: 4, fontSize: 12 });
      else if (width < 1280) setSize({ blockSize: 14, blockMargin: 4, fontSize: 13 });
      else setSize({ blockSize: 15, blockMargin: 4, fontSize: 14 });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const res = await fetch(`/api/github?username=${GITHUB_USERNAME}&year=${selectedYear === "last" ? currentYear : selectedYear}`);
        const result = await res.json();
        if (result.enabled && result.data) {
          setIsOverviewEnabled(true);
          setOverviewData(result);
        } else {
          setIsOverviewEnabled(false);
        }
      } catch (err) {
        setIsOverviewEnabled(false);
      }
    };
    fetchOverview();
  }, [selectedYear, currentYear]);

  const years = Array.from({ length: 4 }, (_, i) => currentYear - i);

  const filterFutureDates = (data: any[]) => {
    if (selectedYear === currentYear) {
      const today = new Date();
      return data.filter((activity: any) => new Date(activity.date) <= today);
    }
    return data;
  };

  return (
    <section className="py-20 md:py-32 relative" id="github">
      <div className="absolute top-0 left-10 w-px h-full bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent hidden md:block" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-4 lg:col-span-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider sticky top-32"
          >
            04. GitHub Activity
          </motion.h2>
        </div>

        <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full flex flex-col gap-4"
          >
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
              GitHub Contributions
            </h3>

            <div className="w-full flex flex-col-reverse lg:flex-row gap-4">
              <div className="flex-1 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 p-4 md:p-8 shadow-sm dark:shadow-none w-full overflow-hidden">
                <div className="w-full [&_article>div]:pb-4 [&_article>div::-webkit-scrollbar]:h-2 [&_article>div::-webkit-scrollbar-track]:bg-transparent [&_article>div::-webkit-scrollbar-thumb]:rounded-full [&_article>div::-webkit-scrollbar-thumb]:bg-zinc-300 dark:[&_article>div::-webkit-scrollbar-thumb]:bg-zinc-700">
                  {mounted && (
                    <GitHubCalendar
                      username={GITHUB_USERNAME}
                      year={selectedYear}
                      colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
                      blockSize={size.blockSize}
                      blockMargin={size.blockMargin}
                      fontSize={size.fontSize}
                      theme={GITHUB_THEME}
                      transformData={filterFutureDates}
                    />
                  )}
                </div>

                {isOverviewEnabled && overviewData && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col lg:flex-row gap-8"
                  >
                    <div className="flex-1 flex flex-col gap-2">
                      {overviewData.organizations && overviewData.organizations.length > 0 && (
                        <div className="flex flex-wrap gap-2 pb-4 mb-2">
                          {overviewData.organizations.map((org: any, i: number) => (
                            <a key={i} href={`https://github.com${org.href}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/60 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors text-xs font-semibold text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50">
                              {org.img && <img src={org.img} alt={org.text} className="w-4 h-4 rounded-md" />}
                              {org.text}
                            </a>
                          ))}
                        </div>
                      )}

                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Activity overview</h4>
                      <div className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="fill-current mt-0.5 flex-shrink-0 text-zinc-500">
                          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1v-1h-8a1 1 0 0 0-1 1Zm0-2v-1h-8a1 1 0 0 0-1 1Zm0-2v-1h-8a1 1 0 0 0-1 1Zm0-2v-1h-8a1 1 0 0 0-1 1Z" />
                        </svg>
                        <p className="leading-relaxed">
                          {overviewData.contributedNodes?.length > 0 ? (
                            overviewData.contributedNodes.map((node: any, i: number) => {
                              if (node.type === 'link') {
                                return (
                                  <a key={i} href={`https://github.com${node.href}`} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                                    {node.value}
                                  </a>
                                );
                              }
                              return <span key={i}>{node.value}</span>;
                            })
                          ) : (
                            <span>No recent activity</span>
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1 flex justify-center items-center py-6 min-h-[160px] md:min-h-[200px]">
                      <div className="relative w-full max-w-[220px] md:max-w-[280px] aspect-square text-[10px] text-zinc-500 font-medium">
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2" />
                        <div className="absolute top-0 left-1/2 w-[2px] h-full bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2" />

                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full pb-2 text-center whitespace-nowrap">
                          <span className="block text-zinc-700 dark:text-zinc-300">{overviewData.data["Code review"] || 0}%</span>
                          <span>Code review</span>
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-2 text-center whitespace-nowrap">
                          <span className="block text-zinc-700 dark:text-zinc-300">{overviewData.data["Pull requests"] || 0}%</span>
                          <span>Pull requests</span>
                        </div>
                        <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 pr-3 text-right whitespace-nowrap">
                          <span className="block text-zinc-700 dark:text-zinc-300">{overviewData.data["Commits"] || 0}%</span>
                          <span>Commits</span>
                        </div>
                        <div className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 pl-3 text-left whitespace-nowrap">
                          <span className="block text-zinc-700 dark:text-zinc-300">{overviewData.data["Issues"] || 0}%</span>
                          <span>Issues</span>
                        </div>

                        <div className="absolute top-1/2 right-1/2 h-[2px] bg-[#39d353] -translate-y-1/2 rounded-l-full transition-all duration-1000" style={{ left: `${50 - (overviewData.data["Commits"] || 0) / 2}%` }} />
                        {overviewData.data["Commits"] > 0 && <div className="absolute top-1/2 w-[7px] h-[7px] bg-[#39d353] rounded-full -translate-y-1/2 -translate-x-1/2 ring-[3px] ring-white dark:ring-[#0d1117] transition-all duration-1000 z-10" style={{ left: `${50 - (overviewData.data["Commits"] || 0) / 2}%` }} />}

                        <div className="absolute top-1/2 left-1/2 h-[2px] bg-[#39d353] -translate-y-1/2 rounded-r-full transition-all duration-1000" style={{ right: `${50 - (overviewData.data["Issues"] || 0) / 2}%` }} />
                        {overviewData.data["Issues"] > 0 && <div className="absolute top-1/2 w-[7px] h-[7px] bg-[#39d353] rounded-full -translate-y-1/2 translate-x-1/2 ring-[3px] ring-white dark:ring-[#0d1117] transition-all duration-1000 z-10" style={{ right: `${50 - (overviewData.data["Issues"] || 0) / 2}%` }} />}

                        <div className="absolute bottom-1/2 left-1/2 w-[2px] bg-[#39d353] -translate-x-1/2 rounded-t-full transition-all duration-1000" style={{ top: `${50 - (overviewData.data["Code review"] || 0) / 2}%` }} />
                        {overviewData.data["Code review"] > 0 && <div className="absolute left-1/2 w-[7px] h-[7px] bg-[#39d353] rounded-full -translate-x-1/2 -translate-y-1/2 ring-[3px] ring-white dark:ring-[#0d1117] transition-all duration-1000 z-10" style={{ top: `${50 - (overviewData.data["Code review"] || 0) / 2}%` }} />}

                        <div className="absolute top-1/2 left-1/2 w-[2px] bg-[#39d353] -translate-x-1/2 rounded-b-full transition-all duration-1000" style={{ bottom: `${50 - (overviewData.data["Pull requests"] || 0) / 2}%` }} />
                        {overviewData.data["Pull requests"] > 0 && <div className="absolute left-1/2 w-[7px] h-[7px] bg-[#39d353] rounded-full -translate-x-1/2 translate-y-1/2 ring-[3px] ring-white dark:ring-[#0d1117] transition-all duration-1000 z-10" style={{ bottom: `${50 - (overviewData.data["Pull requests"] || 0) / 2}%` }} />}

                        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-[#39d353] rounded-full -translate-y-1/2 -translate-x-1/2 z-20" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors whitespace-nowrap ${selectedYear === year
                      ? "bg-blue-600 dark:bg-blue-600 text-white"
                      : "bg-transparent text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                      }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
