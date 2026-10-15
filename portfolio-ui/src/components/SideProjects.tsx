import React from "react";
import { ArrowUpRight, ShieldCheck, Cpu, MapPin, Cloud, Server } from "lucide-react";
import { PROFILE_DATA } from "../data/profile";

export const SideProjects: React.FC = () => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case "rmc-platform":
        return <Server className="w-4 h-4 text-purple-400" />;
      case "bhoomisetu":
        return <MapPin className="w-4 h-4 text-indigo-400" />;
      case "gcp-migration":
        return <Cloud className="w-4 h-4 text-sky-400" />;
      case "wellfrog":
        return <ShieldCheck className="w-4 h-4 text-orange-400" />;
      case "habit-tracker":
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      default:
        return <Cpu className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section className="py-16 md:py-20 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="space-y-2 mb-10">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-400">
            Personal Work
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Things I've Built
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-normal">
            Open-source tools and platforms built to solve real engineering bottlenecks.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROFILE_DATA.sideProjects.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-[#111113] border border-zinc-800/80 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all"
            >
              <div className="space-y-4">
                {/* Header with Icon, Name, Badge */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                      {getProjectIcon(item.id)}
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-zinc-100">{item.name}</h3>
                      <p className="text-[11px] text-zinc-500">{item.subtitle}</p>
                    </div>
                  </div>

                  <span
                    className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border shrink-0"
                    style={{
                      backgroundColor: `${item.badgeColor}15`,
                      color: item.badgeColor,
                      borderColor: `${item.badgeColor}40`,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Problem Solved Box */}
                <div className="p-3 rounded-lg bg-[#151518] border border-zinc-800/80 space-y-1">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                    Problem Solved
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                {/* Highlights pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#161619] text-zinc-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer link */}
              <div className="pt-4 mt-5 border-t border-zinc-800/60 flex items-center gap-4 text-xs">
                <a
                  href={item.github || PROFILE_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
                >
                  <span>View on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
