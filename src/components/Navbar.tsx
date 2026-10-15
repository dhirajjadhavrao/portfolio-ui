import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { PROFILE_DATA } from "../data/profile";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#09090b]/85 backdrop-blur-md border-b border-zinc-800/60 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Monogram Logo */}
        <a
          href="#home"
          className="text-sm font-bold tracking-tight text-zinc-100 hover:text-white transition-colors"
        >
          {PROFILE_DATA.personal.monogram}
        </a>

        {/* Center Nav Links */}
        <nav className="hidden sm:flex items-center gap-6 text-[13px] font-medium text-zinc-400">
          <a href="#about" className="hover:text-zinc-100 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-zinc-100 transition-colors">
            Projects
          </a>
          <a href="#experience" className="hover:text-zinc-100 transition-colors">
            Experience
          </a>
          <a href="#writing" className="hover:text-zinc-100 transition-colors">
            Writing
          </a>
          <a href="#contact" className="hover:text-zinc-100 transition-colors">
            Contact
          </a>
        </nav>

        {/* Right Actions: Theme Toggle + Resume Pill Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle theme"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-400" />
            )}
          </button>

          <a
            href={PROFILE_DATA.personal.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-sm shadow-indigo-600/20"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};
