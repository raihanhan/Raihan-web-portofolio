import { DiSqllite } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { BsBarChart } from "react-icons/bs";
import { PiMicrosoftExcelLogo} from "react-icons/pi";
import { 
  SiPython, 
  SiJupyter, 
  SiStreamlit 
} from "react-icons/si";

export default function About() {

  const techStack = [
    { name: "SQL", icon: DiSqllite, color: "text-blue-500" },
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    { name: "Power BI", icon: BsBarChart, color: "text-[#F2C811]" },
    { name: "Excel", icon: PiMicrosoftExcelLogo, color: "text-[#217346]" },
    { name: "Google Data Studio" }, 
    { name: "Jupyter", icon: SiJupyter, color: "text-[#F37626]" },
    { name: "Git & GitHub", icon: FaGithub, color: "text-slate-800" },
    { name: "Streamlit", icon: SiStreamlit, color: "text-[#FF4B4B]" },
    { name: "Machine Learning" } 
  ];

  const SoftSkills = [
    "Adaptability", "Teamwork", "Problem Solving", "Decision Making", "Time Management", "Communication", "Critical Thinking", "Creativity", "Work Ethic"
  ];

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200">
      <h3 className="text-2xl font-bold mb-6 text-center text-slate-900">Summary</h3>
      <div className="text-center text-slate-600">
        <p className="max-w-3xl mx-auto mb-10 leading-relaxed">
          Informatics fresh graduate with a strong foundation in data analysis, 
          machine learning, and text analytics, 
          backed by two SINTA-indexed publications and hands-on sentiment classification projects. 
          Proficient in Python, SQL, Excel, and Power BI, with proven ability to turn raw data into actionable insights. 
          Seeking a Data Analyst role to apply analytical and technical skills to real business problems.
        </p>


        <h3 className="text-2xl font-bold mb-6 text-center text-slate-900">Hard Skills</h3>
        <div className="flex justify-center gap-3 flex-wrap">
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className="flex items-center gap-2 bg-slate-100 text-slate-800 px-4 py-2 rounded-full text-sm font-semibold border border-slate-200 shadow-sm"
            >

              {tech.icon && <tech.icon className={`w-4 h-4 ${tech.color}`} />}
              {tech.name}
            </span>
          ))}
        </div>
        
        <br />
        <br />
        

        <h3 className="text-2xl font-bold mb-6 text-center text-slate-900">Soft Skills</h3>
        <div className="flex justify-center gap-3 flex-wrap">
          {SoftSkills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-slate-100 text-slate-800 px-4 py-2 rounded-full text-sm font-semibold border border-slate-200 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}