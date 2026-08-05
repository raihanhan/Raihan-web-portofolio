export default function Projects() {

  const projectData = [
    {
      title: "Analisis Churn Pelanggan E-Commerce",
      description: "Menganalisis perilaku pelanggan untuk memprediksi churn menggunakan SQL dan memvisualisasikannya di Tableau. Menemukan bahwa biaya pengiriman adalah faktor utama churn.",
      tools: ["SQL", "Tableau", "Excel"],
      link: "#"
    },
    {
      title: "Optimasi Inventaris Toko Retail",
      description: "Membersihkan dan menganalisis dataset penjualan 2 tahun menggunakan Python Pandas untuk memberikan rekomendasi restock mingguan.",
      tools: ["Python", "Pandas", "Matplotlib"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200 bg-slate-50 rounded-3xl my-10">
      <h3 className="text-2xl font-bold mb-10 text-center text-slate-900">Projects</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projectData.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <h4 className="font-bold text-lg mb-2 text-slate-900">{project.title}</h4>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map((tool, idx) => (
                <span key={idx} className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {tool}
                </span>
              ))}
            </div>
            <a href={project.link} className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition underline decoration-2 decoration-blue-200 underline-offset-4">
              Baca Studi Kasus &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}