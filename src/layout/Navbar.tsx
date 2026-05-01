import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { getDocumentViewerPath } from "../utils/assetPath";

type NavChildLink = {
  label: string;
  to: string;
  submenu?: NavChildLink[];
  opensDocument?: boolean;
};

type NavLinkItem = {
  label: string;
  to: string;
  submenu?: NavChildLink[];
};

const navLinks: NavLinkItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/aboutus",
    submenu: [
      {
        label: "About Us",
        to: "/aboutus",
      },
      {
        label: "Management's Message",
        to: "/managementMessage",
      },
      {
        label: "Our Team",
        to: "/our-team",
      },
    ],
  },
  {
    label: "Staff",
    to: "",
    submenu: [
      {
        label: "Teaching Staff",
        to: getDocumentViewerPath(
          "/Staff/teaching-staff/TEACHING_STAFF_26.pdf",
          "Teaching Staff",
        ),
        opensDocument: true,
      },
      {
        label: "Non Teaching Staff",
        to: getDocumentViewerPath(
          "/Staff/teaching-staff/NON_TEACHING_STAFF_26.pdf",
          "Non Teaching Staff",
        ),
        opensDocument: true,
      },
      {
        label: "Hospital Staff",
        to: getDocumentViewerPath(
          "/Staff/teaching-staff/HOSPITAL_STAFF26.pdf",
          "Hospital Staff",
        ),
        opensDocument: true,
      },
      {
        label: "Monthly Attendance",
        to: "",
        submenu: [
          {
            label: "Teaching Staff",
            to: "/staff/monthly-attendance/teaching-staff",
          },
          {
            label: "Non Teaching Staff",
            to: "/staff/monthly-attendance/non-teaching-staff",
          },
          {
            label: "Hospital Staff",
            to: "/staff/monthly-attendance/hospital-staff",
          },
        ],
      },
    ],
  },
  {
    label: "College",
    to: "",
    submenu: [
      {
        label: "Lab",
        to: "/labs",
      },
      {
        label: "Infrastructure",
        to: "/infrastructure",
      },
      { label: "Paper/Book Published", to: "/paper-book-published" },
      {
        label: "Committees",
        to: "",
        submenu: [
      {
        label: "HR Development Cell",
            to: getDocumentViewerPath(
              "/committees/HRDevelopment26.pdf",
              "HR Development Cell",
            ),
            opensDocument: true,
          },
          {
            label: "Student Support Cell",
            to: getDocumentViewerPath(
              "/committees/Student_SupportCell_2026.pdf",
              "Student Support Cell",
            ),
            opensDocument: true,
          },
          {
            label: "Research & Innovation Cell",
            to: getDocumentViewerPath(
              "/committees/Research26.pdf",
              "Research & Innovation Cell",
            ),
            opensDocument: true,
          },
          {
            label: "Career Guidance & Placement Cell",
            to: getDocumentViewerPath(
              "/committees/Career26.pdf",
              "Career Guidance & Placement Cell",
            ),
            opensDocument: true,
          },
          {
            label: "Grievance Redressal Cell",
            to: getDocumentViewerPath(
              "/committees/Grevience26.pdf",
              "Grievance Redressal Cell",
            ),
            opensDocument: true,
          },
          {
            label: "Committee Against Sexual Harassment",
            to: getDocumentViewerPath(
              "/committees/SexualCommittee26.pdf",
              "Committee Against Sexual Harassment",
            ),
            opensDocument: true,
          },
          {
            label: "Internal Quality Assurance Cell",
            to: getDocumentViewerPath(
              "/committees/InternalQuality26.pdf",
              "Internal Quality Assurance Cell",
            ),
            opensDocument: true,
          },
          {
            label: "Anti-Ragging Committee",
            to: getDocumentViewerPath(
              "/committees/AntiRaging26.pdf",
              "Anti-Ragging Committee",
            ),
            opensDocument: true,
          },
          {
            label: "Academic Committee",
            to: getDocumentViewerPath(
              "/committees/AcademicCommittee26.pdf",
              "Academic Committee",
            ),
            opensDocument: true,
          },
          {
            label: "College Council",
            to: getDocumentViewerPath(
              "/committees/CollegeCouncill26.pdf",
              "College Council",
            ),
            opensDocument: true,
          },
          {
            label: "Student Council",
            to: getDocumentViewerPath(
              "/committees/StudentCouncil25.pdf",
              "Student Council",
            ),
            opensDocument: true,
          },
          {
            label: "Co-curricular & Extracurricular Activites",
            to: getDocumentViewerPath(
              "/committees/extracurricular26.pdf",
              "Co-curricular & Extracurricular Activites",
            ),
            opensDocument: true,
          },
        ],
      },
    ],
  },
  {
    label: "Hospital",
    to: "",
    submenu: [
      { label: "OPD", to: "/hospital/opd" },
      { label: "IPD", to: "/hospital/ipd" },
      { label: "Bed Occupancy", to: "/hospital/bed-occupancy" },
      { label: "Hospital Patient Data", to: "" },
    ],
  },
  {
    label: "Academics",
    to: "/academics",
    submenu: [
      { label: "Academic Values", to: "/academic-values" },
      { label: "Biometric Attendance", to: "" },
      { label: "Courses Offered", to: "/course" },
    ],
  },
  {
    label: "Student's Corner",
    to: "",
    submenu: [
      { label: "Merit wise list of Admitted Students", to: "/merit-list-students" },
      { label: "Rules & Regulations", to: "" },
      { label: "Students List", to: "/student-list" },
      { label: "Results", to: "" },
      {
        label: "Admission Information",
        to: "/admission-process",
      },
    ],
  },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  );
  const [openMobileSubDropdown, setOpenMobileSubDropdown] = useState<
    string | null
  >(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenMobileDropdown(null);
    setOpenMobileSubDropdown(null);
  };

  const hasActiveSubmenu = (submenu: NavChildLink[] = []): boolean =>
    submenu.some((item) => {
      if (location.pathname === item.to && item.to !== "") return true;
      if (item.submenu) return hasActiveSubmenu(item.submenu);
      return false;
    });

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown((current) => {
      const nextDropdown = current === label ? null : label;
      setOpenMobileSubDropdown(null);
      return nextDropdown;
    });
  };

  const toggleMobileSubDropdown = (parentLabel: string, label: string) => {
    if (openMobileDropdown !== parentLabel) {
      setOpenMobileDropdown(parentLabel);
    }

    const dropdownKey = `${parentLabel}:${label}`;
    setOpenMobileSubDropdown((current) =>
      current === dropdownKey ? null : dropdownKey,
    );
  };

  return (
    <nav
      className="sticky top-0 z-120 overflow-visible border-b border-emerald-900/10 bg-[#fdfbf5]/95 backdrop-blur-xl"
      aria-label="Primary"
    >
      <div className="mx-auto flex h-16 w-full max-w-425 items-center justify-between gap-4 px-4 lg:min-h-20 lg:px-8">
        <Link
          to="/"
          aria-label="Babu Yugraj home"
          className="flex items-center lg:hidden"
        >
          <img className="h-10 w-auto" src="/logo.png" alt="Babu Yugraj Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
          <div className="flex flex-wrap items-center justify-center gap-1 px-4 py-2">
            {navLinks.map((link) => (
              <div key={link.label} className="group relative shrink-0">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-[14px] font-semibold transition-all hover:bg-white/70 hover:text-emerald-800 ${
                      (isActive && link.to !== "") ||
                      hasActiveSubmenu(link.submenu)
                        ? "bg-white/80 text-emerald-800 shadow-sm"
                        : "text-slate-700"
                    }`
                  }
                >
                  <span>{link.label}</span>
                  {link.submenu && link.submenu.length > 0 && (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      className="h-4 w-4 opacity-50 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5 7.5 5 5 5-5"
                      />
                    </svg>
                  )}
                </NavLink>

                {/* Submenu */}
                {link.submenu && link.submenu.length > 0 && (
                  <div className="pointer-events-none absolute left-1/2 top-full z-20 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                    <div className="min-w-[16rem] rounded-2xl border border-emerald-900/10 bg-white p-2 shadow-2xl shadow-emerald-950/10">
                      {link.submenu.map((item) => (
                        <div key={item.label} className="group/sub relative">
                          {item.opensDocument ? (
                            <Link
                              to={item.to}
                              className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-800"
                            >
                              <span>{item.label}</span>
                              {item.submenu && (
                                <svg
                                  className="h-3.5 w-3.5 -rotate-90 opacity-40"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2.5"
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              )}
                            </Link>
                          ) : (
                            <NavLink
                              to={item.to}
                              className={({ isActive }) =>
                                `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-emerald-50 hover:text-emerald-800 ${
                                  isActive && item.to !== ""
                                    ? "bg-emerald-50 text-emerald-800"
                                    : "text-slate-700"
                                }`
                              }
                            >
                              <span>{item.label}</span>
                              {item.submenu && (
                                <svg
                                  className="h-3.5 w-3.5 -rotate-90 opacity-40"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2.5"
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              )}
                            </NavLink>
                          )}
                          {/* Nested Submenu */}
                          {item.submenu && (
                            <div className="pointer-events-none invisible absolute left-full top-0 ml-2 translate-x-2 opacity-0 transition-all duration-200 group-hover/sub:pointer-events-auto group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:opacity-100 group-focus-within/sub:pointer-events-auto group-focus-within/sub:visible group-focus-within/sub:translate-x-0 group-focus-within/sub:opacity-100">
                              <div className="w-72 rounded-2xl border border-emerald-900/10 bg-white p-2 shadow-2xl shadow-emerald-950/10">
                                {item.submenu.map((sub) => (
                                  sub.opensDocument ? (
                                    <Link
                                      key={sub.label}
                                      to={sub.to}
                                      className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                                    >
                                      {sub.label}
                                    </Link>
                                  ) : (
                                    <NavLink
                                      key={sub.label}
                                      to={sub.to}
                                      className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                                    >
                                      {sub.label}
                                    </NavLink>
                                  )
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden shrink-0 lg:block">
          <Link
            className="rounded-full bg-rose-900 px-6 py-2.5 text-sm font-bold text-white transition-transform hover:bg-rose-950 active:scale-95 shadow-md"
            to="/admission"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() =>
            setIsMenuOpen((open) => {
              if (open) {
                setOpenMobileDropdown(null);
                setOpenMobileSubDropdown(null);
              }
              return !open;
            })
          }
        >
          <span className="sr-only">Toggle navigation</span>
          <div
            className={`h-0.5 w-6 bg-emerald-900 transition-all ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <div
            className={`h-0.5 w-6 bg-emerald-900 transition-all ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <div
            className={`h-0.5 w-6 bg-emerald-900 transition-all ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`absolute left-0 right-0 top-full overflow-hidden bg-white shadow-2xl transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "max-h-[85vh] border-b border-emerald-900/10 opacity-100 overflow-y-auto"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-1 p-4">
          {navLinks.map((link) => (
            <div key={link.label} className="rounded-xl overflow-hidden">
              <div className="flex items-center">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex-1 px-4 py-3.5 text-[15px] font-semibold transition-colors ${
                      (isActive && link.to !== "") ||
                      hasActiveSubmenu(link.submenu)
                        ? "bg-emerald-50 text-emerald-800"
                        : "text-slate-700"
                    }`
                  }
                  onClick={
                    link.submenu
                      ? () => toggleMobileDropdown(link.label)
                      : closeMenu
                  }
                >
                  {link.label}
                </NavLink>

                {link.submenu && link.submenu.length > 0 && (
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown(link.label)}
                    className="flex h-12 w-12 items-center justify-center text-emerald-900 hover:bg-emerald-50"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className={`h-5 w-5 transition-transform ${openMobileDropdown === link.label ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m5 7.5 5 5 5-5" />
                    </svg>
                  </button>
                )}
              </div>

              {link.submenu && link.submenu.length > 0 && (
                <div
                  className={`overflow-hidden transition-all duration-300 bg-slate-50/50 ${
                    openMobileDropdown === link.label
                      ? "max-h-375 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="py-2 pl-4 pr-2">
                    {link.submenu.map((item) => (
                      <div key={item.label} className="mb-1">
                        <div className="flex items-center">
                          {item.opensDocument ? (
                            <Link
                              to={item.to}
                              className="block flex-1 rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-emerald-50 hover:text-emerald-800"
                              onClick={closeMenu}
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <NavLink
                              to={item.to}
                              className={({ isActive }) =>
                                `block flex-1 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                                  (isActive && item.to !== "") ||
                                  hasActiveSubmenu(item.submenu)
                                    ? "bg-emerald-50 text-emerald-800"
                                    : "text-slate-600 active:bg-emerald-100"
                                }`
                              }
                              onClick={
                                item.submenu
                                  ? () =>
                                      toggleMobileSubDropdown(
                                        link.label,
                                        item.label,
                                      )
                                  : closeMenu
                              }
                            >
                              {item.label}
                            </NavLink>
                          )}
                          {item.submenu && (
                            <button
                              type="button"
                              aria-label={`Toggle ${item.label} submenu`}
                              aria-expanded={
                                openMobileSubDropdown ===
                                `${link.label}:${item.label}`
                              }
                              onClick={() =>
                                toggleMobileSubDropdown(link.label, item.label)
                              }
                              className="flex h-11 w-11 items-center justify-center rounded-lg text-emerald-900 hover:bg-white"
                            >
                              <svg
                                viewBox="0 0 20 20"
                                className={`h-4 w-4 transition-transform ${
                                  openMobileSubDropdown ===
                                  `${link.label}:${item.label}`
                                    ? "rotate-180"
                                    : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="m5 7.5 5 5 5-5" />
                              </svg>
                            </button>
                          )}
                        </div>
                        {item.submenu && (
                          <div
                            className={`ml-4 mt-1 overflow-hidden border-l-2 border-emerald-100 pl-3 transition-all duration-300 ${
                              openMobileSubDropdown ===
                              `${link.label}:${item.label}`
                                ? "max-h-225 space-y-1 opacity-100"
                                : "max-h-0 space-y-0 opacity-0"
                            }`}
                          >
                            {item.submenu.map((sub) => (
                              sub.opensDocument ? (
                                <Link
                                  key={sub.label}
                                  to={sub.to}
                                  className="block py-2.5 text-xs font-medium text-slate-500 transition-colors hover:text-emerald-800 active:text-emerald-800"
                                  onClick={closeMenu}
                                >
                                  {sub.label}
                                </Link>
                              ) : (
                                <NavLink
                                  key={sub.label}
                                  to={sub.to}
                                  className="block py-2.5 text-xs font-medium text-slate-500 transition-colors hover:text-emerald-800 active:text-emerald-800"
                                  onClick={closeMenu}
                                >
                                  {sub.label}
                                </NavLink>
                              )
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Link
              className="flex w-full items-center justify-center rounded-xl bg-rose-900 py-4 text-base font-bold text-white active:bg-rose-950"
              to="/admission"
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
