import { MapPin, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteInfo } from '../data/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{siteInfo.title}</h3>
          <p>{siteInfo.tagline}</p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
          </ul>
        </div>

        <div>
          <h4>Connect</h4>
          <ul className="contact-list">
            <li><Mail size={15} /> {siteInfo.email}</li>
            <li><Phone size={15} /> {siteInfo.phone}</li>
            <li><MapPin size={15} /> {siteInfo.address}</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
