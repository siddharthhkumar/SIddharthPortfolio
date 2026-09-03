/**
 * The honest half of a case study.
 *
 * ── READ THIS BEFORE THE SITE GOES OUT ─────────────────────────────
 * Every other file in data/ records verified fact. This one does not: it is
 * first-person reflection, drafted from what the record already says, and it
 * is the one place on the site written in a voice that should be checked
 * before it is published under someone's name.
 *
 * Nothing here invents an event, a metric or an outcome. Each entry is
 * reasoned from something already recorded — the prototype-then-team sequence
 * in projects.js, the retrieval-first approach note, the sample size and the
 * accuracy/MCC split in research.js and researchResults.js.
 *
 * "What I would change" is the field that makes the rest credible. Keep it.
 */
export const reflections = {
  'gnosis-ai': {
    hard: 'The distance between a prototype that convinces a room and a system four people can build on. My version made sense because all of it was in my head. Splitting it into work other people could pick up meant justifying decisions I had never had to explain, and some of them turned out not to have reasons.',
    learned:
      'That the interface is where a financial model either becomes useful or stays a number. Most of the product decisions that mattered were about what not to put on the screen — a non-specialist does not need the feature importances, they need to know how much to trust the line.',
    change:
      'I would hold the feature set open for longer. We settled what the product should do before we knew what the models could reliably say, so a few things were designed for a confidence the analysis did not end up supporting. Next time uncertainty goes into the first screen rather than a footnote on the last one.',
  },

  'documind-ai': {
    hard: 'Chunking. Splitting a document is trivial; splitting it so meaning survives the split is not. Passages that read perfectly in the source became unanswerable once they had been cut in the wrong place, and no amount of model quality rescues a bad chunk.',
    learned:
      'Retrieval is the product, not the model. Once every sentence had to carry a citation back to a page, the quality of the answer stopped being about generation and became almost entirely about whether the right passage had been found.',
    change:
      'Evaluation. I judged answers by reading them, which does not scale and is not evidence. A small labelled set — questions with a known source passage — would have told me whether changing the chunk size actually helped, rather than whether it felt better that afternoon.',
  },

  research: {
    hard: 'The sample. 110 responses across four models and three feature configurations is thin, and it is the honest limit on everything the paper concludes. Every result in it should be read as a direction, not a measurement.',
    learned:
      'That the interesting finding was not the classifier. Four models and three configurations produced a modest result; the thing worth reporting was that 32 students disagreed with what the scale said about them. The instrument was the subject all along.',
    change:
      'I would decide which configuration counted as the primary result before seeing the numbers. Accuracy favours one model and Matthews correlation favours the other, and choosing between them after the fact is exactly what I would criticise in someone else’s paper. More responses, and that decision written down first.',
  },
}

export default reflections
