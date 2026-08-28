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
      description: "An interactive Tableu dashboard analyzing store records to understand sales performance.",
      tools: ["Tableu", "Excel", "Data Analysis"],
      link: "https://public.tableau.com/views/GayanaraTokoFashionOnline/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      docLink: "https://github.com/raihanhan/Gayanara-Toko-Fashion-Online-"
    },
  ];

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200 bg-slate-50 rounded-3xl my-10">
      <h3 className="text-2xl font-bold mb-10 text-center text-slate-900">Projects</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projectData.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition flex flex-col">
            <h4 className="font-bold text-lg mb-2 text-slate-900">{project.title}</h4>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map((tool, idx) => (
                <span key={idx} className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {tool}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between mt-auto pt-2">
              <a href={project.link} className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition underline decoration-2 decoration-blue-200 underline-offset-4">
                Baca Studi Kasus &rarr;
              </a>
              <a href={project.docLink} className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition underline decoration-2 decoration-slate-200 hover:decoration-slate-300 underline-offset-4">
                <FaGithub className="w-5 h-5" />
                <span>Github Repo &rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}