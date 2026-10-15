import React from "react";

export const CurrentlyBuilding: React.FC = () => {
  const items = [
    { name: "rmc-cloud-platform v2", status: "Building", dot: "bg-indigo-500", pulse: true },
    { name: "Java 21 Virtual Threads & I/O", status: "Exploring", dot: "bg-emerald-500", pulse: true },
    { name: "AI-Augmented Testing Suites", status: "Experimenting", dot: "bg-amber-500", pulse: false },
  ];

  return (
    <section className="py-16 md:py-20 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="space-y-2 mb-8">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-400">
            Now
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Currently Building
          </h2>
        </div>

        {/* 3 Horizontal Cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.name}
              className="p-4 rounded-xl bg-[#111113] border border-zinc-800/80 flex items-center justify-between hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  {item.pulse && (
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${item.dot}`}
                    />
                  )}
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${item.dot}`} />
                </span>
                <span className="text-xs font-semibold text-zinc-200">{item.name}</span>
              </div>

              <span className="text-[10px] font-mono text-zinc-500 bg-[#161619] px-2 py-0.5 rounded border border-zinc-800">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
