import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-6 lg:col-span-4">
            <Link to="/" className="flex items-center mb-6">
              <img
                src={logo}
                alt="Sky Marketing Center Logo"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed pr-0 lg:pr-12">
              Driving growth through innovation and strategy. Your trusted
              partner in digital transformation and modern marketing solutions.
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-3"></div>

          {/* Navigation */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h4 className="text-black font-bold text-xs tracking-widest uppercase mb-6">
              Navigation
            </h4>

            <ul className="space-y-4 text-gray-600 text-sm">
              <li>
                <Link to="/" className="hover:text-yellow-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-yellow-500 transition">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/portfolio" className="hover:text-yellow-500 transition">
                  Portfolio
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-yellow-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1 md:col-span-3 lg:col-span-3">
            <h4 className="text-black font-bold text-xs tracking-widest uppercase mb-6">
              Legal
            </h4>

            <ul className="space-y-4 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-500 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-500 transition">
                  Terms of Service
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-500 transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-200">
          <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-[0.2em]">
            © 2024 Sky Marketing Center. All rights reserved.
          </p>

          <div className="flex gap-8 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            <a href="#" className="hover:text-yellow-500 transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-yellow-500 transition">
              X (Twitter)
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}