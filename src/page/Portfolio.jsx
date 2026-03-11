import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [filter, setFilter] = useState("All Projects");

  const categories = [
    "All Projects",
    "Campaigns",
    "Consultancy",
    "Sky Skill Hub",
  ];

  const marketingCentersPath = "/Markeeting Centers";
  const projects = [
    { id: 1, category: "Campaigns", tag: "CAMPAIGN", title: "Xamar Hospital – Pharmacy Marketing", result: "981 / 1,000 Pharmacies Reached", desc: "Door-to-door and business campaign. Target 1,000 pharmacies; total reached 981 pharmacies.", img: `${marketingCentersPath}/Xamar.jpeg` },
    { id: 2, category: "Campaigns", tag: "CAMPAIGN", title: "Turkish Hospital – Door to Door", result: "Door-to-Door Marketing", desc: "Hospital marketing door-to-door campaign.", img: `${marketingCentersPath}/Turkish.jpeg` },
    { id: 3, category: "Campaigns", tag: "CAMPAIGN", title: "Kaamil Hospital", result: "Door to Door & Business Contract", desc: "Door-to-door marketing and business contract campaigns.", img: `${marketingCentersPath}/Kaamil.jpeg` },
    { id: 4, category: "Campaigns", tag: "CAMPAIGN", title: "Mogadishu Gastro Hospital", result: "Healthcare Marketing", desc: "Healthcare and hospital marketing campaign.", img: `${marketingCentersPath}/Mogdishu-Gastaro.jpeg` },
    { id: 5, category: "Campaigns", tag: "CAMPAIGN", title: "Somali Sudanese Campaign", result: "Door to Door at Business", desc: "Door-to-door campaign at business locations.", img: `${marketingCentersPath}/Somaali-Sudaanees.jpeg` },
    { id: 6, category: "Consultancy", tag: "CONSULTANCY", title: "Consultancy Services", result: "40+ Centers", desc: "Consultancy delivered to above 40 centers.", img: "/skyTeam1.jpeg" },
    { id: 7, category: "Sky Skill Hub", tag: "SKY SKILL HUB", title: "Workshops & Training", result: "3 Workshops · 20+ Seminars · 15+ Training", desc: "3 workshops, above 20 seminars, and above 15 training programs delivered.", img: "/workshops/1.jpeg" },
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
            Door-to-door campaigns, hospital & pharmacy marketing, consultancy, and Sky Skill Hub workshops & training.
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
                className="bg-gray-50/80 rounded-xl border border-gray-100 overflow-hidden group hover:border-yellow-200 hover:shadow-md transition-all"
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
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-yellow-600 text-sm font-bold mt-1 mb-2">{project.result}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

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
