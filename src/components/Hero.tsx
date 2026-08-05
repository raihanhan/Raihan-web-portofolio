import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="max-w-4xl mx-auto px-6 pt-40 pb-24 flex flex-col items-center text-center">
      

      <div className="relative w-28 h-28 mb-8 rounded-full overflow-hidden border border-slate-200 shadow-sm">
        <Image 
        src="/profile.jpg"
        alt="Foto Profil Saya"
        fill
        className="object-cover grayscale hover:grayscale-0 transition duration-500"
        sizes="(max-width: 768px) 112px, 112px" 
        priority 
        />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
        Hi! I&apos;am <span className="text-blue-600">Raihan</span>
      </h2>
      <p className="text-base md:text-lg text-slate-500 max-w-xl mb-8 leading-relaxed font-normal">
        a Fresh Graduate Master of Information Technology with a passion for machine learning, data analysis and visualization.
      </p>
        <a 
          href="/CV.pdf" 
          download 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block shadow-md"
          >
            Download Resume
        </a>
    </section>
  );
}