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
  ledger: [
    'Recruitment data at an edtech startup.',
    'Logistics KPIs and the dashboards behind them.',
    'A four-person product team, and the prototype that came first.',
    'A university community built from nothing.',
    'A paper on why students misjudge their own stress.',
  ],

  // Compact, verifiable proof points shown under the hero
  proof: [
    { value: 'Lead Author', label: 'Peer-reviewed ML research · AIS2C2 2025 · JICS 2026' },
    { value: '2,500+ / 500K+', label: 'Community followers and organic reach, built from zero' },
    { value: 'SQL · Python · Power BI', label: 'Applied across recruitment, logistics and digital operations' },
  ],


  // About section
  about: {
    tag: 'About',
    title: 'Analyst by training,',
    titleEm: 'builder by habit',
    image: '/images/podium.jpeg',
    imageAlt: 'Siddharth Kumar presenting at Gautam Buddha University',
    intro:
      'I studied Information Technology at Gautam Buddha University. Most of what I have done since has been closer to working out what an organisation is actually looking at, and whether the thing it believes is true.',
    body:
      'That range is deliberate. Analysing recruitment and logistics data taught me how a business really performs; leading a four-person product team and building a document-intelligence tool on my own taught me how to turn a problem into something usable; growing a university community from zero taught me how people respond to what you put in front of them. The common thread is the same in all three: find the question worth answering, get the evidence, and make the answer clear enough to act on.',
    pillars: [
      {
        title: 'Data & Business Analysis',
        text: 'SQL, Excel and Power BI applied to real operational data — KPIs, conversion and funnel trends, dashboards and structured insight for decision-makers.',
      },
      {
        title: 'Product & Prototyping',
        text: 'Defining how a product should work for the person using it, building the first prototype, designing the interface, and coordinating the team that ships it.',
      },
      {
        title: 'Digital Growth & Content',
        text: 'SEO writing, social campaigns, A/B-tested messaging and community management — grown across agency, edtech, NGO and campus work.',
      },
      {
        title: 'Applied AI & Research',
        text: 'Retrieval-augmented systems, supervised model comparison and a published, peer-reviewed study — technical depth used in service of the question, not for its own sake.',
      },
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
      'Looking for work in data, operations, product or content. Happy to talk about research separately.',
  },

  social: {
    linkedin: 'https://www.linkedin.com/in/siddharth-kumar-0938ab245/',
    linkedinLabel: 'linkedin.com/in/siddharth-kumar-0938ab245',
    github: 'https://github.com/siddharthhkumar',
    githubLabel: 'github.com/siddharthhkumar',
    instagram: 'https://www.instagram.com/gautambuddhauniversityy/',
    instagramLabel: '@gautambuddhauniversityy',
    twitter: 'https://twitter.com/siddharthh_k',
  },

  languages: ['English — Professional working', 'German — Limited working'],
}

export default profile
