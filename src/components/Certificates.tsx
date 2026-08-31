export default function Certificates() {
  const certificates = [
    {
      name: "Google IT Support Professional Certificate",
      issuer: "Google",
      date: "August 2026",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/Y58M9TTW3Z8Q"
    },
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
    <section id="certificates" className="mx-auto max-w-6xl border-t border-[#d6e1ee] px-6 py-24 dark:border-slate-800">
      <p className="section-label mb-3 text-center">05 / Always learning</p>
      <h3 className="display-font mb-10 text-center text-4xl font-bold text-[#102a43] dark:text-slate-100">Certificates & Courses</h3>
      
      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <div key={index} className="flex flex-col justify-between rounded-2xl border border-[#d6e1ee] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
            <div>
              <h4 className="mb-1 text-lg font-bold text-slate-900 dark:text-slate-100">{cert.name}</h4>
              <p className="mb-4 font-medium text-[#1d4ed8] dark:text-blue-300">{cert.issuer}</p>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-700">
              <span className="text-sm text-slate-500 dark:text-slate-300">{cert.date}</span>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-semibold text-slate-900 underline decoration-2 decoration-blue-200 underline-offset-4 transition hover:text-blue-600 dark:text-slate-100 dark:decoration-blue-400"
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