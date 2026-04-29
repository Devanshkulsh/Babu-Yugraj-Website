import { Link } from "react-router-dom";

const contactNumbers = ["+91 00000 00000", "+91 11111 11111"];
const campusAddress = "Campus Address, City, State";
const campusMapUrl = "https://maps.google.com/?q=Campus+Address,+City,+State";
const collegeCode = "AYU0636";

const Topbar = () => {
  return (
    <div className="bg-emerald-900 text-white/95">
      <div className="mx-auto flex w-full max-w-295 flex-col gap-3 px-3 py-2 sm:px-4 lg:flex-row lg:items-center lg:justify-between">
        <div
          className="grid w-full grid-cols-1 gap-2 min-[480px]:grid-cols-2 lg:flex lg:w-auto lg:flex-wrap lg:items-center"
          aria-label="School contacts"
        >
          {contactNumbers.map((phoneNumber) => (
            <a
              key={phoneNumber}
              href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
              className="inline-flex min-h-11 items-center justify-between gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-[12px] transition-colors hover:bg-white/20 sm:text-[13px] lg:min-h-0 lg:rounded-full lg:py-1.5"
            >
              <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.08em] text-white/60 sm:text-[0.72rem]">
                Call
              </span>
              <span className="truncate text-right">{phoneNumber}</span>
            </a>
          ))}

          <div className="inline-flex min-h-11 items-center justify-between gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-[12px] sm:text-[13px] lg:min-h-0 lg:rounded-full lg:py-1.5">
            <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.08em] text-white/60 sm:text-[0.72rem]">
              College Code
            </span>
            <span className="truncate text-right font-semibold tracking-[0.06em]">
              {collegeCode}
            </span>
          </div>

          <a
            href={campusMapUrl}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-11 flex-col items-start gap-1 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-[12px] transition-colors hover:bg-white/20 min-[480px]:col-span-2 sm:text-[13px] lg:ml-auto lg:min-h-0 lg:flex-row lg:items-center lg:justify-between lg:gap-2 lg:rounded-full lg:py-1.5"
          >
            <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.08em] text-white/60 sm:text-[0.72rem]">
              Visit
            </span>
            <span className="w-full text-left leading-snug lg:w-auto lg:truncate">
              {campusAddress}
            </span>
          </a>
        </div>

        <Link
          className="inline-flex min-h-11 w-full shrink-0 items-center justify-center rounded-full bg-amber-400 px-5 py-2.5 text-sm font-extrabold text-slate-800 shadow-[0_10px_24px_rgba(240,180,41,0.28)] transition-transform active:scale-95 sm:min-h-10 lg:w-auto lg:px-6 lg:py-2"
          to="/admissions"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
