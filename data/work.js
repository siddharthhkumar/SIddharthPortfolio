/**
 * Selected work, as an edited sequence.
 *
 * This file does not restate any project — it orders them and says, in one
 * line each, why this one is here. The substance lives in projects.js,
 * research.js and leadership.js and is pulled in by id, so nothing can drift.
 *
 * `href` is set only where a case study page actually exists.
 *
 * `tone` is the discipline colour, and it is not a rotation — the two shipped
 * products carry the same hue because they are both products.
 *
 * They also open the sequence. The roles being applied for are product and
 * operations, so the two things he built lead, the community and hackathon
 * work follows as the operations evidence, and the paper sits third as the
 * most independently checkable thing on the page.
 */
export const selectedWork = [
  {
    n: '01',
    tone: 'product',
    kind: 'project',
    id: 'gnosis-ai',
    field: 'Product · AI · Team lead',
    hook: 'I prototyped it alone, then led four people to finish it.',
    href: '/work/gnosis-ai',
    image: null,
  },
  {
    n: '02',
    tone: 'product',
    kind: 'project',
    id: 'documind-ai',
    field: 'Product · Retrieval · Solo build',
    hook: 'Built because reading fifty pages to find one paragraph is a bad way to spend a day.',
    href: '/work/documind-ai',
    image: null,
  },
  {
    n: '03',
    tone: 'research',
    kind: 'research',
    id: 'research',
    field: 'Research · Machine learning',
    hook: 'Thirty-two of a hundred and ten students were wrong about themselves.',
    href: '/work/research',
    image: '/images/conference.jpeg',
    imageAlt: 'Siddharth Kumar presenting the paper at the AIS2C2 2025 conference.',
    // The file is 914×1600 — a portrait. Declaring anything else here does
    // not crop it, it stretches it.
    imageW: 914,
    imageH: 1600,
    // Shown at 3:4 rather than its full 0.57, which would run over a
    // thousand pixels tall on a desktop. Cropped from near the top so the
    // crop takes the floor, not his head.
    imageRatio: '3 / 4',
    imageFocus: 'center 18%',
  },
  {
    n: '04',
    tone: 'growth',
    kind: 'leadership',
    id: 'gbu-community',
    field: 'Social · Community · Content',
    hook: 'A university page with no budget, no mandate and 500,000 people who read it anyway.',
    href: null,
    image: '/images/gdg-cloud-genai.jpeg',
    imageAlt: 'Students seated at a Google Developer Groups Cloud and Gen AI session on campus.',
    imageW: 1280,
    imageH: 960,
    // Its own shape. Nothing to crop.
    imageRatio: '4 / 3',
  },
  {
    n: '05',
    tone: 'data',
    kind: 'analytics',
    id: 'dashboards',
    field: 'Data · Visualisation',
    hook: 'Everyone watching the final saw a scoreline. I see the data that explains it.',
    href: null,
    image: '/images/fifawc2022.png',
    imageAlt: 'A Power BI dashboard analysing FIFA World Cup 2022 match data.',
  },
]

export default selectedWork
