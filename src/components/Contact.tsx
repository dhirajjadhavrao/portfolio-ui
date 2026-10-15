import React, { useState } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PROFILE_DATA } from "../data/profile";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-zinc-800/60 text-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Label */}
        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-400">
          Contact
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Let's build something
          <br />
          meaningful.
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-zinc-400 max-w-lg mx-auto leading-relaxed">
          Have an enterprise architectural challenge, a microservices modernization project, or an engineering role? I'd love to hear about it.
        </p>

        {/* Actions Row: Big Indigo Email Pill + Round GitHub & LinkedIn buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          {/* Email button with copy on click */}
          <a
            href={`mailto:${PROFILE_DATA.personal.email}`}
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-lg shadow-indigo-600/25"
          >
            <Mail className="w-4 h-4" />
            <span>{PROFILE_DATA.personal.email}</span>
            {copied ? (
              <span className="text-[10px] bg-indigo-700 px-1.5 py-0.5 rounded text-emerald-300 font-mono">
                Copied!
              </span>
            ) : null}
          </a>

          {/* GitHub round button */}
          <a
            href={PROFILE_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-11 h-11 rounded-full bg-[#111113] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* LinkedIn round button */}
          <a
            href={PROFILE_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-11 h-11 rounded-full bg-[#111113] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
