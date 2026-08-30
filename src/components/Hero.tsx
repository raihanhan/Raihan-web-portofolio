import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative max-w-6xl mx-auto px-6 pt-36 pb-28 md:pt-44 md:pb-36">
      <div className="dot-grid absolute -right-20 top-28 h-44 w-44 rounded-full opacity-60" aria-hidden="true" />
      <div className="absolute left-0 top-40 h-24 w-1 bg-[#1d4ed8]" aria-hidden="true" />

      <div className="relative z-10 grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-3xl">
          <p className="section-label mb-6">Open to work</p>
          <h1 className="display-font max-w-3xl text-5xl font-bold leading-[0.95] text-[#102a43] md:text-7xl">
            welcome <span className="text-[#1d4ed8]">traveler.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#647574] md:text-lg">
            Hi, I&apos;m <strong className="text-[#102a43]">Raihan</strong> a master's degree holder in Information Technology, passionate about turning data into insight and keeping systems running smoothly. My interests span data analysis, machine learning, and IT support/networking.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="/CV.pdf" download className="inline-flex items-center gap-3 rounded-full bg-[#1d4ed8] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(29,78,216,0.25)] transition hover:-translate-y-0.5 hover:bg-[#102a43]">
              Download resume <span aria-hidden="true">↓</span>
            </a>
            <a href="#projects" className="text-sm font-bold text-[#102a43] underline decoration-[#1d4ed8] decoration-2 underline-offset-8 hover:text-[#1d4ed8] transition">
              Explore my work <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs md:justify-self-end">
          <div className="absolute -inset-4 rounded-4xl border border-[#9cc9f5] rotate-6" aria-hidden="true" />
          <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-[#d6e1ee] shadow-[12px_12px_0_#1d4ed8]">
        <Image 
        src="/profile.jpg"
        alt="Foto Profil Saya"
        fill
        className="object-cover grayscale-35 transition duration-500 hover:grayscale-0"
        sizes="(max-width: 768px) 320px, 360px" 
        priority 
        />
          </div>
          <p className="absolute -bottom-9 -left-8 rotate-[-8deg] font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#1d4ed8]">Kebumen, Central Java</p>
        </div>
      </div>
    </section>
  );
}
