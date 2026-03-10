import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-5 max-w-7xl mx-auto sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="Sky Marketing Center Logo"
          className="h-16 md:h-18 w-auto object-contain"
        />
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-10 text-[13px] font-bold uppercase tracking-widest text-gray-600">
        <Link to="/" className="hover:text-yellow-500 transition">
          Home
        </Link>

        <Link to="/services" className="hover:text-yellow-500 transition">
          Services
        </Link>

        <Link to="/about" className="hover:text-yellow-500 transition">
          About
        </Link>

        <Link to="/portfolio" className="hover:text-yellow-500 transition">
          Portfolio
        </Link>

        <Link to="/contact" className="hover:text-yellow-500 transition">
          Contact
        </Link>
      </div>

      {/* Button */}
      <Link
        to="/contact"
        className="bg-yellow-400 text-black px-6 py-2.5 rounded-md font-bold text-sm hover:bg-yellow-500 transition"
      >
        Get Started
      </Link>
    </nav>
  );
}