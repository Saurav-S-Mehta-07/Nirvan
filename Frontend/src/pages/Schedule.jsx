import SectionHeader from '../components/SectionHeader'
import { schedule } from '../data/schedule'

export default function Schedule() {
  return (
    <div className="page container">
      <SectionHeader eyebrow="Schedule" title="Festival timeline" text="A quick read of the full event flow across both days." />

      <div className="schedule-list">
        {schedule.map((item) => (
          <div key={`${item.day}-${item.time}`} className="schedule-item glass-box">
            <div className="schedule-badge">{item.day}</div>
            <div>
              <p className="schedule-time">{item.time}</p>
              <h3>{item.title}</h3>
              <span>{item.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
