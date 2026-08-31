import { DiSqllite } from "react-icons/di";
import { 
  FaGithub,
  FaNetworkWired,
 } from "react-icons/fa";
import { PiMicrosoftExcelLogo,
         PiMicrosoftWordLogoFill
} from "react-icons/pi";
import { 
  IoLogoTableau,
  IoHardwareChip
 } from "react-icons/io5";
import { 
  SiPython, 
  SiJupyter, 
  SiStreamlit,
  SiGoogledataproc
} from "react-icons/si";
import { CgSoftwareDownload } from "react-icons/cg";
export default function About() {

  const dataAnalystSkills = [
    { name: "SQL", icon: DiSqllite, color: "text-blue-500" },
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    { name: "Tableau", icon: IoLogoTableau, color: "text-[#217346]" },
    { name: "Excel", icon: PiMicrosoftExcelLogo, color: "text-[#217346]" },
    { name: "Jupyter", icon: SiJupyter, color: "text-[#F37626]" },
    { name: "Streamlit", icon: SiStreamlit, color: "text-[#FF4B4B]" },
    { name: "Google Data Studio", icon: SiGoogledataproc, color: "text-[#4285F4]" },
    { name: "Data Cleaning" },
    { name: "Dashboarding" }
  ];

  const itSupportSkills = [
    { name: "Windows OS", icon: PiMicrosoftWordLogoFill, color: "text-[#2B579A]" },
    { name: "Computer Networking", icon: FaNetworkWired, color: "text-[#217346]" },
    { name: "Hardware Troubleshooting", icon: IoHardwareChip, color: "text-[#217346]" },
    { name: "Software Installation", icon: CgSoftwareDownload, color: "text-[#217346]" },
    { name: "Git & GitHub", icon: FaGithub, color: "text-slate-800 dark:text-slate-200" },
    { name: "Basic Network Support" },
    { name: "User Support" },
    { name: "Documentation" }
  ];

  const SoftSkills = [
    "Adaptability", "Teamwork", "Problem Solving", "Decision Making", "Time Management", "Communication", "Critical Thinking", "Creativity", "Work Ethic"
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl border-t border-[#d6e1ee] px-6 py-24 dark:border-slate-800">
      <p className="section-label mb-3 text-center">01 / The toolkit</p>
      <h3 className="display-font mb-6 text-center text-4xl font-bold text-[#102a43] dark:text-slate-100">Curious by nature,<br/>rigorous by practice.</h3>
      <div className="text-center text-[#647574] dark:text-slate-300">
        <p className="mx-auto mb-10 max-w-3xl leading-relaxed">
          Informatics fresh graduate with a strong foundation in data analysis, technical problem solving, and digital tools that support decision-making and operational efficiency.
          With experience in data processing, dashboarding, and analytical projects, I am interested in roles that combine data-driven thinking with practical IT support and process improvement.
          I am open to opportunities in Data Analyst, IT Support, or positions where technical support and analytical insight work together.
        </p>

        <div className="space-y-10">
          <div>
            <h3 className="mb-6 text-center text-xs font-bold uppercase tracking-[0.14em] text-[#1d4ed8] dark:text-blue-400">Data Analyst Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {dataAnalystSkills.map((tech, index) => (
                <span 
                  key={`data-${index}`} 
                  className="flex items-center gap-2 rounded-full border border-[#d6e1ee] bg-white px-4 py-2 text-sm font-semibold text-[#102a43] shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                >
                  {tech.icon && <tech.icon className={`h-4 w-4 ${tech.color}`} />}
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-center text-xs font-bold uppercase tracking-[0.14em] text-[#1d4ed8] dark:text-blue-400">IT Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {itSupportSkills.map((tech, index) => (
                <span 
                  key={`it-${index}`} 
                  className="flex items-center gap-2 rounded-full border border-[#d6e1ee] bg-[#eef5ff] px-4 py-2 text-sm font-semibold text-[#102a43] shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                >
                  {tech.icon && <tech.icon className={`h-4 w-4 ${tech.color}`} />}
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <br />
        <br />
        

        <h3 className="mb-6 text-center text-xs font-bold uppercase tracking-[0.14em] text-[#1d4ed8] dark:text-blue-400">Soft Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {SoftSkills.map((skill, index) => (
            <span 
              key={index} 
              className="rounded-full border border-[#d6e1ee] bg-[#e6eefb] px-4 py-2 text-sm font-semibold text-[#102a43] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
