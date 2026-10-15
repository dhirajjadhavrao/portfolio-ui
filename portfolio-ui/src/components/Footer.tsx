import React from "react";
import { PROFILE_DATA } from "../data/profile";

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-zinc-800/60 bg-[#070709]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
          {/* Left: Name and Title */}
          <div className="text-center sm:text-left">
            <div className="font-semibold text-zinc-200 text-sm">
              {PROFILE_DATA.personal.name}
            </div>
            <div className="text-[11px] text-zinc-500 mt-0.5">
              {PROFILE_DATA.personal.title} · Pune, IN
            </div>
          </div>

          {/* Center: Quick Links */}
          <div className="flex items-center gap-6 text-xs text-zinc-400">
            <a
              href={PROFILE_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={PROFILE_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PROFILE_DATA.personal.email}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href={PROFILE_DATA.personal.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Right: Copyright */}
          <div className="text-[11px] font-mono text-zinc-500">
            © {new Date().getFullYear()} {PROFILE_DATA.personal.name}
          </div>
        </div>
      </div>
    </footer>
  );
};
