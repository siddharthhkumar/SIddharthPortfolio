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

  // About section
  about: {
    tag: 'About',
    title: 'Analyst by training,',
    titleEm: 'builder by habit',
    image: '/images/podium.jpeg',
    imageAlt: 'Siddharth Kumar presenting at Gautam Buddha University',
    bullets: [
      '**Data & Business Analysis**: Analyzing real business data (SQL, Excel, Power BI), tracking KPIs, and building dashboards to help teams make fast decisions.',
      '**Product & Prototyping**: Figuring out product mechanics, building initial prototypes, designing interfaces, and guiding teams to launch.',
      '**Digital Growth**: Writing SEO-optimized content, running campaigns, and building online communities from the ground up.',
      '**Applied AI & Research**: Building AI search tools and publishing research papers to solve practical problems rather than following trends.'
    ],
    pillars: [
      {
        title: 'Data & Business Analysis',
        text: 'I use SQL, Excel, and Power BI to analyze real business data, track KPIs, and build dashboards that help teams make decisions quickly.',
      },
      {
        title: 'Product & Prototyping',
        text: 'I figure out how a product should work, build the first prototype, design the interface, and guide the team to launch it.',
      },
      {
        title: 'Digital Growth & Content',
        text: 'I write SEO-optimized content, run social media campaigns, and build online communities for agencies, edtech companies, and non-profits.',
      },
      {
        title: 'Applied AI & Research',
        text: 'I build AI search tools and write published research papers, using technical skills to solve practical problems instead of just following trends.',
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

    // The handle is the one in the newsletter URL in data/leadership.js;
    // medium.com/@handle is Medium's canonical profile address.
    medium: 'https://medium.com/@siddharthk1500',
    mediumLabel: 'medium.com/@siddharthk1500',
  },

  languages: ['English — Professional working', 'German — Limited working'],
}

export default profile
