import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-content">
        <div className="hero-copy">
          <span className="badge">
            <Sparkles size={14} />
            Annual Technical Festival
          </span>
          <h1>NIRVAN '26</h1>
          <p className="hero-tagline">Where Ideas Become Innovation</p>
          <p className="hero-meta">GEHU Campus • 2 Days • December 18-19</p>

          <div className="hero-actions">
            <Link to="/events" className="button primary">
              Explore Events
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="button secondary">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
