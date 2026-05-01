import { useEffect, useState } from "react";
import SectionHeading from "../components/shared/SectionHeading";

const FORM_SCRIPT_ID = "ntechzy-admissions-form-script";

const Admissions = () => {
  const [formLoaded, setFormLoaded] = useState(false);

  useEffect(() => {
    const mountFormScript = () => {
      const existingScript = document.getElementById(
        FORM_SCRIPT_ID,
      ) as HTMLScriptElement | null;

      if (existingScript) {
        existingScript.remove();
      }

      const formContainer = document.getElementById("formsID7375");

      if (!formContainer) {
        return;
      }

      formContainer.innerHTML = "";

      const script = document.createElement("script");
      script.id = FORM_SCRIPT_ID;
      script.src = "https://ntechzy.in/api/v1/student-form/form.js";
      script.type = "module";
      script.setAttribute("path", '["/", "/dynamicForm/index.html","/admissions"]');
      script.setAttribute("divid", "formsID7375");
      script.setAttribute("courses", '["Select Course","BAMS"]');
      script.setAttribute("styles", "classic");
      script.setAttribute("logo", "/logo.png");
      script.setAttribute("contact", "8303700428");

      document.body.appendChild(script);
    };

    mountFormScript();

    const checkFormInterval = window.setInterval(() => {
      const formContainer = document.getElementById("formsID7375");

      if (formContainer && formContainer.children.length > 0) {
        setFormLoaded(true);
        window.clearInterval(checkFormInterval);
      }
    }, 500);

    return () => {
      window.clearInterval(checkFormInterval);

      const existingScript = document.getElementById(FORM_SCRIPT_ID);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfbf5]">
      <section className="relative overflow-hidden bg-linear-to-b from-[#f6f4ee] to-[#fdfbf5] pt-12 pb-10 sm:pt-16 sm:pb-12 lg:pt-24">
        <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl sm:-left-24 sm:h-96 sm:w-96" />
        <div className="pointer-events-none absolute -right-28 bottom-0 h-64 w-64 rounded-full bg-rose-100/30 blur-3xl sm:-right-24 sm:h-80 sm:w-80" />

        <div className="relative z-10 mx-auto max-w-5xl px-3 sm:px-6">
          <SectionHeading
            eyebrow="Admissions"
            title={
              <>
                Apply for{" "}
                <span className="text-emerald-800">BAMS Admission</span>
              </>
            }
            description="Share your details through the admission enquiry form and our team will guide you through the next steps in a clear, supportive way."
            align="center"
            className="mb-8 sm:mb-10"
          />

          <div className="overflow-hidden rounded-[1.75rem] border border-emerald-900/10 bg-white/85 shadow-xl shadow-emerald-950/5 backdrop-blur-sm sm:rounded-4xl">
            

            {!formLoaded && (
              <div className="mx-4 mt-4 rounded-2xl border border-amber-300/60 bg-amber-50 px-4 py-3 sm:mx-8 sm:mt-5">
                <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                  If the admission form does not appear below, please reload the
                  page.
                </p>
              </div>
            )}

            <div className="p-3 sm:p-8">
              <div
                id="formsID7375"
                className="min-h-60 overflow-hidden rounded-3xl border border-dashed border-emerald-900/12 bg-[#fdfbf5] sm:rounded-3xl"
              />
            </div>
          </div>

          <p className="mx-auto mt-5 max-w-2xl px-2 text-center text-xs leading-6 text-slate-500 sm:mt-6 sm:text-sm">
            By submitting this form, you agree to be contacted by the admission
            team of Babu Yugraj Singh Ayurvedic Medical College & Hospital.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
