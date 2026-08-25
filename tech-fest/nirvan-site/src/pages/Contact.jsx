import { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        e.target.reset();
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20 pb-24 px-6 max-w-6xl mx-auto">
      {/* ── Page Header ── */}
      <div className="text-center mb-16" ref={addFadeRef}>
        <span className="label-mono text-accent-gold text-xs tracking-[0.15em] mb-4 block fade-up">
          TRANSMISSIONS
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-warm mb-6 fade-up">
          Contact & Venue
        </h1>
        <p className="font-body text-text-muted max-w-2xl mx-auto text-lg leading-relaxed fade-up">
          Have questions or need assistance? Reach out to the organizing team or
          find your way to the arena.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mt-8 opacity-50 fade-up" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* ── Contact Info & Venue ── */}
        <div className="space-y-12 fade-up" ref={addFadeRef}>
          {/* Organizing Team */}
          <div>
            <h2 className="font-display text-2xl font-bold text-text-warm mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-accent-indigo rounded-full" />
              Direct Lines
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface border border-hairline flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-accent-indigo" />
                </div>
                <div>
                  <span className="label-mono text-[10px] text-text-dim block mb-1">
                    EMAIL
                  </span>
                  <a
                    href="mailto:nirvan@gehu.in"
                    className="font-body text-lg text-text-primary hover:text-accent-gold transition-colors"
                  >
                    nirvan@gehu.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface border border-hairline flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-accent-pink" />
                </div>
                <div>
                  <span className="label-mono text-[10px] text-text-dim block mb-1">
                    HELPLINE
                  </span>
                  <a
                    href="tel:+911256489632"
                    className="font-body text-lg text-text-primary hover:text-accent-gold transition-colors"
                  >
                    +91 12564 89632
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Venue */}
          <div>
            <h2 className="font-display text-2xl font-bold text-text-warm mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-accent-violet rounded-full" />
              The Arena
            </h2>
            <div className="metallic-frame enchanted-card p-6 rounded-lg bg-surface/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-void border border-hairline flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-accent-violet" />
                </div>
                <div>
                  <span className="label-mono text-[10px] text-text-dim block mb-1">
                    LOCATION
                  </span>
                  <span className="font-body text-lg text-text-primary block">
                    Graphic Era Hill University
                  </span>
                  <span className="font-body text-text-muted block mt-1">
                    Bell Road, Clement Town, Dehradun, Uttarakhand 248002
                  </span>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="w-full h-48 bg-void border border-hairline rounded-md flex items-center justify-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-accent-indigo/10 mix-blend-overlay z-10" />
                <div 
                  className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500" 
                  style={{
                    backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }} 
                />
                <MapPin size={32} className="text-text-dim/50 group-hover:text-accent-gold transition-colors duration-500 z-20" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Contact Form ── */}
        <div className="fade-up" ref={addFadeRef}>
          <div className="metallic-frame enchanted-card p-8 rounded-xl bg-surface/50 backdrop-blur-md">
            <h2 className="font-display text-2xl font-bold text-text-warm mb-2">
              Send a Message
            </h2>
            <p className="text-text-muted text-sm font-body mb-8">
              Use the terminal interface below to transmit your inquiry to our
              command center.
            </p>

            {isSuccess ? (
              <div className="h-[400px] flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-accent-gold/10 flex items-center justify-center mb-4 text-accent-gold">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-display text-xl font-bold text-text-warm mb-2">
                  Transmission Successful
                </h3>
                <p className="text-text-muted font-body">
                  Your message has been received by our command center. We will
                  respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block label-mono text-[10px] text-text-dim mb-2">
                    IDENTIFICATION (NAME)
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-void border border-hairline rounded-[4px] px-4 py-3 text-sm text-text-primary focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all font-body"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block label-mono text-[10px] text-text-dim mb-2">
                    RETURN ADDRESS (EMAIL)
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-void border border-hairline rounded-[4px] px-4 py-3 text-sm text-text-primary focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo outline-none transition-all font-body"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block label-mono text-[10px] text-text-dim mb-2">
                    PAYLOAD (MESSAGE)
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-void border border-hairline rounded-[4px] px-4 py-3 text-sm text-text-primary focus:border-accent-violet focus:ring-1 focus:ring-accent-violet outline-none transition-all font-body resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary px-6 py-4 rounded-[4px] font-mono text-sm uppercase tracking-widest flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Transmitting...</span>
                  ) : (
                    <>
                      <span>Initialize Transfer</span>
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
