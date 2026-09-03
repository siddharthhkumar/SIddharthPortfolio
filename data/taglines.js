/**
 * The hero sentence.
 *
 * Written to be understood by someone who has never heard of him and is not
 * going to read further than this screen. Plain verb, plain object, one word
 * that changes. No job-title stack, no adjectives, nothing that needs a
 * second reading.
 *
 * The phrases are the range: the same habit applied to a spreadsheet, a
 * fifty-page report, an unframed problem and an audience. Between them they
 * cover data, research, product and growth without listing any of those
 * words.
 *
 * EDIT HERE. The hero, the screen-reader copy, the share card and the
 * reduced-motion fallback all read from this file.
 */
export const tagline = {
  // The small line above, the way you would actually introduce yourself.
  // Split in two so the name can carry the weight and the hello can stay out
  // of its way — it is the one word on the screen that has to be remembered.
  greetingLead: 'Hello —',
  greetingName: 'I’m Siddharth Kumar',

  // Read as: [before] [phrase]
  before: 'I figure out',
  after: '',

  // The one rendered into the HTML and read aloud. Keep it the plainest of
  // the set — it is what a search engine and a screen reader see.
  anchor: 'what to build.',

  // Keep these to roughly 22 characters. The hero reserves exactly one line
  // for this slot, so a longer phrase would wrap and push the page down —
  // and the measured clearance at 1440 is only a few dozen pixels. Shorter
  // is also just better copy.
  // Each phrase carries the discipline it belongs to, and the headline takes
  // its colour from that. The hue is not decoration: it is the same one that
  // marks that discipline everywhere else on the page.
  //
  // Every phrase points at something recorded elsewhere: the Gnosis feature
  // set he defined, the non-specialist it was designed for, the funnel
  // bottlenecks found at Top Talent Bridge, the teams run at the hackathon
  // and the film society, and the KPIs defined at GAINT.
  phrases: [
    { text: 'what to build.', tone: 'product' },
    { text: 'who it is for.', tone: 'product' },
    { text: 'where a process leaks.', tone: 'people' },
    { text: 'what to do next.', tone: 'people' },
    { text: 'what to measure.', tone: 'data' },
    { text: 'what the numbers mean.', tone: 'data' },
  ],

  // The plain-English follow-up. What he is applying for, and the three
  // pieces of evidence for it, in one sentence and no jargon.
  plain:
    'Product and operations, in Noida, India. I’ve led a four-person product build from prototype to delivery, tracked the KPIs and built the dashboards for a logistics operation, and run a ten-person media team for a national hackathon.',

  // Milliseconds a phrase holds before the next one takes over. Long enough
  // to finish reading it twice — this is not a typing effect.
  hold: 2900,
}

export default tagline
