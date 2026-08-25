import { useMemo, useState } from 'react'
import EventCard from '../components/EventCard'
import SectionHeader from '../components/SectionHeader'
import { eventCategories, events } from '../data/events'

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredEvents = useMemo(() => {
    if (activeCategory === 'All') return events
    return events.filter((event) => event.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="page container">
      <SectionHeader eyebrow="Events" title="Event Arena" text="Filter the challenges that excite you most and step into the arena." />

      <div className="filter-row">
        {eventCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={category === activeCategory ? 'filter-pill active' : 'filter-pill'}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="event-grid">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}
