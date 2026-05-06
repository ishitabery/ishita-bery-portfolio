"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-28 bg-[#0d0d14]/60">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div ref={ref} className="animate-on-scroll">
          <p className="section-label mb-4">// get_in_touch</p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Let's build something{" "}
            <span className="text-[#00f5d4]">remarkable.</span>
          </h2>
          <p className="text-[#8888a8] mb-12 leading-relaxed max-w-lg mx-auto">
            I'm open to research collaborations, internship opportunities, and
            interesting ML problems. If you're working on something challenging
            — let's talk.
          </p>

          {/* Primary CTA */}
          <a
            href="mailto:ishitabery22@gmail.com"
            className="inline-block px-8 py-4 bg-[#00f5d4] text-[#050508] font-semibold rounded-lg hover:bg-[#00c4aa] transition-all glow-cyan mb-10"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            ishitabery22@gmail.com
          </a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6 pt-8 border-t border-[#1a1a2e]">
            {[
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/ishita-bery",
                icon: "in",
              },
              {
                label: "GitHub",
                href: "https://github.com/ishitabery",
                icon: "gh",
              },
              {
                label: "Phone",
                href: "tel:+919956394622",
                icon: "☎",
              },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#8888a8] hover:text-[#00f5d4] transition-colors text-sm"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="w-7 h-7 flex items-center justify-center border border-[#1a1a2e] rounded text-xs hover:border-[#00f5d4]/30 transition-colors">
                  {l.icon}
                </span>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
