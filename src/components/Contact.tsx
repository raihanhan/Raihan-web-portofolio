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

    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <h3 className="text-2xl font-bold mb-12 text-center text-slate-900">Reach me</h3>
      
      <div className="grid md:grid-cols-2 gap-12">

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
          <h4 className="font-bold text-lg mb-6 text-slate-900">Send a Message</h4>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                placeholder="Your Name" 
                disabled={status === "loading"}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                placeholder="Your Email"
                disabled={status === "loading"}
              />
            </div>


            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="_subject" 
                required 
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none" 
                placeholder="Example: Interview Invitation / Collaboration Project"
                disabled={status === "loading"}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                required 
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none resize-none" 
                placeholder="Hello, I'm interested in discussing..."
                disabled={status === "loading"}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === "loading"}
              className={`px-6 py-3 rounded-lg font-semibold transition mt-2 shadow-md text-white
                ${status === "loading" ? "bg-slate-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
              `}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>


            {status === "success" && (
              <p className="text-green-600 font-medium mt-2 text-sm text-center">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-medium mt-2 text-sm text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>

        <div className="flex flex-col justify-center">
          <h4 className="font-bold text-lg mb-6 text-slate-900">Connect here</h4>
          
          <ul className="flex flex-col gap-4 mb-10">
            <li>
              <a href="https://linkedin.com/in/usernameanda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition font-medium group">
                <span className="w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition">
                  <FaLinkedin className="w-5 h-5" />
                </span>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/usernameanda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-slate-900 transition font-medium group">
                <span className="w-10 h-10 flex items-center justify-center bg-slate-100 text-slate-700 rounded-full group-hover:bg-slate-900 group-hover:text-white transition">
                  <FaGithub className="w-5 h-5" />
                </span>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-green-500 transition font-medium group">
              <span className="w-10 h-10 flex items-center justify-center bg-green-50 text-green-500 rounded-full group-hover:bg-green-500 group-hover:text-white transition">
              <FaWhatsapp className="w-5 h-5" />
              </span>
              WhatsApp
              </a>
            </li>
          </ul>

          
        </div>
      </div>
    </section>
  );
}