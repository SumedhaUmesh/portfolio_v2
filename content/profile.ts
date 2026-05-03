/**
 * Profile copy — edit freely; this file is the voice of the site.
 *
 * - `heroTagline` / `aboutBio` — crisp + SEO-friendly.
 * - `heroHumanLine`, `voiceNote`, `rightNow`, `contactInvite`, `signOff` — human,
 *   first-person copy visitors actually remember (change anytime).
 */
export const profile = {
  name: "Sumedha Umesh Kulkarni",
  shortName: "Sumedha Kulkarni",

  /** File in `public/` — must start with `/`. */
  photoSrc: "/profile-pic.png",
  photoAlt: "Sumedha Kulkarni",

  heroTagline:
    "Software Engineer — Embedded Systems, Full-Stack (MERN), and AI/ML (RAG, OCR, NLP)",

  /** One honest sentence under the headline — how you'd explain yourself at coffee, not in HR speak. */
  heroHumanLine:
    "I gravitate toward problems where software has to behave when the real world isn't cooperating.",

  /** Short chips under the hero tagline — edit to match your positioning. */
  heroFocusAreas: [
    "Embedded & RTOS",
    "Full-stack & cloud",
    "AI / ML pipelines",
  ],

  aboutBio:
    "Software Engineer with experience in Embedded Systems (C++, Bluetooth, RTOS), Full-Stack Development (MERN, REST APIs, GCP, React Native), AI/ML (RAG pipelines, OCR, NLP, on-device vision), and team leadership in university technology services (USC ITS). Authorized to work in the US on F1-OPT with STEM extension; open to relocation.",

  /** First-person story: background, what you enjoy, how you work with others. Replace with your real voice. */
  voiceNote:
    "I'm Sumedha—MS CS at USC, in LA after growing up in India. Mercedes-Benz is where I went deep on automotive firmware: Bluetooth, HAL layers, and bring-up that had to survive real cars. Deep Cognition is where I wrestled with RAG, documentation, and PDFs that refused to parse cleanly. At USC ITS I lead twelve student developers and technicians—we ship tools like RoomFinder across campus, a MERN VIBE dashboard for classroom Shure audio, and I've built a YOLO-based pipeline so chair inventory in learning spaces leans less on manual walk-throughs. I still like the messy middle where hardware, backend systems, and models meet. Teammates usually get my dry humor before my slide decks.",

  /** What you're curious about right now — courses, side projects, books, communities. */
  rightNow:
    "Tinkering with ROS 2 and perception stacks, tightening how I ship ML-adjacent features responsibly, and wrapping up USC before my next full-time chapter.",

  location: "Los Angeles, California",
  phone: "(213) 574-5187",
  phoneHref: "tel:+12135745187",
  email: "sumedhau@usc.edu",

  linkedInUrl: "https://www.linkedin.com/in/SumedhaUmeshKulkarni/",
  portfolioUrl: "https://sumedhak.netlify.app",

  availability: "Open to roles · F1-OPT + STEM",
  resumePath: "/Sumedha_Resume.pdf",

  /** Short heading for the contact column (keep it friendly). */
  contactTitle: "Say hello — I read every note.",

  /** Warmer paragraph above the contact form — who should write, and that you're a real person. */
  contactInvite:
    "Tell me what you're building or wrestling with—roles, collaborations, or a technical rabbit hole. I'm especially curious when it sits between hardware, backend systems, and models.",

  /** Small sign-off above the footer—thanks, P.S., favorite quote line, etc. */
  signOff: "Thanks for reading — Sumedha",
} as const;
