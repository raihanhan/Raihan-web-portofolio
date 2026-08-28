import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#f4f7fb]/85 backdrop-blur-md border-b border-[#d6e1ee] z-50">
      <div className="max-w-6xl mx-auto px-6 h-18 flex justify-between items-center">
        <Link href="#hero" className="display-font text-xl font-bold tracking-tight text-[#102a43]">
          Raihan<span className="text-[#1d4ed8]">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-[0.12em] text-[#647574]">
          <Link href="#about" className="hover:text-[#1d4ed8] transition">About</Link>
          <Link href="#experience" className="hover:text-[#1d4ed8] transition">Experience</Link>
          <Link href="#projects" className="hover:text-[#1d4ed8] transition">Projects</Link>
          <Link href="#contact" className="rounded-full bg-[#102a43] px-4 py-2 text-white hover:bg-[#1d4ed8] transition">Let&apos;s talk</Link>
        </div>
      </div>
    </nav>
  );
}