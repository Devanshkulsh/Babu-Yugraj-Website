import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admissions" },
  { label: "Facilities", to: "/facilities" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-emerald-900/10 bg-[#fdfbf5]/90 backdrop-blur-xl"
      aria-label="Primary"
    >
      <div className="mx-auto flex h-16 w-full max-w-295 items-center justify-between px-4 lg:h-20 lg:justify-center">
        <Link
          to="/"
          aria-label="Babu Yugraj home"
          className="flex items-center lg:hidden"
        >
          <img className="h-10 w-auto" src="/logo.png" alt="Babu Yugraj Logo" />
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `px-4 py-2 text-[15px] font-semibold transition-all hover:text-emerald-800 ${
                  isActive ? "text-emerald-800" : "text-slate-700"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            className="ml-4 rounded-full bg-rose-900 px-6 py-2.5 text-[15px] font-bold text-white transition-transform active:scale-95"
            to="/admissions"
          >
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className={`h-0.5 w-6 bg-emerald-900 transition-all ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <div className={`h-0.5 w-6 bg-emerald-900 transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
          <div className={`h-0.5 w-6 bg-emerald-900 transition-all ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`absolute left-0 right-0 top-full overflow-hidden bg-white shadow-2xl transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "max-h-125 border-b border-emerald-900/10 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-1 p-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-emerald-50 hover:text-emerald-800 active:bg-emerald-100 ${
                  isActive ? "bg-emerald-50 text-emerald-800" : "text-slate-700"
                }`
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-2">
            <Link
              className="flex w-full items-center justify-center rounded-xl bg-rose-900 py-4 text-base font-bold text-white shadow-lg shadow-rose-900/20"
              to="/admissions"
              onClick={closeMenu}
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
