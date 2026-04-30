import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) => {
  const isCentered = align === "center";

  return (
    <div
      className={`${isCentered ? "text-center" : "text-left"} ${className}`.trim()}
    >
      {eyebrow ? (
        <div
          className={`mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-900/10 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900 shadow-sm sm:mb-6 sm:text-sm ${
            isCentered ? "mx-auto" : ""
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-700" />
          </span>
          {eyebrow}
        </div>
      ) : null}

      <h2 className="mb-5 text-3xl font-extrabold leading-[1.1] text-slate-900 sm:mb-6 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p
          className={`text-base leading-relaxed text-slate-600 sm:text-lg ${
            isCentered ? "mx-auto max-w-3xl" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
