import React from "react";

export const Principles: React.FC = () => {
  return (
    <section className="py-16 md:py-20 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="space-y-2 mb-10">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-400">
            Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            How I think about engineering
          </h2>
        </div>

        {/* 2-Column + Full Width Layout matching screenshot */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Item 01 */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
              <span className="font-mono text-xs text-indigo-400">01</span>
              <span>Keep complexity where it belongs.</span>
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed pl-6">
              Simple interfaces hide complex systems. Push the hard parts into well-defined domain
              abstractions and isolated microservices — not up into client layers or leaky contracts.
            </p>
          </div>

          {/* Item 02 */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
              <span className="font-mono text-xs text-indigo-400">02</span>
              <span>Build resilient systems, not fragile shortcuts.</span>
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed pl-6">
              Distributed architectures will encounter network partitions and spikes. Design
              idempotent APIs, asynchronous messaging queues, and graceful degradation from day one.
            </p>
          </div>

          {/* Item 03 */}
          <div className="space-y-2 md:col-span-2 md:max-w-xl">
            <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
              <span className="font-mono text-xs text-indigo-400">03</span>
              <span>Performance is a feature.</span>
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed pl-6">
              Slow backend APIs degrade user experience and inflate cloud spend. Database query
              optimization, zero-latency caching, and connection pooling deserve the same rigor as
              new functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
