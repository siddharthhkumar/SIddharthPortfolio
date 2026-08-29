// Narrative structure for the six worlds.
//
// Every line here restates something already recorded in data/experience.js,
// data/projects.js, data/leadership.js or data/research.js — reorganised into
// the shape each discipline actually thinks in. No new claim, no new number,
// no invented artifact. Where evidence is thin, the world shows less.

/* ═══════════════════════════════════════════════════════════
   I · DATA — Problem → Data → Analysis → Insight → Decision
   ═══════════════════════════════════════════════════════════ */

export const dataWorld = {
  stages: ['Problem', 'Data', 'Analysis', 'Insight', 'Decision'],

  capabilities: [
    { name: 'SQL', note: 'Querying business and operational records' },
    { name: 'Python', note: 'Analysis, preprocessing, model comparison' },
    { name: 'Excel', note: 'Evaluation sheets and pipeline tracking' },
    { name: 'Power BI', note: 'Dashboards consolidating performance data' },
    { name: 'Data Analysis', note: 'Reading records for what they actually say' },
    { name: 'KPI Analysis', note: 'Defining and tracking what counts' },
    { name: 'Business Insights', note: 'Turning findings into a recommendation' },
  ],

  analyses: [
    {
      id: 'ttb',
      subject: 'Top Talent Bridge LLP',
      context: 'Edtech recruitment · Feb – Apr 2026',
      steps: {
        Problem:
          'How was the business actually performing, and where was the recruitment pipeline losing people?',
        Data: 'Business and operational records, plus recruitment funnel and pipeline data.',
        Analysis:
          'SQL and analytical tools used to interpret the records and read the funnel end to end.',
        Insight:
          'Trends across the operational information, and the bottlenecks sitting inside the pipeline.',
        Decision:
          'Findings presented in a structured format to management and international clients — conclusions they could act on.',
      },
    },
    {
      id: 'gaint',
      subject: 'GAINT Logistic Private Limited',
      context: 'Logistics operations · Jul – Sep 2025',
      steps: {
        Problem: 'Which parts of the operation were underperforming, and why?',
        Data: 'Lead and conversion records, and logistics datasets covering delivery and route performance.',
        Analysis:
          'KPIs organised and tracked over time; conversion and delivery trends evaluated against them.',
        Insight: 'Trends in business performance, and the workflow inefficiencies behind them.',
        Decision:
          'Dashboards consolidating performance data so the operation could decide on evidence rather than instinct.',
      },
    },
    {
      id: 'wimbledon',
      subject: 'Wimbledon Finals Analytics',
      context: 'Power BI · 2025',
      image: '/images/wimbledon-dashboard.png',
      steps: {
        Problem:
          'Match statistics carry the story of how a final was won, but raw numbers do not make that story visible.',
        Data: 'Aces, first-serve percentage, net points, match score and total games won.',
        Analysis: 'Measure design and a like-for-like comparison between the two players.',
        Insight: 'Serve efficiency and match momentum, made readable at a glance.',
        Decision: 'A side-by-side view that answers "how was this actually won" without a commentary.',
      },
    },
    {
      id: 'fifa',
      subject: 'FIFA World Cup 2022 Analytics',
      context: 'Power BI · 2025',
      image: '/images/fifawc2022.png',
      steps: {
        Problem:
          'Tournament data across dozens of matches is unreadable without a structure to move through it.',
        Data: 'Match data — goals, possession, player performance and team statistics.',
        Analysis: 'Dataset preparation, KPI selection and an interactive report structure.',
        Insight: 'Where team performance came from, down to the individual match and player.',
        Decision: 'A report that drills from tournament level to a single player without losing the thread.',
      },
    },
  ],
}

/* ═══════════════════════════════════════════════════════════
   II · PRODUCT — Problem → Prototype → User Need → Iteration
   ═══════════════════════════════════════════════════════════ */

export const productWorld = {
  arc: ['Problem', 'Prototype', 'User need', 'Iteration', 'Product'],

  cases: [
    {
      id: 'gnosis-ai',
      kind: 'Academic major project · 4-person team',
      standing: 'Team Lead',
      beats: [
        {
          key: 'problem',
          label: 'The problem',
          body: 'Financial data is dense, fragmented and written for specialists. Understanding what a signal actually means — and what to do about it — takes expertise most people do not have.',
        },
        {
          key: 'stake',
          label: 'Why it mattered',
          body: 'More data would not have helped. The gap was interpretation, which meant the product had to be judged on whether a non-specialist could act on what it said.',
        },
        {
          key: 'proposed',
          label: 'What I proposed',
          body: 'Prototype first. Work out what a non-specialist actually needs to see, decide which features earn their place and where they belong, build that version alone, then bring the team in to integrate the technical implementation behind it.',
        },
        {
          key: 'prototype',
          label: 'The prototype',
          body: 'Created independently, before the team started building — a working reference for what the product was meant to be rather than a document describing it.',
        },
        {
          key: 'decisions',
          label: 'Product decisions',
          body: 'Defined how the product should work from a layperson perspective: which features were essential, and where each belonged in the workflow.',
        },
        {
          key: 'interface',
          label: 'Interface',
          body: 'Designed and developed the frontend and UI, translating user needs into product workflows the team could build against.',
        },
        {
          key: 'team',
          label: 'Team coordination',
          body: 'Led and coordinated four people through the full build, then coordinated the prototype’s integration with the technical implementation.',
        },
        {
          key: 'supervisor',
          label: 'Reporting',
          body: 'Reported progress and technical decisions to the project supervisor throughout.',
        },
        {
          key: 'iteration',
          label: 'Iteration',
          body: 'Refined and polished the prototype after presenting it to the team, then folded their work back into it.',
        },
      ],
      caveat:
        'Backend services and the machine-learning pipeline were a team effort. This was product leadership and interface ownership, not a solo build.',
    },
    {
      id: 'documind-ai',
      kind: 'Solo project',
      standing: 'Designed and built independently, end to end',
      beats: [
        {
          key: 'observation',
          label: 'The observation',
          body: 'Found first-hand while doing research: pulling reliable, source-grounded information out of long reports and documents is slow and inefficient. You either skim and risk missing the answer, or read everything and lose the day.',
        },
        {
          key: 'gap',
          label: 'The gap',
          body: 'Not a hypothetical market — a problem encountered directly, recognised as practical and recurring, and worth building against.',
        },
        {
          key: 'design',
          label: 'Solution design',
          body: 'Treat retrieval as the product, not the model. Parse the document properly, chunk it so meaning survives, embed it, and make every generated sentence traceable back to the passage and page it came from.',
        },
        {
          key: 'build',
          label: 'The build',
          body: 'Built both sides alone — the Python retrieval and generation backend, and the TypeScript interface in front of it — then containerised the stack with Docker Compose so it runs as a real deployment.',
        },
      ],
    },
  ],
}

/* ═══════════════════════════════════════════════════════════
   III · OPERATIONS — how information moves through a business
   ═══════════════════════════════════════════════════════════ */

export const operationsWorld = {
  flow: [
    { key: 'input', label: 'Input', note: 'Leads, shipments, applications, sign-ups' },
    { key: 'process', label: 'Process', note: 'The workflow that moves them along' },
    { key: 'measure', label: 'Measure', note: 'KPIs defined against what matters' },
    { key: 'report', label: 'Report', note: 'Dashboards consolidating performance' },
    { key: 'decide', label: 'Decide', note: 'Where to intervene, and on what evidence' },
  ],

  capabilities: [
    'Operations Analysis',
    'Process Analysis',
    'KPI Tracking',
    'Workflow Coordination',
    'Reporting',
    'Stakeholder Coordination',
  ],

  systems: [
    {
      id: 'gaint',
      name: 'GAINT Logistic Private Limited',
      period: 'Jul – Sep 2025',
      role: 'Performance tracking',
      body: 'Organised KPIs to measure how the operation was performing, evaluated lead and conversion data to find workflow inefficiencies, and built dashboards so decisions had something to stand on.',
      indicators: [{ value: 'KPIs', label: 'Defined and tracked' }],
    },
    {
      id: 'brightrays',
      name: 'BrightRays',
      period: 'Aug 2026 – Present',
      role: 'Digital operations',
      body: 'Working across data, AI, automation and digital growth, seeing how business processes and digital systems are planned, executed and scaled.',
      indicators: [],
    },
    {
      id: 'sih',
      name: 'Smart India Hackathon',
      period: 'Jul – Sep 2025',
      role: 'Head of Public Relations',
      body: 'Directed PR and media for a national-level innovation hackathon, running a media team and an outreach operation end to end.',
      indicators: [
        { value: '1,000+', label: 'Participants reached' },
        { value: '10', label: 'Person media team' },
        { value: '50+', label: 'Visual assets delivered' },
      ],
    },
    {
      id: 'mirage',
      name: 'Mirage — Film & Photography Society',
      period: 'Jun 2024 – Apr 2025',
      role: 'Founder & General Secretary',
      body: 'Founded the society and ran it as a production operation: roadmap, roles, execution processes, and a creative team delivering on a schedule.',
      indicators: [
        { value: '20+', label: 'Member team managed' },
        { value: '10+', label: 'Productions delivered' },
        { value: '5', label: 'Workshops run' },
      ],
    },
  ],
}

/* ═══════════════════════════════════════════════════════════
   IV · SOCIAL — Strategy → Content → Community → Experiment → Growth
   ═══════════════════════════════════════════════════════════ */

export const socialWorld = {
  spine: ['Strategy', 'Content', 'Community', 'Experiment', 'Growth'],

  feature: {
    id: 'gbu-community',
    name: 'Gautam Buddha University Community Page',
    handle: '@gautambuddhauniversityy',
    href: 'https://www.instagram.com/gautambuddhauniversityy/',
    period: 'Aug 2022 – May 2026',
    role: 'Founder & Community Manager',
    note: 'Unofficial community channel',
    lede: 'Started as a personal creative page. Grew into the channel the campus actually followed — built independently, from nothing.',
    figures: [
      { value: '2,500+', label: 'Followers' },
      { value: '500K+', label: 'Organic reach' },
    ],
    doing: [
      'Social media management, content planning and brand collaborations across campus and tech events.',
      'Event coverage, and engagement built across the student community.',
    ],
  },

  experiment: {
    id: 'gdsc',
    name: 'Google Developer Student Clubs — GBU',
    role: 'Management Lead',
    period: 'Jul 2024 – Jul 2025',
    hypothesis: 'If the message is tested rather than assumed, more of the community turns up.',
    method:
      'Modelled campaign performance and ran A/B testing on promotional messaging across the community.',
    figures: [
      { value: '500+', label: 'Student community' },
      { value: '+25%', label: 'Event registrations' },
    ],
    also: 'Organised Gen AI workshops and Cloud Study Jams, coordinating marketing and speaker onboarding.',
  },

  // Real photographs from campus work. Nothing staged, nothing stock.
  frames: [
    { src: '/images/gdg-session.jpeg', alt: 'GDG campus session', caption: 'GDG session' },
    { src: '/images/GDG Cloud and GenAi Session.jpeg', alt: 'GDG Cloud and Gen AI session', caption: 'Cloud & Gen AI' },
    { src: '/images/mirage.jpeg', alt: 'Mirage society production', caption: 'Mirage' },
    { src: '/images/MLSA SESSION.jpeg', alt: 'Microsoft Learn Student Ambassadors session', caption: 'MLSA' },
    { src: '/images/Conference.jpeg', alt: 'Conference presentation', caption: 'AIS2C2' },
    { src: '/images/Brain Storming Session.jpeg', alt: 'Community brainstorming session', caption: 'Planning' },
  ],

  pr: {
    name: 'Smart India Hackathon',
    role: 'Head of Public Relations',
    figures: [
      { value: '1,000+', label: 'Participants reached' },
      { value: '10', label: 'Person media team' },
      { value: '50+', label: 'Visual assets' },
    ],
  },
}

/* ═══════════════════════════════════════════════════════════
   V · CONTENT — a writing studio
   ═══════════════════════════════════════════════════════════ */

export const contentWorld = {
  writing: [
    'SEO Content Writing',
    'Blog Writing',
    'Research & Technical Writing',
    'Social Media Content',
    'Scriptwriting',
    'Newsletter Writing',
    'Marketing Copy',
  ],

  research: ['Content Research', 'Market Research', 'Trend Analysis', 'Content Strategy'],

  thesis:
    'Most writing fails before the first sentence — at the point where nobody decided who it was for. The research and the audience come first; the prose is what is left once that is settled.',

  // Three artifacts that genuinely exist. No invented clients, no fake bylines.
  artifacts: [
    {
      id: 'newsletter',
      kind: 'Newsletter',
      title: 'GDG Campus Newsletter',
      body: 'Wrote and structured the newsletter for the campus Google Developer Group, translating technical and community updates into an accessible format for a non-specialist student readership.',
      meta: 'Google Developer Group — GBU',
    },
    {
      id: 'paper',
      kind: 'Publication',
      title: 'A Machine Learning Approach to Classifying Stress Levels',
      body: 'Lead author. Researched the problem, ran a 110-participant study and synthesised the findings into a formal publication.',
      meta: 'AIS2C2 2025 · Journal of Intelligent Computing System, May 2026',
      href: '/docs/260.pdf',
      cta: 'Read the paper',
    },
    {
      id: 'community',
      kind: 'Audience',
      title: 'GBU Community Page',
      body: 'Published audience-focused content consistently for close to four years, and learned what a student readership actually responds to.',
      meta: '2,500+ followers · 500K+ organic reach',
    },
  ],

  engagements: [
    {
      id: 'jumpy-jargons',
      name: 'Jumpy Jargons Private Limited',
      period: 'Jun – Jul 2025',
      body: 'Created SEO-focused blogs, social media content and marketing creatives, combining research and storytelling to turn complex topics into clear, engaging content.',
    },
    {
      id: 'collegepur',
      name: 'CollegePur',
      period: 'Jul – Aug 2025',
      body: 'Coordinated content, social campaigns and audience engagement across digital channels, using campaign performance to steer what came next.',
    },
    {
      id: 'marpu',
      name: 'Marpu Foundation',
      period: 'Jul 2025',
      body: 'Developed campaign ideas and informative content to improve awareness around CSR and social causes.',
    },
  ],
}

/* ═══════════════════════════════════════════════════════════
   VI · RESEARCH — the journal
   ═══════════════════════════════════════════════════════════ */

export const researchWorld = {
  frontMatter: [
    { key: 'Authors', value: 'Siddharth Kumar, Aaqib Abdullah, Maneet Singh' },
    { key: 'Affiliation', value: 'Dept. of Information Technology, Gautam Buddha University' },
    { key: 'Survey window', value: '1 – 10 November 2025 · 110 completed responses' },
    { key: 'Presented', value: 'AIS2C2 2025 International Conference, December 2025' },
    { key: 'Published', value: 'JICS Vol. 1, Issue 2, pp. 08–13 · May 2026' },
  ],

  figures: [
    { n: '110', label: 'Completed responses' },
    { n: '21', label: 'USS scale items' },
    { n: '4', label: 'Models compared' },
  ],

  method: [
    {
      n: '01',
      label: 'Survey collection',
      body: 'A self-administered online survey run 1–10 November 2025, in four parts: course and year, lifestyle questions such as sleep and study hours, all 21 University Stress Scale items, and a self-reported stress rating.',
    },
    {
      n: '02',
      label: 'Pre-processing',
      body: 'Categorical variables numerically encoded, continuous features standardised, missing values imputed, and the data split 80:20 for training and testing.',
    },
    {
      n: '03',
      label: 'Feature grouping',
      body: 'Three configurations — Model A on demographic and lifestyle variables, Model B on the USS-21 items, and a Full Model combining both.',
    },
    {
      n: '04',
      label: 'Model training',
      body: 'Logistic Regression, Support Vector Machine, Random Forest and XGBoost trained on each configuration, predicting self-reported stress on a 0–3 scale.',
    },
    {
      n: '05',
      label: 'Evaluation',
      body: 'Reported on accuracy, Matthews Correlation Coefficient and weighted F1 — total correctness, class-balanced behaviour and overall classification quality.',
    },
  ],

  // Table 1 — all four models on the full feature set. Paper p. 10.
  tableFull: {
    caption: 'Performance of all four models on the combined feature set',
    columns: ['Model', 'Accuracy', 'MCC', 'Weighted F1'],
    rows: [
      { model: 'Logistic Regression', acc: 0.434, mcc: 0.128, f1: 0.381 },
      { model: 'SVM', acc: 0.434, mcc: 0.185, f1: 0.432 },
      { model: 'Random Forest', acc: 0.521, mcc: 0.294, f1: 0.515 },
      { model: 'XGBoost', acc: 0.695, mcc: 0.557, f1: 0.694, best: true },
    ],
  },

  // Table 2 — XGBoost across the three feature configurations. Paper p. 11.
  tableConfigs: {
    caption: 'XGBoost across the three feature configurations',
    rows: [
      { model: 'Model A — demographic + lifestyle', acc: 0.565, mcc: 0.363, f1: 0.564 },
      { model: 'Model B — USS-21 only', acc: 0.739, mcc: 0.355, f1: 0.739, note: 'highest accuracy' },
      { model: 'Full Model — combined', acc: 0.695, mcc: 0.557, f1: 0.694, note: 'best balance' },
    ],
  },

  // Fig. 3 — self-reported category against USS-derived category. Paper p. 11.
  perception: {
    caption: 'Self-reported stress against the USS-derived category, all 110 participants',
    cells: [
      { self: 'High', uss: 'High', n: 43, agree: true },
      { self: 'High', uss: 'Low', n: 23 },
      { self: 'Low', uss: 'High', n: 9 },
      { self: 'Low', uss: 'Low', n: 35, agree: true },
    ],
    agreement: 78,
    disagreement: 32,
  },

  findings: [
    'Psychological features carried the predictive signal. Trained on the USS-21 items alone, XGBoost reached 0.739 accuracy against 0.565 on demographics and lifestyle.',
    'The combined model was the most balanced. It gave up some raw accuracy (0.695) but produced by far the best MCC (0.557) — the fairest performance across all classes.',
    'XGBoost outperformed every alternative. Logistic Regression and SVM both sat at 0.434 accuracy, suggesting the stress patterns are non-linear and overlapping.',
    'Self-assessment disagreed with the scale for 32 of 110 students — 23 rated themselves high where the USS read low, and 9 the reverse.',
  ],

  limitation:
    'The paper states its own constraint plainly: the sample is small. It reports a direction worth following rather than a settled result, and suggests more data and finer questions would be needed to support an early-warning tool.',
}
