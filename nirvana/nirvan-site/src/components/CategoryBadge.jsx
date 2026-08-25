/**
 * CategoryBadge — color-coded pill per category.
 * Matches the reference "Glow-Text" tag style:
 * colored text + 1px colored border + 5% colored fill
 */

const categoryStyles = {
  Tech: {
    text: "text-accent-indigo",
    border: "border-accent-indigo/40",
    bg: "bg-accent-indigo/5",
  },
  Design: {
    text: "text-accent-violet",
    border: "border-accent-violet/40",
    bg: "bg-accent-violet/5",
  },
  Gaming: {
    text: "text-accent-pink",
    border: "border-accent-pink/40",
    bg: "bg-accent-pink/5",
  },
  Fun: {
    text: "text-accent-gold",
    border: "border-accent-gold/40",
    bg: "bg-accent-gold/5",
  },
  Keynote: {
    text: "text-accent-gold",
    border: "border-accent-gold/40",
    bg: "bg-accent-gold/5",
  },
  Break: {
    text: "text-text-dim",
    border: "border-hairline",
    bg: "bg-surface",
  },
  Workshop: {
    text: "text-accent-indigo-bright",
    border: "border-accent-indigo/40",
    bg: "bg-accent-indigo/5",
  },
  Panel: {
    text: "text-accent-violet-bright",
    border: "border-accent-violet/40",
    bg: "bg-accent-violet/5",
  },
};

const fallbackStyle = {
  text: "text-text-muted",
  border: "border-hairline",
  bg: "bg-surface",
};

export default function CategoryBadge({ category, className = "" }) {
  const style = categoryStyles[category] || fallbackStyle;

  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5
        rounded-[4px] border
        font-mono text-[11px] font-medium uppercase tracking-[0.1em]
        ${style.text} ${style.border} ${style.bg}
        ${className}
      `}
    >
      {category}
    </span>
  );
}
