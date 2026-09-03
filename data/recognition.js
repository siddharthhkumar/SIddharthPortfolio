/**
 * Recognition.
 *
 * Two verified artefacts from the same place: the final-year project
 * presentation at Gautam Buddha University, and the Letter of Recommendation
 * the university issued.
 *
 * The photograph is a real document of the presentation. Nothing here names
 * anyone who is not already named in the record, and nothing claims an award
 * or a placement that did not happen.
 */
export const recognition = {
  label: 'Recognition',
  title: 'Final-year project, presented',
  lede:
    'The major project was presented and reviewed at Gautam Buddha University, and the university issued a Letter of Recommendation on the strength of the work.',

  photo: {
    src: '/images/dean-presentation.jpg',
    // Written for someone who cannot see it. Describes what is in the frame,
    // not what it is meant to signify.
    alt:
      'Siddharth Kumar with faculty and the Dean at Gautam Buddha University following the final-year project presentation, holding the bound project report.',
    caption: 'Final-year project presentation with the Dean · Gautam Buddha University',
  },

  documents: [
    {
      id: 'lor',
      name: 'Letter of Recommendation',
      issuer: 'Gautam Buddha University',
      note: 'Issued on the strength of the final-year project and academic work.',
      file: '/docs/LOR.pdf',
    },
    {
      id: 'paper',
      name: 'Published paper',
      issuer: 'Journal of Intelligent Computing System · May 2026',
      note: 'Peer-reviewed, lead author. Presented at AIS2C2 2025.',
      file: '/docs/260.pdf',
    },
  ],
}

export default recognition
