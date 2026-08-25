import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-10-24T09:00:00+05:30").getTime();

function padZero(n) {
  return String(n).padStart(2, "0");
}

export default function CountdownTimer({ className = "" }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = Date.now();
    const diff = Math.max(0, TARGET_DATE - now);
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      mins: Math.floor((diff / (1000 * 60)) % 60),
      secs: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.mins },
    { label: "SECS", value: timeLeft.secs },
  ];

  return (
    <div className={`flex items-center gap-3 md:gap-4 ${className}`}>
      {units.map(({ label, value }, i) => (
        <div
          key={label}
          className="flex flex-col items-center metallic-frame rounded-lg px-4 py-3 min-w-[72px]"
        >
          <span className="text-2xl md:text-3xl font-bold font-mono text-accent-gold leading-none">
            {padZero(value)}
          </span>
          <span className="label-mono text-[10px] text-text-muted mt-1.5">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
