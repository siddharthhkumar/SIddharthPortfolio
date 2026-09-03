/**
 * How I think.
 *
 * Four questions in the order they actually get asked. Each one is paired
 * with the discipline that answers it — which is the honest explanation for
 * why the work looks scattered across data, product, operations and research
 * when it is really one sequence.
 *
 * The `proof` line on each step points at something already in the record.
 */
export const thinking = {
  label: 'How I think',
  title: 'It is one question, asked four times.',
  lede:
    'The work reads as scattered — data here, a product there, a paper, a community page. It is not four interests. It is one sequence, and most of my jobs have been a different stop along it.',

  steps: [
    {
      n: '01',
      tone: 'data',
      question: 'What is actually happening?',
      discipline: 'Data',
      body:
        'Before anything else, get the record straight. Not what the team believes is happening — what the recruitment funnel, the delivery routes and the campaign numbers say is happening.',
      proof: 'SQL and Power BI on recruitment and logistics data.',
    },
    {
      n: '02',
      tone: 'people',
      question: 'Why does it matter?',
      discipline: 'Business',
      body:
        'A number is not a finding. The question is what it costs, what it unblocks, and who has to decide something differently because of it.',
      proof: 'KPI definition and client-facing analysis at Top Talent Bridge and GAINT.',
    },
    {
      n: '03',
      tone: 'product',
      question: 'What could be better?',
      discipline: 'Product',
      body:
        'This is where most analysis stops and where the interesting part starts. Decide what should exist, for whom, and what it has to do on the first screen.',
      proof: 'Gnosis AI — prototyped alone, then led as a four-person build.',
    },
    {
      n: '04',
      tone: 'growth',
      question: 'Can we actually do it?',
      discipline: 'Execution',
      body:
        'Ship it, or say plainly that you could not. A containerised app that runs beats a notebook that demonstrates.',
      proof: 'DocuMind AI, built solo and Dockerised end to end.',
    },
  ],

  // The habit underneath all four. Verified: the paper found 32 of 110
  // students disagreed with what the stress scale reported about them.
  coda: {
    line: 'And then the fifth question, which is the one I actually enjoy:',
    question: 'Is any of that true?',
    body:
      'The paper set out to classify student stress. What it found was that 32 of 110 students disagreed with what the scale said about them. That is the sort of result I go looking for now — the place where the instrument and the reality come apart.',
  },
}

export default thinking
