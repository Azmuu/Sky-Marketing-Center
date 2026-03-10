import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [filter, setFilter] = useState("All Projects");

  const categories = [
    "All Projects",
    "Digital Ads",
    "SEO Strategy",
    "Social Media",
    "Content Growth",
    "Performance",
    "Branding",
  ];

  const projects = [
    {
      id: 1,
      category: "Digital Ads",
      tag: "DIGITAL ADS",
      title: "Global Tech Corp",
      result: "200% Growth in ROI",
      desc: "Scalable PPC campaign targeting enterprise SaaS markets across EMEA and North America.",
      img: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=400&h=250&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "SEO Strategy",
      tag: "SEO",
      title: "Eco-Friendly Co",
      result: "150% Lead Increase",
      desc: "Comprehensive technical SEO audit and content strategy focused on sustainable lifestyle keywords.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&h=250&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "Social Media",
      tag: "SOCIAL",
      title: "Urban Fashion",
      result: "85% Higher Engagement",
      desc: "Viral influencer marketing campaign and TikTok-first content creation for Gen-Z audience.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=400&h=250&auto=format&fit=crop",
    },
    {
      id: 4,
      category: "Performance",
      tag: "PERFORMANCE",
      title: "Peak Fitness",
      result: "3x Revenue Growth",
      desc: "Integrated cross-channel marketing strategy leveraging email, paid search, and social ads.",
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=400&h=250&auto=format&fit=crop",
    },
    {
      id: 5,
      category: "Branding",
      tag: "BRANDING",
      title: "Smart Home Solutions",
      result: "120% Visibility Increase",
      desc: "National brand awareness campaign using localized programmatic advertising and PR outreach.",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=400&h=250&auto=format&fit=crop",
    },
    {
      id: 6,
      category: "Content Growth",
      tag: "CONTENT",
      title: "Organic Delights",
      result: "250% Conversion Rate",
      desc: "Direct-to-consumer content strategy focused on high-conversion recipe videos and blog series.",
      img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=400&h=250&auto=format&fit=crop",
    },
  ];

  const filteredProjects =
    filter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-yellow-400 selection:text-black">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-yellow-200/40 blur-[120px] rounded-full -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.4em]">
            Our Portfolio
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-8 tracking-tight leading-[1.1]">
            Proven Results for <br />
            <span className="text-yellow-500">Global Brands</span>
          </h1>

          <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
            We do not just run campaigns. We build growth engines. Explore our
            latest success stories across SEO, digital ads, content, and social
            strategy.
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 overflow-x-auto">
        <div className="flex gap-8 border-b border-gray-200 whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`pb-4 text-[11px] font-black uppercase tracking-widest transition-all relative ${
                filter === cat
                  ? "text-yellow-500"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {cat}
              {filter === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-yellow-500"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden group hover:border-yellow-400 hover:shadow-lg transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black text-[9px] font-black px-3 py-1 rounded uppercase tracking-widest">
                    {project.tag}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-black group-hover:text-yellow-500 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-yellow-500 text-2xl font-black mt-2 mb-4 tracking-tight">
                    {project.result}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="bg-yellow-400 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden shadow-sm">
          <div className="absolute top-0 left-0 w-full h-1 bg-black/10"></div>

          <h2 className="text-4xl md:text-6xl font-black mb-8 text-black leading-[1.1]">
            Ready to be our next <br />
            <span className="underline decoration-black/20 underline-offset-8">
              Success Story?
            </span>
          </h2>

          <p className="text-black/70 font-bold mb-12 max-w-xl mx-auto leading-relaxed">
            Join the businesses scaling with Sky Marketing Center through
            strategic, data-driven campaigns built for real growth.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-black text-white px-10 py-4 rounded-lg font-black text-sm uppercase hover:bg-zinc-800 transition">
              Start Your Project
            </button>
            <button className="border border-black/20 text-black px-10 py-4 rounded-lg font-black text-sm uppercase hover:bg-black/5 transition">
              Book Strategy Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;