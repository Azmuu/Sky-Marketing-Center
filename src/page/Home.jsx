import { Contact } from "lucide-react";
import React from "react";
import Footer from "../components/Footer";
import Services from "./Services";
import About from "./About";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <div className="bg-white text-black font-sans selection:bg-yellow-400 selection:text-black min-h-screen">
      
      {/* Navigation */}
    

      {/* Hero */}
      <header className="relative pt-24 pb-36 text-center px-4 overflow-hidden">

        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-300/30 blur-[150px] rounded-full -z-10"></div>

        <div className="inline-block border border-yellow-400/40 bg-yellow-100 text-yellow-600 text-[10px] px-4 py-1.5 rounded-full uppercase tracking-[0.3em] font-bold mb-8">
          Digital Excellence Guaranteed
        </div>

        <h1 className="text-5xl md:text-8xl font-black max-w-5xl mx-auto leading-[1.1] tracking-tight">
          Elevate Your Brand with <br />
          <span className="text-yellow-500">Marketing Excellence</span>
        </h1>

        <p className="mt-10 text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
          Sky Marketing Center delivers high-impact, data-driven strategies to
          scale your business and dominate your niche in the digital age.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
          <button className="bg-yellow-400 text-black px-10 py-5 rounded-lg font-black text-sm uppercase hover:scale-105 transition-transform duration-300 shadow-xl">
            Start Your Growth Journey
          </button>

          <button className="bg-gray-100 border border-gray-200 px-10 py-5 rounded-lg font-black text-sm uppercase hover:bg-gray-200 transition">
            View Our Work
          </button>
        </div>
      </header>

     

      {/* Why Us */}
      <section id="about" className="max-w-7xl mx-auto px-6 md:px-12 py-32 grid lg:grid-cols-2 gap-24 items-center">

        <div className="relative">

          <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-white rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-gray-200">

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-56 bg-black rounded-t-full rounded-b-md"></div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-200 shadow-2xl">
              <span className="text-yellow-500 text-4xl font-black block mb-1">
                15+
              </span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-700 font-black">
                Years of Industry Leading Experience
              </p>
            </div>

          </div>

        </div>

        <div>

          <span className="text-yellow-500 uppercase text-xs tracking-[0.4em] font-black">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-12 leading-tight">
            We focus on the metrics that actually matter for your bottom line.
          </h2>

          <div className="space-y-10">

            {[
              {
                t: "Data-Driven Strategy",
                d: "No guesswork. We use advanced analytics to fuel every decision and campaign move."
              },
              {
                t: "Custom-Built Teams",
                d: "Every project is assigned specialists tailored to your specific industry and goals."
              },
              {
                t: "Transparent Reporting",
                d: "Real-time dashboards and weekly deep-dives so you're always in the loop."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">

                <div className="mt-1 flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="4"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div>
                  <h4 className="font-bold text-xl mb-2 group-hover:text-yellow-500 transition-colors">
                    {item.t}
                  </h4>

                  <p className="text-gray-600 leading-relaxed text-[15px]">
                    {item.d}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-32">

        <div className="bg-yellow-400 rounded-[3rem] p-12 md:p-24 text-center text-black relative overflow-hidden">

          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            Ready to transform your <br /> digital presence?
          </h2>

          <p className="max-w-2xl mx-auto font-bold text-lg text-black/60 mb-12 leading-relaxed">
            Join over 200+ companies that have scaled their revenue through our
            proprietary marketing frameworks.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <button className="bg-black text-white px-12 py-5 rounded-xl font-black text-sm uppercase hover:bg-zinc-800 transition-all">
              Get Your Free Audit
            </button>

            <button className="border-2 border-black/20 px-12 py-5 rounded-xl font-black text-sm uppercase hover:bg-black/5 transition-all">
              Contact Sales
            </button>

          </div>

        </div>

      </section>
    <Services/>
    <About/>
    <Portfolio/>
    <Contact/>
    </div>
  );
};

export default Home;