import { ArrowRight, BrainCircuit, Crown, Gamepad2, Rocket, Sparkles, Swords } from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import EventCard from '../components/EventCard'
import SectionHeader from '../components/SectionHeader'
import SpeakerCard from '../components/SpeakerCard'
import GalleryGrid from '../components/GalleryGrid'
import { events } from '../data/events'
import { gallery } from '../data/gallery'
import { speakers } from '../data/speakers'

const reasons = [
  { title: 'Innovation', icon: BrainCircuit, text: 'Turn ideas into solutions through creativity, coding, and experimentation.' },
  { title: 'Competition', icon: Crown, text: 'Face live challenges, climb leaderboards, and claim your place among the best.' },
  { title: 'Workshops', icon: Rocket, text: 'Learn practical tools and techniques from mentors who build real systems.' },
  { title: 'Community', icon: Sparkles, text: 'Meet builders, creators, and dreamers from across campuses and disciplines.' },
]

export default function Home() {
  const featuredEvents = events.slice(0, 3)
  const featuredSpeakers = speakers.slice(0, 3)
  const previewGallery = gallery.slice(0, 4)

  return (
    <>
      <Hero />

      <section className="section container promo-grid">
        <div className="glass-box">
          <SectionHeader eyebrow="About Nirvan" title="The festival of bold ideas" text="NIRVAN '26 is a two-day celebration of technology, creativity, and student energy designed to spark innovation across every discipline." />
          <Link to="/about" className="inline-link">
            Learn more <ArrowRight size={16} />
          </Link>
        </div>

        <div className="glass-box stats-box">
          <div>
            <strong>500+</strong>
            <span>Participants</span>
          </div>
          <div>
            <strong>20+</strong>
            <span>Teams</span>
          </div>
          <div>
            <strong>5</strong>
            <span>Event tracks</span>
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionHeader eyebrow="Why Participate" title="Built for builders, dreamers, and challengers" center />
        <div className="reason-grid">
          {reasons.map(({ title, text, icon: Icon }) => (
            <div key={title} className="glass-box reason-card">
              <div className="icon-wrap">
                <Icon size={20} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <SectionHeader eyebrow="Event Arena" title="Explore the stages of NIRVAN" text="From deep technical sprints to strategy-driven adventures, each arena is built to help students learn, compete, and create." />
        <div className="category-row">
          {['Workshop', 'Hackathon', 'E-Sports', 'CTF', 'Treasure Hunt'].map((category) => (
            <span key={category} className="category-chip">{category}</span>
          ))}
        </div>
      </section>

      <section className="section container">
        <SectionHeader eyebrow="Featured Events" title="High-impact experiences" text="Choose the challenge that matches your curiosity and energy." />
        <div className="event-grid">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="section container schedule-preview">
        <div>
          <SectionHeader eyebrow="Schedule Preview" title="Your two-day event flow" text="A packed festival lineup designed for learning, competition, and energy." />
          <div className="timeline-tiny">
            <div><span>Day 1</span><strong>Opening Ceremony</strong></div>
            <div><span>12:00</span><strong>AI Workshop</strong></div>
            <div><span>17:00</span><strong>Treasure Hunt</strong></div>
            <div><span>Day 2</span><strong>CTF + Gaming Arena</strong></div>
          </div>
          <Link to="/schedule" className="inline-link">See full schedule <ArrowRight size={16} /></Link>
        </div>

        <div className="speaker-preview">
          <SectionHeader eyebrow="Featured Speakers" title="Meet the mentors" />
          <div className="speaker-list">
            {featuredSpeakers.map((speaker) => (
              <SpeakerCard key={speaker.id} speaker={speaker} />
            ))}
          </div>
        </div>
      </section>

      <section className="section container gallery-preview">
        <SectionHeader eyebrow="Gallery" title="Moments from the last edition" text="A glimpse of the energy, creativity, and late-night buzz that define NIRVAN." />
        <GalleryGrid items={previewGallery} onSelect={() => null} />
      </section>

      <section className="section container cta-banner">
        <div>
          <span className="section-eyebrow">Ready to join?</span>
          <h2>Register for a challenge that fits your spark.</h2>
        </div>
        <Link to="/events" className="button primary">
          Register Now
          <ArrowRight size={16} />
        </Link>
      </section>
    </>
  )
}
