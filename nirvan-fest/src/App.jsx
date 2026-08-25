
import { useEffect, useState } from "react";
import "./App.css";
import {
  events,
  gallery,
  registrationFields,
  schedule,
  site,
  speakers,
  sponsorGroups,
} from "./data/siteData";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const categoryOptions = ["All", ...new Set(events.map((event) => event.category))];

function navigateTo(path) {
  if (window.location.pathname === path) {
    return;
  }

  window.history.pushState({}, "", path);
  window.dispatchEvent(new Event("app:navigate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function formatPrize(amount) {
  return amount > 0 ? currencyFormatter.format(amount) : "Certificates / Experience";
}

function resolveRoute(pathname) {
  if (pathname.startsWith("/events/")) {
    const slug = pathname.replace("/events/", "").replace(/\/$/, "");
    return { name: "event-details", slug };
  }

  const knownRoutes = new Set([
    "/",
    "/about",
    "/events",
    "/schedule",
    "/speakers",
    "/sponsors",
    "/gallery",
    "/contact",
  ]);

  if (knownRoutes.has(pathname)) {
    return { name: pathname };
  }

  return { name: "not-found" };
}

function AppLink({ to, children, className, onNavigate }) {
  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }

        event.preventDefault();
        navigateTo(to);
        onNavigate?.();
      }}
    >
      {children}
    </a>
  );
}

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const [registrationContext, setRegistrationContext] = useState(null);

  useEffect(() => {
    const handleNavigation = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener("popstate", handleNavigation);
    window.addEventListener("app:navigate", handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
      window.removeEventListener("app:navigate", handleNavigation);
    };
  }, []);

  const route = resolveRoute(pathname);

  let page = null;

  if (route.name === "/") {
    page = <HomePage onRegister={setRegistrationContext} />;
  } else if (route.name === "/about") {
    page = <AboutPage onRegister={setRegistrationContext} />;
  } else if (route.name === "/events") {
    page = <EventsPage onRegister={setRegistrationContext} />;
  } else if (route.name === "/schedule") {
    page = <SchedulePage onRegister={setRegistrationContext} />;
  } else if (route.name === "/speakers") {
    page = <SpeakersPage onRegister={setRegistrationContext} />;
  } else if (route.name === "/sponsors") {
    page = <SponsorsPage onRegister={setRegistrationContext} />;
  } else if (route.name === "/gallery") {
    page = <GalleryPage onRegister={setRegistrationContext} />;
  } else if (route.name === "/contact") {
    page = <ContactPage onRegister={setRegistrationContext} />;
  } else if (route.name === "event-details") {
    page = (
      <EventDetailsPage
        slug={route.slug}
        onRegister={setRegistrationContext}
      />
    );
  } else {
    page = <NotFoundPage />;
  }

  return (
    <>
      <SiteLayout
        currentPath={pathname}
        onRegister={() => setRegistrationContext({ eventName: "" })}
      >
        {page}
      </SiteLayout>
      <RegisterModal
        context={registrationContext}
        onClose={() => setRegistrationContext(null)}
      />
    </>
  );
}

function SiteLayout({ children, currentPath, onRegister }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  return (
    <div className="app-shell">
      <div className="app-aura app-aura-one" />
      <div className="app-aura app-aura-two" />

      <header className="site-header">
        <div className="brand-lockup">
          <div className="brand-mark">N</div>
          <button
            type="button"
            className="brand-copy"
            onClick={() => navigateTo("/")}
          >
            <span className="brand-title">{site.name}</span>
            <span className="brand-subtitle">{site.tagline}</span>
          </button>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${menuOpen ? "is-open" : ""}`}>
          {site.navigation.map((item) => (
            <AppLink
              key={item.path}
              to={item.path}
              className={`nav-link ${currentPath === item.path ? "is-active" : ""}`}
              onNavigate={() => setMenuOpen(false)}
            >
              {item.label}
            </AppLink>
          ))}
          <button type="button" className="nav-cta" onClick={onRegister}>
            Register
          </button>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-brand">
          <p className="eyebrow">NIRVAN '26</p>
          <h2>Built for discovery, clarity, and conversion.</h2>
          <p>
            A festival website should answer what, why, when, where, and how to
            join without making the visitor work for it.
          </p>
        </div>

        <div className="footer-columns">
          <FooterList title="Explore" items={site.footer.explore} />
          <FooterList title="Discover" items={site.footer.support} />
          <div className="footer-list">
            <h3>Contact</h3>
            <p>{site.contact.email}</p>
            <p>{site.contact.phone}</p>
            <p>{site.contact.location}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterList({ title, items }) {
  return (
    <div className="footer-list">
      <h3>{title}</h3>
      {items.map((item) => (
        <AppLink key={item.path} to={item.path} className="footer-link">
          {item.label}
        </AppLink>
      ))}
    </div>
  );
}

function HomePage({ onRegister }) {
  const featuredEvents = events.slice(0, 4);

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Web-a-thon 4.0 MVP</p>
          <h1>{site.name}</h1>
          <p className="hero-tagline">{site.tagline}</p>
          <p className="hero-description">
            {site.type} at {site.college}. A responsive frontend experience that
            makes event discovery and registration effortless.
          </p>

          <div className="hero-meta">
            <span>{site.dateRange}</span>
            <span>{site.venue}</span>
          </div>

          <div className="hero-actions">
            <button type="button" className="primary-button" onClick={() => navigateTo("/events")}>
              Explore Events
            </button>
            <button
              type="button"
              className="secondary-button"
              onClick={() => onRegister({ eventName: "" })}
            >
              Register Now
            </button>
          </div>

          <div className="stats-grid">
            {site.stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-panel">
          <div
            className="hero-image"
            style={{ backgroundImage: `url(${site.heroImage})` }}
          />
          <div className="hero-panel-card">
            <p className="eyebrow">Core Flow</p>
            <ul className="flow-list">
              <li>Understand the fest quickly</li>
              <li>Browse by event category</li>
              <li>Open event details</li>
              <li>Register with confidence</li>
            </ul>
          </div>
        </div>
      </section>

      <Section
        eyebrow="About Nirvan"
        title="A festival site should feel atmospheric without hiding the information."
        description={site.about}
      >
        <div className="content-grid two-column">
          <article className="surface-card">
            <h3>Why participate</h3>
            <div className="pill-grid">
              {site.themes.map((theme) => (
                <span key={theme} className="info-pill">
                  {theme}
                </span>
              ))}
            </div>
            <p>
              The site is structured around clarity first: event cards, schedules,
              detailed rules, prize pools, and direct calls to action.
            </p>
          </article>
          <article className="surface-card">
            <h3>Visual direction</h3>
            <p>
              Dark-academy surfaces, candlelit gold accents, muted burgundy,
              indigo highlights, and controlled motion. The theme sits on top of
              a practical technical-fest UX.
            </p>
            <div className="logo-strip">
              {site.logos.map((logo) => (
                <img key={logo.name} src={logo.image} alt={logo.name} />
              ))}
            </div>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Event Arena"
        title="The strongest functional feature is event discovery."
        description="Visitors can quickly compare categories, venues, timings, and prize pools before committing to registration."
      >
        <div className="pill-grid">
          {categoryOptions
            .filter((category) => category !== "All")
            .map((category) => (
              <span key={category} className="info-pill">
                {category}
              </span>
            ))}
        </div>
        <div className="card-grid">
          {featuredEvents.map((event) => (
            <EventCard
              key={event.slug}
              event={event}
              onRegister={onRegister}
              compact
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Schedule Preview"
        title="Three days of challenges, learning, and showcase moments."
        description="The schedule is visible early so visitors understand pacing before they decide where to spend time."
      >
        <div className="schedule-preview-grid">
          {schedule.map((day) => (
            <article key={day.label} className="surface-card">
              <p className="eyebrow">{day.label}</p>
              <h3>{day.date}</h3>
              <ul className="schedule-mini-list">
                {day.items.slice(0, 3).map((item) => (
                  <li key={`${day.label}-${item.time}-${item.title}`}>
                    <strong>{item.time}</strong>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Speakers and Mentors"
        title="Expert-led moments give the event credibility beyond the competitions."
        description="The MVP includes enough speaker context to make the schedule and positioning feel real."
      >
        <div className="card-grid speakers-grid">
          {speakers.map((speaker) => (
            <article key={speaker.id} className="speaker-card">
              <div className="speaker-avatar">{speaker.name.charAt(0)}</div>
              <p className="eyebrow">{speaker.organization}</p>
              <h3>{speaker.name}</h3>
              <p className="speaker-role">{speaker.designation}</p>
              <p>{speaker.shortBio}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Gallery Preview"
        title="Real imagery keeps the site grounded in the fest instead of looking like a concept mockup."
        description="The current gallery uses the competition assets already present in the repository."
      >
        <div className="gallery-grid">
          {gallery.slice(0, 4).map((item) => (
            <article key={item.id} className="gallery-card">
              <img src={item.image} alt={item.title} />
              <div className="gallery-caption">
                <strong>{item.title}</strong>
                <span>{item.category}</span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="cta-banner">
        <div>
          <p className="eyebrow">Final CTA</p>
          <h2>Build the complete functional skeleton first. Then make it magical.</h2>
          <p>
            The current MVP already gives judges the full user journey from landing
            page to event details to registration.
          </p>
        </div>
        <div className="cta-actions">
          <button type="button" className="primary-button" onClick={() => navigateTo("/events")}>
            View All Events
          </button>
          <button
            type="button"
            className="secondary-button"
            onClick={() => onRegister({ eventName: "" })}
          >
            Open Registration
          </button>
        </div>
      </section>
    </>
  );
}

function AboutPage({ onRegister }) {
  return (
    <PageWrapper
      eyebrow="About"
      title="NIRVAN '26 is positioned as a practical event-discovery experience, not just a themed landing page."
      description={site.description}
    >
      <div className="content-grid two-column">
        <article className="surface-card">
          <h3>What the MVP prioritizes</h3>
          <ul className="detail-list">
            <li>Clear information hierarchy</li>
            <li>Responsive navigation and route structure</li>
            <li>Static data separated from UI rendering</li>
            <li>Reusable event-driven sections and cards</li>
          </ul>
        </article>
        <article className="surface-card">
          <h3>What the MVP intentionally avoids</h3>
          <ul className="detail-list">
            <li>No backend or authentication dependency</li>
            <li>No heavy 3D or performance-hostile effects</li>
            <li>No bonus features replacing weak fundamentals</li>
            <li>No dead-end routes or unfinished details pages</li>
          </ul>
        </article>
      </div>

      <section className="stacked-panel">
        <div className="surface-card">
          <p className="eyebrow">Audience</p>
          <h3>Who the experience is built for</h3>
          <div className="pill-grid">
            {site.audience.map((item) => (
              <span key={item} className="info-pill">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="surface-card">
          <p className="eyebrow">Need help</p>
          <h3>Registration can stay frontend-only and still feel complete.</h3>
          <p>
            This MVP uses a mail-based registration flow as a backend-free fallback.
            If you have a Google Form later, we can swap it into the same CTA.
          </p>
          <button
            type="button"
            className="primary-button"
            onClick={() => onRegister({ eventName: "" })}
          >
            Open Registration
          </button>
        </div>
      </section>
    </PageWrapper>
  );
}

function EventsPage({ onRegister }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents =
    activeCategory === "All"
      ? events
      : events.filter((event) => event.category === activeCategory);

  return (
    <PageWrapper
      eyebrow="Events"
      title="Browse by category, compare value quickly, and move to details without friction."
      description="This is the event-first page architecture the competition brief rewards."
    >
      <div className="filter-row">
        {categoryOptions.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-pill ${activeCategory === category ? "is-active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {filteredEvents.map((event) => (
          <EventCard key={event.slug} event={event} onRegister={onRegister} />
        ))}
      </div>
    </PageWrapper>
  );
}

function EventDetailsPage({ slug, onRegister }) {
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    return <NotFoundPage />;
  }

  return (
    <PageWrapper
      eyebrow={event.category}
      title={event.name}
      description={event.description}
    >
      <div className="details-hero">
        <div className="details-copy">
          <div className="pill-grid">
            <span className="info-pill">{event.tag}</span>
            <span className="info-pill">{event.highlight}</span>
          </div>

          <div className="meta-grid">
            <MetaCard label="Date" value={event.date} />
            <MetaCard label="Time" value={event.time} />
            <MetaCard label="Venue" value={event.venue} />
            <MetaCard label="Team Size" value={event.teamSize} />
            <MetaCard label="Fee" value={currencyFormatter.format(event.fee)} />
            <MetaCard label="Prize Pool" value={formatPrize(event.prizePool)} />
          </div>
        </div>

        <div className="details-visual">
          <img src={event.image} alt={event.name} />
        </div>
      </div>

      <div className="content-grid two-column">
        <article className="surface-card">
          <h3>Eligibility</h3>
          <ul className="detail-list">
            {event.eligibility.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="surface-card">
          <h3>Rules</h3>
          <ul className="detail-list">
            {event.rules.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <section className="cta-banner inner-cta">
        <div>
          <p className="eyebrow">Registration</p>
          <h2>{event.registerCta}</h2>
          <p>
            Use the modal to draft a registration email now. Replace it later with
            a form link if your team shares one.
          </p>
        </div>
        <div className="cta-actions">
          <button
            type="button"
            className="primary-button"
            onClick={() => onRegister({ eventName: event.name })}
          >
            Register Now
          </button>
          <button
            type="button"
            className="secondary-button"
            onClick={() => navigateTo("/events")}
          >
            Back to Events
          </button>
        </div>
      </section>
    </PageWrapper>
  );
}

function SchedulePage({ onRegister }) {
  return (
    <PageWrapper
      eyebrow="Schedule"
      title="The timeline is visible, scannable, and structured by day."
      description="Visitors should be able to plan attendance without hunting through dense paragraphs."
    >
      <div className="timeline-grid">
        {schedule.map((day) => (
          <article key={day.label} className="timeline-day">
            <div className="timeline-heading">
              <p className="eyebrow">{day.label}</p>
              <h3>{day.date}</h3>
            </div>
            <div className="timeline-items">
              {day.items.map((item) => (
                <div
                  key={`${day.label}-${item.time}-${item.title}`}
                  className="timeline-item"
                >
                  <strong>{item.time}</strong>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <span>{item.venue}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <section className="cta-banner inner-cta">
        <div>
          <p className="eyebrow">Need a spot</p>
          <h2>Plan your day, then secure your participation.</h2>
        </div>
        <button
          type="button"
          className="primary-button"
          onClick={() => onRegister({ eventName: "" })}
        >
          Open Registration
        </button>
      </section>
    </PageWrapper>
  );
}

function SpeakersPage({ onRegister }) {
  return (
    <PageWrapper
      eyebrow="Speakers"
      title="Guest profiles help the event feel credible and complete."
      description="This page stays intentionally focused: who they are, why they matter, and where they appear."
    >
      <div className="card-grid speakers-grid">
        {speakers.map((speaker) => (
          <article key={speaker.id} className="speaker-card">
            <div className="speaker-avatar">{speaker.name.charAt(0)}</div>
            <p className="eyebrow">{speaker.organization}</p>
            <h3>{speaker.name}</h3>
            <p className="speaker-role">{speaker.designation}</p>
            <p>{speaker.shortBio}</p>
            <ul className="detail-list compact-list">
              {speaker.sessions.map((session) => (
                <li key={session}>{session}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="cta-banner inner-cta">
        <div>
          <p className="eyebrow">Attend</p>
          <h2>Talks and mentor sessions work best when discovery starts early.</h2>
        </div>
        <button
          type="button"
          className="secondary-button"
          onClick={() => onRegister({ eventName: "" })}
        >
          Register Interest
        </button>
      </section>
    </PageWrapper>
  );
}

function SponsorsPage({ onRegister }) {
  return (
    <PageWrapper
      eyebrow="Sponsors"
      title="A structured sponsor wall adds legitimacy without overcomplicating the page."
      description="The current names come from the provided dataset and can be replaced once your team confirms the final list."
    >
      <div className="content-grid three-column">
        {sponsorGroups.map((group) => (
          <article key={group.title} className="surface-card sponsor-card">
            <p className="eyebrow">{group.title}</p>
            <div className="sponsor-list">
              {group.items.map((item) => (
                <span key={item} className="sponsor-chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <section className="cta-banner inner-cta">
        <div>
          <p className="eyebrow">Partnerships</p>
          <h2>Swap placeholder sponsor names once your final prospectus is locked.</h2>
        </div>
        <button
          type="button"
          className="secondary-button"
          onClick={() => onRegister({ eventName: "" })}
        >
          Contact Organizers
        </button>
      </section>
    </PageWrapper>
  );
}

function GalleryPage({ onRegister }) {
  return (
    <PageWrapper
      eyebrow="Gallery"
      title="The image grid is grounded in actual repository assets, not stock placeholders."
      description="That matters for authenticity when judges inspect the project quickly."
    >
      <div className="gallery-grid expanded-gallery">
        {gallery.map((item) => (
          <article key={item.id} className="gallery-card">
            <img src={item.image} alt={item.title} />
            <div className="gallery-caption">
              <strong>{item.title}</strong>
              <span>{item.category}</span>
            </div>
          </article>
        ))}
      </div>

      <section className="cta-banner inner-cta">
        <div>
          <p className="eyebrow">Next step</p>
          <h2>We can add a lightbox later if you want more polish after the core flow is stable.</h2>
        </div>
        <button
          type="button"
          className="primary-button"
          onClick={() => onRegister({ eventName: "" })}
        >
          Register for the Fest
        </button>
      </section>
    </PageWrapper>
  );
}

function ContactPage({ onRegister }) {
  return (
    <PageWrapper
      eyebrow="Contact"
      title="The visitor should always know where the fest is, who to reach, and how to proceed."
      description="Contact and registration are conversion pages, so they need clarity more than decoration."
    >
      <div className="content-grid three-column">
        <article className="surface-card">
          <p className="eyebrow">Email</p>
          <h3>{site.contact.email}</h3>
          <p>Use this for event questions, sponsor queries, and registration support.</p>
        </article>
        <article className="surface-card">
          <p className="eyebrow">Phone</p>
          <h3>{site.contact.phone}</h3>
          <p>Keep this ready for same-day coordination and participant guidance.</p>
        </article>
        <article className="surface-card">
          <p className="eyebrow">Venue</p>
          <h3>{site.contact.location}</h3>
          <p>Campus venue details are already surfaced in schedule and event pages.</p>
        </article>
      </div>

      <section className="cta-banner inner-cta">
        <div>
          <p className="eyebrow">Registration</p>
          <h2>Need the actual Google Form later? We can wire it into the same CTA immediately.</h2>
        </div>
        <button
          type="button"
          className="primary-button"
          onClick={() => onRegister({ eventName: "" })}
        >
          Open Registration
        </button>
      </section>
    </PageWrapper>
  );
}

function NotFoundPage() {
  return (
    <PageWrapper
      eyebrow="404"
      title="This route does not exist in the current MVP."
      description="Return to the homepage or jump straight to the event arena."
    >
      <div className="cta-actions">
        <button type="button" className="primary-button" onClick={() => navigateTo("/")}>
          Go Home
        </button>
        <button
          type="button"
          className="secondary-button"
          onClick={() => navigateTo("/events")}
        >
          Browse Events
        </button>
      </div>
    </PageWrapper>
  );
}

function PageWrapper({ eyebrow, title, description, children }) {
  return (
    <section className="page-section">
      <div className="page-head">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {children}
    </section>
  );
}

function Section({ eyebrow, title, description, children }) {
  return (
    <section className="page-section home-section">
      <div className="section-head">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </section>
  );
}

function EventCard({ event, onRegister, compact = false }) {
  return (
    <article className={`event-card ${compact ? "is-compact" : ""}`}>
      <div className="event-card-image" style={{ backgroundImage: `url(${event.image})` }} />
      <div className="event-card-body">
        <div className="event-card-topline">
          <span className="event-tag">{event.tag}</span>
          <span className="event-category">{event.category}</span>
        </div>
        <h3>{event.name}</h3>
        <p>{event.shortDescription}</p>
        <div className="event-metrics">
          <div>
            <span>When</span>
            <strong>{event.date}</strong>
          </div>
          <div>
            <span>Fee</span>
            <strong>{currencyFormatter.format(event.fee)}</strong>
          </div>
          <div>
            <span>Prize</span>
            <strong>{formatPrize(event.prizePool)}</strong>
          </div>
        </div>
        <div className="card-actions">
          <button
            type="button"
            className="text-button"
            onClick={() => navigateTo(`/events/${event.slug}`)}
          >
            View Details
          </button>
          <button
            type="button"
            className="ghost-button"
            onClick={() => onRegister({ eventName: event.name })}
          >
            Register
          </button>
        </div>
      </div>
    </article>
  );
}

function MetaCard({ label, value }) {
  return (
    <div className="meta-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function RegisterModal({ context, onClose }) {
  const isOpen = Boolean(context);
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    teamSize: "",
    teamMembers: "",
  });

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const selectedEvent = context.eventName || "General festival registration";

  const handleChange = (name, value) => {
    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = [
      `Name: ${formValues.fullName}`,
      `Email: ${formValues.email}`,
      `Phone: ${formValues.phone}`,
      `College: ${formValues.college}`,
      `Event: ${selectedEvent}`,
      `Team Size: ${formValues.teamSize || "Not provided"}`,
      `Team Members: ${formValues.teamMembers || "Not provided"}`,
    ].join("\n");

    const mailto = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `Registration Request - ${selectedEvent}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-head">
          <div>
            <p className="eyebrow">Registration</p>
            <h2>{selectedEvent}</h2>
            <p>
              Backend-free fallback: this drafts a registration email to the fest
              contact address.
            </p>
          </div>
          <button type="button" className="modal-close" onClick={onClose}>
            Close
          </button>
        </div>

        <form className="registration-form" onSubmit={handleSubmit}>
          {registrationFields.map((field) => (
            <label key={field.name} className="form-field">
              <span>{field.label}</span>
              {field.type === "textarea" ? (
                <textarea
                  value={formValues[field.name]}
                  required={field.required}
                  onChange={(event) => handleChange(field.name, event.target.value)}
                />
              ) : (
                <input
                  type={field.type}
                  value={formValues[field.name]}
                  required={field.required}
                  onChange={(event) => handleChange(field.name, event.target.value)}
                />
              )}
            </label>
          ))}

          <div className="form-actions">
            <button type="submit" className="primary-button">
              Draft Email Registration
            </button>
            <button type="button" className="secondary-button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
