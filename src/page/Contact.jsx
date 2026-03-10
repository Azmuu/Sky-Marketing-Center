import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-yellow-400 selection:text-black">
      {/* Navigation */}
    

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-yellow-200/40 blur-[120px] rounded-full -z-10"></div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
        >
          Let's <span className="text-yellow-500">Scale</span> Your Brand
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 max-w-2xl text-lg md:text-xl leading-relaxed"
        >
          Ready to dominate your market? Our team of experts is standing by to
          craft your high-performance growth strategy.
        </motion.p>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 text-sm text-black placeholder:text-gray-400 focus:border-yellow-400 outline-none transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 text-sm text-black placeholder:text-gray-400 focus:border-yellow-400 outline-none transition"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 text-sm text-black placeholder:text-gray-400 focus:border-yellow-400 outline-none transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                  Project Details
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your goals..."
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 text-sm text-black placeholder:text-gray-400 focus:border-yellow-400 outline-none transition resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-yellow-400 text-black py-5 rounded-lg font-black text-sm uppercase tracking-widest hover:bg-yellow-500 transition-all active:scale-[0.98]">
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
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-yellow-500">
                  <div className="w-5 h-5 border-2 border-current rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-current rounded-full"></div>
                  </div>
                  <h4 className="font-black text-xs uppercase tracking-[0.2em]">
                    Headquarters
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-loose">
                  123 Marketing Ave, Suite 500
                  <br />
                  Manhattan, NY 10001
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-yellow-500">
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
                  <h4 className="font-black text-xs uppercase tracking-[0.2em]">
                    Phone
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-loose">
                  +1 (555) 000-MARKET
                  <br />
                  Mon-Fri 9am to 6pm EST
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-yellow-500">
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
                  hello@skymarketing.center
                  <br />
                  support@skymarketing.center
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-yellow-500">
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
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition cursor-pointer"
                    >
                      <div className="w-4 h-4 border border-current rounded-sm"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 group">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <div className="w-6 h-6 bg-black rounded-full border-4 border-yellow-400"></div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-gray-200 text-black">
                View on Google Maps
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Contact;