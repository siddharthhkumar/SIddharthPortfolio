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
      caption: 'How the system carries a question to an answer',
      stages: [
        { key: 'user', label: 'User', note: 'Someone without a finance background, with a decision to make.' },
        { key: 'data', label: 'Market & transaction data', note: 'Raw financial inputs, fragmented and dense.' },
        { key: 'analysis', label: 'Analysis', note: 'Transaction profiling, anomaly detection and trend models.' },
        { key: 'signals', label: 'Signals', note: 'BUY / SELL / HOLD calls and portfolio insight.' },
        { key: 'decision', label: 'Decision support', note: 'Plain, actionable output in an interface built for a non-specialist.' },
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
      'A retrieval-augmented document platform: upload PDFs, DOCX or text files, search them semantically, and get streamed answers with a citation back to the exact source passage and page. Built as a full-stack application with a Next.js interface over a FastAPI service.',
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
      caption: 'What happens between a long document and a trustworthy answer',
      stages: [
        { key: 'document', label: 'A long document', note: 'A report, a paper, a contract. Fifty pages you do not have time to read.' },
        { key: 'meaning', label: 'Meaning', note: 'Parsed, chunked, and embedded so passages can be compared by sense rather than keyword.' },
        { key: 'retrieval', label: 'Retrieval', note: 'Cosine similarity over an HNSW index returns the passages that actually bear on the question.' },
        { key: 'question', label: 'Your question', note: 'Asked in plain language, against your own documents.' },
        { key: 'answer', label: 'A grounded answer', note: 'Streamed back with a citation to the exact source passage and page.' },
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
      'PyPDFLoader, python-docx and PyMuPDF parse PDF, DOCX and TXT uploads and read page-level metadata.',
      'LangChain RecursiveCharacterTextSplitter chunks each page with a fixed size and overlap.',
      'Hugging Face all-MiniLM-L6-v2 (sentence-transformers) generates normalised dense embeddings.',
      'ChromaDB stores the vectors in an HNSW index configured for cosine similarity, returning the top matches per query.',
      'FastAPI streams Gemini 2.5 Flash answers back over server-sent events, injecting conversation history and every cited source chunk into the prompt.',
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
      'An interactive Power BI dashboard analysing FIFA World Cup 2022 match data — goals, possession, player performance and team statistics.',
    role: {
      title: 'Solo build',
      points: ['Dataset preparation, KPI selection and interactive report design.'],
    },
    stack: ['Power BI', 'Data Modelling', 'Data Visualisation'],
    outcome:
      'Tournament-level insight that drills from team performance down to individual match and player statistics.',
    links: [],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)

export default projects
