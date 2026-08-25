import { useState, useEffect, useRef } from "react";
import { Clock, MapPin } from "lucide-react";
import { schedule } from "../data/schedule";
import CategoryBadge from "../components/CategoryBadge";

export default function Schedule() {
  const [activeDay, setActiveDay] = useState("day1");
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
  }, [activeDay]);

  const addFadeRef = (el) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };

  const currentSchedule = schedule[activeDay];

  return (
    <div className="min-h-screen pt-20 pb-24 px-6 max-w-4xl mx-auto">
      {/* ── Page Header ── */}
      <div className="text-center mb-16" ref={addFadeRef}>
        <span className="label-mono text-accent-gold text-xs tracking-[0.15em] mb-4 block fade-up">
          EVENT TIMELINE
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-warm mb-6 fade-up">
          Schedule
        </h1>
        <p className="font-body text-text-muted max-w-2xl mx-auto text-lg leading-relaxed fade-up">
          Plan your strategy. Ensure you arrive at the designated coordinates on
          time.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mt-8 opacity-50 fade-up" />
      </div>

      {/* ── Day Tabs ── */}
      <div
        className="flex justify-center gap-2 md:gap-4 mb-16 fade-up"
        ref={addFadeRef}
      >
        {Object.entries(schedule).map(([key, dayData]) => (
          <button
            key={key}
            onClick={() => {
              setActiveDay(key);
              // Reset fade refs to re-animate on tab change
              fadeRefs.current.forEach((el) => {
                if (el) el.classList.remove("visible");
              });
            }}
            className={`px-6 py-3 rounded-md font-mono text-sm uppercase tracking-widest transition-all duration-300 border ${
              activeDay === key
                ? "bg-surface border-accent-gold text-accent-gold shadow-[0_0_15px_rgba(232,191,122,0.15)]"
                : "bg-void border-hairline text-text-muted hover:border-text-dim hover:text-text-primary hover:bg-surface/50"
            }`}
          >
            <span className="block font-bold">{dayData.label}</span>
            <span className="text-[10px] opacity-70 block mt-0.5">
              {dayData.date.split(",")[0]}
            </span>
          </button>
        ))}
      </div>

      {/* ── Timeline ── */}
      <div className="relative">
        {/* Vertical line connecting timeline items */}
        <div className="absolute left-6 md:left-[120px] top-0 bottom-0 w-px bg-hairline hidden md:block" />

        <div className="space-y-8">
          {currentSchedule.items.map((item, index) => (
            <div
              key={index}
              ref={addFadeRef}
              className="fade-up relative flex flex-col md:flex-row gap-6 md:gap-12"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Timeline Time (Left Column) */}
              <div className="md:w-[120px] shrink-0 pt-1 md:text-right flex items-center md:items-start gap-3 md:gap-0">
                <div className="md:hidden w-8 h-8 rounded-full bg-surface border border-hairline flex items-center justify-center text-text-muted">
                  <Clock size={14} />
                </div>
                <div className="font-mono text-xl font-bold text-text-warm tracking-wider">
                  {item.time}
                </div>
              </div>

              {/* Timeline Dot (Center) */}
              <div className="hidden md:flex absolute left-[120px] -translate-x-1/2 mt-2 w-3 h-3 rounded-full bg-accent-gold border-4 border-void z-10" />

              {/* Timeline Content (Right Column) */}
              <div className="flex-1">
                <div className="metallic-frame enchanted-card rounded-lg p-6 bg-surface/50 backdrop-blur-md">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <h3 className="font-display text-xl font-bold text-text-primary">
                      {item.title}
                    </h3>
                    <CategoryBadge category={item.category} />
                  </div>
                  <p className="font-body text-text-muted mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-text-dim text-xs font-mono bg-void/50 w-fit px-3 py-1.5 rounded-full border border-hairline">
                    <MapPin size={14} className="text-accent-violet" />
                    <span>{item.venue}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
