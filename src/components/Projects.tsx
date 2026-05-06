"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";

const projects = [
  {
    id: "01",
    featured: true,
    title: "Autonomous Road Damage Detection",
    subtitle: "Edge-Ready Vision Pipeline",
    description:
      "Engineered a multi-model detection system comparing YOLOv8n, Faster R-CNN (ResNet-50-FPN), and RetinaNet (ResNet-101-FPN) to identify road damage at scale. Custom dataset augmentation strategies were developed to handle thin and elongated crack structures — one of the hardest challenges in infrastructure vision.",
    impact: [
      "Multi-architecture benchmarking with mAP-driven evaluation",
      "Custom augmentation pipeline for elongated damage patterns",
      "Optimized for real-time edge deployment with low latency",
    ],
    stack: ["Python", "YOLOv8n", "Detectron2", "Faster R-CNN", "RetinaNet"],
    accent: "#00f5d4",
    link: null,
  },
  {
    id: "02",
    featured: true,
    title: "Federated Agricultural Advisory System",
    subtitle: "NIT Jalandhar Research Project",
    description:
      "Built an offline-first, multimodal AI advisory system for agricultural use-cases where connectivity is unreliable. Combined a CNN-based plant disease detector (deployed via TensorFlow Lite for on-device inference) with NLP and rule-based reasoning — all trained using FedAvg federated learning so raw farm data never leaves the device.",
    impact: [
      "TFLite on-device inference — no internet required",
      "FedAvg federated training across distributed nodes",
      "Multimodal pipeline: vision + NLP + rule-based fusion",
    ],
    stack: [
      "Python",
      "TensorFlow Lite",
      "CNN",
      "FedAvg",
      "NLP",
      "Computer Vision",
    ],
    accent: "#a855f7",
    link: null,
  },
  {
    id: "03",
    featured: false,
    title: "Brain Tumor MRI Classifier",
    subtitle: "Medical Imaging · Deep Learning",
    description:
      "Developed a 4-class CNN classifier (glioma, meningioma, pituitary, no tumor) trained on MRI datasets with rigorous preprocessing: stratified splits, normalization, and resizing. Reached 90% test accuracy with a clean training pipeline. Transfer learning fine-tuning planned as a next iteration.",
    impact: [
      "90% test accuracy across 4 tumor categories",
      "Stratified data splits for robust generalization",
      "MRI-optimized normalization pipeline",
    ],
    stack: ["Python", "TensorFlow", "CNN", "NumPy", "OpenCV"],
    accent: "#00f5d4",
    link: null,
  },
  {
    id: "04",
    featured: false,
    title: "Domus — Gated Community Platform",
    subtitle: "Full-Stack Product",
    description:
      "A real-time community management system built for residential societies. Residents log issues, track resolutions, and chat live — backed by Firebase Auth, Firestore, and role-based dashboards. Optimized for responsive performance across devices.",
    impact: [
      "Real-time sync via Firestore listeners",
      "Role-based dashboards for residents and admins",
      "Media uploads + live chat integrated",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Firebase", "Firestore"],
    accent: "#a855f7",
    link: "https://github.com/ishitabery",
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-28 bg-[#0d0d14]/60">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="animate-on-scroll mb-14">
          <p className="section-label mb-3">// featured_work</p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Projects that ship,{" "}
            <span className="text-[#00f5d4]">not just prototypes.</span>
          </h2>
        </div>

        {/* Featured large cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <ProjectCard key={p.id} project={p} large />
            ))}
        </div>

        {/* Smaller cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((p) => (
              <ProjectCard key={p.id} project={p} large={false} />
            ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project: p,
  large,
}: {
  project: (typeof projects)[0];
  large: boolean;
}) {
  return (
    <div
      className={`card-hover border border-[#1a1a2e] rounded-xl bg-[#050508] ${large ? "p-8" : "p-6"}`}
      style={{ borderColor: "#1a1a2e" }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <span
          className="text-xs tracking-widest"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: p.accent,
            opacity: 0.6,
          }}
        >
          {p.id}
        </span>
        {p.link && (
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#44445a] hover:text-[#00f5d4] transition-colors"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            view →
          </a>
        )}
      </div>

      {/* Badge */}
      <p
        className="text-xs mb-2 tracking-wider"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: p.accent,
        }}
      >
        {p.subtitle}
      </p>

      {/* Title */}
      <h3
        className={`font-bold mb-3 text-[#e8e8f0] ${large ? "text-xl" : "text-lg"}`}
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {p.title}
      </h3>

      <p className={`text-[#8888a8] leading-relaxed mb-5 ${large ? "text-sm" : "text-xs"}`}>
        {p.description}
      </p>

      {/* Impact */}
      {large && (
        <ul className="space-y-1 mb-5">
          {p.impact.map((item) => (
            <li
              key={item}
              className="text-xs text-[#8888a8] flex items-start gap-2"
            >
              <span style={{ color: p.accent }} className="mt-0.5 shrink-0">
                ▸
              </span>
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Stack */}
      <div className="flex flex-wrap gap-2">
        {p.stack.map((t) => (
          <span key={t} className="tag" style={{ borderColor: `${p.accent}30`, color: p.accent, background: `${p.accent}08` }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
