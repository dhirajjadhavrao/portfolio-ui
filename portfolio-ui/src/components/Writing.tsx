import React from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { PROFILE_DATA } from "../data/profile";

export const Writing: React.FC = () => {
  return (
    <section id="writing" className="py-16 md:py-20 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
          <div className="space-y-2">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-400">
              Writing
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Engineering Notes
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-zinc-500 max-w-sm sm:text-right font-normal">
            Articles, tutorials, and practical notes on testing frameworks, Linux systems, and C++.
          </p>
        </div>

        {/* 4 Active Blog Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROFILE_DATA.articles.map((article, i) => (
            <a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl bg-[#111113] border border-zinc-800/80 p-6 flex flex-col justify-between hover:border-zinc-700 hover:bg-[#141417] transition-all"
            >
              <div className="space-y-4">
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-indigo-950/50 text-indigo-400 border border-indigo-800/40">
                    {article.category}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {article.date} · {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-base sm:text-lg text-zinc-100 group-hover:text-indigo-400 transition-colors flex items-start justify-between gap-2">
                  <span>{article.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                </h3>

                {/* Description (2-3 lines) */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {article.desc}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-5 mt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500">
                <span className="flex items-center gap-1.5 font-medium text-zinc-400">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400/80" />
                  {article.publisher}
                </span>
                <span className="text-indigo-400 font-medium group-hover:underline flex items-center gap-1 text-[11px]">
                  Read Article ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
