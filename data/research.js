// Peer-reviewed research. Every figure below is taken from the published
// paper (JICS Vol. 1, Issue 2, pp. 08-13, May 2026) — no longer from a
// secondhand summary. Page references are noted where they matter.

export const research = {
  title:
    'A Machine Learning Approach to Classifying Stress Levels Using Psychological and Non-Psychological Features',
  shortTitle: 'A Machine Learning Approach to Classifying Stress Levels',
  role: 'Lead Author',
  // First of three authors. Maneet Singh is the corresponding author.
  authors: [
    { name: 'Siddharth Kumar', mark: '1', self: true },
    { name: 'Aaqib Abdullah', mark: '2' },
    { name: 'Maneet Singh', mark: '3', corresponding: true },
  ],
  department: 'Department of Information Technology',
  affiliation: 'Gautam Buddha University, Greater Noida, India',
  period: 'Aug 2025 – Mar 2026',

  venues: [
    { label: 'AIS2C2 2025 — International Conference', detail: 'Presented December 2025' },
    {
      label: 'Journal of Intelligent Computing System (JICS)',
      detail: 'Vol. 1, Issue 2, pp. 08–13 · May 2026',
    },
  ],

  abstract:
    'Stress affects students in ways that reach beyond how they feel, into academic performance and the management of daily responsibilities. Measuring it is difficult, because most instruments rely on self-reporting, which often lacks reliability. This study asks whether machine learning can improve stress-level prediction from a short online survey covering demographics, lifestyle and all 21 items of the University Stress Scale.',

  investigated: [
    'Whether a machine-learning model can predict stress level from psychological or non-psychological survey data.',
    'How combining psychological and non-psychological features changes prediction quality.',
    'How closely a student’s own assessment of their stress matches the USS-derived category.',
  ],

  contribution: [
    'Framed the research question and designed the study as lead author.',
    'Ran survey collection across 110 participants between 1 and 10 November 2025.',
    'Handled data curation, encoding, standardisation and imputation.',
    'Built three feature configurations and compared four supervised models with Scikit-Learn.',
    'Wrote the paper and presented it at the AIS2C2 2025 international conference.',
  ],

  finding:
    'Psychological features carried most of the predictive signal, and XGBoost outperformed every other model tested. More striking was the mismatch between what students said about their stress and what the scale reported — 32 of 110 disagreed, which suggests self-assessment alone is a weak instrument.',

  methods: [
    'Research design',
    'Survey instrumentation',
    'Data curation',
    'Feature engineering',
    'Supervised classification',
    'Scikit-Learn',
  ],

  paper: '/docs/260.pdf',
  publisher: 'Synergy World Press',
}

export default research
