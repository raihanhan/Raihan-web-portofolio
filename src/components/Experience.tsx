export default function Experience() {
  const experiences = [
    {
      role: "It Support",
      company: "SMAN 7 Yogyakarta",
      duration: "July - August 2023",
      description: [
        "Managed and configured computer network labs supporting ±100 students during practicum sessions.",
        "Performed routine troubleshooting that improved lab uptime to near 100%, ensuring smooth learning activities."
      ]
    }
  ];

  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200">
      <h3 className="text-2xl font-bold mb-10 text-center text-slate-900">Experience</h3>
      
      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
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