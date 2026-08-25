import { Mail, MapPin, Phone } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { siteInfo } from '../data/site'

export default function Contact() {
  return (
    <div className="page container contact-page">
      <SectionHeader eyebrow="Contact" title="Reach the organizing team" text="Have a question about registration, venue access, or event details? We are happy to help." />

      <div className="contact-grid">
        <div className="glass-box contact-card">
          <h3>General inquiries</h3>
          <div className="contact-item">
            <Mail size={18} />
            <span>{siteInfo.email}</span>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <span>{siteInfo.phone}</span>
          </div>
          <div className="contact-item">
            <MapPin size={18} />
            <span>{siteInfo.address}</span>
          </div>
        </div>

        <div className="glass-box map-card">
          <iframe
            title="GEHU Campus map"
            src="https://www.google.com/maps?q=GEHU%20Campus%20Dehradun&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}
