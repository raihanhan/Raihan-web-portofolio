const publications = [
  {
    title: "Sentiment Analysis Model for VTuber Live Stream Chat using Decision Tree and Support Vector Machine",
    authors: "H. Yuliansyah, H.A. Raihan, Murinto",
    venue: "Journal of Innovation Information Technology and Application (JINITA)",
    year: "2025",
    type: "Journal Paper",
    description: {
      background:
        "The short, informal, and unstructured nature of Virtual YouTuber (VTuber) live chat makes sentiment analysis challenging, and studies comparing Decision Tree (DT) and Support Vector Machine (SVM) algorithms in this domain remain limited.",
      objective:
        "To propose an optimal sentiment analysis model for VTuber live chat by comparing the performance of DT and SVM.",
      method:
        "Live chat data underwent preprocessing and was labeled as positive, neutral, or negative using VADER and AFINN lexicons. The models used TF-IDF for feature extraction and were evaluated via K-Fold cross-validation and a confusion matrix.",
      results:
        "A 10-fold cross-validation evaluation showed that the DT + AFINN combination with hyperparameter optimization achieved the highest accuracy of 96.26%.",
      conclusion:
        "The combination of DT and AFINN is superior in analyzing VTuber live chat sentiment compared to DT+VADER, SVM+AFINN, and SVM+VADER.",
    },
    link: "https://ejournal.pnc.ac.id/index.php/jinita/article/view/2872/1026",
  },
  {
    title: "Model Klasifikasi Emosi Berbasis Teks dengan Algoritma Decision Tree dan Support Vector Machine",
    authors: "H.A. Raihan, H. Yuliansyah, Murinto",
    venue: "Jurnal Informatika dan Rekayasa Perangkat Lunak (JINRPL)",
    year: "2025",
    type: "Journal Paper",
    description: {
      background:
        "Previous studies on text-based emotion classification face overfitting risks due to dataset diversity, highlighting the need for cross-validation and hyperparameter optimization to ensure model generalization.",
      objective:
        "Comparing the performance of Decision Tree (DT) and Support Vector Machine (SVM) for emotion classification using an English text dataset of 16,000 labeled data points.",
      method:
        "The data undergoes preprocessing (cleaning, tokenization, stopword removal, lemmatization) and feature extraction using TF-IDF. The models are evaluated using K-Fold and Stratified K-Fold cross-validation to measure accuracy, precision, recall, and F1-score.",
      results:
        "SVM with hyperparameter optimization achieves an average accuracy of 89%, outperforming DT which achieves 88%. Additionally, Stratified K-Fold evaluation yields very low accuracy variance (0.02% for DT and 0.15% for SVM).",
      conclusion:
        "Stratified K-Fold cross-validation performs better on imbalanced datasets compared to standard K-Fold, and SVM with optimized hyperparameters outperforms DT in emotion classification.",
    },
    link: "https://publikasiilmiah.unwahas.ac.id/JINRPL/article/view/12727/6525",
  },
];

export default function Publication() {
  return (
    <section
      id="publication"
      className="mx-auto max-w-6xl border-t border-[#d6e1ee] px-6 py-24 dark:border-slate-800"
    >
      <p className="section-label mb-3 text-center">04 / Research</p>
      <h3 className="display-font mb-10 text-center text-4xl font-bold text-[#102a43] dark:text-slate-100">
        Publications
      </h3>

      <div className="grid gap-6 md:grid-cols-2">
        {publications.map((publication) => (
          <article
            key={publication.title}
            className="flex flex-col rounded-2xl border border-[#d6e1ee] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:shadow-none"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="rounded-full bg-[#e6eefb] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1d4ed8] dark:bg-slate-800 dark:text-blue-300">
                {publication.type}
              </span>
              <span className="font-mono text-sm font-semibold text-[#52677d] dark:text-slate-300">
                {publication.year}
              </span>
            </div>

            <h4 className="text-xl font-bold leading-snug text-[#102a43] dark:text-slate-100">
              {publication.title}
            </h4>
            <p className="mt-3 text-sm font-semibold text-[#1d4ed8] dark:text-blue-300">
              {publication.authors}
            </p>
            <p className="mt-1 text-sm text-[#52677d] dark:text-slate-300">{publication.venue}</p>
            <ul className="mt-5 flex-1 space-y-3 text-sm leading-6 text-[#52677d] dark:text-slate-300">
              {Object.entries(publication.description).map(([label, text]) => (
                <li key={label} className="border-l-2 border-[#9cc9f5] pl-3 dark:border-blue-500/40">
                  <span className="font-bold capitalize text-[#102a43] dark:text-slate-100">
                    {label}:
                  </span>{" "}
                  {text}
                </li>
              ))}
            </ul>

            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-fit text-sm font-bold text-[#102a43] underline decoration-[#1d4ed8] decoration-2 underline-offset-8 transition hover:text-[#1d4ed8] dark:text-slate-100 dark:hover:text-blue-300"
            >
              Read publication <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
