export default function SpeakerCard({ speaker }) {
  return (
    <article className="speaker-card">
      <img src={speaker.image} alt={speaker.name} />
      <div>
        <h3>{speaker.name}</h3>
        <span>{speaker.role}</span>
        <p>{speaker.bio}</p>
      </div>
    </article>
  )
}
