import { useEffect, useRef } from "react";
import { Sparkles, Trophy, Users } from "lucide-react";
import { sponsors } from "../data/sponsors";

export default function About() {
  const fadeRefs = useRef([]);

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
  }, []);

  const addFadeRef = (el) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-24 px-6 max-w-6xl mx-auto">
      {/* ── Page Header ── */}
      <div className="text-center mb-20" ref={addFadeRef}>
        <span className="label-mono text-accent-gold text-xs tracking-[0.15em] mb-4 block fade-up">
          THE ORIGIN
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-text-warm mb-6 fade-up">
          About NIRVAN '26
        </h1>
        <p className="font-body text-text-muted max-w-2xl mx-auto text-lg leading-relaxed fade-up">
          Where Ideas Become Innovation. We are the architects of the future,
          forging new paths in the digital frontier.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mt-8 opacity-50 fade-up" />
      </div>

      {/* ── Featured Image & Story ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
        <div className="fade-up" ref={addFadeRef}>
          <div className="metallic-frame enchanted-card p-2 rounded-xl">
            <img
              src="/gallery/hackathon_1.jpg"
              alt="Hackathon Workspace"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="space-y-6 fade-up" ref={addFadeRef}>
          <h2 className="font-display text-3xl font-bold text-text-warm">
            A Legacy of Excellence
          </h2>
          <p className="font-body text-text-muted leading-relaxed">
            NIRVAN is the annual flagship technical festival of Graphic Era Hill University (GEHU). It serves as a crucible where the brightest minds converge to test their mettle, share knowledge, and push the boundaries of what is technologically possible.
          </p>
          <p className="font-body text-text-muted leading-relaxed">
            This year, we plunge into the mystical intersection of technology and magic. We believe that sufficiently advanced technology is indistinguishable from magic, and our '26 edition is designed to prove exactly that. 
          </p>
          <div className="flex gap-8 pt-4">
            <div>
              <div className="font-display text-4xl font-bold text-accent-gold mb-1">
                2k+
              </div>
              <div className="font-mono text-xs text-text-dim uppercase tracking-widest">
                Attendees
              </div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-accent-indigo mb-1">
                15+
              </div>
              <div className="font-mono text-xs text-text-dim uppercase tracking-widest">
                Events
              </div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-accent-pink mb-1">
                ₹1L+
              </div>
              <div className="font-mono text-xs text-text-dim uppercase tracking-widest">
                Prize Pool
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SPONSOR WALL ── */}
      <div className="text-center mb-16" ref={addFadeRef}>
        <span className="label-mono text-accent-indigo text-xs tracking-[0.15em] mb-4 block fade-up">
          OUR ALLIES
        </span>
        <h2 className="font-display text-4xl font-bold text-text-warm mb-6 fade-up">
          Sponsor Wall
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent-indigo to-transparent mx-auto opacity-50 fade-up" />
      </div>

      <div className="space-y-16">
        {/* Title Sponsors */}
        <div className="fade-up" ref={addFadeRef}>
          <h3 className="font-mono text-sm text-text-dim tracking-widest uppercase text-center mb-8">
            Title Sponsors
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {sponsors.title.map((s, i) => (
              <div
                key={i}
                className="metallic-frame rounded-lg bg-surface/50 p-8 min-w-[250px] flex items-center justify-center border border-accent-gold/20 hover:border-accent-gold/50 transition-colors"
              >
                <span className="font-display text-2xl font-bold text-text-primary">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="fade-up" ref={addFadeRef}>
          <h3 className="font-mono text-sm text-text-dim tracking-widest uppercase text-center mb-8">
            Gold Sponsors
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.gold.map((s, i) => (
              <div
                key={i}
                className="metallic-frame rounded-md bg-surface/30 p-6 min-w-[180px] flex items-center justify-center border border-hairline hover:border-text-dim transition-colors"
              >
                <span className="font-display text-lg font-semibold text-text-primary opacity-90">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Community Partners */}
        <div className="fade-up" ref={addFadeRef}>
          <h3 className="font-mono text-sm text-text-dim tracking-widest uppercase text-center mb-8">
            Community Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsors.community.map((s, i) => (
              <div
                key={i}
                className="rounded-md bg-void p-5 min-w-[150px] flex items-center justify-center border border-hairline/50"
              >
                <span className="font-mono text-sm text-text-muted">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
