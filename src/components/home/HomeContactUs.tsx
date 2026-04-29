import SectionHeading from "../shared/SectionHeading";

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

const contactCards = [
  { label: "Call Us", value: "+91 00000 00000 / +91 11111 11111" },
  { label: "Email", value: "admissions@babuyugraj.edu.in" },
  { label: "College Code", value: "AYU0636" },
  { label: "Address", value: "Campus Address, City, State, India" },
];

const HomeContactUs = () => {
  return (
    <section
      id="contact-us"
      className="bg-[linear-gradient(180deg,#fffdf8_0%,#f6f4ee_100%)] py-12 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-350 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact Us"
          title="Visit the campus, connect with us, and stay in touch"
          description="Reach out for admissions, campus visits, institutional queries, and updates through the channels that work best for you."
          align="center"
          className="mb-10 sm:mb-12 lg:mb-16"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
          {/* Left Column: Info Cards & Social */}
          <div className="order-2 flex flex-col gap-6 lg:order-1">
            <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 lg:gap-6">
              {contactCards.map((card) => (
                <div
                  key={card.label}
                  className="flex flex-col justify-center rounded-3xl border border-emerald-900/5 bg-white p-6 shadow-sm transition-all hover:shadow-md sm:rounded-4xl sm:p-8"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-rose-900 sm:text-xs">
                    {card.label}
                  </p>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700 sm:mt-4 sm:text-base lg:text-lg">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Social Media Banner */}
            <div className="rounded-3xl border border-emerald-900/5 bg-emerald-900 p-6 text-white shadow-xl shadow-emerald-950/20 sm:rounded-4xl sm:p-10">
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:text-left">
                <div className="text-center md:text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300 sm:text-xs">
                    Social Media
                  </p>
                  <h4 className="mt-1 text-base font-medium text-emerald-50/90 sm:text-lg">
                    Follow our journey
                  </h4>
                </div>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold text-white transition-all hover:bg-white/15 active:scale-95 sm:px-6 sm:py-2.5 sm:text-sm"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="order-1 relative overflow-hidden rounded-3xl border border-emerald-900/5 bg-white p-2 shadow-2xl shadow-slate-900/10 sm:rounded-[2.5rem] lg:order-2 lg:p-4">
            <div className="h-64 overflow-hidden rounded-2xl sm:h-96 lg:h-full">
              <iframe
                title="College location map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14247.97127928238!2d81.042784!3d26.77651!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be59419363919%3A0xcd93b21c21b293cd!2sBabu%20Yugraj%20Singh%20Ayurvedic%20Medical%20College%20%26%20Hospital!5e0!3m2!1sen!2sin!4v1714392000000!5m2!1sen!2sin"
                className="h-full w-full border-0 grayscale-[0.2] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactUs;