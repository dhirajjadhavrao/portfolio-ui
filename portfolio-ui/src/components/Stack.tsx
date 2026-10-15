import React from "react";

export const Stack: React.FC = () => {
  const stackData = [
    {
      category: "BACKEND",
      skills: ["Java 21", "Java 17", "Java 8", "REST APIs", "Microservices", "Hibernate"],
    },
    {
      category: "ARCHITECTURE",
      skills: ["System Design", "Schema Design", "API Gateway", "Eureka Discovery", "Performance"],
    },
    {
      category: "SPRING",
      skills: ["Spring Boot 3", "Spring Cloud", "Spring Security", "Spring Data JPA", "JDBC"],
    },
    {
      category: "CLOUD",
      skills: ["GCP (GKE)", "Kubernetes", "Docker", "ActiveMQ", "JMS", "Pub/Sub"],
    },
    {
      category: "TESTING & TOOLS",
      skills: ["JUnit 5", "Mockito", "Postman", "TDD", "Git", "Maven", "Jenkins"],
    },
  ];

  return (
    <section className="py-16 md:py-20 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label & Heading */}
        <div className="space-y-2 mb-10">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-400">
            Stack
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Technologies I work with
          </h2>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-start">
          {stackData.map((col) => (
            <div key={col.category} className="space-y-3">
              <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400">
                {col.category}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {col.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-[#151518] border border-zinc-800/80 text-zinc-300 text-[11px] font-medium hover:border-zinc-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
