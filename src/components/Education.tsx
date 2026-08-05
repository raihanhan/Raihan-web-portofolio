export default function Education() {
  const educationData = [
    {
      degree: "Master of Information Technology",
      institution: "Universitas Ahmad Dahlan",
      year: "2024 - 2026",
      details: "IPK: 3.95. Concentration in Data Science and Machine Learning."
    },
    {
      degree: "Bachelor of Information Technology",
      institution: "STMIK El Rahma Yogyakarta",
      year: "2020 - 2024",
      details: "IPK: 3.61. Concentration in Full-Stack Web Development and Data Mining."
    }
  ];

  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200 bg-slate-50 rounded-3xl my-10">
      <h3 className="text-2xl font-bold mb-10 text-center text-slate-900">Education</h3>
      
      <div className="grid grid-cols-1 gap-6">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h4 className="text-xl font-bold text-slate-900">{edu.degree}</h4>
                <p className="text-lg text-slate-700 font-medium">{edu.institution}</p>
              </div>
              <span className="text-sm font-semibold text-slate-500 mt-2 md:mt-0">
                {edu.year}
              </span>
            </div>
            <p className="text-slate-600 mt-4 leading-relaxed">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}