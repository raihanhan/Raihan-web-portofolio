export default function Education() {
  const educationData = [
    {
      degree: "Master of Information Technology",
      institution: "Universitas Ahmad Dahlan",
      year: "2024 - 2026",
      gpa: "3.95 / 4.00",
      concentration: "Data Science and Machine Learning",
      thesis: "Emotion and Sentiment Classification For Live Chat Using Support Vector Machine and Decision Tree"
    },
    {
      degree: "Bachelor of Information Technology",
      institution: "STMIK El Rahma Yogyakarta",
      year: "2020 - 2024",
      gpa: "3.61 / 4.00",
      concentration: "Full-Stack Web Development and Computer Network",
      thesis: "Developing a Paid Live Video Streaming Application for Indonesian Music Concerts Using Progressive Web Apps"
    }
  ];

  return (
    <section id="education" className="my-10 mx-auto max-w-6xl rounded-3xl border-t border-[#d6e1ee] bg-white px-6 py-24 dark:border-slate-800 dark:bg-slate-900">
      <p className="section-label mb-3 text-center">04 / Foundations</p>
      <h3 className="display-font mb-10 text-center text-4xl font-bold text-[#102a43] dark:text-slate-100">Education</h3>
      
      <div className="grid grid-cols-1 gap-6">
        {educationData.map((edu, index) => (
          <div key={index} className="rounded-2xl border border-[#d6e1ee] bg-[#f4f7fb] p-8 shadow-sm dark:border-slate-700 dark:bg-slate-950/60">
            <div className="mb-2 flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">{edu.degree}</h4>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-300">{edu.institution}</p>
              </div>
              <span className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400 md:mt-0">
                {edu.year}
              </span>
            </div>
            <div className="mt-6 grid gap-4 border-t border-[#d6e1ee] pt-5 md:grid-cols-[0.7fr_1fr] dark:border-slate-700">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1d4ed8] dark:text-blue-300">GPA</p>
                <p className="mt-1 text-sm font-semibold text-[#102a43] dark:text-slate-100">{edu.gpa}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1d4ed8] dark:text-blue-300">Concentration</p>
                <p className="mt-1 text-sm leading-6 text-[#52677d] dark:text-slate-300">{edu.concentration}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-xs font-bold uppercase tracking-widest text-[#1d4ed8] dark:text-blue-300">Thesis</p>
                <p className="mt-1 text-sm leading-6 text-[#52677d] dark:text-slate-300">{edu.thesis}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}