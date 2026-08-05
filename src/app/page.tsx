import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
    </main>
  );
}