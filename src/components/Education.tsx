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
    <section id="education" className="max-w-6xl mx-auto px-6 py-24 border-t border-[#d6e1ee] bg-white rounded-3xl my-10">
      <p className="section-label mb-3 text-center">04 / Foundations</p>
      <h3 className="display-font text-4xl font-bold mb-10 text-center text-[#102a43]">Education</h3>
      
      <div className="grid grid-cols-1 gap-6">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-[#f4f7fb] p-8 rounded-2xl shadow-sm border border-[#d6e1ee]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h4 className="text-xl font-bold text-slate-900">{edu.degree}</h4>
                <p className="text-lg text-slate-700 font-medium">{edu.institution}</p>
              </div>
              <span className="text-sm font-semibold text-slate-500 mt-2 md:mt-0">
                {edu.year}
              </span>
            </div>
            <div className="mt-6 grid gap-4 border-t border-[#d6e1ee] pt-5 md:grid-cols-[0.7fr_1fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1d4ed8]">GPA</p>
                <p className="mt-1 text-sm font-semibold text-[#102a43]">{edu.gpa}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1d4ed8]">Concentration</p>
                <p className="mt-1 text-sm leading-6 text-[#52677d]">{edu.concentration}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-xs font-bold uppercase tracking-widest text-[#1d4ed8]">Thesis</p>
                <p className="mt-1 text-sm leading-6 text-[#52677d]">{edu.thesis}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}