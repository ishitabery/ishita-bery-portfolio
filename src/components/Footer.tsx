export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#1a1a2e] max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="text-xs text-[#44445a]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          © {new Date().getFullYear()} Ishita Bery. Designed & built from scratch.
        </p>
        <p
          className="text-xs text-[#44445a]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className="text-[#00f5d4]">◈</span> AI/ML Engineer · Patiala, India
        </p>
      </div>
    </footer>
  );
}
