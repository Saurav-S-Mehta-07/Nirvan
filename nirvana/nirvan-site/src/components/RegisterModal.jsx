import { useState } from "react";
import { X } from "lucide-react";
import { events } from "../data/events";

export default function RegisterModal({ isOpen, onClose, preSelectedEvent = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    event: preSelectedEvent,
    teamSize: "1",
    teamMembers: "",
    agreeToTerms: false,
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static form — no actual submission
    alert("Registration submitted! (This is a demo — no data is sent.)");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-void/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="metallic-frame rounded-xl p-8 max-w-md w-full relative z-10 animate-fade-in max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h2 className="font-display text-2xl font-bold text-text-warm mb-6">
          Secure Your Access
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="label-mono text-[11px] text-text-muted block mb-1">
              Full Name
            </label>
            <input
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full bg-void border border-hairline rounded-[4px] px-4 py-2.5 text-text-primary font-mono text-sm focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo/30 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="label-mono text-[11px] text-text-muted block mb-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="terminal@domain.com"
              className="w-full bg-void border border-hairline rounded-[4px] px-4 py-2.5 text-text-primary font-mono text-sm focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo/30 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="label-mono text-[11px] text-text-muted block mb-1">
              Phone Number
            </label>
            <input
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXXXXXXX"
              className="w-full bg-void border border-hairline rounded-[4px] px-4 py-2.5 text-text-primary font-mono text-sm focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo/30 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="label-mono text-[11px] text-text-muted block mb-1">
              College / University
            </label>
            <input
              name="college"
              type="text"
              required
              value={formData.college}
              onChange={handleChange}
              placeholder="Your institution"
              className="w-full bg-void border border-hairline rounded-[4px] px-4 py-2.5 text-text-primary font-mono text-sm focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo/30 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="label-mono text-[11px] text-text-muted block mb-1">
              Event Selection
            </label>
            <select
              name="event"
              required
              value={formData.event}
              onChange={handleChange}
              className="w-full bg-void border border-hairline rounded-[4px] px-4 py-2.5 text-text-primary font-mono text-sm focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo/30 outline-none transition-colors appearance-none"
            >
              <option value="">Select an event…</option>
              {events.map((ev) => (
                <option key={ev.id} value={ev.slug}>
                  {ev.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="label-mono text-[11px] text-text-muted block mb-1">
              Team Size
            </label>
            <select
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              className="w-full bg-void border border-hairline rounded-[4px] px-4 py-2.5 text-text-primary font-mono text-sm focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo/30 outline-none transition-colors appearance-none"
            >
              {["1 (Solo)", "2", "3", "4", "5"].map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-start gap-2 mt-2">
            <input
              name="agreeToTerms"
              type="checkbox"
              required
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mt-1 accent-accent-gold"
            />
            <label className="text-text-muted text-xs font-body leading-relaxed">
              I agree to the Terms and Conditions and Privacy Policy
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-2 px-6 py-3 rounded-[4px] border border-accent-gold text-accent-gold font-mono text-sm font-medium uppercase tracking-[0.05em] hover:bg-accent-gold/10 hover:shadow-[0_0_15px_rgba(232,191,122,0.25)] transition-all duration-300"
          >
            Initialize Registration
          </button>
        </form>
      </div>
    </div>
  );
}
