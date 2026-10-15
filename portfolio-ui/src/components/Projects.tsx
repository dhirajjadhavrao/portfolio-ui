import React from "react";

export const Projects: React.FC = () => {
  const projects = [
    {
      id: "book-a-group",
      title: "BookaGroup",
      subtitle: "Flight Booking tool for Lufthansa Airlines",
      desc: "This project is a Flight Booking tool for Lufthansa Airlines.",
      tech: ["Java", "Spring MVC", "PostgresSQL", "Spring Boot", "JSP"],
      lineColor: "bg-indigo-500",
    },
    {
      id: "jocata-bobfl",
      title: "Jocata BOBFL - Credit Card",
      subtitle: "Credit card applications management project for Bank Of Baroda",
      desc: "This project is a Credit card applications management project for Bank Of Baroda.",
      tech: ["Java", "Spring Boot", "PostgresSQL", "Postman", "Kubernates", "Angular"],
      lineColor: "bg-pink-500",
    },
    {
      id: "rakuten-privacy",
      title: "Rakuten Privacy Platform",
      subtitle: "CCPA compliance requirements mediator",
      desc: "This project acts as a mediator for Rakuten's businesses and data processors for satisfying CCPA compliance requirements.",
      tech: ["Java", "Spring Boot", "Postman", "PostgresSQL", "Kubernates", "Junit", "Mockito", "React"],
      lineColor: "bg-emerald-500",
    },
    {
      id: "rakuten-catalog",
      title: "Rakuten Catalog Platform",
      subtitle: "GCS bucket automated file comparison and cloud storage",
      desc: "Monitor (Schedule) the GCS bucket. On bucket updates fetch newly created Blob (into *.json.gz format). Also, check for the Blob with the same name in the GCS bucket which contains old data into the same *.json.gz. Fetch both Blob and after applying comparing logic create/generate new files in TXT, XML format and store this final data into *.json.gz format on the cloud.",
      tech: ["Java", "Spring Boot", "PostgresSQL", "Google cloud", "Junit", "Mockito", "React"],
      lineColor: "bg-orange-500",
    },
    {
      id: "rakuten-price-navi",
      title: "Rakuten Price Navi Platform",
      subtitle: "Development of Price Navi in DAPI framework using Java",
      desc: "Development of the existing Price Navi application (written in PHP), in the DAPI framework, using Java.",
      tech: ["Java 8", "Play framework", "DAPI framework", "Junit", "Mockito", "React"],
      lineColor: "bg-blue-500",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header matching screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-2">
          <div className="space-y-2">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-400">
              WORK
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Featured Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 font-normal">
            Professional work at product companies.
          </p>
        </div>

        {/* 3 Columns Top Row, 2 Columns Bottom Row */}
        <div className="space-y-6">
          {/* Row 1 (3 items) */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="rounded-xl bg-[#111113] border border-zinc-800/80 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all"
              >
                <div>
                  {/* Colored top accent line inside card padding */}
                  <div className={`h-[2px] w-full ${item.lineColor} rounded-full mb-6 opacity-90`} />

                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-zinc-100">{item.title}</h3>
                    <p className="text-xs text-zinc-500">{item.subtitle}</p>
                  </div>

                  <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed mt-4">
                    {item.desc}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-6 mt-4">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#161619] border border-zinc-800 text-zinc-400 text-[11px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 (2 items) */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(3, 5).map((item) => (
              <div
                key={item.id}
                className="rounded-xl bg-[#111113] border border-zinc-800/80 p-6 flex flex-col justify-between hover:border-zinc-700 transition-all"
              >
                <div>
                  {/* Colored top accent line inside card padding */}
                  <div className={`h-[2px] w-full ${item.lineColor} rounded-full mb-6 opacity-90`} />

                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-zinc-100">{item.title}</h3>
                    <p className="text-xs text-zinc-500">{item.subtitle}</p>
                  </div>

                  <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed mt-4">
                    {item.desc}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-6 mt-4">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#161619] border border-zinc-800 text-zinc-400 text-[11px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
