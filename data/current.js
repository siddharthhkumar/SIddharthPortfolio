/**
 * Currently.
 *
 * The living part of the site. Nothing here is inferred or generated — if a
 * line is empty it does not render, and no placeholder takes its place.
 *
 * EDIT HERE when something changes. `updated` drives the printed label in the
 * hero, the status strip and the footer, so there is one date to change.
 */
export const current = {
  // ISO date. Also the string the small printed labels around the site show.
  updated: '2026-08-30',
  version: '2.0',

  entries: [
    {
      key: 'working on',
      value: 'Digital growth, data and AI workflows at BrightRays',
      note: 'Noida — started this month.',
    },
    {
      key: 'building',
      value: 'This site, again',
      note: 'Second rebuild. The first one was a 3D room, which was fun and wrong.',
    },
    {
      key: 'learning',
      value: 'How SEO actually behaves in a live commercial setting',
      note: 'Less theory than expected, more measurement.',
    },
    {
      key: 'thinking about',
      value: 'Why self-reported data is trusted more than it deserves',
      note: 'Left over from the paper. Has not left yet.',
    },
  ],

  // Shown as a struck-through line under the list. Honest and small.
  next: 'Next update whenever something actually changes.',
}

export default current
