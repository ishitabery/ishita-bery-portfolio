"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";

const experiences = [
  {
    role: "Winter Research Intern",
    org: "National Institute of Technology, Jalandhar",
    period: "Dec 2025 – Feb 2026",
    type: "Research",
    remote: true,
    highlights: [
      "Designed and deployed an offline-first agricultural AI system combining computer vision, NLP, and rule-based models — optimized for low-resource, low-connectivity environments.",
      "Built a TensorFlow Lite plant disease detection model (CNN-based) enabling sub-100ms on-device inference without cloud dependency.",
      "Implemented FedAvg federated learning protocol to enable collaborative model improvement across distributed farm devices while keeping all raw data local and private.",
    ],
    skills: [
      "TensorFlow Lite",
      "CNN",
      "Federated Learning",
      "NLP",
      "Computer Vision",
    ],
  },
  {
    role: "Executive Member — Creative Computing Society",
    org: "Thapar Institute of Engineering and Technology",
    period: "Oct 2023 – Mar 2025",
    type: "Leadership",
    remote: false,
    highlights: [
      "Organized and managed national-level competitive programming events with 1,500+ participants, coordinating logistics, judging panels, and live operations.",
      "Drove marketing and outreach strategy for Syrinx, a 2D pixelated adventure game event, resulting in measurably higher engagement versus prior year.",
      "Mentored junior members on problem-setting and event execution, growing the society's technical team capability.",
    ],
    skills: ["Event Management", "Leadership", "Public Speaking", "Marketing"],
  },
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-28 max-w-6xl mx-auto px-6">
      <div ref={ref} className="animate-on-scroll">
        <p className="section-label mb-3">// experience</p>
        <h2
          className="text-3xl md:text-4xl font-bold mb-14"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Where I've{" "}
          <span className="text-[#00f5d4]">built and contributed.</span>
        </h2>

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5d4]/40 via-[#1a1a2e] to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="md:flex gap-12">
                {/* Left: date + type */}
                <div className="hidden md:block w-[200px] shrink-0 text-right pr-10 pt-1">
                  <p
                    className="text-xs text-[#44445a] mb-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {exp.period}
                  </p>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded border"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      borderColor:
                        exp.type === "Research"
                          ? "rgba(0,245,212,0.3)"
                          : "rgba(168,85,247,0.3)",
                      color:
                        exp.type === "Research" ? "#00f5d4" : "#a855f7",
                      background:
                        exp.type === "Research"
                          ? "rgba(0,245,212,0.05)"
                          : "rgba(168,85,247,0.05)",
                    }}
                  >
                    {exp.type}
                  </span>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-start pt-1.5">
                  <div
                    className="w-3 h-3 rounded-full border-2 -ml-1.5 shrink-0"
                    style={{
                      borderColor:
                        exp.type === "Research" ? "#00f5d4" : "#a855f7",
                      background:
                        exp.type === "Research"
                          ? "rgba(0,245,212,0.2)"
                          : "rgba(168,85,247,0.2)",
                    }}
                  />
                </div>

                {/* Content card */}
                <div className="flex-1 card-hover border border-[#1a1a2e] rounded-xl p-6 bg-[#0d0d14]">
                  {/* Mobile date */}
                  <p
                    className="md:hidden text-xs text-[#44445a] mb-2"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {exp.period}
                  </p>

                  <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                    <h3
                      className="text-lg font-semibold text-[#e8e8f0]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {exp.role}
                    </h3>
                    {exp.remote && (
                      <span
                        className="text-[10px] text-[#44445a] border border-[#1a1a2e] px-2 py-0.5 rounded"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        remote
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-[#00f5d4] mb-4">{exp.org}</p>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-sm text-[#8888a8] leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-[#00f5d4] shrink-0 mt-0.5">
                          ▸
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span key={s} className="tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
