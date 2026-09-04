// What he works with, grouped by the job it does and ordered so the two
// disciplines being applied for come first.
//
// Nothing here is a new claim. Every entry appears somewhere in the record
// already: the product terms are the disciplines recorded against Gnosis AI
// and DocuMind AI in projects.js and the capability described in
// profile.about.pillars; the operations and data terms come from the work at
// GAINT and Top Talent Bridge; the growth terms from the agency, NGO and
// campus roles.
//
// Deliberately no proficiency bars, percentages or star ratings — none of
// them would mean anything, and a recruiter reading this knows it.

export const skillGroups = [
  {
    id: 'product',
    title: 'Product',
    caption: 'Deciding what should exist, for whom, and what it does on the first screen.',
    skills: [
      'Problem framing',
      'Product thinking',
      'Prototyping',
      'Solution design',
      'UI/UX design',
      'Cross-functional coordination',
      'Team leadership',
      'Technical scoping',
    ],
  },
  {
    id: 'operations',
    title: 'Operations',
    caption: 'Running the thing — the process, the numbers, and the people moving through it.',
    skills: [
      'KPI definition & tracking',
      'Workflow & process analysis',
      'Operational analytics',
      'Performance reporting',
      'Programme delivery',
      'Stakeholder communication',
      'Client reporting',
      'Business analysis',
    ],
  },
  {
    id: 'data',
    title: 'Data',
    caption: 'The evidence underneath both of the above.',
    skills: [
      'SQL',
      'Microsoft Excel',
      'Power BI',
      'Dashboard design',
      'Trend & conversion analysis',
      'Exploratory data analysis',
      'A/B testing',
      'Data cleaning',
    ],
  },
  {
    id: 'technical',
    title: 'Technical Literacy',
    caption: 'Enough to prototype the first version and work closely with engineering teams.',
    skills: [
      'Python & Data Analysis',
      'API Integration',
      'Web Technologies',
      'AI & RAG Workflows',
      'System Architecture',
      'Version Control (Git)',
    ],
  },
  {
    id: 'growth',
    title: 'Digital marketing',
    caption:
      'An audience grown from zero, a message tested rather than guessed at, and a hackathon’s media desk run end to end.',
    skills: [
      'Campaign planning',
      'Digital outreach',
      'A/B tested messaging',
      'Community management',
      'Public relations',
      'Brand collaborations',
      'Market & customer research',
      'SEO content writing',
      'Content strategy',
      'Copywriting & scripting',
      'Photography & videography',
    ],
  },
]

export default skillGroups
