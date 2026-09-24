// Single source of truth for identity, positioning and contact details.
// Every claim here is backed by the verified master profile — no invented metrics.

export const profile = {
  name: 'Siddharth Kumar',
  shortName: 'SIDDHARTH',

  // The opening line. His research found that 32 of 110 students misjudged
  // their own stress; DocuMind came from noticing document search is slower
  // than people assume; the GDSC result came from testing the message instead
  // of trusting it. One habit, six places.
  opening: 'Most of my work starts where an assumption stops holding.',

  // Not a summary — the actual things. Concrete beats adjectives.
  // (The `proof` array that used to live here was removed when the Ledger
  // section replaced it; nothing read it any more.)
  ledger: [
    'Recruitment data at an edtech startup.',
    'Logistics KPIs and the dashboards behind them.',
    'A four-person product team, and the prototype that came first.',
    'A university community built from nothing.',
    'A paper on why students misjudge their own stress.',
  ],

  // About section. Bullets lead with content/SEO and digital marketing —
  // the primary positioning — then product, then data & operations folded
  // into one supporting line. Research isn't repeated here: it already has
  // its own case study, Ledger rows and Recognition section, so restating
  // it a fourth time would be padding rather than evidence.
  about: {
    tag: 'About',
    title: 'Content-first,',
    titleEm: 'analyst by training',
    image: '/images/podium.jpeg',
    imageAlt: 'Siddharth Kumar presenting at Gautam Buddha University',
    bullets: [
      '**Content & SEO**: Writing SEO-focused blogs and campaign content built on research and search intent, sharpened across paid internships in content writing and now applied at BrightRays.',
      '**Digital Marketing & Social**: Running campaigns and community channels end to end — testing a message before trusting it, and growing a university page to 500,000+ organic reach from zero.',
      '**Product & Prototyping**: Figuring out product mechanics, building initial prototypes, designing interfaces, and guiding teams to launch.',
      '**Data & Operations**: Reading business data closely enough to act on it — SQL, Excel and Power BI dashboards for recruitment and logistics operations.',
    ],
  },

  education: {
    institution: 'Gautam Buddha University',
    degree: 'B.Tech, Information Technology',
    period: 'Sep 2022 – May 2026',
    location: 'Greater Noida, India',
    note: 'Letter of Recommendation — Gautam Buddha University',
  },

  contact: {
    email: 'siddharthk1500@gmail.com',
    phone: '+91 6202969798',
    phoneHref: 'tel:+916202969798',
    location: 'Noida, Uttar Pradesh, India',
    availability:
      'Seeking roles in SEO Content, Digital Marketing, Product, or Business Operations.',
  },

  social: {
    linkedin: 'https://www.linkedin.com/in/siddharth-kumar-0938ab245/',
    linkedinLabel: 'linkedin.com/in/siddharth-kumar-0938ab245',
    github: 'https://github.com/siddharthhkumar',
    githubLabel: 'github.com/siddharthhkumar',
    instagram: 'https://www.instagram.com/siddharthh__k',
    instagramLabel: '@siddharthh__k',
    instagramPersonal: 'https://www.instagram.com/stillfiguringoutsidd',
    instagramPersonalLabel: '@stillfiguringoutsidd',
    twitter: 'https://twitter.com/siddharthh_k',

    // The handle is the one in the newsletter URL in data/leadership.js;
    // medium.com/@handle is Medium's canonical profile address.
    medium: 'https://medium.com/@siddharthk1500',
    mediumLabel: 'medium.com/@siddharthk1500',
  },

  languages: ['English — Professional working', 'German — Limited working'],
}

export default profile
