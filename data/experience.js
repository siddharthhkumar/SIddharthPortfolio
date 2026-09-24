// Reverse-chronological professional experience.
// Titles are as stated on LinkedIn ("Intern"); `focus` carries the descriptive
// scope so nothing is over-titled. Dates are LinkedIn-authoritative.

export const experience = [
  {
    id: 'brightrays',
    company: 'BrightRays',
    title: 'Intern',
    focus: 'Digital Growth · Data · AI Workflows',
    location: 'Noida, India',
    period: 'Aug 2026 – Present',
    current: true,
    track: 'growth',
    summary: 'Working across data, AI, automation and digital growth to plan and scale business systems.',
    bullets: [
      'Work with cross-functional teams across data, AI, automation and digital growth, seeing how business processes and digital systems are planned, executed and scaled.',
      'Build practical understanding of SEO, digital systems and AI-enabled workflows in a live commercial setting.',
      'Use evidence rather than instinct in day-to-day digital operations.',
    ],
    tags: ['SEO', 'AI Workflows', 'Digital Operations', 'Cross-functional'],
  },
  {
    id: 'top-talent-bridge',
    company: 'Top Talent Bridge LLP',
    title: 'Intern',
    focus: 'Business & Data Analysis',
    location: 'Gurugram, India',
    period: 'Feb 2026 – Apr 2026',
    track: 'data',
    summary: 'Business and operational data analysis for an edtech startup, reporting directly to international clients.',
    bullets: [
      'Analysed business and operational data using SQL and analytical tools, interpreting records to answer questions about how the business was performing.',
      'Identified trends across operational information and prepared insights that supported management decision-making.',
      'Presented findings in a structured format for international clients, translating analysis into conclusions they could act on.',
      'Worked with recruitment funnel and pipeline data to surface bottlenecks in the operation.',
    ],
    tags: ['SQL', 'Excel', 'Power BI', 'Trend Analysis', 'Client Communication'],
  },
  {
    id: 'gaint',
    company: 'GAINT Logistic Private Limited',
    title: 'Intern',
    focus: 'Business Analysis & Performance Tracking',
    location: '',
    period: 'Jul 2025 – Sep 2025',
    track: 'data',
    summary: 'KPI tracking, lead analysis, and operations dashboards to support logistics decisions.',
    bullets: [
      'Carried out business analysis and performance tracking, organising KPIs to measure how the operation was performing.',
      'Evaluated lead and conversion data to identify trends in business performance and highlight workflow inefficiencies.',
      'Built dashboards consolidating performance data to support better business decisions across the operation.',
      'Worked with logistics datasets to monitor delivery and route performance over time.',
    ],
    tags: ['KPI Tracking', 'SQL', 'Power BI', 'Dashboards', 'Operations'],
  },
  {
    id: 'mindenious',
    company: 'Mindenious',
    title: 'Intern',
    focus: 'Marketing & Business Development',
    location: 'Bengaluru, India',
    period: 'Jul 2025 – Aug 2025',
    track: 'growth',
    summary: 'Marketing and sales initiatives through campaign planning, customer research and digital outreach.',
    bullets: [
      'Supported campaign planning and digital outreach across marketing and sales initiatives.',
      'Ran customer research to sharpen audience understanding and improve engagement.',
      'Provided day-to-day business development support to the team.',
    ],
    tags: ['Campaign Planning', 'Customer Research', 'Digital Outreach'],
  },
  {
    id: 'collegepur',
    company: 'CollegePur',
    title: 'Intern',
    focus: 'Content & Campaign Performance',
    location: '',
    period: 'Jul 2025 – Aug 2025',
    track: 'content',
    summary: 'Content coordination, social campaigns, and performance analysis for educational communities.',
    bullets: [
      'Coordinated content, social media campaigns and audience engagement across digital channels.',
      'Applied analytical thinking and a technical background to understand campaign performance.',
      'Saw campaigns through from brief to published, for community-facing work.',
    ],
    tags: ['Content Coordination', 'Social Campaigns', 'Campaign Analytics'],
  },
  {
    id: 'jumpy-jargons',
    company: 'Jumpy Jargons Private Limited',
    title: 'Intern',
    focus: 'SEO Content & Creative',
    location: 'Chhattisgarh, India',
    period: 'Jun 2025 – Jul 2025',
    track: 'content',
    summary: 'SEO-focused blogs, social content, and marketing creatives built on research and storytelling.',
    bullets: [
      'Created SEO-focused blogs, social media content and marketing creatives for brands.',
      'Combined research and storytelling to turn complex topics into clear, engaging content.',
      'Developed trend-driven content concepts, supported by market and digital research.',
    ],
    tags: ['SEO Writing', 'Content Strategy', 'Market Research'],
  },
  {
    id: 'marpu',
    company: 'Marpu Foundation',
    title: 'Intern',
    focus: 'Social Impact Communications',
    location: 'Bengaluru, India',
    period: 'Jul 2025',
    track: 'content',
    summary: 'Social-impact campaigns, creative content, and CSR awareness for an NGO.',
    bullets: [
      'Supported social impact initiatives through social media campaigns and creative content.',
      'Developed campaign ideas and informative content to improve awareness and visibility around CSR and social causes.',
    ],
    tags: ['CSR Communications', 'Campaign Ideation', 'Content Creation'],
  },
  {
    id: 'mectoi',
    company: 'Mectoi Technologies Private Limited',
    title: 'Junior Software Engineer Intern',
    focus: 'Technical Operations',
    location: 'Lucknow, India',
    period: 'Jun 2024 – Jul 2024',
    track: 'technical',
    summary: 'Early hands-on exposure to software development, building an understanding of how technical teams operate and ship products.',
    bullets: [],
    tags: ['Technical Operations', 'Cross-functional Understanding'],
  },
]

// The three roles shown expanded by default; the rest collapse into a
// compact list. Jumpy Jargons — the literal "SEO Content & Creative" role —
// replaces GAINT here under the content/digital-marketing positioning; GAINT
// is unchanged and still fully visible in the compact list below, just not
// expanded. Top Talent Bridge stays featured so the data/business-analysis
// background remains genuinely represented, not erased.
export const featuredExperienceIds = ['brightrays', 'top-talent-bridge', 'jumpy-jargons']

export default experience
