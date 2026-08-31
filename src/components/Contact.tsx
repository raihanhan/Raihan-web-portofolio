"use client";

import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contact() {

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {

      const response = await fetch("https://formspree.io/f/myeggakz", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset(); 
      } else {
        setStatus("error");
      }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <p className="section-label mb-3 text-center">06 / Start a conversation</p>
      <h3 className="display-font mb-12 text-center text-4xl font-bold text-[#102a43] dark:text-slate-100">Let&apos;s connect and build practical solutions.</h3>

      <div className="grid items-stretch gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative overflow-hidden rounded-[28px] border border-[#d6e1ee] bg-white p-7 shadow-[0_20px_40px_rgba(15,23,42,0.06)] dark:border-slate-700 dark:bg-slate-900/90 dark:shadow-none md:p-8">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100/80 blur-2xl dark:bg-blue-500/10" aria-hidden="true" />
          <div className="relative">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">Send a Message</h4>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200">
                Reply fast
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-blue-500 dark:focus:bg-slate-900 dark:focus:ring-blue-500/20"
                    placeholder="Your Name"
                    disabled={status === "loading"}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-blue-500 dark:focus:bg-slate-900 dark:focus:ring-blue-500/20"
                    placeholder="Your Email"
                    disabled={status === "loading"}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="_subject"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-blue-500 dark:focus:bg-slate-900 dark:focus:ring-blue-500/20"
                  placeholder="Example: Job Opportunity / Internship / Collaboration"
                  disabled={status === "loading"}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-800 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-400 dark:focus:border-blue-500 dark:focus:bg-slate-900 dark:focus:ring-blue-500/20"
                  placeholder="Hello, I'm interested in discussing..."
                  disabled={status === "loading"}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full rounded-xl px-6 py-3.5 font-semibold text-white transition-all shadow-[0_12px_24px_rgba(29,78,216,0.2)] ${
                  status === "loading" ? "cursor-not-allowed bg-slate-400" : "bg-[#1d4ed8] hover:-translate-y-0.5 hover:bg-[#102a43]"
                }`}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="mt-2 text-center text-sm font-medium text-green-600 dark:text-green-400">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="mt-2 text-center text-sm font-medium text-red-600 dark:text-red-400">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-[28px] border border-[#d6e1ee] bg-linear-to-br from-[#f4f7fb] via-white to-[#edf5ff] p-7 shadow-[0_20px_40px_rgba(15,23,42,0.05)] dark:border-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 dark:shadow-none md:p-8">
          <div className="absolute -left-12 -bottom-12 h-28 w-28 rounded-full bg-[#dbeafe]/80 blur-2xl dark:bg-blue-500/10" aria-hidden="true" />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">Connect here</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                I&apos;m open to opportunities in data, IT support, and problem-solving roles where technical skills and business understanding work together.
              </p>
            </div>

            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/habib-aulia-raihan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-[#d6e1ee] bg-white p-3 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e6eefb] text-[#1d4ed8] transition group-hover:bg-[#1d4ed8] group-hover:text-white dark:bg-slate-800 dark:text-blue-300 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
                    <FaLinkedin className="h-5 w-5" />
                  </span>
                  <span className="font-medium">LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/raihanhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-[#d6e1ee] bg-white p-3 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:group-hover:bg-slate-100 dark:group-hover:text-slate-900">
                    <FaGithub className="h-5 w-5" />
                  </span>
                  <span className="font-medium">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281329679207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-[#d6e1ee] bg-white p-3 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-green-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-green-500/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-green-500 transition group-hover:bg-green-500 group-hover:text-white dark:bg-green-500/10 dark:text-green-300 dark:group-hover:bg-green-500 dark:group-hover:text-white">
                    <FaWhatsapp className="h-5 w-5" />
                  </span>
                  <span className="font-medium">WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
