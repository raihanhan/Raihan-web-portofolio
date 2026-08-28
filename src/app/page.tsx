import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Publication from "@/components/publication";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f7fb] text-[#102a43] scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Publication />
      <Certificates />
      <Contact />
    </main>
  );
}