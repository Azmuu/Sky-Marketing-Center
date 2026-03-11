import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const team = [
    {
      name: "Sarah Jenkins",
      role: "CEO & FOUNDER",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=250&auto=format&fit=crop",
    },
    {
      name: "Marcus Chen",
      role: "CHIEF TECH OFFICER",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=250&auto=format&fit=crop",
    },
    {
      name: "Elena Rodriguez",
      role: "CREATIVE DIRECTOR",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=250&auto=format&fit=crop",
    },
    {
      name: "James Wilson",
      role: "HEAD OF STRATEGY",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=250&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans selection:bg-yellow-200 selection:text-gray-900 overflow-x-hidden">
      {/* Navbar */}


      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-12 items-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-yellow-100/50 blur-[120px] rounded-full -z-10"></div>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <span className="bg-yellow-50 text-yellow-700 text-[10px] font-semibold px-3 py-1 rounded uppercase tracking-[0.2em] border border-yellow-200/80">
            Our Story
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mt-6 mb-6 leading-[1.15] text-gray-900">
            Elevating Brands to{" "}
            <span className="text-yellow-600">New Heights.</span>
          </h1>

          <p className="text-gray-600 text-base leading-relaxed max-w-md">
            We are a team of visionaries, strategists, and creators dedicated to
            driving exponential growth through cutting-edge marketing
            technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Office"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
          />
        </motion.div>
      </section>

      {/* Core Principles */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 bg-gray-50">
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-6">
          <div>
            <span className="text-yellow-600 text-[10px] font-semibold uppercase tracking-[0.3em]">
              Core Principles
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-4">Our Mission & Values</h2>
          </div>

          <p className="text-gray-600 max-w-xs text-sm leading-relaxed">
            Driving growth through innovation, creativity, and strategic
            excellence in the digital landscape.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {["Innovation", "Integrity", "Growth"].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white p-10 rounded-xl border border-gray-200 hover:border-yellow-500/50 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 bg-yellow-100 rounded flex items-center justify-center text-yellow-600 mb-8">
                <div className="w-4 h-4 border-2 border-current rounded-sm rotate-45"></div>
              </div>

              <h3 className="text-xl font-bold mb-4">{item}</h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                We constantly push boundaries in marketing technology to stay
                ahead of the digital curve and deliver results.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-32 border-t border-gray-200">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet the Experts</h2>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            Our team is composed of passionate professionals who live and
            breathe marketing strategy.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 mb-6 border border-gray-200 shadow-sm">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </div>

              <h4 className="text-lg font-semibold group-hover:text-yellow-600 transition-colors">
                {member.name}
              </h4>

              <p className="text-yellow-600 text-[10px] font-semibold uppercase tracking-widest mt-1">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

     
    </div>
  );
};

export default About;