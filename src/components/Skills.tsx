"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";

const skillGroups = [
  {
    category: "Languages",
    icon: "⟨/⟩",
    skills: ["Python", "Java", "C/C++", "JavaScript", "HTML/CSS", "R", "PL/SQL"],
    accent: "#00f5d4",
  },
  {
    category: "ML & Vision",
    icon: "◈",
    skills: [
      "TensorFlow",
      "TensorFlow Lite",
      "CNN",
      "YOLOv8n",
      "Faster R-CNN",
      "RetinaNet",
      "Detectron2",
      "OpenCV",
    ],
    accent: "#a855f7",
  },
  {
    category: "Data & NLP",
    icon: "∿",
    skills: ["NumPy", "pandas", "Matplotlib", "NLTK", "Federated Learning", "FedAvg"],
    accent: "#00f5d4",
  },
  {
    category: "Frontend & Backend",
    icon: "⬡",
    skills: ["React", "Vite", "Tailwind CSS", "Firebase Auth", "Firestore", "Firebase Storage"],
    accent: "#a855f7",
  },
  {
    category: "Dev Tools",
    icon: "⌘",
    skills: ["Git / GitHub", "Jupyter", "Google Colab", "VS Code", "PyCharm"],
    accent: "#00f5d4",
  },
  {
    category: "Soft Skills",
    icon: "◎",
    skills: ["Leadership", "Public Speaking", "Event Management", "Problem Solving", "Teamwork"],
    accent: "#a855f7",
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-28 bg-[#0d0d14]/60">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="animate-on-scroll">
          <p className="section-label mb-3">// technical_skills</p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-14"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Full-stack toolkit,{" "}
            <span className="text-[#00f5d4]">ML-first mindset.</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.map((g) => (
              <div
                key={g.category}
                className="card-hover border border-[#1a1a2e] rounded-xl p-6 bg-[#050508]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-xl"
                    style={{ color: g.accent, fontFamily: "monospace" }}
                  >
                    {g.icon}
                  </span>
                  <p
                    className="text-sm font-medium text-[#e8e8f0]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {g.category}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded border transition-all duration-200 hover:brightness-125 cursor-default"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        borderColor: `${g.accent}20`,
                        color: "#8888a8",
                        background: `${g.accent}05`,
                      }}
                    >
                      {s}
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
}
