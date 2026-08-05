import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
      <div className="max-w-4xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link href="#hero" className="font-semibold text-base tracking-tight text-slate-900">
          Raihan<span className="text-slate-400">.</span>
        </Link>
      </div>
    </nav>
  );
}