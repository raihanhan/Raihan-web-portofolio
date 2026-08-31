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
    <section id="experience" className="mx-auto max-w-6xl border-t border-[#d6e1ee] px-6 py-24 dark:border-slate-800">
      <p className="section-label mb-3 text-center">02 / In the field</p>
      <h3 className="display-font mb-10 text-center text-4xl font-bold text-[#102a43] dark:text-slate-100">Experience</h3>
      
      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div key={index} className="rounded-2xl border border-[#d6e1ee] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">{exp.role}</h4>
                <p className="text-lg font-medium text-[#1d4ed8] dark:text-blue-300">{exp.company}</p>
              </div>
              <span className="mt-2 w-fit rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-300 md:mt-0">
                {exp.duration}
              </span>
            </div>
            <ul className="ml-5 list-disc list-outside space-y-2 text-slate-600 dark:text-slate-300">
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