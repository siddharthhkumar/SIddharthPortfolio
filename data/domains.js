// The six disciplines, as worlds.
//
// Each entry carries its identity (accent, ground tint, type register) and
// pointers into the existing content modules — never copies of them. Nothing
// here asserts a new claim; `evidence` figures are lifted verbatim from
// data/leadership.js, data/experience.js and data/research.js.

export const domains = [
  {
    id: 'data',
    numeral: 'I',
    label: 'Data',
    route: '/practice/data',
    // Cool, analytical. The most restrained of the six on purpose.
    accent: '#5E93C4',
    accentRgb: '94, 147, 196',
    ground: '#0a0b0d',
    register: 'mono', // labels and figures lead
    motif: 'grid',
    line: 'Reading business and operational data until it says something you can act on.',
    covers: ['SQL', 'Power BI', 'Excel', 'KPI definition', 'Trend & conversion analysis'],
    experienceIds: ['top-talent-bridge', 'gaint'],
    projectIds: ['wimbledon-dashboard', 'fifa-dashboard'],
    // No honest figure here — so none is invented. The proof is the work.
    evidence: [],
    proof: 'SQL, Excel and Power BI, on recruitment and logistics data.',
  },
  {
    id: 'product',
    numeral: 'II',
    label: 'Product',
    route: '/practice/product',
    accent: '#4FA07A',
    ground: '#090b0a',
    accentRgb: '79, 160, 122',
    register: 'display',
    motif: 'assembly',
    line: 'Deciding what a product should do for the person using it — then building it.',
    covers: ['Problem framing', 'Prototyping', 'UI/UX', 'Team leadership', 'Technical coordination'],
    experienceIds: [],
    projectIds: ['gnosis-ai', 'documind-ai'],
    evidence: [{ value: '4', label: 'Person team led' }],
    proof: 'Two products, taken from problem to shipped.',
  },
  {
    id: 'operations',
    numeral: 'III',
    label: 'Operations',
    route: '/practice/operations',
    accent: '#C99447',
    accentRgb: '201, 148, 71',
    ground: '#0c0b09',
    register: 'condensed',
    motif: 'line',
    line: 'Running the thing — the people, the process, and what actually moves through it.',
    covers: ['KPI tracking', 'Process analysis', 'Workflow coordination', 'Programme delivery'],
    experienceIds: ['gaint', 'brightrays'],
    leadershipIds: ['sih', 'mirage'],
    evidence: [
      { value: '1,000+', label: 'Participants reached' },
      { value: '20+', label: 'Member team managed' },
    ],
  },
  {
    id: 'social',
    numeral: 'IV',
    label: 'Social',
    route: '/practice/social',
    accent: '#9B7FD4',
    accentRgb: '155, 127, 212',
    ground: '#0b0a0d',
    register: 'editorial',
    motif: 'frames',
    line: 'Building an audience from nothing, then learning what actually moves it.',
    covers: ['Community management', 'Campaign planning', 'A/B tested messaging', 'Public relations'],
    experienceIds: ['mindenious', 'collegepur'],
    leadershipIds: ['gbu-community', 'gdsc', 'sih'],
    evidence: [
      { value: '2,500+', label: 'Community followers' },
      { value: '500K+', label: 'Organic reach' },
    ],
  },
  {
    id: 'content',
    numeral: 'V',
    label: 'Content',
    route: '/practice/content',
    accent: '#4FA8A0',
    accentRgb: '79, 168, 160',
    ground: '#090c0c',
    register: 'serif',
    motif: 'page',
    line: 'Turning something complicated into something a person will actually read.',
    covers: ['SEO writing', 'Content strategy', 'Copywriting & scripting', 'Market research'],
    experienceIds: ['jumpy-jargons', 'collegepur', 'marpu'],
    evidence: [],
    proof: 'SEO blogs, a campus newsletter, and a peer-reviewed paper.',
  },
  {
    id: 'research',
    numeral: 'VI',
    label: 'Research',
    route: '/practice/research',
    accent: '#BFA46A',
    accentRgb: '191, 164, 106',
    ground: '#0b0b0a',
    register: 'academic',
    motif: 'plate',
    line: 'Asking a question carefully enough that the answer holds up to review.',
    covers: ['Research design', 'Survey instrumentation', 'Feature engineering', 'Model comparison'],
    experienceIds: [],
    evidence: [
      { value: '110', label: 'Participants surveyed' },
      { value: '0.739', label: 'Best model accuracy' },
    ],
  },
]

export const domainById = Object.fromEntries(domains.map((d) => [d.id, d]))

export default domains
