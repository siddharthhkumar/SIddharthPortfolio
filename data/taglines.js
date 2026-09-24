/**
 * The hero sentence.
 *
 * Written to be understood by someone who has never heard of him and is not
 * going to read further than this screen. Plain verb, plain object, one word
 * that changes. No job-title stack, no adjectives, nothing that needs a
 * second reading.
 *
 * The phrases are the range, content and digital marketing leading: the same
 * habit applied to a headline that has to earn a click, an audience built
 * from zero, an unframed product problem, a funnel with a bottleneck in it.
 * Data and research still appear — they are real — just not first.
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
  before: 'I work across',
  after: '',

  // The one rendered into the HTML and read aloud. Keep it the plainest of
  // the set — it is what a search engine and a screen reader see. Leads with
  // content and digital marketing, the primary positioning, ahead of product.
  anchor: 'SEO content, digital marketing and product.',

  // Keep these to roughly 22 characters. The hero reserves exactly one line
  // for this slot, so a longer phrase would wrap and push the page down —
  // and the measured clearance at 1440 is only a few dozen pixels. Shorter
  // is also just better copy.
  // Each phrase carries the discipline it belongs to, and the headline takes
  // its colour from that. The hue is not decoration: it is the same one that
  // marks that discipline everywhere else on the page.
  //
  // Order is the positioning: content and digital marketing lead (Jumpy
  // Jargons, CollegePur, BrightRays' SEO exposure, the GBU community's
  // 500K+ reach and the GDSC A/B-tested campaign), then product (the Gnosis
  // feature set he defined) and operations (the funnel work at Top Talent
  // Bridge, the KPIs at GAINT), with data and research trailing as
  // background rather than the headline.
  phrases: [
    { text: 'SEO content.', tone: 'growth' },
    { text: 'digital marketing.', tone: 'growth' },
    { text: 'product workflows.', tone: 'product' },
    { text: 'business operations.', tone: 'people' },
    { text: 'data analysis.', tone: 'data' },
    { text: 'research questions.', tone: 'research' },
  ],

  // The plain-English follow-up. Leads with the habit, not the résumé — a
  // stranger should meet the person before the job titles. The three
  // examples are the same ones named in profile.js's own comment on
  // `opening`: the stress scale, the GDSC message, the slow document search.
  // Only then the practical facts: degree, city, the roles he is after —
  // content and digital marketing first, product and operations supporting.
  plain:
    'Most of my work starts where an assumption stops holding — a stress scale students didn’t trust, a message nobody had tested, a document search that was slower than it should be. B.Tech IT graduate in Noida, India, looking for roles in SEO content, digital marketing, product or operations.',

  // Milliseconds a phrase holds before the next one takes over. Long enough
  // to finish reading it twice — this is not a typing effect.
  hold: 2900,
}

export default tagline
