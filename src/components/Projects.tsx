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
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-[#d6e1ee] bg-[#e6eefb] rounded-3xl my-10">
      <p className="section-label mb-3 text-center">03 / Selected work</p>
      <h3 className="display-font text-4xl font-bold mb-10 text-center text-[#102a43]">Projects</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projectData.map((project, index) => (
          <div key={index} className="bg-[#f4f7fb] p-6 rounded-2xl shadow-sm border border-[#d6e1ee] hover:-translate-y-1 hover:shadow-lg transition flex flex-col">
            <h4 className="font-bold text-lg mb-2 text-slate-900">{project.title}</h4>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map((tool, idx) => (
                <span key={idx} className="text-xs font-semibold text-[#1d4ed8] bg-[#d6e1ee] px-2 py-1 rounded">
                  {tool}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between mt-auto pt-2">
              <a href={project.link} className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition underline decoration-2 decoration-blue-200 underline-offset-4">
                More &rarr;
              </a>
              <a href={project.docLink} className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition underline decoration-2 decoration-slate-200 hover:decoration-slate-300 underline-offset-4">
                <FaGithub className="w-5 h-5" />
                <span>Repo &rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}