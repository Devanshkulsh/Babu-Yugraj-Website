import SectionHeading from "../components/shared/SectionHeading";

const contactCards = [
  {
    label: "Call Us",
    value: "+91-8303700428 / +91-8303700429",
    href: "tel:+918303700428",
  },
  {
    label: "Email",
    value: "babuyugrajsinghayurveda@gmail.com",
    href: "mailto:babuyugrajsinghayurveda@gmail.com",
  },
  {
    label: "College Code",
    value: "AYU0636",
  },
  {
    label: "Address",
    value:
      "Babu Yugraj Singh Ayurvedic Medical College & Hospital, Sector 6, Gomti Nagar Extension, Lucknow, Uttar Pradesh 226010",
    href: "https://www.google.com/maps/place/Babu+Yugraj+Singh+Ayurvedic+Medical+College+And+Hospital/@26.8292395,81.0199466,17z",
  },
];

const helpDeskItems = [
  {
    title: "Admissions & Counselling",
    detail:
      "Get guidance on NEET-based admission, counselling flow, college code usage, and campus visit support.",
    actionLabel: "WhatsApp Counselling",
    actionHref:
      "https://wa.me/918303700428?text=Hello%2C%20I%20would%20like%20to%20get%20admission%20counselling.",
  },
  {
    title: "General Enquiries",
    detail:
      "Reach out for institutional information, program details, staff support, and document-related questions.",
    actionLabel: "Send Email",
    actionHref: "mailto:babuyugrajsinghayurveda@gmail.com",
  },
  {
    title: "Campus Visits",
    detail:
      "Use the map link and listed phone numbers to coordinate a visit to the campus in Gomti Nagar Extension, Lucknow.",
    actionLabel: "Open Map",
    actionHref:
      "https://www.google.com/maps/place/Babu+Yugraj+Singh+Ayurvedic+Medical+College+And+Hospital/@26.8292395,81.0199466,17z",
  },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <section className="relative overflow-hidden bg-linear-to-b from-[#f6f4ee] to-[#fdfbf5] pt-16 pb-12 lg:pt-24">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Contact Us"
            title={
              <>
                Let&apos;s Help You{" "}
                <span className="text-emerald-800">Connect</span>
              </>
            }
            description="Reach the college for admissions, campus visits, general support, and institutional information through the most convenient channel."
            align="center"
            className="mb-12"
          />

          <div className="grid gap-6 lg:grid-cols-[1.05fr_1.2fr]">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {contactCards.map((card) =>
                  card.href ? (
                    <a
                      key={card.label}
                      href={card.href}
                      target={
                        card.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        card.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-md shadow-slate-900/5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-900">
                        {card.label}
                      </p>
                      <p className="mt-4 text-sm font-semibold leading-7 text-slate-700">
                        {card.value}
                      </p>
                    </a>
                  ) : (
                    <div
                      key={card.label}
                      className="rounded-3xl border border-emerald-900/10 bg-white p-6 shadow-md shadow-slate-900/5"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-900">
                        {card.label}
                      </p>
                      <p className="mt-4 text-sm font-semibold leading-7 text-slate-700">
                        {card.value}
                      </p>
                    </div>
                  ),
                )}
              </div>

              <div className="rounded-4xl border border-emerald-900/10 bg-emerald-900 p-6 text-white shadow-xl shadow-emerald-950/20">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                  Social Presence
                </p>
                <h2 className="mt-2 text-xl font-black sm:text-2xl">
                  Stay in touch beyond campus
                </h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/20"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-4xl border border-emerald-900/10 bg-white p-3 shadow-2xl shadow-slate-900/10">
              <div className="h-72 overflow-hidden rounded-3xl sm:h-96 lg:h-full">
                <iframe
                  title="College location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.33675341842!2d81.01994661245459!3d26.829239476599952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3946fdb3b69%3A0x7a9955446ed14905!2sBabu%20Yugraj%20Singh%20Ayurvedic%20Medical%20College%20And%20Hospital!5e0!3m2!1sen!2sin!4v1777464927720!5m2!1sen!2sin"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f4ee] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-900">
              Contact Pathways
            </p>
            <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
              Choose the fastest route for your query
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {helpDeskItems.map((item) => (
              <div
                key={item.title}
                className="rounded-4xl border border-emerald-900/10 bg-white p-7 shadow-md shadow-slate-900/5"
              >
                <p className="text-lg font-black text-slate-900">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.detail}
                </p>
                <a
                  href={item.actionHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-rose-900 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-rose-950"
                >
                  {item.actionLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
