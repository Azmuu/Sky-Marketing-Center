import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Play } from "lucide-react";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const DOOR_TO_DOOR_IMGS = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `/door-to-door/${n}.jpeg`);
const WORKSHOP_IMGS = [
  ...([1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25].map((n) => `/workshops/${n}.jpeg`)),
  `/workshops/${encodeURIComponent("WhatsApp Image 2026-03-11 at 02.00.35.jpeg")}`,
];

function WaveDivider({ className = "text-white" }) {
  return (
    <div className={`wave-divider ${className}`}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,60 C300,0 600,120 900,60 C1050,30 1150,90 1200,60 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
}

function ImageSlideshow({ images, title, id }) {
  const [index, setIndex] = useState(0);
  const n = images.length;
  useEffect(() => {
    if (n <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % n), 4000);
    return () => clearInterval(t);
  }, [n]);
  if (n === 0) return null;
  return (
    <section id={id} className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 py-10 sm:py-12 scroll-mt-20 md:scroll-mt-24 min-w-0">
      <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="relative aspect-video sm:aspect-[2/1] max-h-[320px] sm:max-h-[400px] rounded-xl overflow-hidden bg-gray-100">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img src={images[index]} alt={`${title} ${index + 1}`} className="w-full h-full object-cover" />
          </motion.div>
        </AnimatePresence>
        {n > 1 && (
          <>
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + n) % n)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-800 hover:bg-yellow-500 hover:text-gray-900 transition-colors"
              aria-label="Previous"
            >
              <span className="text-xl leading-none">‹</span>
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % n)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-800 hover:bg-yellow-500 hover:text-gray-900 transition-colors"
              aria-label="Next"
            >
              <span className="text-xl leading-none">›</span>
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {n <= 10
                ? images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIndex(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-yellow-500" : "bg-white/60"}`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))
                : (
                  <span className="bg-black/50 text-white text-xs px-2 py-1 rounded">{index + 1} / {n}</span>
                )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

const Home = () => {
  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-yellow-200 selection:text-gray-900 min-h-screen w-full min-w-0 overflow-x-hidden">
      {/* ========== HERO ========== */}
      <header id="home" className="relative min-h-[70vh] sm:min-h-[75vh] flex flex-col scroll-mt-20 md:scroll-mt-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop"
            alt="Sky Digital Marketing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/45" />
        </div>

        <div className="relative flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-xs font-medium uppercase tracking-[0.2em] mb-3 border-b border-dashed border-white/60 pb-1 w-fit"
          >
            Grow Your Brand
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.2] text-white max-w-4xl"
          >
            The Best Place Where Strategy Meets Results
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-white/90 text-sm md:text-base leading-relaxed max-w-2xl"
          >
            Sky Digital Marketing delivers high-impact, data-driven strategies to scale your business. From SEO and social to paid campaigns—we focus on the metrics that matter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-xs uppercase tracking-wide hover:bg-yellow-600 transition-colors shadow-md"
            >
              Get Started
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center bg-white/20 backdrop-blur border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-xs uppercase tracking-wide hover:bg-white/30 transition-colors"
            >
              View Our Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 md:gap-10 bg-white rounded-xl shadow-lg p-4 md:p-6 w-full max-w-xl min-w-0"
          >
            <div>
              <p className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider">Strategy starts from</p>
              <p className="text-gray-900 text-xl md:text-2xl font-bold mt-0.5">Let's Talk</p>
            </div>
            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-xl md:text-2xl font-bold text-yellow-600">4.7</span>
              <div className="flex flex-col">
                <div className="flex gap-0.5 text-yellow-500 text-lg">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <span className="text-gray-500 text-xs mt-0.5">(190 Reviews)</span>
              </div>
              <p className="text-gray-500 text-xs">From Google Business</p>
            </div>
          </motion.div>
        </div>
      </header>

      <WaveDivider className="text-gray-50" />

      {/* ========== ABOUT US ========== */}
      <section id="about" className="bg-gray-50 pt-1 pb-10 sm:pb-12 md:pb-16 scroll-mt-20 md:scroll-mt-24">
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Left: image cluster – large image with play button (bottom-left) and overlay card (top-right), smaller image below */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full min-w-0 order-2 lg:order-1"
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-[4/3] max-h-[260px] sm:max-h-[300px] bg-gray-200">
                  <img
                    src="/skyTeam1.jpeg"
                    alt="Sky Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Play button – bottom left */}
                <div className="absolute bottom-6 left-6 w-14 h-14 rounded-full bg-gray-900/80 border-2 border-yellow-500 flex items-center justify-center text-white cursor-pointer hover:bg-yellow-500 transition-colors">
                  <Play className="w-6 h-6 ml-1" fill="currentColor" />
                </div>
                {/* Overlay card – top right (like "Luxury Room") */}
                <div className="absolute top-6 right-6 bg-yellow-500 text-gray-900 rounded-xl shadow-lg p-4 max-w-[180px]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 rounded-lg bg-gray-900/20 flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <span className="font-bold text-sm">Digital Strategy</span>
                  </div>
                  <p className="text-xs text-gray-800/90">Data-driven growth</p>
                </div>
              </div>
              <div className="mt-4 flex gap-3 min-w-0">
                <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3] max-h-[140px] sm:max-h-[160px] flex-1 min-w-0">
                  <img src="/skyTeam2.jpeg" alt="Sky Team" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3] max-h-[140px] sm:max-h-[160px] flex-1 min-w-0">
                  <img src="/skyTeam3.jpeg" alt="Sky Team" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Right: ABOUT US heading, text, contact card with MAIL US button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="min-w-0 order-1 lg:order-2"
            >
              <span className="text-yellow-600 text-[10px] font-semibold uppercase tracking-[0.2em]">About Us</span>
              <h2 className="text-xl md:text-3xl font-bold mt-2 mb-4 leading-tight text-gray-900">
                We Can Help You Grow Your Business!
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                We are a team of strategists and creators dedicated to driving growth through data-driven marketing. From brand identity to performance campaigns, we combine creativity with analytics so you stay ahead.
              </p>

              {/* Contact card – white, rounded, phone icon (circle yellow), text, number, MAIL US button on right */}
              <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs mb-0.5">For more information, contact us by telephone or email.</p>
                    <p className="text-gray-900 font-bold text-base">+252 61 766 5778</p>
                  </div>
                </div>
                <a href="#contact" className="inline-flex items-center justify-center gap-1.5 bg-yellow-500 text-gray-900 px-4 py-2.5 rounded-lg font-semibold text-xs uppercase tracking-wide hover:bg-yellow-600 transition-colors shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                  Mail Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== DOOR-TO-DOOR MARKETING ========== */}
      <section className="bg-gray-50 py-6 sm:py-8">
        <ImageSlideshow images={DOOR_TO_DOOR_IMGS} title="Door-to-Door Marketing" id="door-to-door" />
      </section>

      <WaveDivider className="text-white" />

      {/* ========== OUR SERVICES ========== */}
      <section id="services" className="bg-white pt-1 pb-10 sm:pb-12 md:pb-16 scroll-mt-20 md:scroll-mt-24">
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto mb-8"
          >
            <span className="text-yellow-600 text-[10px] font-semibold uppercase tracking-[0.2em]">Our Services</span>
            <h2 className="text-xl md:text-3xl font-bold mt-2 mb-3 text-gray-900">Best Marketing Services</h2>
            <p className="text-gray-600 text-sm leading-relaxed">Digital, content, traditional, influencer, affiliate, and inbound marketing—all under one roof.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              { image: "/services/digital-Markeeting.jpg", title: "Digital Marketing", desc: "Reach your audience online with data-driven campaigns across web, social, and paid channels." },
              { image: "/services/content-Markeeting.jpg", title: "Content Marketing", desc: "Create and distribute valuable content that attracts, engages, and converts your target audience." },
              { image: "/services/Tranditional-Markeeting.jpeg", title: "Traditional Marketing", desc: "Print, broadcast, and outdoor campaigns that build brand awareness in your local market." },
              { image: "/services/Influencer-Marketing.png", title: "Influencer Marketing", desc: "Partner with trusted voices to amplify your brand and reach engaged communities." },
              { image: "/services/Affiliate-Marketing.jpg", title: "Affiliate Marketing", desc: "Grow sales through partner networks and performance-based referral programs." },
              { image: "/services/Inbound-Marketing.jpg", title: "Inbound Marketing", desc: "Attract prospects with helpful content, SEO, and experiences that convert visitors into customers." },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-yellow-100 overflow-hidden hover:shadow-md hover:border-yellow-200 transition-all text-gray-900"
              >
                <div className="h-40 sm:h-44 bg-gray-100">
                  <img src={card.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WORKSHOPS ========== */}
      <section className="bg-white py-6 sm:py-8">
        <ImageSlideshow images={WORKSHOP_IMGS} title="Workshops" id="workshops" />
      </section>

      <WaveDivider className="text-gray-900" />

      {/* ========== OUR BENEFITS ========== */}
      <section className="relative bg-gray-900 py-10 sm:py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop" alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gray-900/85" />
        </div>
        <div className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-white">
              <span className="text-gray-400 text-[10px] font-semibold uppercase tracking-[0.2em]">Our Benefits</span>
              <h2 className="font-serif text-xl md:text-3xl font-bold mt-2 mb-4 leading-tight">Results & Trust Combined Here!</h2>
              <p className="text-gray-300 text-sm leading-relaxed max-w-lg">We combine data-driven strategy with transparent reporting and a dedicated team.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3] max-h-[280px]">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" alt="Sky Digital Marketing" className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 max-w-[180px]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center text-yellow-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </div>
                    <span className="font-bold text-gray-900 text-sm">Data-Driven Strategy</span>
                  </div>
                  <p className="text-gray-600 text-[10px] leading-relaxed">Measurable growth and clear ROI.</p>
                </div>
                <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-yellow-500 text-gray-900 font-bold flex items-center justify-center text-sm">3</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== EXPERTS ========== */}
      <section id="experts" className="bg-gray-50 py-10 sm:py-12 md:py-16 scroll-mt-20 md:scroll-mt-24">
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 min-w-0">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6 sm:mb-8">
            <span className="text-yellow-600 text-[10px] font-semibold uppercase tracking-[0.2em]">Our Team</span>
            <h2 className="text-lg sm:text-xl md:text-3xl font-bold mt-2 mb-2 text-gray-900">Meet the Experts</h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-md mx-auto px-2">Passionate professionals who live and breathe marketing strategy.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              { name: "Ibrahim Adan Abbdi", role: "CEO, Sky Marketing", img: "/Experts/ibrahim.jpeg" },
              { name: "Abdinur Kamal Mohamed (Daryeel)", role: "Operation Director · IT Specialist", img: "/Experts/abdinur.jpeg" },
              { name: "Cabdiwalu Maxamed Xareed", role: "Secretary", img: "/Experts/" + encodeURIComponent("Cabdi Wali .jpeg") },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group text-center"
              >
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-200 mb-3 border border-gray-100 shadow-sm">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">{member.name}</h3>
                <p className="text-yellow-600 text-[10px] font-semibold uppercase tracking-wider mt-0.5">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
