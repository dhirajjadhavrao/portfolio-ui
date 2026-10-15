import React from "react";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PROFILE_DATA } from "../data/profile";

export const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-[12px] font-medium text-emerald-400 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>{PROFILE_DATA.hero.statusBadge}</span>
        </div>

        {/* 2-Column Grid: Left Text, Right Code Card */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="md:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.1]">
              Building distributed systems
              <br />
              that scale.
            </h1>

            <p className="text-[15px] sm:text-base text-zinc-400 leading-relaxed max-w-lg">
              Associate Staff Engineer specializing in{" "}
              <span className="text-zinc-200 font-medium">Java 21, Spring Boot 3</span> and{" "}
              <span className="text-zinc-200 font-medium">Microservices</span> — focused on scalable architecture, performance, and cloud-native experiences.
            </p>

            {/* CTAs Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition-all shadow-sm"
              >
                <span>View my work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={PROFILE_DATA.personal.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all"
              >
                <span>View resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Icon Buttons */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  href={PROFILE_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>

                <a
                  href={PROFILE_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`mailto:${PROFILE_DATA.personal.email}`}
                  aria-label="Email"
                  className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Code Card */}
          <div className="md:col-span-5">
            <div className="rounded-xl border border-zinc-800/80 bg-[#111113] p-4 font-mono text-[13px] shadow-2xl relative overflow-hidden">
              {/* Header with 3 colored dots */}
              <div className="flex items-center gap-1.5 mb-4 text-zinc-500 text-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-[11px] text-zinc-500">engineer.ts</span>
              </div>

              {/* Code lines exactly styled like screenshot */}
              <div className="space-y-1 leading-relaxed text-zinc-300">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">engineer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">name:</span>{" "}
                  <span className="text-emerald-400">"Dhiraj Jadhavrao"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">role:</span>{" "}
                  <span className="text-emerald-400">"Associate Staff Engineer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">stack:</span> [
                  <span className="text-emerald-400">"Java 21"</span>,{" "}
                  <span className="text-emerald-400">"Spring"</span>,
                </div>
                <div className="pl-14">
                  <span className="text-emerald-400">"Cloud"</span>,{" "}
                  <span className="text-emerald-400">"AI"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">yoe:</span>{" "}
                  <span className="text-amber-400">6.6</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">location:</span>{" "}
                  <span className="text-emerald-400">"Pune, IN"</span>,
                </div>
                <div>&#125;;</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-zinc-800/60">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">6.6+</div>
            <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mt-1">
              Years Experience
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">15+</div>
            <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mt-1">
              Microservices Modernized
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">SPRING & CLOUD</div>
            <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mt-1">
              Primary Stack
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">AI</div>
            <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider mt-1">
              Exploring the Future
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
