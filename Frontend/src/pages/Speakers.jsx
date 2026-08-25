import SectionHeader from '../components/SectionHeader'
import SpeakerCard from '../components/SpeakerCard'
import { speakers } from '../data/speakers'

export default function Speakers() {
  return (
    <div className="page container">
      <SectionHeader eyebrow="Speakers" title="Guiding voices and mentors" text="Meet the leaders, thinkers, and creators who will shape the festival experience." />

      <div className="speaker-grid">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </div>
  )
}
