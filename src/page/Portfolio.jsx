import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [filter, setFilter] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    if (!selectedProject) setSlideIndex(0);
  }, [selectedProject]);
  useEffect(() => {
    if (!selectedProject) return;
    const onEscape = (e) => { if (e.key === "Escape") setSelectedProject(null); };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [selectedProject]);

  const categories = [
    "All Projects",
    "Campaigns",
    "Consultancy",
    "Sky Skill Hub",
    "Protocol",
  ];

  const marketingCentersPath = "/Markeeting Centers";
  const protocolImages = [
    `${marketingCentersPath}/portocol2.jpeg`,
    `${marketingCentersPath}/portocol6.jpeg`,
    `${marketingCentersPath}/potocol3.jpeg`,
    `${marketingCentersPath}/potocol4.jpeg`,
    `${marketingCentersPath}/potocol5.jpeg`,
  ];
  const projects = [
    { id: 1, category: "Campaigns", tag: "CAMPAIGN", title: "Xamar Hospital – Pharmacy Marketing", result: "981 / 1,000 Pharmacies Reached", desc: "Door-to-door and business campaign. Target 1,000 pharmacies; total reached 981 pharmacies.", img: `${marketingCentersPath}/Xamar.jpeg` },
    { id: 2, category: "Campaigns", tag: "CAMPAIGN", title: "Turkish Hospital – Door to Door", result: "Door-to-Door Marketing", desc: "Hospital marketing door-to-door campaign.", img: `${marketingCentersPath}/Turkish.jpeg` },
    { id: 3, category: "Campaigns", tag: "CAMPAIGN", title: "Kaamil Hospital", result: "Door to Door & Business Contract", desc: "Door-to-door marketing and business contract campaigns.", img: `${marketingCentersPath}/Kaamil.jpeg` },
    { id: 4, category: "Campaigns", tag: "CAMPAIGN", title: "Mogadishu Gastro Hospital", result: "Healthcare Marketing", desc: "Healthcare and hospital marketing campaign.", img: `${marketingCentersPath}/Mogdishu-Gastaro.jpeg` },
    { id: 5, category: "Campaigns", tag: "CAMPAIGN", title: "Somali Sudanese Campaign", result: "Door to Door at Business", desc: "Door-to-door campaign at business locations.", img: `${marketingCentersPath}/Somaali-Sudaanees.jpeg` },
    { id: 6, category: "Consultancy", tag: "CONSULTANCY", title: "Consultancy Services", result: "40+ Centers", desc: "Consultancy delivered to above 40 centers.", img: "/skyTeam1.jpeg" },
    { id: 7, category: "Sky Skill Hub", tag: "SKY SKILL HUB", title: "Workshops & Training", result: "3 Workshops · 20+ Seminars · 15+ Training", desc: "3 workshops, above 20 seminars, and above 15 training programs delivered.", img: "/workshops/1.jpeg" },
    { id: 8, category: "Protocol", tag: "PROTOCOL", title: "Protocol of Ceremonies and Official Events", result: "Sky Team Protocol", desc: "Every successful event does not happen by chance, but it is the result of careful planning and following organized rules that have been established.\n\nSky Protocol Team decorates and organizes your event.\nWe handle all types of protocol such as ceremonies, exhibitions, graduations, and celebrations.\n\nWhy is Protocol important?\n\n• Ensuring Precedence: It removes confusion about who speaks first or where each person should sit.\n\n• Creating a Respectful Atmosphere: When rules are followed, guests feel valued, which increases the reputation of the organizer.\n\n• Efficiency: It prevents small mistakes that could cause delays or conflicts among important people (VIPs).\n\n• Preventing Embarrassment: Poor protocol can cause diplomatic or personal conflict if an important person is treated incorrectly.\n\nProtocol\n\n• Welcoming Guests: High-level guests (VIPs) are received at the main entrance and escorted to the place prepared for them.\n\n• Seating Plan: The front seats are reserved for the highest-ranking guests (Guest of Honor).\n\n• Speech Schedule: We prepare the speeches and bring a presenter (provisional). It begins with the lowest-ranking person and ends with the highest-ranking person (The climax rule). This ensures that the final speech has the greatest impact. The important thing is that the event should not become boring or disconnected.\n\n• F&G: A trained team will come to handle the work they are assigned to do.", img: protocolImages[0], images: protocolImages },
  ];

  const filteredProjects = filter === "All Projects" ? projects : projects.filter((p) => p.category === filter);

  const workSections = [
    {
      title: "Campaigns",
      items: [
        "Somali Sudanese: door-to-door campaign at business",
        "Xamar Hospital: pharmacy marketing — target 1,000 pharmacies, reached 981",
        "Turkish Hospital: door-to-door marketing",
        "Kaamil Hospital: door-to-door and business contract",
        "Mogadishu Gastro Hospital",
      ],
    },
    {
      title: "Consultancy",
      items: ["Above 40 centers"],
    },
    {
      title: "Sky Skill Hub",
      items: ["3 workshops", "Above 20 seminars", "Above 15 training"],
    },
    {
      title: "Protocol",
      items: ["Protocol and professional coordination for events and partnerships"],
    },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-yellow-200 selection:text-gray-900 w-full min-w-0 overflow-x-hidden">
      <section id="portfolio" className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 pt-10 sm:pt-12 pb-6 sm:pb-8 scroll-mt-20 md:scroll-mt-24 min-w-0">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-yellow-600 text-[10px] font-semibold uppercase tracking-[0.2em]">Our Portfolio</span>
          <h2 className="text-xl md:text-3xl font-bold mt-2 mb-3 tracking-tight text-gray-900">
            Proven Results for Global Brands
          </h2>
          <p className="text-gray-600 text-sm max-w-xl leading-relaxed">
            Door-to-door campaigns, hospital & pharmacy marketing, consultancy, Sky Skill Hub workshops & training, and protocol services.
          </p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 mb-6 sm:mb-8 min-w-0">
        <div className="flex gap-4 sm:gap-6 border-b border-gray-200 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide text-xs font-semibold uppercase tracking-wider text-gray-500">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              type="button"
              className={`whitespace-nowrap pb-1 transition-colors relative min-h-[44px] flex items-end touch-manipulation ${
                filter === cat ? "text-yellow-600" : "hover:text-gray-900"
              }`}
            >
              {cat}
              {filter === cat && (
                <motion.div layoutId="portfolioTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500" />
              )}
            </button>
          ))}
        </div>
      </div>

      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 pb-8 sm:pb-12 min-w-0">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelectedProject(project); } }}
                className="bg-gray-50/80 rounded-xl border border-gray-100 overflow-hidden group hover:border-yellow-200 hover:shadow-lg transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-yellow-500 text-gray-900 text-[9px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider">
                    {project.tag}
                  </span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-semibold uppercase tracking-wider bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg">
                      View details
                    </span>
                  </div>
                </div>
                <div className="p-5 max-h-[180px] min-h-0 flex flex-col overflow-hidden">
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors flex-shrink-0">
                    {project.title}
                  </h3>
                  <p className="text-yellow-600 text-sm font-bold mt-1 mb-2 flex-shrink-0">{project.result}</p>
                  <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain pr-1 -mr-1">
                    <p className="text-gray-600 text-xs leading-relaxed whitespace-pre-line">{project.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                aria-label="Close"
              >
                <span className="text-xl leading-none">×</span>
              </button>
              <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
                <div className="relative aspect-video bg-gray-100">
                  {selectedProject.images && selectedProject.images.length > 0 ? (
                    <>
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.img
                          key={slideIndex}
                          src={selectedProject.images[slideIndex]}
                          alt={`${selectedProject.title} ${slideIndex + 1}`}
                          className="absolute inset-0 w-full h-full object-cover"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </AnimatePresence>
                      {selectedProject.images.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setSlideIndex((i) => (i - 1 + selectedProject.images.length) % selectedProject.images.length); }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition-colors z-[1]"
                            aria-label="Previous"
                          >
                            <span className="text-lg leading-none">‹</span>
                          </button>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setSlideIndex((i) => (i + 1) % selectedProject.images.length); }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition-colors z-[1]"
                            aria-label="Next"
                          >
                            <span className="text-lg leading-none">›</span>
                          </button>
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-[1]">
                            {selectedProject.images.map((_, i) => (
                              <button
                                key={i}
                                type="button"
                                onClick={(e) => { e.stopPropagation(); setSlideIndex(i); }}
                                className={`w-2 h-2 rounded-full transition-colors ${i === slideIndex ? "bg-yellow-500" : "bg-white/70"}`}
                                aria-label={`Slide ${i + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <img
                      src={selectedProject.img}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <span className="absolute top-4 right-4 bg-yellow-500 text-gray-900 text-[10px] font-semibold px-2.5 py-1 rounded uppercase tracking-wider z-[1]">
                    {selectedProject.tag}
                  </span>
                </div>
                <div className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
                  <p className="text-yellow-600 font-semibold text-sm mb-4">{selectedProject.result}</p>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{selectedProject.desc}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Our Work – Campaigns, Consultancy, Sky Skill Hub */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 pb-10 sm:pb-16 min-w-0">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6">Areas We've Worked In</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workSections.map((section, i) => (
            <div
              key={section.title}
              className="bg-gray-50 rounded-xl border border-gray-100 p-5 sm:p-6"
            >
              <h3 className="text-yellow-600 text-sm font-bold uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {section.items.map((item, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-yellow-500 mt-1.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 pb-10 sm:pb-16 min-w-0">
        <div className="bg-yellow-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
            Ready to be our next success story?
          </h2>
          <p className="text-gray-900/75 text-xs sm:text-sm mb-4 sm:mb-6 max-w-md mx-auto">
            Contact us: <strong>+252 61 766 5778</strong> · <strong>skymarketingcenter@gmail.com</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#contact" className="inline-flex justify-center items-center min-h-[44px] bg-gray-900 text-white px-5 sm:px-6 py-3 rounded-lg font-semibold text-xs uppercase hover:bg-gray-800 transition-colors touch-manipulation">
              Start Your Project
            </a>
            <a href="#contact" className="inline-flex justify-center items-center min-h-[44px] border border-gray-900/20 text-gray-900 px-5 sm:px-6 py-3 rounded-lg font-semibold text-xs uppercase hover:bg-gray-900/5 transition-colors touch-manipulation">
              Book Strategy Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
