import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PROFILE_DATA } from "../data/profile";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-20 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-2">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-400">
              Experience
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Where I've worked
            </h2>
          </div>

          <a
            href={PROFILE_DATA.personal.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <span>View full resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Jobs List */}
        <div className="space-y-12">
          {PROFILE_DATA.experience.map((job, idx) => (
            <div
              key={idx}
              className="grid md:grid-cols-12 gap-6 items-start pt-8 first:pt-0 border-t border-zinc-800/40 first:border-none"
            >
              {/* Left Sub-Column (4 cols) */}
              <div className="md:col-span-4 space-y-1">
                <h3 className="font-bold text-base text-zinc-100">{job.company}</h3>
                <div className="text-xs text-zinc-400">{job.role}</div>
                <div className="text-xs text-zinc-500 font-mono">{job.period}</div>
                {job.current && (
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-800/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Current
                    </span>
                  </div>
                )}
              </div>

              {/* Right Sub-Column (8 cols): Bullet points with dashes */}
              <div className="md:col-span-8 space-y-2 text-xs sm:text-[13px] leading-relaxed text-zinc-400">
                {job.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-zinc-600 select-none shrink-0">—</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
