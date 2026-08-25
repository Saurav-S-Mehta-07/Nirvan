import { Sparkles, Trophy, Users } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const pillars = [
  { title: 'Innovation', icon: Sparkles, text: 'A platform for turning curiosity into prototypes, experiments, and ideas with practical impact.' },
  { title: 'Competition', icon: Trophy, text: 'Challenge students to test their skills in fast, engaging, and meaningful technical events.' },
  { title: 'Community', icon: Users, text: 'Bring students together from different streams, backgrounds, and goals to learn from one another.' },
]

export default function About() {
  return (
    <div className="page container">
      <SectionHeader eyebrow="About" title="The spirit of NIRVAN" text="NIRVAN '26 is a celebration of talent, creativity, and technical ambition on campus." />

      <div className="story-grid">
        <div className="glass-box">
          <p>
            NIRVAN is built for students who want to explore ideas beyond the classroom. It is not just a technical festival—it is a place where coding, design, strategy, and problem-solving come together in one vibrant student-led experience.
          </p>
          <p>
            Every competition, workshop, and showcase is designed to help participants think bigger, build faster, and collaborate better. The result is a festival that feels creative, technical, and deeply connected to the student community.
          </p>
        </div>

        <div className="glass-box accent-box">
          <h3>Festival goals</h3>
          <ul>
            <li>Empower students to build, test, and iterate ideas.</li>
            <li>Encourage cross-disciplinary learning and teamwork.</li>
            <li>Create an environment where ambition can become action.</li>
          </ul>
        </div>
      </div>

      <div className="pillar-grid">
        {pillars.map(({ title, text, icon: Icon }) => (
          <div key={title} className="glass-box pillar-card">
            <div className="icon-wrap large">
              <Icon size={22} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
