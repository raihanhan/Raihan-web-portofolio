export default function Certificates() {
  const certificates = [
    {
      name: "Data Analytics Professional Certificate",
      issuer: "IBM",
      date: "July 2026",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/A5R30QT5GK78"
    },
    {
      name: "Excel Professional Certificate",
      issuer: "Microsoft",
      date: "August 2026",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/NVMTPX3RO63V"
    },
    {
      name: "MikroTik Certified Network Associate (MTCNA)",
      issuer: "MikroTik",
      date: "August 2024 - August 2027",
      link: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fmikrotik.com%2Ftraining%2Fcertificates%2Fc331401cc4bbadd49420&urlhash=nvN1&mt=oM3BV53sS6YbfdA55JOgNiz3ef-I6itrtn6qXFUZuwYb4xvOinbTdHCTulAeg4Tqoe7vL1uD0CtGEhokxuFZ57mGtxI&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BuHK01xiDT0Wvb2QNaWL%2BrQ%3D%3D"
    },
    {
      name: "SIB Dicoding X Kampus Merdeka Angkatan 4",
      issuer: "Dicoding",
      date: "June 2023",
      link: "https://media.licdn.com/dms/image/v2/D562DAQG6_0uKmvKwzg/profile-treasury-document-cover-images_1280/profile-treasury-document-cover-images_1280/0/1715398558690?e=1786500000&v=beta&t=45GelqzETYS9V2_cg-JCuZ4V79vjcTyNlWTTQHkjtR4"
    }
  ];

  return (
    <section id="certificates" className="max-w-6xl mx-auto px-6 py-24 border-t border-[#d6e1ee]">
      <p className="section-label mb-3 text-center">05 / Always learning</p>
      <h3 className="display-font text-4xl font-bold mb-10 text-center text-[#102a43]">Certificates & Courses</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-[#d6e1ee] flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition">
            <div>
              <h4 className="font-bold text-lg text-slate-900 mb-1">{cert.name}</h4>
              <p className="text-[#1d4ed8] font-medium mb-4">{cert.issuer}</p>
            </div>
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-100">
              <span className="text-sm text-slate-500">{cert.date}</span>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition underline decoration-2 decoration-blue-200 underline-offset-4"
              >
                View Credentials &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}