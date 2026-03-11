import { useState } from "react";
import logo from "../assets/logo.png";
import { Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT US", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "EXPERTS", href: "#experts" },
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "CONTACT", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between min-h-[56px] md:min-h-[64px]">
        <a href="#home" className="flex items-center flex-shrink-0 min-w-0">
          <img
            src={logo}
            alt="Sky Marketing Center"
            className="h-9 sm:h-10 md:h-12 w-auto max-h-12 object-contain"
          />
        </a>

        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-5 xl:gap-7 text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-800">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="hover:text-yellow-600 transition-colors duration-200 whitespace-nowrap"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={() => { setSearchOpen((o) => !o); setMenuOpen(false); }}
            className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-500 hover:text-yellow-600 transition-colors rounded-lg touch-manipulation"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <a
            href="#contact"
            onClick={closeMenu}
            className="hidden sm:inline-flex items-center justify-center bg-yellow-500 text-gray-900 px-4 py-2.5 rounded-lg font-semibold text-[11px] uppercase tracking-wide hover:bg-yellow-600 transition-colors min-h-[44px]"
          >
            Get Started
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-700 rounded-lg hover:bg-gray-100 touch-manipulation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-3">
          <input
            type="search"
            placeholder="Search..."
            className="w-full max-w-md mx-auto block px-4 py-3 border border-gray-200 rounded-lg text-base focus:border-yellow-500 outline-none"
            autoFocus
          />
        </div>
      )}

      {/* Mobile menu – toggled by hamburger */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-100 bg-gray-50/80 py-4 px-4 flex flex-col gap-1">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="py-3 px-4 rounded-lg text-sm font-semibold uppercase tracking-wider text-gray-700 hover:bg-white hover:text-yellow-600 transition-colors min-h-[44px] flex items-center touch-manipulation"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="sm:hidden mt-2 py-3 px-4 rounded-lg bg-yellow-500 text-gray-900 font-semibold text-sm uppercase text-center min-h-[44px] flex items-center justify-center touch-manipulation"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
