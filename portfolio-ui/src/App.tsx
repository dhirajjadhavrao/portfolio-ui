import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Stack } from "./components/Stack";
import { Projects } from "./components/Projects";
import { SideProjects } from "./components/SideProjects";
import { Experience } from "./components/Experience";
import { Principles } from "./components/Principles";
import { Writing } from "./components/Writing";
import { CurrentlyBuilding } from "./components/CurrentlyBuilding";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return true; // Default dark mode to match reference site aesthetic
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col font-sans transition-colors duration-200">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-1">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <SideProjects />
        <Experience />
        <Principles />
        <Writing />
        <CurrentlyBuilding />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
