import { ArrowLeft, CalendarDays, MapPin, Sparkles, Ticket, Users } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { events } from '../data/events'

export default function EventDetails() {
  const { slug } = useParams()
  const event = events.find((item) => item.slug === slug)

  if (!event) {
    return (
      <div className="page container not-found-panel">
        <h2>Event not found</h2>
        <Link to="/events" className="button primary">Back to Events</Link>
      </div>
    )
  }

  return (
    <div className="page container detail-page">
      <Link to="/events" className="back-link">
        <ArrowLeft size={16} />
        Back to Events
      </Link>

      <div className="detail-header glass-box">
        <span className="section-eyebrow">{event.category}</span>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
      </div>

      <div className="detail-grid">
        <div className="glass-box detail-content">
          <h3>About the challenge</h3>
          <p>{event.longDescription}</p>

          <div className="rule-block">
            <h3>Eligibility</h3>
            <p>{event.eligibility}</p>
          </div>

          <div className="rule-block">
            <h3>Rules</h3>
            <ul>
              {event.rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="glass-box meta-panel">
          <div className="meta-item">
            <CalendarDays size={18} />
            <div>
              <span>Date</span>
              <strong>{event.date}</strong>
            </div>
          </div>
          <div className="meta-item">
            <Sparkles size={18} />
            <div>
              <span>Time</span>
              <strong>{event.time}</strong>
            </div>
          </div>
          <div className="meta-item">
            <MapPin size={18} />
            <div>
              <span>Venue</span>
              <strong>{event.venue}</strong>
            </div>
          </div>
          <div className="meta-item">
            <Users size={18} />
            <div>
              <span>Team Size</span>
              <strong>{event.teamSize}</strong>
            </div>
          </div>
          <div className="meta-item">
            <Ticket size={18} />
            <div>
              <span>Entry Fee</span>
              <strong>{event.fee}</strong>
            </div>
          </div>
          <div className="meta-item prize-item">
            <span>Prize</span>
            <strong>{event.prize}</strong>
          </div>

          <a href="#register" className="button primary register-button">
            Register Now
          </a>
        </aside>
      </div>
    </div>
  )
}
