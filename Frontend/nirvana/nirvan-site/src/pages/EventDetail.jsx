import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  MapPin,
  Users,
  Trophy,
  IndianRupee,
  Code,
  Pen,
  Gamepad2,
  Terminal,
  Bot,
  Cpu,
  Shield,
  Map,
  GraduationCap,
} from "lucide-react";
import CategoryBadge from "../components/CategoryBadge";
import RegisterModal from "../components/RegisterModal";
import { events } from "../data/events";

const iconMap = {
  Code,
  Pen,
  Gamepad2,
  Terminal,
  Bot,
  Cpu,
  Shield,
  Map,
  GraduationCap,
};

export default function EventDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [registerOpen, setRegisterOpen] = useState(false);

  // Find the event by slug
  const event = events.find((e) => e.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-display text-4xl font-bold text-text-warm mb-4">
          Event Not Found
        </h1>
        <p className="text-text-muted font-body mb-8">
          The event you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/events"
          className="btn-primary px-6 py-3 rounded-[4px] font-mono text-sm uppercase tracking-widest flex items-center gap-2"
        >
          <ArrowLeft size={16} /> Back to Events
        </Link>
      </div>
    );
  }

  const IconComp = iconMap[event.icon] || Code;

  return (
    <div className="min-h-screen pb-24">
      {/* ── Event Hero ── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-12 px-6">
        {/* Background */}
        <div className="absolute inset-0 bg-void">
          {event.image ? (
            <img
              src={event.image}
              alt={event.title}
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br opacity-30 ${
                event.category === "Tech"
                  ? "from-accent-indigo via-surface to-void"
                  : event.category === "Design"
                  ? "from-accent-violet via-surface to-void"
                  : event.category === "Gaming"
                  ? "from-accent-pink via-surface to-void"
                  : "from-accent-gold via-surface to-void"
              }`}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto w-full animate-fade-in">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-text-muted hover:text-accent-gold transition-colors font-mono text-xs uppercase tracking-widest mb-6"
          >
            <ArrowLeft size={14} /> Back to Arena
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <CategoryBadge category={event.category} />
            <span className="label-mono flex items-center gap-1.5 bg-surface/50 backdrop-blur-sm px-3 py-1 rounded-full border border-hairline text-text-primary">
              <IconComp size={14} /> {event.tag}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-text-warm mb-4 leading-tight">
            {event.title}
          </h1>
          <p className="font-display text-xl md:text-2xl text-text-muted max-w-3xl">
            {event.shortDescription}
          </p>
        </div>
      </section>

      {/* ── Event Content Layout ── */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
        {/* Left Column: Details (2/3 width) */}
        <div className="lg:col-span-2 space-y-12 animate-slide-up">
          {/* About */}
          <div>
            <h2 className="font-display text-2xl font-bold text-text-warm mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-accent-gold rounded-full" />
              Mission Brief
            </h2>
            <p className="font-body text-text-muted leading-relaxed text-lg">
              {event.description}
            </p>
          </div>

          {/* Rules */}
          {event.rules && event.rules.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-text-warm mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-accent-indigo rounded-full" />
                Rules of Engagement
              </h2>
              <ul className="space-y-3">
                {event.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-indigo shrink-0" />
                    <span className="font-body text-text-muted leading-relaxed">
                      {rule}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Eligibility */}
          {event.eligibility && event.eligibility.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-text-warm mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-accent-violet rounded-full" />
                Eligibility Parameters
              </h2>
              <ul className="space-y-3">
                {event.eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-violet shrink-0" />
                    <span className="font-body text-text-muted leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column: Sticky Meta Panel (1/3 width) */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 metallic-frame rounded-xl p-6 lg:p-8 animate-fade-in bg-surface/50 backdrop-blur-xl">
            <h3 className="font-display text-xl font-bold text-text-warm mb-6">
              Event Intel
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface border border-hairline flex items-center justify-center shrink-0">
                  <CalendarDays size={18} className="text-accent-gold" />
                </div>
                <div>
                  <span className="label-mono text-[10px] text-text-dim block mb-1">
                    DATE
                  </span>
                  <span className="font-body text-text-primary font-medium block">
                    {event.date}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface border border-hairline flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-accent-indigo" />
                </div>
                <div>
                  <span className="label-mono text-[10px] text-text-dim block mb-1">
                    TIME & DURATION
                  </span>
                  <span className="font-body text-text-primary font-medium block">
                    {event.time} ({event.duration})
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface border border-hairline flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-accent-violet" />
                </div>
                <div>
                  <span className="label-mono text-[10px] text-text-dim block mb-1">
                    VENUE
                  </span>
                  <span className="font-body text-text-primary font-medium block">
                    {event.venue}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface border border-hairline flex items-center justify-center shrink-0">
                  <Users size={18} className="text-accent-pink" />
                </div>
                <div>
                  <span className="label-mono text-[10px] text-text-dim block mb-1">
                    TEAM SIZE
                  </span>
                  <span className="font-body text-text-primary font-medium block">
                    {event.teamSize}
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-hairline my-6" />

              <div className="flex items-center justify-between">
                <div>
                  <span className="label-mono text-[10px] text-text-dim block mb-1">
                    REGISTRATION FEE
                  </span>
                  <span className="font-display text-xl font-bold text-text-warm flex items-center">
                    {event.fee === "Free" || event.fee === "—" ? (
                      event.fee
                    ) : (
                      <>
                        <IndianRupee size={18} className="mr-0.5" />
                        {event.fee.replace("₹", "")}
                      </>
                    )}
                  </span>
                </div>
                <div className="text-right">
                  <span className="label-mono text-[10px] text-text-dim block mb-1">
                    PRIZE POOL
                  </span>
                  <span className="font-display text-xl font-bold text-accent-gold flex items-center justify-end">
                    {event.prize === "—" ? (
                      "—"
                    ) : (
                      <>
                        <Trophy size={16} className="mr-1.5" />
                        {event.prize}
                      </>
                    )}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setRegisterOpen(true)}
                className="w-full btn-primary px-6 py-4 rounded-[4px] font-mono text-sm uppercase tracking-widest mt-6"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <RegisterModal
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
        preSelectedEvent={event.slug}
      />
    </div>
  );
}
