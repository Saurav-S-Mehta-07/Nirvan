import gehuLogo from "../../../competition/clg assets/gehu_hld_white.svg";
import techGeeksLogo from "../../../competition/clg assets/techgeeks white.svg";

export const site = {
  name: "NIRVAN '26",
  tagline: "Where Ideas Become Innovation",
  type: "Annual College Technical Fest",
  dateRange: "October 24 - 26, 2026",
  startDate: "2026-10-24T09:00:00+05:30",
  venue: "GEHU Campus",
  college: "Graphic Era Hill University, Haldwani Campus",
  about:
    "NIRVAN '26 brings together developers, designers, makers, gamers, and problem-solvers for three days of challenges, workshops, showcases, and community energy.",
  description:
    "The experience is built around fast event discovery, clear schedules, and strong calls to action, with a dark-academy festival identity layered on top of practical information.",
  audience: [
    "Students",
    "Developers",
    "Designers",
    "Technology enthusiasts",
  ],
  themes: ["Innovation", "Competition", "Workshops", "Community"],
  stats: [
    { label: "Days", value: "3" },
    { label: "Events", value: "9" },
    { label: "Prize Pool", value: "1.18L+" },
    { label: "Tracks", value: "Tech + Design + Gaming" },
  ],
  heroImage: "/media/hero-backdrop.jpg",
  logos: [
    { name: "GEHU", image: gehuLogo },
    { name: "Tech Geeks", image: techGeeksLogo },
  ],
  navigation: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Events", path: "/events" },
    { label: "Schedule", path: "/schedule" },
    { label: "Speakers", path: "/speakers" },
    { label: "Sponsors", path: "/sponsors" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ],
  contact: {
    email: "nirvan@gehu.in",
    phone: "+91 1256489632",
    location: "GEHU Campus, Graphic Era Hill University, Haldwani",
  },
  footer: {
    explore: [
      { label: "About Nirvan", path: "/about" },
      { label: "Event Arena", path: "/events" },
      { label: "Schedule", path: "/schedule" },
    ],
    support: [
      { label: "Speakers", path: "/speakers" },
      { label: "Sponsors", path: "/sponsors" },
      { label: "Gallery", path: "/gallery" },
    ],
  },
};

export const events = [
  {
    id: "hackathon",
    slug: "hacksprint",
    name: "HackSprint",
    category: "Hackathon",
    tag: "TECH",
    shortDescription:
      "A high-energy innovation challenge where teams turn ideas into real solutions overnight.",
    description:
      "Build, code, collaborate, and compete under pressure while solving real-world problems. HackSprint is designed to test product thinking, execution speed, and teamwork in a marathon format.",
    date: "October 25, 2026",
    time: "06:00 PM",
    duration: "12 hours",
    venue: "Innovation Hub",
    teamSize: "3-5 members",
    fee: 150,
    prizePool: 30000,
    eligibility: [
      "Open to all undergraduate students",
      "Teams of 3 to 5 members only",
      "Valid college ID required on event day",
    ],
    rules: [
      "Build a fresh working prototype during the event window",
      "Open-source libraries and frameworks are allowed",
      "Pre-built or plagiarized projects lead to disqualification",
      "A mentor review round will be held midway through the night",
    ],
    registerCta: "Register for HackSprint",
    highlight: "Overnight build sprint",
    image: "/media/poster-hackathon.jpg",
  },
  {
    id: "coding",
    slug: "coderush",
    name: "CodeRush",
    category: "Competitive Programming",
    tag: "TECH",
    shortDescription:
      "Algorithmic problem-solving under pressure for coders who thrive on speed and logic.",
    description:
      "CodeRush challenges participants to solve increasingly difficult programming problems on a live judge platform. It rewards clean thinking, optimization, and execution discipline.",
    date: "October 25, 2026",
    time: "10:00 AM",
    duration: "3 hours",
    venue: "Computer Lab 1",
    teamSize: "Solo or duo",
    fee: 100,
    prizePool: 15000,
    eligibility: [
      "Open to all undergraduate students",
      "Individual participation or teams of two",
      "Valid college ID required on event day",
    ],
    rules: [
      "Competition window is limited to 3 hours",
      "Internet access is limited to the coding platform",
      "Use of phones or external storage devices is prohibited",
      "Ties are broken by submission speed after score",
    ],
    registerCta: "Register for CodeRush",
    highlight: "Live judge platform",
    image: "/media/poster-hackathon.jpg",
  },
  {
    id: "design",
    slug: "ui-ux-arena",
    name: "UI/UX Arena",
    category: "Design",
    tag: "DESIGN",
    shortDescription:
      "A design sprint focused on user-centered interfaces for complex, real-world problems.",
    description:
      "Participants receive a product brief and must move from research and structure to a polished interface within a short, intense window. It rewards clarity, craft, and product reasoning.",
    date: "October 25, 2026",
    time: "02:00 PM",
    duration: "3 hours",
    venue: "Design Studio",
    teamSize: "1-3 members",
    fee: 100,
    prizePool: 8000,
    eligibility: [
      "Open to all undergraduate students",
      "Teams of one to three members",
      "Prior exposure to Figma or similar tools is recommended",
    ],
    rules: [
      "The design brief is revealed at the event start",
      "Any design tool is permitted",
      "Final submissions must be shared as prototype links",
      "Template-driven or plagiarized work is disqualified",
    ],
    registerCta: "Register for UI/UX Arena",
    highlight: "Rapid prototyping challenge",
    image: "/media/poster-treasure.jpg",
  },
  {
    id: "robotics",
    slug: "robowar",
    name: "RoboWar Championship",
    category: "Robotics",
    tag: "TECH",
    shortDescription:
      "An engineering battle arena where custom combat robots compete in knockout rounds.",
    description:
      "Teams bring their own bots into a controlled arena and compete on durability, strategy, and control. RoboWar is built for spectacle, mechanical craft, and high-pressure execution.",
    date: "October 25, 2026",
    time: "04:00 PM",
    duration: "3 hours",
    venue: "Open Grounds",
    teamSize: "2-4 members",
    fee: 500,
    prizePool: 25000,
    eligibility: [
      "Open to all undergraduate students",
      "Teams of two to four members",
      "Robots must pass weight and safety checks",
    ],
    rules: [
      "Maximum robot weight is 15 kg",
      "Flame, liquid, and projectile weapons are not allowed",
      "Every robot must pass inspection before battle",
      "Each match is a 3-minute knockout round",
    ],
    registerCta: "Register for RoboWar",
    highlight: "Battle arena format",
    image: "/media/poster-hackathon.jpg",
  },
  {
    id: "iot",
    slug: "smart-systems-expo",
    name: "Smart Systems Expo",
    category: "IoT / Hardware",
    tag: "TECH",
    shortDescription:
      "A showcase for hardware builders and embedded innovators solving practical problems.",
    description:
      "Teams present working IoT and embedded prototypes to a judging panel. The format rewards innovation, technical depth, clarity of thinking, and demonstrable functionality.",
    date: "October 26, 2026",
    time: "11:00 AM",
    duration: "2 hours",
    venue: "Seminar Hall 1",
    teamSize: "1-4 members",
    fee: 150,
    prizePool: 12000,
    eligibility: [
      "Open to all undergraduate students",
      "Teams of one to four members",
      "A working hardware prototype is mandatory",
    ],
    rules: [
      "Each team gets a presentation slot followed by Q&A",
      "Prototype must be self-powered or self-supported",
      "Judging focuses on innovation, functionality, and delivery",
    ],
    registerCta: "Register for Smart Systems Expo",
    highlight: "Prototype showcase",
    image: "/media/poster-ctf.jpg",
  },
  {
    id: "esports",
    slug: "esports-arena",
    name: "E-Sports Arena",
    category: "Gaming",
    tag: "GAMING",
    shortDescription:
      "Bracket-style competitive gaming for players who want the spotlight and the trophy.",
    description:
      "Players and teams compete across selected titles in a live tournament environment. The experience is built around crowd energy, strategy, reflexes, and format discipline.",
    date: "October 25, 2026",
    time: "02:00 PM",
    duration: "4 hours",
    venue: "Lab 2",
    teamSize: "1-5 members",
    fee: 100,
    prizePool: 10000,
    eligibility: [
      "Open to all students",
      "Team size varies by title",
      "Participants may bring their own peripherals",
    ],
    rules: [
      "Bracket format may be single or double elimination",
      "Titles and formats are announced before the tournament",
      "Cheats, exploits, or third-party software are disqualifying",
    ],
    registerCta: "Register for E-Sports Arena",
    highlight: "Live bracket action",
    image: "/media/poster-esports.jpg",
  },
  {
    id: "ctf",
    slug: "ctf-cyberquest",
    name: "CTF: CyberQuest",
    category: "Cybersecurity",
    tag: "TECH",
    shortDescription:
      "A capture-the-flag challenge spanning cryptography, web security, forensics, and reverse engineering.",
    description:
      "CyberQuest pushes participants through timed security challenges that reward curiosity, technical depth, and precise execution. It is designed for students who want to prove real security skills.",
    date: "October 25, 2026",
    time: "04:00 PM",
    duration: "3 hours",
    venue: "Open Ground",
    teamSize: "1-3 members",
    fee: 100,
    prizePool: 12000,
    eligibility: [
      "Open to all undergraduate students",
      "Basic networking and security knowledge is recommended",
      "Teams of one to three members",
    ],
    rules: [
      "Challenge set covers web, crypto, reverse engineering, and forensics",
      "Attacking competition infrastructure is prohibited",
      "Flag sharing between teams leads to disqualification",
    ],
    registerCta: "Register for CTF",
    highlight: "Security challenge track",
    image: "/media/poster-ctf.jpg",
  },
  {
    id: "treasurehunt",
    slug: "treasure-hunt",
    name: "Treasure Hunt",
    category: "Adventure",
    tag: "FUN",
    shortDescription:
      "A campus-wide clue race combining teamwork, observation, logic, and momentum.",
    description:
      "Teams move across campus solving connected clues, unlocking checkpoints, and racing toward the final objective. It is fast, social, and built around collaborative problem-solving.",
    date: "October 25, 2026",
    time: "11:00 AM",
    duration: "2 hours",
    venue: "Seminar Hall / Campus-wide",
    teamSize: "2-4 members",
    fee: 80,
    prizePool: 6000,
    eligibility: [
      "Open to all students",
      "Teams of two to four members",
      "Participants must stay within designated campus boundaries",
    ],
    rules: [
      "Clues are solved in sequence",
      "Outside help and internet searches are not allowed",
      "The first team to finish the full route wins",
    ],
    registerCta: "Register for Treasure Hunt",
    highlight: "Campus clue chase",
    image: "/media/poster-treasure.jpg",
  },
  {
    id: "workshop",
    slug: "tech-workshop",
    name: "Tech Workshop",
    category: "Workshop",
    tag: "LEARN",
    shortDescription:
      "A guided hands-on session designed to bridge theory and practical technical skills.",
    description:
      "The workshop brings participants closer to current tools, workflows, and ideas through a practical session led by experts. It is focused on learning with immediate takeaways.",
    date: "October 24, 2026",
    time: "01:00 PM",
    duration: "2 hours",
    venue: "Seminar Hall 1",
    teamSize: "Solo",
    fee: 50,
    prizePool: 0,
    eligibility: [
      "Open to all students",
      "Individual registration only",
      "Laptop recommended for hands-on activities",
    ],
    rules: [
      "Seats are limited and filled on a first-come basis",
      "Bring a laptop for the interactive segments",
      "Certificates are provided on completion",
    ],
    registerCta: "Register for Workshop",
    highlight: "Hands-on learning",
    image: "/media/poster-hackathon.jpg",
  },
];

export const schedule = [
  {
    label: "Day 1",
    date: "October 24, 2026",
    items: [
      {
        time: "09:00 AM",
        title: "Opening Ceremony",
        description: "Kickoff presentation and keynote address.",
        venue: "Main Auditorium",
        tags: ["Launch"],
      },
      {
        time: "10:00 AM",
        title: "CodeRush Qualifiers",
        description: "Competitive programming tournament begins.",
        venue: "Computer Lab 1",
        tags: ["TECH"],
      },
      {
        time: "01:00 PM",
        title: "Tech Workshop",
        description: "Hands-on workshop with industry experts.",
        venue: "Seminar Hall 1",
        tags: ["LEARN"],
      },
      {
        time: "05:00 PM",
        title: "Speaker Session",
        description: "Guest talk focused on the future of AI systems.",
        venue: "Main Auditorium",
        tags: ["Talk"],
      },
    ],
  },
  {
    label: "Day 2",
    date: "October 25, 2026",
    items: [
      {
        time: "10:00 AM",
        title: "CodeRush Finals",
        description: "Top qualifiers compete for the leaderboard.",
        venue: "Computer Lab 1",
        tags: ["TECH"],
      },
      {
        time: "11:00 AM",
        title: "Treasure Hunt",
        description: "Campus-wide clue-solving adventure.",
        venue: "Seminar Hall / Campus-wide",
        tags: ["FUN"],
      },
      {
        time: "02:00 PM",
        title: "UI/UX Arena",
        description: "Design sprint and rapid prototyping challenge.",
        venue: "Design Studio",
        tags: ["DESIGN"],
      },
      {
        time: "02:00 PM",
        title: "E-Sports Arena",
        description: "Bracket-style gaming tournament.",
        venue: "Lab 2",
        tags: ["GAMING"],
      },
      {
        time: "04:00 PM",
        title: "RoboWar Championship",
        description: "Battle arena qualifiers and finals.",
        venue: "Open Grounds",
        tags: ["TECH"],
      },
      {
        time: "04:00 PM",
        title: "CTF: CyberQuest",
        description: "Capture-the-flag cybersecurity challenge.",
        venue: "Open Ground",
        tags: ["TECH"],
      },
      {
        time: "06:00 PM",
        title: "HackSprint Begins",
        description: "Overnight development marathon commences.",
        venue: "Innovation Hub",
        tags: ["TECH"],
      },
    ],
  },
  {
    label: "Day 3",
    date: "October 26, 2026",
    items: [
      {
        time: "09:00 AM",
        title: "HackSprint Submissions",
        description: "Final submissions and judging begin.",
        venue: "Innovation Hub",
        tags: ["TECH"],
      },
      {
        time: "11:00 AM",
        title: "Smart Systems Expo",
        description: "IoT and hardware project showcase.",
        venue: "Seminar Hall 1",
        tags: ["TECH"],
      },
      {
        time: "02:00 PM",
        title: "Closing Ceremony",
        description: "Winners announced across all events.",
        venue: "Main Auditorium",
        tags: ["Finale"],
      },
    ],
  },
];

export const speakers = [
  {
    id: "alice-chen",
    name: "Dr. Alice Chen",
    designation: "Chief AI Scientist",
    organization: "Quantum Computing Corp.",
    shortBio:
      "Researcher focused on quantum neural networks, efficient inference, and real-world AI systems.",
    sessions: [
      "Opening keynote on Day 1",
      "HackSprint mentor session on Day 2",
    ],
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    designation: "VP of Engineering",
    organization: "Nexus Robotics",
    shortBio:
      "Engineering leader building autonomous robotics systems for high-risk and extreme environments.",
    sessions: [
      "RoboWar Championship judge",
      "Talk on the future of autonomous systems",
    ],
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    designation: "Security Architect",
    organization: "Global Cyber Defense",
    shortBio:
      "Security specialist known for zero-trust architecture and resilient distributed infrastructure design.",
    sessions: [
      "CTF: CyberQuest host",
      "Cybersecurity trends session",
    ],
  },
];

export const sponsorGroups = [
  {
    title: "Title Sponsors",
    items: ["TechCorp", "Zeopto"],
  },
  {
    title: "Gold Sponsors",
    items: ["DevLabs", "CloudNova", ".xyz", "lovable.Ai", "HackNest"],
  },
  {
    title: "Community Partners",
    items: ["GitHub Community", "GDG"],
  },
];

export const gallery = [
  {
    id: "gallery-hackathon-1",
    title: "Hackathon Floor Energy",
    category: "Hackathon",
    image: "/media/gallery-hackathon-floor.jpg",
  },
  {
    id: "gallery-hackathon-2",
    title: "Team Collaboration",
    category: "Hackathon",
    image: "/media/gallery-hackathon-team.jpg",
  },
  {
    id: "gallery-ctf",
    title: "CyberQuest Momentum",
    category: "CTF",
    image: "/media/gallery-ctf.jpg",
  },
  {
    id: "gallery-esports",
    title: "Arena Matchups",
    category: "E-Sports",
    image: "/media/gallery-esports.jpg",
  },
  {
    id: "gallery-treasure-1",
    title: "Treasure Hunt Clue Run",
    category: "Adventure",
    image: "/media/gallery-treasure-run.jpg",
  },
  {
    id: "gallery-treasure-2",
    title: "Campus Checkpoint",
    category: "Adventure",
    image: "/media/gallery-treasure-checkpoint.jpg",
  },
];

export const registrationFields = [
  { name: "fullName", label: "Full Name", type: "text", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true },
  { name: "college", label: "College / University", type: "text", required: true },
  { name: "teamSize", label: "Team Size", type: "text", required: false },
  {
    name: "teamMembers",
    label: "Team Members",
    type: "textarea",
    required: false,
  },
];
