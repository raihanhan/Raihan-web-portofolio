export default function Experience() {
  const experiences = [
    {
      role: "IT Intern",
      company: "SMAN 7 Yogyakarta",
      duration: "July - August 2023",
      description: [
        "Installed, configured, & maintained 20+ PCs and lab equipment with a 95% uptime rate.",
        "Provided quick hardware/software troubleshooting to support smooth ICT learning. Ensured the lab's operational readiness before and after practical sessions.",
        "Managed and recorded grading data for 100+ students using Excel to support the supervising teacher's administration.",
        "Compiled periodic lab asset inventory reports with 100% accuracy.",
        "Compiled and presented a comprehensive Field Work Practice Report as the final documentation of the internship project."
      ]
    }
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24 border-t border-[#d6e1ee]">
      <p className="section-label mb-3 text-center">02 / In the field</p>
      <h3 className="display-font text-4xl font-bold mb-10 text-center text-[#102a43]">Experience</h3>
      
      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-[#d6e1ee] hover:-translate-y-1 hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                <p className="text-lg text-[#1d4ed8] font-medium">{exp.company}</p>
              </div>
              <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                {exp.duration}
              </span>
            </div>
            <ul className="list-disc list-outside ml-5 text-slate-600 space-y-2">
              {exp.description.map((item, idx) => (
                <li key={idx} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}