import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55 },
    },
  };

  const serviceList = [
    {
      title: "Social Media Marketing",
      desc: "Build vibrant communities and drive high engagement across major social platforms with targeted campaigns.",
    },
    {
      title: "Search Engine Optimization",
      desc: "Boost your organic visibility and improve rankings with technical SEO, on-page optimization, and smart content structure.",
    },
    {
      title: "Content Strategy",
      desc: "Create compelling content that connects with your audience and turns attention into trust and conversions.",
    },
    {
      title: "Branding & Identity",
      desc: "Shape a strong and memorable visual identity that reflects your business values and sets you apart.",
    },
    {
      title: "Paid Advertising",
      desc: "Launch high-converting advertising campaigns across search and social channels for measurable growth.",
    },
    {
      title: "Performance Analytics",
      desc: "Track results with transparent reporting and actionable insights that support better business decisions.",
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center px-6 md:px-12 py-6 max-w-7xl mx-auto sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100"
      >

        
      </motion.nav>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-24 pb-16 md:pb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-yellow-200/40 blur-[120px] rounded-full -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-yellow-600 bg-yellow-100 border border-yellow-200 text-[11px] px-4 py-2 rounded-full uppercase tracking-[0.25em] font-bold mb-6">
            Our Services
          </span>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.05] tracking-tight">
            Our Strategic{" "}
            <span className="text-yellow-500">Services</span>
          </h1>

          <p className="text-gray-600 max-w-2xl text-lg md:text-xl leading-relaxed">
            Elevate your brand with data-driven marketing solutions tailored for
            visibility, engagement, and long-term business growth.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <motion.section
        id="services"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-12 pb-24"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 text-yellow-500">
                <div className="w-5 h-5 border-2 border-current rounded-sm"></div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-8">
                {service.desc}
              </p>

              <motion.a
                whileHover={{ x: 4 }}
                href="#"
                className="text-yellow-500 text-xs font-bold flex items-center gap-2 uppercase tracking-wide"
              >
                Learn More <span>→</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Extra Services Intro */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-yellow-500 uppercase text-xs tracking-[0.4em] font-black">
              What We Offer
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-[1.2]">
              Strategic solutions tailored for your business growth.
            </h2>
          </div>

          <a
            href="#"
            className="text-yellow-500 text-sm font-black flex items-center gap-3 group border-b border-yellow-300 pb-2"
          >
            EXPLORE ALL SERVICES
            <span className="group-hover:translate-x-2 transition-transform">
              →
            </span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "SEO Optimization",
              desc: "Rank higher on search engines and attract high-quality organic traffic with technical and on-page SEO strategies.",
            },
            {
              title: "Content Strategy",
              desc: "Engage your audience with high-quality, conversion-focused content that builds trust and strengthens authority.",
            },
            {
              title: "Paid Advertising",
              desc: "Maximize ROI with PPC and social campaigns designed for immediate impact, better reach, and scalable growth.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-gray-50 p-10 border border-gray-200 rounded-2xl hover:bg-gray-100 hover:border-yellow-400 transition-all duration-500 group"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-8 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                <div className="w-5 h-5 border-2 border-current"></div>
              </div>

              <h3 className="text-2xl font-bold mb-5 tracking-tight">
                {service.title}
              </h3>

              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                {service.desc}
              </p>

              <div className="w-12 h-1 bg-yellow-300 rounded-full group-hover:w-full group-hover:bg-yellow-400 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ scale: 0.96, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-12 pb-28 pt-10"
      >
        <div className="bg-yellow-400 rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-black">
              Ready to transform your business?
            </h2>
            <p className="text-black/70 text-sm md:text-base leading-relaxed">
              Contact our experts today for a free strategy consultation and
              discover the right solution for your brand.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-zinc-800 transition">
              Work With Us
            </button>
            <button className="border border-black/20 text-black px-8 py-3 rounded-xl font-bold hover:bg-black/5 transition">
              Portfolio
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;