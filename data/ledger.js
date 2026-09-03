/**
 * The ledger.
 *
 * Verbs and figures, set large. Every number is already asserted somewhere in
 * data/ — leadership.js, research.js, projects.js — and nothing is restated
 * here in a stronger form than it is recorded there.
 *
 * If a figure cannot be traced to one of those files it does not belong on
 * this page at all, let alone at this size.
 */
export const ledger = {
  label: 'The ledger',
  title: 'What that adds up to.',

  // Ordered for the roles being applied for: what was shipped and what was
  // run first, then the audience work, then the research. The figures are
  // unchanged — this is an edit, not a new claim.
  rows: [
    {
      verb: 'Shipped',
      tone: 'product',
      figure: '02',
      unit: 'products',
      note: 'One led with a four-person team, one built alone and containerised.',
      source: 'projects',
    },
    {
      verb: 'Led',
      tone: 'people',
      figure: '10',
      unit: 'person media team',
      note: 'Public relations for the Smart India Hackathon — 1,000+ participants reached, 50+ assets.',
      source: 'leadership',
    },
    {
      verb: 'Managed',
      tone: 'people',
      figure: '20+',
      unit: 'person creative team',
      note: 'Mirage, the film and photography society. Founded it, then ran it as a production house.',
      source: 'leadership',
    },
    {
      verb: 'Moved',
      tone: 'growth',
      figure: '+25%',
      unit: 'event registrations',
      note: 'By A/B testing the message for the GDSC chapter instead of guessing at it.',
      source: 'leadership',
    },
    {
      verb: 'Grew',
      tone: 'growth',
      figure: '2,500+',
      unit: 'followers, from zero',
      note: 'The Gautam Buddha University community page, and 500K+ organic reach with it.',
      source: 'leadership',
    },
    {
      verb: 'Published',
      tone: 'research',
      figure: '01',
      unit: 'peer-reviewed paper',
      note: 'Lead author. AIS2C2 2025, then JICS Vol. 1 Issue 2, May 2026.',
      source: 'research',
    },
    {
      verb: 'Surveyed',
      tone: 'research',
      figure: '110',
      unit: 'participants',
      note: 'All 21 items of the University Stress Scale, over ten days in November 2025.',
      source: 'research',
    },
  ],
}

export default ledger
