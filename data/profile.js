// Single source of truth for identity, positioning and contact details.
// Every claim here is backed by the verified master profile — no invented metrics.

export const profile = {
  name: 'Siddharth Kumar',
  shortName: 'SIDDHARTH',

  // Hero positioning
  eyebrow: 'Business · Data · Product · Growth · Content',
  headline: 'Turning business data, product thinking and audience insight into decisions that hold up.',
  supporting:
    'B.Tech Information Technology graduate working across analytics, business and operations, product prototyping, digital growth and content — backed by hands-on fluency in SQL, Python, Excel, Power BI and applied AI.',

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
      'I am a B.Tech Information Technology graduate from Gautam Buddha University. I work where business questions meet data, product and audience — analysing operational information, prototyping products, and building communities that actually grow.',
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
      'Open to roles across data and business analysis, operations, product, digital growth and content — plus research collaborations and freelance analytics work.',
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
