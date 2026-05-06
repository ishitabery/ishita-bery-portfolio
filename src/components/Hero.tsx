"use client";
import { useEffect, useRef, useState } from "react";

const roles = [
  "AI / ML Engineer",
  "Computer Vision Specialist",
  "Deep Learning Engineer",
  "Research Practitioner",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 30);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Radial violet glow behind */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

      {/* Cyan blob bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(0,245,212,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Animated node dots */}
      <NetworkDots />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status chip */}
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-[#00f5d4]/20 bg-[#00f5d4]/5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f5d4] animate-pulse-slow" />
          <span
            className="text-[#00f5d4] text-xs tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            background:
              "linear-gradient(135deg, #e8e8f0 0%, #a0a0c0 50%, #e8e8f0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Ishita Bery
        </h1>

        {/* Typewriter role */}
        <div
          className="text-xl md:text-2xl mb-6 h-8 flex items-center justify-center"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className="text-[#00f5d4]">{displayed}</span>
          <span className="ml-0.5 w-0.5 h-5 bg-[#00f5d4] inline-block animate-[blink_1s_step-end_infinite]" />
        </div>

        {/* Tagline */}
        <p className="text-[#8888a8] text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Building intelligent systems that see, learn, and adapt — from
          edge-deployed vision models to privacy-preserving federated pipelines.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#00f5d4] text-[#050508] font-semibold text-sm rounded hover:bg-[#00c4aa] transition-all glow-cyan"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            View My Work
          </a>
          <a
            href="https://github.com/ishitabery"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[#1a1a2e] text-[#8888a8] text-sm rounded hover:border-[#00f5d4]/30 hover:text-[#00f5d4] transition-all"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            GitHub →
          </a>
        </div>

        {/* Mini stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 border-t border-[#1a1a2e] pt-10">
          {[
            { val: "3+", label: "ML Projects Shipped" },
            { val: "90%", label: "Peak Model Accuracy" },
            { val: "1500+", label: "Event Participants Led" },
            { val: "Top 1500", label: "Google Big Code '26" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-2xl font-bold text-[#00f5d4]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {s.val}
              </div>
              <div
                className="text-xs text-[#44445a] mt-1 tracking-wide"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span
          className="text-[10px] tracking-widest text-[#8888a8]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#8888a8] to-transparent" />
      </div>
    </section>
  );
}

function NetworkDots() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[
        [120, 200],
        [80, 500],
        [250, 380],
        [400, 150],
        [600, 300],
        [750, 500],
        [900, 200],
        [1100, 400],
        [1200, 150],
        [300, 600],
        [950, 600],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="2"
          fill="#00f5d4"
          opacity={0.4 + (i % 3) * 0.2}
        />
      ))}
      {[
        [120, 200, 250, 380],
        [250, 380, 400, 150],
        [400, 150, 600, 300],
        [600, 300, 750, 500],
        [750, 500, 900, 200],
        [900, 200, 1100, 400],
        [80, 500, 250, 380],
        [300, 600, 250, 380],
        [950, 600, 1100, 400],
        [1100, 400, 1200, 150],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#00f5d4"
          strokeWidth="0.5"
          opacity="0.2"
        />
      ))}
    </svg>
  );
}
