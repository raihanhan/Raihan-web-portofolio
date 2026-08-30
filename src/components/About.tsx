import { DiSqllite } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { PiMicrosoftExcelLogo,
         PiMicrosoftWordLogoFill
} from "react-icons/pi";
import { IoLogoTableau } from "react-icons/io5";
import { 
  SiPython, 
  SiJupyter, 
  SiStreamlit 
} from "react-icons/si";

export default function About() {

  const techStack = [
    { name: "SQL", icon: DiSqllite, color: "text-blue-500" },
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    { name: "Tableau", icon: IoLogoTableau, color: "text-[#217346]" },
    { name: "Excel", icon: PiMicrosoftExcelLogo, color: "text-[#217346]" },
    { name: "Word", icon: PiMicrosoftWordLogoFill, color: "text-[#2B579A]" },
    { name: "Jupyter", icon: SiJupyter, color: "text-[#F37626]" },
    { name: "Git & GitHub", icon: FaGithub, color: "text-slate-800" },
    { name: "Streamlit", icon: SiStreamlit, color: "text-[#FF4B4B]" },
    { name: "Google Data Studio" }, 
    { name: "Machine Learning" } 
  ];

  const SoftSkills = [
    "Adaptability", "Teamwork", "Problem Solving", "Decision Making", "Time Management", "Communication", "Critical Thinking", "Creativity", "Work Ethic"
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 border-t border-[#d6e1ee]">
      <p className="section-label mb-3 text-center">01 / The toolkit</p>
      <h3 className="display-font text-4xl font-bold mb-6 text-center text-[#102a43]">Curious by nature,<br />rigorous by practice.</h3>
      <div className="text-center text-[#647574]">
        <p className="max-w-3xl mx-auto mb-10 leading-relaxed">
         Focus on building a career foundation in the field of technology, 
         with an interest in data analysis and systems/network support, 
         two areas that both rely on systematic thinking to solve problems.
        </p>


        <h3 className="text-xs font-bold uppercase tracking-[0.14em] mb-6 text-center text-[#1d4ed8]">Hard Skills</h3>
        <div className="flex justify-center gap-3 flex-wrap">
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className="flex items-center gap-2 bg-white text-[#102a43] px-4 py-2 rounded-full text-sm font-semibold border border-[#d6e1ee] shadow-sm"
            >

              {tech.icon && <tech.icon className={`w-4 h-4 ${tech.color}`} />}
              {tech.name}
            </span>
          ))}
        </div>
        
        <br />
        <br />
        

        <h3 className="text-xs font-bold uppercase tracking-[0.14em] mb-6 text-center text-[#1d4ed8]">Soft Skills</h3>
        <div className="flex justify-center gap-3 flex-wrap">
          {SoftSkills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-[#e6eefb] text-[#102a43] px-4 py-2 rounded-full text-sm font-semibold border border-[#d6e1ee]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
