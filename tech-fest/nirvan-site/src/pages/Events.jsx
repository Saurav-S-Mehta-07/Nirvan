import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Clock,
  Users,
  Trophy,
  ArrowRight,
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

const categories = ["All", "Tech", "Design", "Gaming", "Fun"];

export default function Events() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [registerOpen, setRegisterOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");
  const fadeRefs = useRef([]);

  // Intersection Observer for fade-up animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeCategory]);

  const addFadeRef = (el) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };

  const filteredEvents =
    activeCategory === "All"
      ? events
      : events.filter((e) => e.category === activeCategory);

  const handleRegisterClick = (slug) => {
    setSelectedEvent(slug);
    setRegisterOpen(true);
  };

  return (
    <div className="min-h-screen pt-20 pb-24 px-6 max-w-7xl mx-auto">
      {/* ── Page Header ── */}
      <div className="text-center mb-16" ref={addFadeRef}>
        <span className="label-mono text-accent-gold text-xs tracking-[0.15em] mb-4 block fade-up">
          05 EVENT ARENA
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-warm mb-6 fade-up">
          The Grand Trials
        </h1>
        <p className="font-body text-text-muted max-w-2xl mx-auto text-lg leading-relaxed fade-up">
          From algorithmic marathons to intense tactical shootouts, choose your
          arena and prove your mastery.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mt-8 opacity-50 fade-up" />
      </div>

      {/* ── Category Filters ── */}
      <div
        className="flex flex-wrap justify-center gap-3 mb-12 fade-up"
        ref={addFadeRef}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              // Reset fade refs to re-animate on filter change
              fadeRefs.current.forEach((el) => {
                if (el) el.classList.remove("visible");
              });
            }}
            className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 border ${
              activeCategory === cat
                ? "bg-accent-indigo/10 border-accent-indigo text-accent-indigo-bright"
                : "bg-surface border-hairline text-text-muted hover:border-text-dim hover:text-text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Events Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event, i) => {
          const IconComp = iconMap[event.icon] || Code;
          return (
            <div
              key={event.id}
              ref={addFadeRef}
              className="fade-up metallic-frame rounded-lg overflow-hidden enchanted-card group flex flex-col"
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              {/* Card header with gradient or image */}
              <div className="relative h-48 overflow-hidden shrink-0">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    event.category === "Tech"
                      ? "from-accent-indigo/20 via-surface to-void"
                      : event.category === "Design"
                      ? "from-accent-violet/20 via-surface to-void"
                      : event.category === "Gaming"
                      ? "from-accent-pink/20 via-surface to-void"
                      : "from-accent-gold/20 via-surface to-void"
                  }`}
                />
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 group-hover:opacity-80 transition-all duration-500"
                  />
                )}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />
                <CategoryBadge
                  category={event.category}
                  className="absolute top-4 left-4 z-10"
                />
                <div className="absolute top-4 right-4 z-10 text-text-warm bg-void/50 p-2 rounded-md backdrop-blur-md">
                  <IconComp size={20} />
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-2xl font-bold text-text-warm mb-3">
                  {event.title}
                </h3>
                <p className="font-body text-sm text-text-muted mb-6 line-clamp-3 leading-relaxed flex-1">
                  {event.description}
                </p>

                {/* Meta row */}
                <div className="flex flex-col gap-2 mb-6 border-t border-hairline pt-4">
                  <div className="flex items-center gap-2 text-text-dim text-xs font-mono">
                    <Clock size={13} />
                    <span>
                      {event.date} • {event.time} ({event.duration})
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-text-dim text-xs font-mono">
                      <Users size={13} /> {event.teamSize}
                    </span>
                    {event.prize !== "—" && (
                      <span className="flex items-center gap-1.5 text-text-dim text-xs font-mono text-accent-gold">
                        <Trophy size={13} /> Prize: {event.prize}
                      </span>
                    )}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Link
                    to={`/events/${event.slug}`}
                    className="flex-1 text-center btn-secondary px-4 py-2.5 rounded-[4px] font-mono text-xs uppercase tracking-[0.05em]"
                  >
                    Details
                  </Link>
                  <button
                    onClick={() => handleRegisterClick(event.slug)}
                    className="flex-1 text-center btn-primary px-4 py-2.5 rounded-[4px] font-mono text-xs uppercase tracking-[0.05em]"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredEvents.length === 0 && (
        <div className="text-center py-20">
          <p className="font-mono text-text-muted">
            No events found in this category.
          </p>
        </div>
      )}

      <RegisterModal
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
        preSelectedEvent={selectedEvent}
      />
    </div>
  );
}
