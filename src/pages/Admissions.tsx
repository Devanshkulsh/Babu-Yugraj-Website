import { useEffect, useState } from "react";
import SectionHeading from "../components/shared/SectionHeading";

const admissionHighlights = [
  {
    title: "BAMS Course",
    detail:
      "Focused Ayurvedic education supported by classroom learning, practical training, and institutional guidance.",
  },
  {
    title: "Admission Guidance",
    detail:
      "Applicants can share their details here and receive clear follow-up support from the admissions team.",
  },
  {
    title: "Responsive Support",
    detail:
      "The enquiry form is the quickest way to begin the conversation and understand the next admission steps.",
  },
];

const Admissions = () => {
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    const checkFormInterval = window.setInterval(() => {
      const formContainer = document.getElementById("formsID7375");

      if (formContainer && formContainer.children.length > 0) {
        setFormLoaded(true);
        window.clearInterval(checkFormInterval);
      }
    }, 500);

    return () => window.clearInterval(checkFormInterval);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <section className="relative overflow-hidden bg-linear-to-b from-[#f6f4ee] to-[#fdfbf5] pt-12 pb-12 sm:pt-16 sm:pb-14 lg:pt-24">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Admissions"
            title={
              <>
                Begin Your{" "}
                <span className="text-emerald-800">Admission Enquiry</span>
              </>
            }
            description="Fill out the enquiry form and our team will guide you through the next steps for BAMS admission in a clear and supportive way."
            align="center"
            className="mb-10 sm:mb-12"
          />

          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-6">
              <div className="rounded-4xl border border-emerald-900/10 bg-white p-6 shadow-md shadow-slate-900/5 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-900">
                  Admission Support
                </p>
                <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
                  A layout that matches the rest of the campus experience
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  This section follows the same visual language used across the
                  website with warm ivory tones, emerald accents, rounded cards,
                  and a clear two-column structure for content and action.
                </p>

                <div className="mt-6 space-y-4">
                  {admissionHighlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-emerald-900/10 bg-[#f6f4ee] p-4"
                    >
                      <p className="text-sm font-black text-slate-900 sm:text-base">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-4xl border border-emerald-900/10 bg-emerald-900 p-6 text-white shadow-xl shadow-emerald-950/20 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                  Before You Submit
                </p>
                <p className="mt-4 text-sm leading-7 text-emerald-50 sm:text-base">
                  Keep your contact details correct so the admissions team can
                  reach you smoothly and continue the process without delay.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-4xl border border-emerald-900/10 bg-white shadow-xl shadow-slate-900/10">
              <div className="border-b border-emerald-900/10 bg-[#f6f4ee] px-4 py-4 sm:px-8 sm:py-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-900">
                  Admission Enquiry Form
                </p>
                <h2 className="mt-2 text-xl font-black text-slate-900 sm:text-2xl">
                  Share your details with us
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                  Complete the form below and our team will contact you
                  regarding the next steps.
                </p>
              </div>

              {!formLoaded && (
                <div className="mx-4 mt-4 rounded-2xl border border-amber-300/60 bg-amber-50 px-4 py-3 sm:mx-8 sm:mt-5">
                  <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                    If the admission form does not appear below, please reload
                    the page.
                  </p>
                </div>
              )}

              <div className="p-3 sm:p-8">
                <div
                  id="formsID7375"
                  className="min-h-60 overflow-hidden rounded-3xl border border-dashed border-emerald-900/12 bg-[#fdfbf5]"
                />
              </div>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-3xl px-2 text-center text-xs leading-6 text-slate-500 sm:mt-8 sm:text-sm">
            By submitting this form, you agree to be contacted by the admission
            team of Babu Yugraj Singh Ayurvedic Medical College & Hospital.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
