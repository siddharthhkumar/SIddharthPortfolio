/**
 * The two feature configurations, as published.
 *
 * Shown as a pair on purpose. 0.739 is the higher accuracy but belongs to the
 * weaker-balanced model; the combined model is the paper's own best balance,
 * and its MCC is the number that carries the finding. Quoting either one alone
 * would be true and misleading.
 */
export const researchResults = [
  {
    name: 'USS-21 only',
    note: 'The stress scale on its own',
    acc: 0.739,
    mcc: 0.355,
    best: false,
  },
  {
    name: 'Combined features',
    note: 'Psychological and lifestyle together — XGBoost',
    acc: 0.695,
    mcc: 0.557,
    best: true,
  },
]

export default researchResults
