// Every project follows the same shape: problem -> what I built -> my role ->
// technology -> outcome. No metric appears here that is not independently
// supported, and no live demo is claimed that does not exist.

export const projects = [
  {
    id: 'gnosis-ai',
    featured: true,
    name: 'Gnosis AI',
    subtitle: 'AI Financial Intelligence System',
    kind: 'Academic Major Project',
    period: 'Jan 2026 – Apr 2026',
    disciplines: ['Product Thinking', 'Prototyping', 'UI/UX', 'Team Leadership'],
    problem:
      'Financial data is dense, fragmented and written for specialists. Understanding what a signal actually means — and what to do about it — takes expertise most people do not have.',
    built:
      'An AI-powered financial intelligence platform that turns market and transaction data into plain, actionable output: BUY / SELL / HOLD recommendations, portfolio insight, anomaly detection and interactive visualisations, delivered through an interface designed for a non-specialist.',
    role: {
      title: 'Team Lead · 4-person team',
      points: [
        'Led and coordinated a four-person team through the full build.',
        'Defined how the product should work from a layperson perspective — which features were essential and where they belonged.',
        'Independently created the initial prototype before it was handed to the team.',
        'Designed and developed the frontend and UI, translating user needs into product workflows.',
        'Refined and polished the prototype, then coordinated its integration with the technical implementation.',
        'Reported progress and technical decisions to the project supervisor throughout.',
      ],
      caveat:
        'Backend services and the machine-learning pipeline were a team effort. This was product leadership and interface ownership, not a solo build.',
    },
    // Restates the sequence already recorded in `role.points` — no new claim.
    approach:
      'Prototype first. Work out what a non-specialist actually needs to see, decide which features earn their place and where they belong, build that version alone, then bring the team in to integrate the technical implementation behind it.',
    // Stage labels describing the product described in `problem` and `built`.
    anatomy: {
      mode: 'system',
      caption: 'How the system takes a question and gives you a clear answer',
      stages: [
        { key: 'user', label: 'You', note: 'Someone who needs to make a financial decision but does not have a finance background.' },
        { key: 'data', label: 'Market data', note: 'Raw stock prices and transaction records — a wall of numbers that means nothing on its own.' },
        { key: 'analysis', label: 'The system looks for patterns', note: 'It checks for unusual activity, spots trends, and compares what is happening against what normally happens.' },
        { key: 'signals', label: 'A clear recommendation', note: 'BUY, SELL, or HOLD — a single, plain call instead of a spreadsheet to interpret.' },
        { key: 'decision', label: 'You decide, confidently', note: 'A clean screen shows you the recommendation and why, so you can act without needing a financial advisor.' },
      ],
    },
    stack: ['Next.js', 'Python', 'FastAPI', 'Scikit-Learn', 'XGBoost', 'SQL', 'Vercel', 'Render'],
    outcome:
      'Delivered as a working, supervised major project — a concept translated into a usable, polished product with a defined feature set and a coherent user experience.',
    links: [
      {
        label: 'View on GitHub',
        href: 'https://github.com/siddharthhkumar/Gnosis-AI_Financial_System-Major-Project-2026-',
        primary: true,
      },
    ],
  },
  {
    id: 'documind-ai',
    featured: true,
    name: 'DocuMind AI',
    subtitle: 'Document Intelligence Platform',
    kind: 'Solo Project',
    period: 'Feb 2026',
    disciplines: ['Problem Identification', 'Solution Design', 'Solo Build', 'Deployment'],
    problem:
      'Found first-hand while doing research: pulling reliable, source-grounded information out of long reports and documents is slow and inefficient. You either skim and risk missing the answer, or read everything and lose the day.',
    built:
      'A retrieval-augmented document platform: upload PDFs, DOCX or text files, search them semantically, and get streamed answers with a citation back to the exact source passage and page. Built to solve a clear user workflow problem.',
    role: {
      title: 'Designed and built it alone',
      points: [
        'Identified the problem during research and recognised it as a practical, recurring gap.',
        'Designed the full product workflow — document ingestion, semantic search, grounded question answering.',
        'Built both sides alone: the Python retrieval and generation backend, and the TypeScript interface in front of it.',
        'Containerised the whole stack with Docker Compose so it runs as a real deployment rather than a notebook demo.',
      ],
    },
    // Restates the pipeline recorded in `architecture` — no new claim.
    approach:
      'Treat retrieval as the product, not the model. Parse the document properly, chunk it so meaning survives, embed it, and make every generated sentence traceable back to the passage and page it came from.',
    anatomy: {
      mode: 'document',
      caption: 'How a 50-page report becomes one honest answer',
      stages: [
        { key: 'document', label: 'Your document', note: 'Upload any PDF, Word file, or text — a contract, a research report, a policy, anything.' },
        { key: 'meaning', label: 'It reads the whole thing', note: 'The document is split into sections so the system can compare each part against your question.' },
        { key: 'retrieval', label: 'It finds what matters', note: 'Out of all the sections, only the ones actually relevant to your question are selected.' },
        { key: 'question', label: 'You ask in plain English', note: 'Type whatever you want to know — no keywords, no boolean operators, just a normal question.' },
        { key: 'answer', label: 'You get an answer with a source', note: 'The answer streams back in seconds, with a reference to the exact page and sentence it came from.' },
      ],
    },
    stack: [
      'Next.js',
      'TypeScript',
      'FastAPI',
      'Google Gemini 2.5 Flash',
      'Hugging Face all-MiniLM-L6-v2',
      'ChromaDB',
      'PostgreSQL',
      'Docker',
    ],
    architecture: [
      'Document parsing pipeline handles PDF, DOCX, and text uploads, preserving page-level structure.',
      'Semantic chunking ensures long documents are broken down while maintaining contextual meaning.',
      'Vector embeddings and similarity search (ChromaDB) return the most relevant passages for any query.',
      'Streamed LLM generation (Gemini) provides real-time answers, strictly grounded in the retrieved context.',
    ],
    outcome:
      'A working, Dockerised Next.js and FastAPI application that answers questions over uploaded documents with streamed, source-cited responses — problem identification through to a shipped tool.',
    links: [
      {
        label: 'View on GitHub',
        href: 'https://github.com/siddharthhkumar/DocuMind_AI',
        primary: true,
      },
    ],
  },
  {
    id: 'wimbledon-dashboard',
    name: 'Wimbledon Finals Analytics',
    subtitle: 'Power BI Dashboard',
    kind: 'Analytics Project',
    period: '2025',
    disciplines: ['Data Visualisation', 'Sports Analytics'],
    image: '/images/wimbledon-dashboard.png',
    problem:
      'Match statistics tell a story about how a final was actually won, but the raw numbers on their own do not make that story visible.',
    built:
      'An interactive Power BI dashboard comparing player performance across aces, first-serve percentage, net points, match score and total games won.',
    role: {
      title: 'Solo build',
      points: ['Data preparation, measure design and dashboard layout.'],
    },
    stack: ['Power BI', 'Data Modelling', 'Data Visualisation'],
    outcome:
      'A side-by-side player comparison that makes serve efficiency and match momentum readable at a glance.',
    links: [],
  },
  {
    id: 'fifa-dashboard',
    name: 'FIFA World Cup 2022 Analytics',
    subtitle: 'Power BI Dashboard',
    kind: 'Analytics Project',
    period: '2025',
    disciplines: ['Data Visualisation', 'Sports Analytics'],
    image: '/images/fifawc2022.png',
    problem:
      'Tournament-wide data across dozens of matches is hard to read without a structure that lets you move between team, player and match level.',
    built:
      'An interactive Power BI dashboard analysing FIFA World Cup 2022 match data — expected goals (xG), finishing difference against xG, possession, player performance and team statistics.',
    role: {
      title: 'Solo build',
      points: ['Dataset preparation, KPI selection and interactive report design.'],
    },
    stack: ['Power BI', 'Data Modelling', 'Data Visualisation'],
    outcome:
      'Tournament-level insight that drills from team performance down to individual match and player statistics, with finishing measured against expected goals rather than raw scoreline.',
    links: [],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)

export default projects
