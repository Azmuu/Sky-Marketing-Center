import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 md:px-8 border-t border-gray-200 bg-gray-50 w-full min-w-0 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full min-w-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-6 mb-8 sm:mb-10">
          <div className="col-span-1 md:col-span-6 lg:col-span-4">
            <a href="#home" className="flex items-center mb-6">
              <img
                src={logo}
                alt="Sky Marketing Center Logo"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </a>
            <p className="text-gray-600 text-sm leading-relaxed pr-0 lg:pr-12">
              Driving growth through innovation and strategy. Your trusted
              partner in digital transformation and modern marketing solutions.
            </p>
          </div>

          <div className="hidden lg:block lg:col-span-2"></div>

          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h4 className="text-gray-900 font-semibold text-xs tracking-wider uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="#home" className="hover:text-yellow-600 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-yellow-600 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-yellow-600 transition-colors">About</a></li>
              <li><a href="#experts" className="hover:text-yellow-600 transition-colors">Experts</a></li>
              <li><a href="#portfolio" className="hover:text-yellow-600 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-yellow-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Follow us */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h4 className="text-gray-900 font-semibold text-xs tracking-wider uppercase mb-6">
              Follow us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.tiktok.com/@skymarketingcenter?_r=1&_t=ZS-94b3BELCrzA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200 text-gray-700 hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                aria-label="Sky Marketing Center on TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1C1f1idZXp/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200 text-gray-700 hover:bg-yellow-500 hover:text-gray-900 transition-colors"
                aria-label="Sky Marketing Center on Facebook"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h4 className="text-gray-900 font-semibold text-xs tracking-wider uppercase mb-6">
              Legal
            </h4>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-yellow-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-200">
          <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-[0.2em]">
            © 2024 Sky Marketing Center. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}