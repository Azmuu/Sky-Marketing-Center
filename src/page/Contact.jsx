import React, { useState } from "react";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "skymarketingcenter@gmail.com";

const Contact = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (!form.email || !form.message) {
      setStatus("error");
      setErrorMsg("Email and message are required.");
      return;
    }
    const name = [form.firstName, form.lastName].filter(Boolean).join(" ") || "Visitor";
    const subject = encodeURIComponent(`Sky Marketing – Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setStatus("success");
    setForm({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-yellow-200 selection:text-gray-900 w-full min-w-0 overflow-x-hidden">
      <section id="contact" className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 pt-10 sm:pt-12 pb-10 sm:pb-12 relative scroll-mt-20 md:scroll-mt-24 min-w-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-yellow-100/40 blur-[80px] rounded-full -z-10"></div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900"
        >
          Let's <span className="text-yellow-600">Scale</span> Your Brand
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 max-w-xl text-sm leading-relaxed"
        >
          Ready to dominate your market? Our team of experts is standing by to
          craft your high-performance growth strategy.
        </motion.p>
      </section>

      {/* Contact Content */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 pb-10 sm:pb-16 min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <p className="text-red-600 text-sm">{errorMsg}</p>
              )}
              {status === "success" && (
                <p className="text-green-600 text-sm font-medium">Your email client will open to send the message. We&apos;ll get back to you soon.</p>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    value={form.firstName}
                    onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 outline-none transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 outline-none transition"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 outline-none transition"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your goals..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 outline-none transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full min-h-[48px] bg-yellow-500 text-gray-900 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-yellow-600 transition-colors touch-manipulation"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-12"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-yellow-600">
                  <div className="w-5 h-5 border-2 border-current rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-current rounded-full"></div>
                  </div>
                  <h4 className="font-black text-xs uppercase tracking-[0.2em]">
                    Headquarters
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-loose">
                  Hodan Taleex, Mogadishu
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-yellow-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <h4 className="font-semibold text-xs uppercase tracking-[0.2em]">
                    Phone
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-loose">
                  +252 61 766 5778
                  <br />
                  Mon–Fri 9am to 6pm
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-yellow-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h4 className="font-black text-xs uppercase tracking-[0.2em]">
                    Email
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-loose">
                  skymarketingcenter@gmail.com
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-yellow-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  <h4 className="font-black text-xs uppercase tracking-[0.2em]">
                    Follow Us
                  </h4>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://www.tiktok.com/@skymarketingcenter?_r=1&_t=ZS-94b3BELCrzA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-yellow-500 hover:border-yellow-500 hover:text-gray-900 transition-colors"
                    aria-label="Sky Marketing Center on TikTok"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1C1f1idZXp/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-yellow-500 hover:border-yellow-500 hover:text-gray-900 transition-colors"
                    aria-label="Sky Marketing Center on Facebook"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map – Hodan Taleex, Mogadishu */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Sky Marketing Center – Hodan Taleex, Mogadishu"
                src="https://www.google.com/maps?q=Hodan+Taleex,+Mogadishu&z=15&ie=UTF8&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Hodan+Taleex,Mogadishu"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-gray-200 text-gray-900 shadow-sm hover:bg-yellow-500 hover:border-yellow-500 hover:text-gray-900 transition-colors"
              >
                View on Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Contact;