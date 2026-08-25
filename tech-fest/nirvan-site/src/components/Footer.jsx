import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-hairline mt-20 bg-[#0d0e15]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo + name */}
        <div className="flex items-center gap-3">
          <img
            src="/techgeeks-white.svg"
            alt="Tech Geeks"
            className="w-8 h-8 opacity-70"
          />
          <span className="font-display text-lg font-bold text-accent-indigo-bright">
            NIRVAN '26
          </span>
        </div>

        {/* Center — org credit */}
        <p className="text-text-muted text-sm font-body">
          Hosted by Tech Geeks © 2026
        </p>

        {/* Legal links */}
        <div className="flex items-center gap-5">
          <Link
            to="/privacy"
            className="text-text-dim text-sm hover:text-text-muted transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-text-dim text-sm hover:text-text-muted transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            to="/code-of-conduct"
            className="text-text-dim text-sm hover:text-text-muted transition-colors"
          >
            Code of Conduct
          </Link>
        </div>
      </div>
    </footer>
  );
}
