import { useState, useEffect, useRef } from "react";
import { Mic, Building2, CalendarDays, User } from "lucide-react";
import { speakers } from "../data/speakers";

const categories = ["All", "Keynote", "Panel", "Workshop"];

export default function Speakers() {
  const [activeCategory, setActiveCategory] = useState("All");
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

  const filteredSpeakers =
    activeCategory === "All"
      ? speakers
      : speakers.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen pt-20 pb-24 px-6 max-w-6xl mx-auto">
      {/* ── Page Header ── */}
      <div className="text-center mb-16" ref={addFadeRef}>
        <span className="label-mono text-accent-gold text-xs tracking-[0.15em] mb-4 block fade-up">
          GUEST VISIONARIES
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-warm mb-6 fade-up">
          Masters of the Craft
        </h1>
        <p className="font-body text-text-muted max-w-2xl mx-auto text-lg leading-relaxed fade-up">
          Learn from industry leaders, innovators, and pioneers who are shaping
          the future of technology.
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
              fadeRefs.current.forEach((el) => {
                if (el) el.classList.remove("visible");
              });
            }}
            className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 border ${
              activeCategory === cat
                ? "bg-accent-gold/10 border-accent-gold text-accent-gold"
                : "bg-surface border-hairline text-text-muted hover:border-text-dim hover:text-text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Speakers Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSpeakers.map((speaker, index) => (
          <div
            key={speaker.id}
            ref={addFadeRef}
            className="fade-up metallic-frame rounded-lg overflow-hidden enchanted-card flex flex-col group"
            style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
          >
            {/* Speaker Header / Avatar Area */}
            <div className="relative pt-12 pb-6 px-6 flex flex-col items-center text-center">
              <div
                className={`absolute inset-0 bg-gradient-to-b opacity-20 ${
                  index % 3 === 0
                    ? "from-accent-indigo"
                    : index % 3 === 1
                    ? "from-accent-violet"
                    : "from-accent-gold"
                } via-surface to-void`}
              />
              
              <div className="relative z-10 w-24 h-24 rounded-full border-2 border-hairline bg-surface flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                {speaker.photo ? (
                  <img src={speaker.photo} alt={speaker.name} className="w-full h-full object-cover" />
                ) : (
                  <User size={40} className="text-text-dim" />
                )}
              </div>
              
              <h2 className="relative z-10 font-display text-2xl font-bold text-text-warm mb-1">
                {speaker.name}
              </h2>
              <div className="relative z-10 font-mono text-xs text-accent-gold tracking-widest uppercase mb-2">
                {speaker.role}
              </div>
              <div className="relative z-10 flex items-center gap-1.5 text-text-muted text-sm font-body">
                <Building2 size={14} />
                <span>{speaker.org}</span>
              </div>
            </div>

            {/* Speaker Bio & Sessions */}
            <div className="p-6 pt-2 flex-1 flex flex-col border-t border-hairline bg-surface/30">
              <p className="font-body text-sm text-text-muted leading-relaxed mb-6 flex-1 text-center">
                {speaker.bio}
              </p>

              <div>
                <h3 className="font-mono text-xs text-text-dim tracking-widest uppercase mb-3 flex items-center gap-2">
                  <Mic size={14} className="text-accent-indigo" /> Scheduled Appearances
                </h3>
                <ul className="space-y-2">
                  {speaker.sessions.map((session, sIdx) => (
                    <li
                      key={sIdx}
                      className="bg-void/50 border border-hairline rounded px-3 py-2 text-sm"
                    >
                      <div className="font-display font-semibold text-text-primary mb-1">
                        {session.title}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-text-dim font-mono">
                        <CalendarDays size={12} />
                        <span>
                          {session.day} • {session.time}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
