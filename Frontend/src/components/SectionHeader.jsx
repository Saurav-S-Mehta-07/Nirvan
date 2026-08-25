export default function SectionHeader({ eyebrow, title, text, center = false }) {
  return (
    <div className={`section-header ${center ? 'centered' : ''}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}
