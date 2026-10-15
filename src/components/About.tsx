import React from "react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label & Heading */}
        <div className="space-y-2 mb-8">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-400">
            About
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            I build backend systems that teams can trust.
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative paragraphs */}
          <div className="md:col-span-7 space-y-4 text-[15px] leading-relaxed text-zinc-400">
            <p>
              I'm an Associate Staff Engineer with{" "}
              <span className="text-zinc-200 font-medium">6.6+ years</span> of experience building
              scalable, high-performance distributed systems. My work sits at the intersection of
              clean architecture and rock-solid reliability — where performance is measured,
              components are decoupled, and architectures are made to last.
            </p>
            <p>
              Over my career, I've led delivery teams, spearheaded cloud migrations of business-critical
              modules to <span className="text-zinc-200 font-medium">Google Kubernetes Engine (GKE)</span>, and
              architected multi-tenant cloud platforms. I care deeply about{" "}
              <span className="text-zinc-200 font-medium">clean system design</span>, reducing latency, and
              eliminating production bottlenecks before they reach users.
            </p>
            <p>
              Beyond client platforms, I build{" "}
              <span className="text-zinc-200 font-medium">developer tools & standalone engines</span>{" "}
              — including lightweight personal financial OSs and analytical tracking systems. I'm
              continuously expanding into modern Java 21 virtual threads, Spring Boot 3, and
              AI-assisted development tooling.
            </p>
          </div>

          {/* Right Column: Career & Education Cards */}
          <div className="md:col-span-5 space-y-4">
            {/* Career Card */}
            <div className="p-4 rounded-xl bg-[#111113] border border-zinc-800/80 space-y-3">
              <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-zinc-500">
                Career
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="font-semibold text-zinc-200 flex items-center justify-between">
                    <span>Nagarro</span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-1.5 py-0.5 rounded">
                      Current
                    </span>
                  </div>
                  <div className="text-zinc-400 text-[11px] mt-0.5">
                    Associate Staff Engineer · Jun 2022 – Present
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-800/50">
                  <div className="font-semibold text-zinc-200">Josh Software Inc</div>
                  <div className="text-zinc-400 text-[11px] mt-0.5">
                    Software Engineer · Dec 2019 – Jun 2022
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-800/50">
                  <div className="font-semibold text-zinc-200">ThinkQuotient Software</div>
                  <div className="text-zinc-400 text-[11px] mt-0.5">
                    Java Developer Intern · Mar 2019 – Dec 2019
                  </div>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="p-4 rounded-xl bg-[#111113] border border-zinc-800/80 space-y-3">
              <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-zinc-500">
                Education
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="font-semibold text-zinc-200">
                    Savitribai Phule Pune University
                  </div>
                  <div className="text-zinc-400 text-[11px] mt-0.5">
                    B.E. Computer Engineering · Dec 2015
                  </div>
                  <div className="text-zinc-500 text-[10px] font-mono mt-0.5">
                    Pune, Maharashtra
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-800/50">
                  <div className="font-semibold text-zinc-200">
                    Nutan Maharashtra Institute of Eng. & Tech.
                  </div>
                  <div className="text-zinc-400 text-[11px] mt-0.5">
                    Diploma Information Technology · Dec 2012
                  </div>
                  <div className="text-zinc-500 text-[10px] font-mono mt-0.5">
                    Pune, Maharashtra
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
