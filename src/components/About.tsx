"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-28 max-w-6xl mx-auto px-6">
      <div ref={ref} className="animate-on-scroll grid md:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div>
          <p className="section-label mb-4">// about me</p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Engineering intelligence,{" "}
            <span className="text-[#00f5d4]">one model at a time.</span>
          </h2>
          <div className="space-y-4 text-[#8888a8] leading-relaxed">
            <p>
              I'm a Computer Engineering student at Thapar Institute of
              Engineering and Technology, obsessed with building AI systems that
              work in the real world — not just in notebooks.
            </p>
            <p>
              My research at NIT Jalandhar sharpened my focus on edge-deployable
              models, privacy-first machine learning, and multimodal AI systems
              that operate under real-world constraints like low connectivity and
              limited compute.
            </p>
            <p>
              Outside research, I architect full-stack products and lead
              technical communities — because great engineers build for people,
              not just machines.
            </p>
          </div>

          {/* Quick facts terminal */}
          <div className="mt-8 p-4 border border-[#1a1a2e] rounded bg-[#0d0d14]">
            {[
              ["location", "Patiala, India"],
              ["institute", "TIET — B.E. Computer Engineering"],
              ["cgpa", "8.13 / 10"],
              ["focus", "Computer Vision · Federated Learning · NLP"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="terminal-line text-sm mb-1"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="text-[#44445a]">{k}</span>
                <span className="text-[#8888a8]"> = </span>
                <span className="text-[#e8e8f0]">"{v}"</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — visual card */}
        <div className="relative">
          <div className="shimmer-border rounded-xl p-8 bg-[#0d0d14]">
            <p
              className="text-[#44445a] text-xs mb-6 tracking-widest"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              // core_competencies.json
            </p>
            <div className="space-y-4">
              {[
                {
                  area: "Computer Vision",
                  tools: "YOLOv8 · Detectron2 · OpenCV",
                  pct: 88,
                },
                {
                  area: "Deep Learning",
                  tools: "TensorFlow · CNN · Transfer Learning",
                  pct: 85,
                },
                {
                  area: "Federated Learning",
                  tools: "FedAvg · Privacy-preserving ML",
                  pct: 80,
                },
                {
                  area: "Full-Stack",
                  tools: "React · Firebase · Vite",
                  pct: 78,
                },
                {
                  area: "NLP & Multimodal AI",
                  tools: "NLTK · Rule-based models",
                  pct: 72,
                },
              ].map((c) => (
                <div key={c.area}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-[#e8e8f0] font-medium">
                      {c.area}
                    </span>
                    <span
                      className="text-xs text-[#44445a]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {c.pct}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${c.pct}%` }}
                    />
                  </div>
                  <p className="text-xs text-[#44445a] mt-1">{c.tools}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Floating accent */}
          <div
            className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20 blur-xl"
            style={{ background: "var(--violet)" }}
          />
        </div>
      </div>
    </section>
  );
}
