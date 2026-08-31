import {FaGithub } from "react-icons/fa";
export default function Projects() {

  const projectData = [
    {
      title: "e-Commerce Customer Churn Analysis Dashboard",
      description: "An interactive Streamlit dashboard analyzing 200,000 e-commerce customer records to understand churn behavior, identify the strongest churn drivers, and predict churn risk for individual customers.",
      tools: ["Streamlit", "Python", "Pandas", "Scikit-learn", "Plotly", "Decision Tree"],
      link: "https://ecommerce-customer-churn-dashboard.streamlit.app/",
      docLink: "https://github.com/raihanhan/E-Commerce-Customer-Churn-Dashboard"
    },
    {
      title: "Gayanara: Toko Fashion Online Dashboard",
      description: "An interactive Tableau dashboard analyzing store records to understand sales performance.",
      tools: ["Tableau", "Excel", "Data Analysis"],
      link: "https://public.tableau.com/views/GayanaraTokoFashionOnline/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      docLink: "https://github.com/raihanhan/Gayanara-Toko-Fashion-Online-"
    },
    {
      title: "Windows Diagnostic Mini Toolkit",
      description: "A single menu-driven PowerShell script for diagnosing and fixing common Windows issues. Instead of separate scripts per problem domain, everything lives in one file with a category-based menu pick a category, then pick an action.",
      tools: ["PowerShell"],
      link: "https://github.com/raihanhan/Windows-Diagnostics-MiniToolkit",
      docLink: "https://github.com/raihanhan/Windows-Diagnostics-MiniToolkit"
    }
  ];

  return (
    <section id="projects" className="my-10 mx-auto max-w-6xl rounded-3xl border-t border-[#d6e1ee] bg-[#e6eefb] px-6 py-24 dark:border-slate-800 dark:bg-slate-900/80">
      <p className="section-label mb-3 text-center">03 / Selected work</p>
      <h3 className="display-font mb-10 text-center text-4xl font-bold text-[#102a43] dark:text-slate-100">Projects</h3>
      
      <div className="grid gap-6 md:grid-cols-2">
        {projectData.map((project, index) => (
          <div key={index} className="flex flex-col rounded-2xl border border-[#d6e1ee] bg-[#f4f7fb] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
            <h4 className="mb-2 text-lg font-bold text-slate-900 dark:text-slate-100">{project.title}</h4>
            <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span key={idx} className="rounded bg-[#d6e1ee] px-2 py-1 text-xs font-semibold text-[#1d4ed8] dark:bg-slate-800 dark:text-blue-300">
                  {tool}
                </span>
              ))}
            </div>
            <div className="mt-auto flex items-center justify-between pt-2">
              <a href={project.link} className="text-sm font-semibold text-slate-900 underline decoration-2 decoration-blue-200 underline-offset-4 transition hover:text-blue-600 dark:text-slate-100 dark:decoration-blue-400">
                More &rarr;
              </a>
              <a href={project.docLink} className="flex items-center gap-2 text-sm font-semibold text-slate-600 underline decoration-2 decoration-slate-200 underline-offset-4 transition hover:text-slate-900 hover:decoration-slate-300 dark:text-slate-300 dark:hover:text-slate-100">
                <FaGithub className="h-5 w-5" />
                <span>Repo &rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}