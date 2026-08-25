# AI Data Export (NIRVAN '26)

This file exports real project data from source files so another AI can ingest it directly.

## Source files

- `src/data/siteInfo.js`
- `src/data/events.js`
- `src/data/schedule.js`
- `src/data/speakers.js`
- `src/data/sponsors.js`
- `src/pages/Home.jsx` (hardcoded homepage content)

---

## siteInfo

```json
{
  "name": "NIRVAN '26",
  "tagline": "Where Ideas Become Innovation",
  "type": "Annual College Technical Fest",
  "dates": {
    "start": "2026-10-24",
    "end": "2026-10-26",
    "display": "October 24 – 26, 2026"
  },
  "venue": "GEHU Campus",
  "college": "Graphic Era Hill University, Haldwani Campus",
  "about": "NIRVAN '26 brings together developers, innovators, designers, and technology enthusiasts for three days of challenges, competitions, workshops, and collaboration.",
  "countdownTarget": "2026-10-24T09:00:00+05:30",
  "contact": {
    "email": "nirvan@gehu.in",
    "phone": "+91 1256489632",
    "location": "GEHU Campus, Haldwani, Uttarakhand"
  },
  "organizer": "Tech Geeks",
  "year": 2026
}
```

---

## events

```json
[
  {
    "id": "hackathon",
    "slug": "hacksprint",
    "title": "HackSprint",
    "category": "Tech",
    "tag": "TECH",
    "icon": "Code",
    "image": "/posters/Hackathon.png",
    "shortDescription": "A high-energy innovation challenge where participants turn ideas into impactful solutions.",
    "description": "Build, code, collaborate, and compete against talented teams while solving real-world problems under time constraints. HackSprint is an overnight development marathon that tests your ability to design, build, and ship a working solution from scratch.",
    "date": "October 25, 2026",
    "time": "6:00 PM",
    "duration": "12 hours",
    "venue": "Innovation Hub",
    "teamSize": "3–5 Members",
    "eligibility": [
      "Open to all undergraduate students",
      "Participants must register as a team of 3–5 members",
      "Valid college ID required on the day of the event"
    ],
    "fee": "₹150",
    "prize": "₹30,000",
    "rules": [
      "Duration: 12 hours, overnight",
      "Teams must build a working prototype from scratch during the event",
      "Use of open-source libraries and frameworks is allowed",
      "Plagiarism or pre-built projects will result in disqualification",
      "A mentor round will be held midway through the event",
      "Judges' decision is final and binding"
    ],
    "registrationUrl": "#register"
  },
  {
    "id": "coding",
    "slug": "coderush",
    "title": "CodeRush",
    "category": "Tech",
    "tag": "TECH",
    "icon": "Terminal",
    "shortDescription": "Test your algorithmic skills and speed in the ultimate competitive programming showdown.",
    "description": "CodeRush is the premier competitive programming event of NIRVAN '26. It challenges participants to solve algorithmic problems using C, C++, Java, or Python. The event is designed to test logic, optimization skills, and coding speed.",
    "date": "October 25, 2026",
    "time": "10:00 AM",
    "duration": "3 hours",
    "venue": "Computer Lab 1",
    "teamSize": "1–2 Members",
    "eligibility": [
      "Open to all undergraduate students",
      "Participants can register individually or in teams of two",
      "Valid college ID required on the day of the event"
    ],
    "fee": "₹100",
    "prize": "₹15,000",
    "rules": [
      "Duration: 3 hours",
      "Platform: HackerRank (link will be provided)",
      "Internet access is restricted to the competition platform only",
      "Use of mobile phones or external storage devices is strictly prohibited",
      "Plagiarism will result in immediate disqualification",
      "Scoring is based on the number of test cases passed",
      "In case of a tie, time taken to solve will be the tie-breaker",
      "The judges' decision is final and binding"
    ],
    "registrationUrl": "#register"
  },
  {
    "id": "design",
    "slug": "ui-ux-arena",
    "title": "UI/UX Arena",
    "category": "Design",
    "tag": "DESIGN",
    "icon": "Pen",
    "shortDescription": "Design intuitive and aesthetic interfaces for complex real-world problems.",
    "description": "A design sprint and rapid prototyping challenge. Teams are given a real-world product brief and must research, wireframe, and design a polished, user-centered interface within the allotted time using tools of their choice.",
    "date": "October 25, 2026",
    "time": "2:00 PM",
    "duration": "3 hours",
    "venue": "Design Studio",
    "teamSize": "1–3 Members",
    "eligibility": [
      "Open to all undergraduate students",
      "Teams of 1–3 members",
      "Prior experience with a design tool (Figma, Adobe XD, etc.) is recommended"
    ],
    "fee": "₹100",
    "prize": "₹8,000",
    "rules": [
      "Duration: 3 hours",
      "Brief will be revealed at the start of the event",
      "Any design tool is permitted (Figma, Adobe XD, Sketch, etc.)",
      "Final files must be submitted as a shareable prototype link",
      "Plagiarized or template-based designs will be disqualified",
      "Judges' decision is final and binding"
    ],
    "registrationUrl": "#register"
  },
  {
    "id": "robotics",
    "slug": "robowar",
    "title": "RoboWar Championship",
    "category": "Tech",
    "tag": "TECH",
    "icon": "Bot",
    "shortDescription": "Design, build, and battle in the ultimate arena of destruction and engineering precision.",
    "description": "The ultimate battle of mechanical engineering. Teams bring their own combat robots to compete in a knockout-style tournament in the arena. Robots are judged on durability, offensive strategy, and control.",
    "date": "October 25, 2026",
    "time": "4:00 PM",
    "duration": "3 hours",
    "venue": "Open Grounds",
    "teamSize": "2–4 Members",
    "eligibility": [
      "Open to all undergraduate students",
      "Robots must comply with the published weight and size regulations",
      "Teams of 2–4 members",
      "Valid college ID required on the day of the event"
    ],
    "fee": "₹500",
    "prize": "₹25,000",
    "rules": [
      "Weight limit: 15kg per robot",
      "No flame, liquid, or projectile-based weapons allowed",
      "Matches are knockout-style, 3 minutes per round",
      "Robots must pass a safety inspection before competing",
      "Judges' decision is final and binding"
    ],
    "registrationUrl": "#register"
  },
  {
    "id": "iot",
    "slug": "smart-systems-expo",
    "title": "Smart Systems Expo",
    "category": "Tech",
    "tag": "TECH",
    "icon": "Cpu",
    "shortDescription": "Showcase your hardware innovations and IoT solutions to a panel of expert judges.",
    "description": "A showcase competition for IoT and embedded systems projects. Teams present working hardware prototypes solving real-world problems, judged on innovation, functionality, and technical depth.",
    "date": "October 26, 2026",
    "time": "11:00 AM",
    "duration": "2 hours",
    "venue": "Seminar Hall 1",
    "teamSize": "1–4 Members",
    "eligibility": [
      "Open to all undergraduate students",
      "Project must include a working hardware prototype",
      "Teams of 1–4 members"
    ],
    "fee": "₹150",
    "prize": "₹12,000",
    "rules": [
      "Each team gets a 10-minute presentation + 5-minute Q&A slot",
      "Prototype must be self-powered or provide own power source",
      "Judging based on innovation, functionality, and presentation",
      "Judges' decision is final and binding"
    ],
    "registrationUrl": "#register"
  },
  {
    "id": "esports",
    "slug": "esports-arena",
    "title": "E-Sports Arena",
    "category": "Gaming",
    "tag": "GAMING",
    "icon": "Gamepad2",
    "image": "/posters/Esport.png",
    "shortDescription": "Experience the ultimate competitive gaming arena where strategy, teamwork, and reflexes collide.",
    "description": "Compete against fellow gamers, climb the leaderboard, and battle for victory in a bracket-style tournament across popular competitive titles.",
    "date": "October 25, 2026",
    "time": "2:00 PM",
    "duration": "4 hours",
    "venue": "Lab 2",
    "teamSize": "1–5 Members",
    "eligibility": [
      "Open to all students",
      "Team size varies by game title (see rules)",
      "Participants must bring their own peripherals if preferred"
    ],
    "fee": "₹100",
    "prize": "₹10,000",
    "rules": [
      "Single/double elimination bracket format",
      "Game titles and formats announced prior to the event",
      "Any use of cheats, exploits, or third-party software is grounds for disqualification",
      "Judges'/admins' decision is final and binding"
    ],
    "registrationUrl": "#register"
  },
  {
    "id": "ctf",
    "slug": "ctf-cyberquest",
    "title": "CTF: CyberQuest",
    "category": "Tech",
    "tag": "TECH",
    "icon": "Shield",
    "image": "/posters/Ctf.png",
    "shortDescription": "Put your cybersecurity skills to the test through a series of challenges.",
    "description": "A Capture The Flag competition covering cryptography, web security, forensics, and reverse engineering. Find the flags, crack the challenges, and prove your skills against the clock.",
    "date": "October 25, 2026",
    "time": "4:00 PM",
    "duration": "3 hours",
    "venue": "Open Ground",
    "teamSize": "1–3 Members",
    "eligibility": [
      "Open to all undergraduate students",
      "Basic knowledge of networking and security concepts recommended",
      "Teams of 1–3 members"
    ],
    "fee": "₹100",
    "prize": "₹12,000",
    "rules": [
      "Duration: 3 hours",
      "Categories: cryptography, web security, forensics, reverse engineering",
      "Attacking the competition infrastructure itself is prohibited",
      "Flag sharing between teams results in disqualification",
      "Judges'/admins' decision is final and binding"
    ],
    "registrationUrl": "#register"
  },
  {
    "id": "treasurehunt",
    "slug": "treasure-hunt",
    "title": "Treasure Hunt",
    "category": "Fun",
    "tag": "FUN",
    "icon": "Map",
    "image": "/posters/Tech treasure hunt.png",
    "shortDescription": "A thrilling adventure combining logic, teamwork, observation, and problem-solving.",
    "description": "Follow clues, overcome challenges, and race against other teams across campus to uncover the ultimate treasure.",
    "date": "October 25, 2026",
    "time": "11:00 AM",
    "duration": "2 hours",
    "venue": "Seminar Hall / Campus-wide",
    "teamSize": "2–4 Members",
    "eligibility": [
      "Open to all students",
      "Teams of 2–4 members",
      "Must remain within designated campus boundaries"
    ],
    "fee": "₹80",
    "prize": "₹6,000",
    "rules": [
      "Clues must be solved in sequence",
      "No outside help or internet searches permitted",
      "First team to reach the final checkpoint wins",
      "Judges'/admins' decision is final and binding"
    ],
    "registrationUrl": "#register"
  },
  {
    "id": "workshop",
    "slug": "tech-workshop",
    "title": "Tech Workshop",
    "category": "Tech",
    "tag": "LEARN",
    "icon": "GraduationCap",
    "shortDescription": "An interactive learning experience designed to bridge the gap between theory and practical skills.",
    "description": "Learn from experts, explore emerging technologies, and gain hands-on experience through engaging activities. Topic announced closer to the event date.",
    "date": "October 24, 2026",
    "time": "1:00 PM",
    "duration": "2 hours",
    "venue": "Seminar Hall 1",
    "teamSize": "Solo",
    "eligibility": [
      "Open to all students",
      "Individual registration only",
      "Laptop recommended for hands-on portions"
    ],
    "fee": "₹50",
    "prize": "—",
    "rules": [
      "Seats are limited and allotted on a first-come, first-served basis",
      "Participants must carry their own laptops for hands-on sessions",
      "Certificates provided on completion"
    ],
    "registrationUrl": "#register"
  }
]
```

---

## schedule

```json
{
  "day1": {
    "label": "Day 1",
    "date": "October 24, 2026",
    "items": [
      { "time": "09:00", "title": "Opening Ceremony", "description": "Kickoff presentation and keynote address.", "venue": "Main Auditorium", "category": "Keynote" },
      { "time": "10:00", "title": "CodeRush", "description": "Competitive programming tournament begins.", "venue": "Computer Lab 1", "category": "Tech" },
      { "time": "11:00", "title": "Tech Quiz", "description": "Trivia covering the latest in tech and computer science.", "venue": "Seminar Hall 1", "category": "Tech" },
      { "time": "13:00", "title": "Lunch Break", "description": "Break for lunch.", "venue": "Food Court", "category": "Break" },
      { "time": "13:00", "title": "Tech Workshop", "description": "Hands-on workshop with industry experts.", "venue": "Seminar Hall 1", "category": "Tech" },
      { "time": "17:00", "title": "Speaker Session", "description": "Guest talk from an industry speaker.", "venue": "Main Auditorium", "category": "Keynote" }
    ]
  },
  "day2": {
    "label": "Day 2",
    "date": "October 25, 2026",
    "items": [
      { "time": "10:00", "title": "CodeRush Finals", "description": "Top qualifiers compete for the top spot.", "venue": "Computer Lab 1", "category": "Tech" },
      { "time": "11:00", "title": "Treasure Hunt", "description": "Campus-wide clue-solving adventure.", "venue": "Seminar Hall / Campus-wide", "category": "Fun" },
      { "time": "14:00", "title": "UI/UX Arena", "description": "Design sprint and rapid prototyping challenge.", "venue": "Design Studio", "category": "Design" },
      { "time": "14:00", "title": "E-Sports Arena", "description": "Bracket-style competitive gaming tournament.", "venue": "Lab 2", "category": "Gaming" },
      { "time": "16:00", "title": "RoboWar Championship", "description": "Bot combat arena qualifiers and finals.", "venue": "Open Grounds", "category": "Tech" },
      { "time": "16:00", "title": "CTF: CyberQuest", "description": "Capture-the-flag cybersecurity challenge.", "venue": "Open Ground", "category": "Tech" },
      { "time": "18:00", "title": "HackSprint Begins", "description": "12-hour overnight development marathon commences.", "venue": "Innovation Hub", "category": "Tech" }
    ]
  },
  "day3": {
    "label": "Day 3",
    "date": "October 26, 2026",
    "items": [
      { "time": "09:00", "title": "HackSprint Submissions", "description": "Final submissions and judging begin.", "venue": "Innovation Hub", "category": "Tech" },
      { "time": "11:00", "title": "Smart Systems Expo", "description": "IoT and hardware project showcase.", "venue": "Seminar Hall 1", "category": "Tech" },
      { "time": "14:00", "title": "Closing Ceremony & Prize Distribution", "description": "Winners announced across all events.", "venue": "Main Auditorium", "category": "Keynote" }
    ]
  }
}
```

---

## speakers

```json
[
  {
    "id": "alice-chen",
    "name": "Dr. Alice Chen",
    "role": "Chief AI Scientist",
    "org": "Quantum Computing Corp.",
    "bio": "Pioneering research in quantum neural networks and their application in cryptography. Former lead researcher at MIT Media Lab. At NIRVAN '26, Dr. Chen will discuss the future of edge computing AI and how decentralized models are shaping the next generation of smart devices.",
    "photo": null,
    "category": "Keynote",
    "sessions": [
      { "day": "Day 1", "time": "09:00 AM – 10:00 AM", "title": "Keynote: Opening Ceremony" },
      { "day": "Day 2", "time": "06:00 PM onwards", "title": "HackSprint Mentor Session" }
    ]
  },
  {
    "id": "marcus-vance",
    "name": "Marcus Vance",
    "role": "VP of Engineering",
    "org": "Nexus Robotics",
    "bio": "Leading the development of next-generation autonomous swarm robotics for space exploration and extreme environments. Marcus has spent over a decade building robotic systems designed to operate in the harshest environments on Earth and beyond.",
    "photo": null,
    "category": "Workshop",
    "sessions": [
      { "day": "Day 2", "time": "04:00 PM – 07:00 PM", "title": "RoboWar Championship Judge" }
    ]
  },
  {
    "id": "elena-rostova",
    "name": "Elena Rostova",
    "role": "Security Architect",
    "org": "Global Cyber Defense",
    "bio": "Expert in zero-trust architecture and distributed systems security. Author of 'The Resilient Network Architecture'. Elena has consulted for governments and Fortune 500 companies on securing critical infrastructure.",
    "photo": null,
    "category": "Panel",
    "sessions": [
      { "day": "Day 2", "time": "04:00 PM – 07:00 PM", "title": "CTF: CyberQuest Host" }
    ]
  }
]
```

---

## sponsors

```json
{
  "title": [
    { "name": "TechCorp", "tier": "Title", "logo": null, "website": "https://example.com/techcorp" },
    { "name": "Zeopto", "tier": "Title", "logo": null, "website": "https://example.com/zeopto" }
  ],
  "gold": [
    { "name": "DevLabs", "tier": "Gold", "logo": null, "website": "https://example.com/devlabs" },
    { "name": "CloudNova", "tier": "Gold", "logo": null, "website": "https://example.com/cloudnova" },
    { "name": ".xyz", "tier": "Gold", "logo": null, "website": "https://example.com/xyz" },
    { "name": "lovable.Ai", "tier": "Gold", "logo": null, "website": "https://example.com/lovableai" },
    { "name": "HackNest", "tier": "Gold", "logo": null, "website": "https://example.com/hacknest" }
  ],
  "community": [
    { "name": "GitHub Community", "tier": "Community", "logo": null, "website": "https://github.com" },
    { "name": "GDG", "tier": "Community", "logo": null, "website": "https://gdg.community.dev" }
  ]
}
```

---

## Home page hardcoded data (`src/pages/Home.jsx`)

```json
{
  "hero": {
    "dateVenueText": "Oct 24–26, 2026 | GEHU Campus",
    "titleMain": "NIRVAN",
    "titleYear": "'26",
    "tagline": "Where Ideas Become Innovation.",
    "videoUrl": "https://res.cloudinary.com/drwoag8ru/video/upload/v1787653490/WhatsApp_Video_2026-08-25_at_3.53.15_PM_dnmrqf.mp4"
  },
  "whyNirvanCards": [
    {
      "title": "Mission",
      "desc": "Pushing the boundaries of collegiate technical capabilities through rigorous challenges.",
      "accent": "accent-indigo"
    },
    {
      "title": "Community",
      "desc": "Forge alliances with like-minded innovators across diverse technological disciplines.",
      "accent": "accent-violet"
    },
    {
      "title": "Innovation",
      "desc": "Incubating raw ideas into prototype-ready solutions for real-world problems.",
      "accent": "accent-pink"
    },
    {
      "title": "Competition",
      "desc": "Test your mettle against the best minds in high-stakes, adrenaline-fueled arenas.",
      "accent": "accent-gold"
    }
  ],
  "featuredSection": {
    "heading": "Featured Artifacts",
    "subheading": "Discover the prime directives of this year's gathering.",
    "source": "Top 3 events from events[] using events.slice(0, 3)"
  },
  "countdownStripTitle": "Initiation In"
}
```

---

## Notes for AI ingestion

- `featuredEvents` on Home page uses first three entries from `events`.
- Event `icon` values are string names mapped to icon components in UI.
- `registrationUrl` is currently a placeholder (`#register`) for all events.
- Some sponsor URLs are placeholders (`example.com`).
