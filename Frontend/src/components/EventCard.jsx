import { ArrowRight, CalendarDays, MapPin, Ticket } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function EventCard({ event }) {
  return (
    <article className="event-card">
      <div className="event-card-header">
        <span className="event-category">{event.category}</span>
        <span className="event-fee">{event.fee}</span>
      </div>

      <h3>{event.title}</h3>
      <p>{event.description}</p>

      <div className="event-meta-list">
        <span>
          <CalendarDays size={14} />
          {event.date}
        </span>
        <span>
          <MapPin size={14} />
          {event.venue}
        </span>
        <span>
          <Ticket size={14} />
          {event.prize}
        </span>
      </div>

      <Link to={`/events/${event.slug}`} className="button card-button">
        View Event
        <ArrowRight size={16} />
      </Link>
    </article>
  )
}
