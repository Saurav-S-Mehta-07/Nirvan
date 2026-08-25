import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Home,
  Info,
  CalendarDays,
  CalendarClock,
  Users,
  Image,
  Mail,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/events", label: "Events", icon: CalendarDays },
  { to: "/schedule", label: "Schedule", icon: CalendarClock },
  { to: "/speakers", label: "Speakers", icon: Users },
  { to: "/gallery", label: "Gallery", icon: Image },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── Mobile top bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 bg-void/95 backdrop-blur-md border-b border-hairline lg:hidden">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/techgeeks-white.svg"
            alt="Tech Geeks"
            className="w-8 h-8"
          />
          <div>
            <h1 className="text-sm font-display font-bold text-accent-indigo-bright leading-none">
              NIRVAN '26
            </h1>
            <span className="label-mono text-[9px] text-text-muted">
              GEHU Tech Fest
            </span>
          </div>
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-md text-text-muted hover:text-text-primary hover:bg-surface transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile overlay ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* ── Sidebar / Mobile drawer ── */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen bg-void border-r border-hairline
          flex flex-col
          w-[var(--sidebar-width)]
          transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* ── Logo area ── */}
        <Link
          to="/"
          className="flex items-center gap-3 px-5 pt-6 pb-2"
          onClick={() => setMobileOpen(false)}
        >
          <div className="w-12 h-12 rounded-lg bg-surface border border-hairline flex items-center justify-center shrink-0 overflow-hidden p-1.5">
            <img
              src="/techgeeks-white.svg"
              alt="Tech Geeks"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>
        <div className="px-5 pb-4">
          <h1 className="font-display text-xl font-bold text-accent-indigo-bright leading-tight tracking-tight">
            NIRVAN '26
          </h1>
          <span className="label-mono text-[10px] text-text-muted mt-0.5 block">
            GEHU Tech Fest
          </span>
        </div>

        {/* ── Nav links ── */}
        <nav className="flex-1 flex flex-col gap-0.5 px-2 mt-2">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `group relative flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-surface text-text-warm"
                    : "text-text-muted hover:text-text-primary hover:bg-surface/50"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Left accent bar */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-accent-indigo" />
                  )}
                  <Icon
                    size={18}
                    className={
                      isActive
                        ? "text-accent-indigo-bright"
                        : "text-text-dim group-hover:text-text-muted"
                    }
                  />
                  <span className="font-body">{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ── Bottom section ── */}
        <div className="px-5 py-4 border-t border-hairline">
          <span className="label-mono text-[9px] text-text-dim block">
            Oct 24–26, 2026
          </span>
        </div>
      </aside>
    </>
  );
}
