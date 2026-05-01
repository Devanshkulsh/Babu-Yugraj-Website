import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Admissions", to: "/admission" },
  { label: "Facilities", to: "/facilities" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/bysayurvedic226010/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M13.5 21v-7h2.3l.35-2.74H13.5V9.5c0-.8.22-1.33 1.36-1.33H16.3V5.72c-.25-.03-1.08-.1-2.06-.1-2.04 0-3.44 1.24-3.44 3.52v2.12H8.5V14h2.3v7h2.7Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bys_ayurvedic_official/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/YugrajCollege",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M18.9 2H22l-6.77 7.74L23 22h-6.1l-4.78-6.24L6.66 22H3.54l7.25-8.29L1 2h6.25l4.32 5.7L18.9 2Zm-1.07 18h1.69L6.33 3.9H4.52L17.83 20Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@BabuYugrajSinghAyurvedicMedica",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M21.8 8.2a2.97 2.97 0 0 0-2.1-2.1C17.9 5.5 12 5.5 12 5.5s-5.9 0-7.7.6a2.97 2.97 0 0 0-2.1 2.1C1.5 10 1.5 12 1.5 12s0 2 .7 3.8a2.97 2.97 0 0 0 2.1 2.1c1.8.6 7.7.6 7.7.6s5.9 0 7.7-.6a2.97 2.97 0 0 0 2.1-2.1c.7-1.8.7-3.8.7-3.8s0-2-.7-3.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/babu-yugraj-singh-ayurvedic-medical-college-and-hospital-7958a9307/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3ZM20.44 12.56c0-3.18-1.7-4.66-3.97-4.66-1.83 0-2.65 1-3.11 1.71V8.5H10V19h3.37v-5.2c0-1.37.26-2.7 1.95-2.7 1.66 0 1.68 1.56 1.68 2.8V19h3.38v-6.44Z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0e291d] text-white">
      <div className="mx-auto grid max-w-350 gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1.3fr_0.8fr_1fr_0.9fr] lg:gap-12">
        <div className="flex flex-col items-start text-left">
          <Link to="/" className="inline-flex">
            <img
              className="h-20 w-auto sm:h-24"
              src="/logo_footer.png"
              alt="Babu Yugraj Logo"
            />
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-7 text-emerald-50/72 sm:mt-5 sm:max-w-md sm:text-base">
            A campus built around academic seriousness, Ayurvedic values, guided
            clinical learning, and an environment that helps students grow with
            confidence.
          </p>
        </div>

        <div className="text-left">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-300">
            Quick Links
          </p>
          <div className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium text-emerald-50/75 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-left">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-300">
            Reach Us
          </p>
          <div className="mt-4 space-y-2.5 text-sm leading-6 text-emerald-50/75 sm:mt-5 sm:space-y-3 sm:leading-7">
            <p>College Code: AYU0636</p>
            <p>Phone: +91-8303700428 / +91-8303700429</p>
            <p>Email: babuyugrajsinghayurveda@gmail.com</p>
            <p>
              Address: Babu Yugraj Singh Ayurvedic Medical College & Hospital,
              Sector 6, Gomti Nagar Extension, Lucknow, Uttar Pradesh 226010
            </p>
          </div>
        </div>

        <div className="text-left">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-300">
            Social Media
          </p>
          <div className="mt-4 flex flex-wrap justify-start gap-3 sm:mt-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/10 text-sm font-extrabold uppercase text-white transition hover:bg-amber-400 hover:text-slate-950"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-350 flex-col gap-2 px-4 py-5 text-left text-xs leading-6 text-emerald-50/65 sm:px-6 sm:text-sm md:flex-row md:items-center md:justify-between md:gap-3">
          <p>© 2026 Babu Yugraj. All rights reserved.</p>
          <p>
            Developed &amp; Maintained by{" "}
            <a
              href="https://ntechzy.in"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-amber-300 transition hover:text-amber-200"
            >
              Ntechzy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
