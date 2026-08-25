import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Users,
  Trophy,
  ArrowRight,
  Rocket,
  Network,
  Lightbulb,
  Swords,
  Clock,
  Code,
  Pen,
  Gamepad2,
} from "lucide-react";
import MagicalBackground from "../components/MagicalBackground";
import CountdownTimer from "../components/CountdownTimer";
import CategoryBadge from "../components/CategoryBadge";
import RegisterModal from "../components/RegisterModal";
import ImageSlideshow from "../components/ImageSlideshow";
import { events } from "../data/events";

// Top 3 featured events
const featuredEvents = events.slice(0, 3);

// Icon map for events
const iconMap = {
  Code,
  Pen,
  Gamepad2,
};

export default function Home() {
  const [registerOpen, setRegisterOpen] = useState(false);
  const navigate = useNavigate();
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
  }, []);

  const addFadeRef = (el) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════
          HERO SECTION — Harry Potter magical style
          ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden stone-texture bg-void">
        {/* Slideshow Background (fallback/underlay) */}
        <ImageSlideshow className="z-0" />

        {/* Video Background (Fades in over 5s, rotated) */}
        <div className="absolute inset-0 overflow-hidden z-[1]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="video-rotate"
          >
            <source src="https://res.cloudinary.com/drwoag8ru/video/upload/v1787653490/WhatsApp_Video_2026-08-25_at_3.53.15_PM_dnmrqf.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Magical canvas particles for extra effect */}
        <MagicalBackground className="z-[2]" />

        {/* Fog / mist layer */}
        <div
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(232, 191, 122, 0.04) 0%, transparent 60%)",
            animation: "fog-drift 15s ease-in-out infinite",
          }}
        />

        {/* Candle glow spots */}
        <div className="absolute top-[15%] left-[10%] w-32 h-32 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" style={{ animation: "candle-flicker 4s ease-in-out infinite" }} />
        <div className="absolute bottom-[20%] right-[15%] w-40 h-40 rounded-full bg-accent-indigo/5 blur-3xl pointer-events-none" style={{ animation: "candle-flicker 5s ease-in-out infinite 1s" }} />
        <div className="absolute top-[40%] right-[25%] w-24 h-24 rounded-full bg-accent-violet/5 blur-3xl pointer-events-none" style={{ animation: "candle-flicker 3.5s ease-in-out infinite 0.5s" }} />

        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-transparent to-void z-[3]" />

        {/* Hero content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Date + Venue pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-hairline bg-surface/40 backdrop-blur-md mb-8"
          >
            <CalendarDays size={14} className="text-accent-indigo-bright" />
            <span className="font-mono text-[12px] font-medium tracking-[0.05em] text-text-muted">
              Oct 24–26, 2026 | GEHU Campus
            </span>
          </motion.div>

          {/* Main title — NIRVAN '26 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-display text-[72px] md:text-[96px] lg:text-[110px] font-bold leading-[0.9] tracking-tight mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-white to-accent-gold">
              NIRVAN
            </span>
            <span className="text-shimmer"> '26</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-display text-2xl md:text-3xl font-semibold text-text-warm mb-10"
          >
            Where Ideas Become Innovation.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-10"
          >
            <CountdownTimer />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => navigate("/events")}
              className="btn-primary px-8 py-3.5 rounded-[4px] font-mono text-sm font-medium uppercase tracking-[0.08em] flex items-center gap-2 justify-center"
            >
              <span>Explore Events</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => setRegisterOpen(true)}
              className="btn-secondary px-8 py-3.5 rounded-[4px] font-mono text-sm font-medium uppercase tracking-[0.08em]"
            >
              Register Now
            </button>
          </motion.div>
        </div>

        {/* Bottom gradient fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent z-[4]" />
      </section>

      {/* ═══════════════════════════════════════
          "WHY NIRVAN?" — Value proposition cards
          ═══════════════════════════════════════ */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16" ref={addFadeRef}>
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-text-warm fade-up"
            ref={addFadeRef}
          >
            Why NIRVAN?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mt-6 opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Rocket,
              title: "Mission",
              desc: "Pushing the boundaries of collegiate technical capabilities through rigorous challenges.",
              accent: "accent-indigo",
            },
            {
              icon: Network,
              title: "Community",
              desc: "Forge alliances with like-minded innovators across diverse technological disciplines.",
              accent: "accent-violet",
            },
            {
              icon: Lightbulb,
              title: "Innovation",
              desc: "Incubating raw ideas into prototype-ready solutions for real-world problems.",
              accent: "accent-pink",
            },
            {
              icon: Swords,
              title: "Competition",
              desc: "Test your mettle against the best minds in high-stakes, adrenaline-fueled arenas.",
              accent: "accent-gold",
            },
          ].map(({ icon: Icon, title, desc, accent }, i) => (
            <div
              key={title}
              ref={addFadeRef}
              className="fade-up metallic-frame rounded-lg p-8 enchanted-card group"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div
                className={`w-12 h-12 rounded-full bg-${accent}/10 border border-${accent}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <Icon size={22} className={`text-${accent}`} />
              </div>
              <h3 className="font-display text-xl font-semibold text-text-warm mb-3">
                {title}
              </h3>
              <p className="font-body text-sm text-text-muted leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURED EVENTS — Top 3
          ═══════════════════════════════════════ */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
          ref={addFadeRef}
        >
          <div className="fade-up" ref={addFadeRef}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-warm italic">
              Featured Artifacts
            </h2>
            <p className="text-text-muted font-body mt-2">
              Discover the prime directives of this year's gathering.
            </p>
          </div>
          <Link
            to="/events"
            className="label-mono text-[12px] text-text-muted hover:text-accent-gold flex items-center gap-1 transition-colors"
          >
            VIEW ALL EVENTS <ArrowRight size={14} />
          </Link>
        </div>

        {/* Event cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event, i) => {
            const IconComp = iconMap[event.icon] || Code;
            return (
              <div
                key={event.id}
                ref={addFadeRef}
                className="fade-up metallic-frame rounded-lg overflow-hidden enchanted-card group"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Card header with gradient image placeholder */}
                <div className="relative h-44 overflow-hidden">
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
                  {/* Pattern overlay for texture */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }} />
                  <CategoryBadge
                    category={event.category}
                    className="absolute top-4 left-4 z-10"
                  />
                  <div className="absolute top-4 right-4 z-10 text-text-warm bg-void/50 p-2 rounded-md backdrop-blur-md">
                    <IconComp size={20} />
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-text-warm mb-2">
                    {event.title}
                  </h3>
                  <p className="font-body text-sm text-text-muted mb-4 line-clamp-2 leading-relaxed">
                    {event.shortDescription}
                  </p>

                  {/* Meta row */}
                  <div className="flex flex-col gap-2 mb-5">
                    <div className="flex items-center gap-2 text-text-dim text-xs font-mono">
                      <Clock size={13} />
                      <span>{event.date}, {event.time}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5 text-text-dim text-xs font-mono">
                        <Users size={13} /> {event.teamSize}
                      </span>
                      {event.prize !== "—" && (
                        <span className="flex items-center gap-1.5 text-text-dim text-xs font-mono">
                          <Trophy size={13} /> Pool: {event.prize}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Link
                      to={`/events/${event.slug}`}
                      className="flex-1 text-center btn-secondary px-4 py-2 rounded-[4px] font-mono text-xs uppercase tracking-[0.05em]"
                    >
                      Details
                    </Link>
                    <button
                      onClick={() => setRegisterOpen(true)}
                      className="flex-1 text-center btn-primary px-4 py-2 rounded-[4px] font-mono text-xs uppercase tracking-[0.05em]"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INITIATION COUNTDOWN STRIP
          ═══════════════════════════════════════ */}
      <section className="py-12 px-6 border-y border-hairline bg-surface/30">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="font-display text-2xl font-bold text-text-warm italic">
            Initiation In
          </h3>
          <CountdownTimer />
        </div>
      </section>

      {/* Register Modal */}
      <RegisterModal
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
      />
    </div>
  );
}
