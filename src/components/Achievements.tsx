"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";

const achievements = [
  {
    title: "Google Big Code Challenge 2026",
    detail:
      "Shortlisted among the top 1,500 participants nationwide, advancing to Round 2 of Google's competitive programming challenge — out of tens of thousands of entries.",
    label: "Top 1,500 · Nationwide",
    accent: "#00f5d4",
    icon: "G",
  },
  {
    title: "Dronolympics Finalist",
    detail:
      "Selected as a finalist at NIT Jalandhar's Dronolympics, a national-level drone competition testing autonomous navigation, hardware integration, and real-time decision-making under pressure.",
    label: "National Finalist · NIT Jalandhar",
    accent: "#a855f7",
    icon: "◈",
  },
  {
    title: "12th Standard — 95.4%",
    detail:
      "Graduated with a 95.4% aggregate, placing in the top cohort of students nationally and earning admission to Thapar Institute's Computer Engineering program.",
    label: "Academic Excellence",
    accent: "#00f5d4",
    icon: "✦",
  },
];

export default function Achievements() {
  const ref = useScrollReveal();

  return (
    <section id="achievements" className="py-28 max-w-6xl mx-auto px-6">
      <div ref={ref} className="animate-on-scroll">
        <p className="section-label mb-3">// achievements</p>
        <h2
          className="text-3xl md:text-4xl font-bold mb-14"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Recognition that{" "}
          <span className="text-[#00f5d4]">speaks for itself.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="card-hover border border-[#1a1a2e] rounded-xl p-7 bg-[#0d0d14] flex flex-col"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-base font-bold mb-5"
                style={{
                  background: `${a.accent}10`,
                  color: a.accent,
                  border: `1px solid ${a.accent}30`,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {a.icon}
              </div>

              <p
                className="text-xs mb-2"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: a.accent,
                  opacity: 0.8,
                }}
              >
                {a.label}
              </p>

              <h3
                className="text-base font-semibold text-[#e8e8f0] mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {a.title}
              </h3>

              <p className="text-sm text-[#8888a8] leading-relaxed flex-1">
                {a.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
