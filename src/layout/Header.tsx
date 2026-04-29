import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="hidden border-b border-slate-100 py-4 sm:py-8 lg:block">
      <div className="mx-auto w-full max-w-295 px-6">
        <Link
          className="flex flex-col items-center gap-3 sm:gap-5 text-center transition-opacity hover:opacity-90"
          to="/"
          aria-label="Babu Yugraj home"
        >
          <img
            className="h-16 w-auto xs:h-20 sm:h-24 md:h-28"
            src="/logo.png"
            alt="Babu Yugraj Logo"
          />

          <div className="grid gap-1">
            <span className="max-w-70 sm:max-w-none text-sm sm:text-base md:text-lg font-medium text-slate-600 leading-tight">
              Excellence in learning, leadership, and growth
            </span>
            <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full mt-1 sm:hidden" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
