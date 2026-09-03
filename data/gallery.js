/**
 * The work, photographed.
 *
 * Real photographs from the events and productions already recorded in
 * data/leadership.js. Captions say what the frame is and nothing more — no
 * audience figures, no outcomes, no claims the record does not already make.
 *
 * `weight` drives the mosaic: 2 spans two columns. The order is chosen so the
 * weights tile exactly into rows of four on a wide sheet — four doubles and
 * four singles, arranged 2+2 / 2+1+1 / 1+1+2 — which is why it is not simply
 * chronological. It is a layout hint, not a ranking of importance.
 */
export const gallery = [
  {
    src: '/images/gdg-cloud-genai.jpeg',
    alt: 'Students seated at a Google Developer Groups Cloud and Gen AI session on campus.',
    caption: 'Cloud & Gen AI session',
    org: 'GDG On Campus',
    weight: 2,
  },
  {
    src: '/images/conference.jpeg',
    alt: 'Siddharth Kumar speaking at a conference presentation.',
    caption: 'Conference',
    org: 'AIS2C2 2025',
    weight: 2,
  },
  {
    src: '/images/mirage.jpeg',
    alt: 'The Mirage film and photography society team on a production.',
    caption: 'Society production',
    org: 'Mirage — Film & Photography',
    weight: 2,
  },
  {
    src: '/images/gdg-session.jpeg',
    alt: 'A Google Developer Groups session running in a campus lecture hall.',
    caption: 'Campus session',
    org: 'GDG On Campus',
    weight: 1,
  },
  {
    src: '/images/mlsa-session.jpeg',
    alt: 'A Microsoft Learn Student Ambassadors session in progress.',
    caption: 'MLSA session',
    org: 'Microsoft Learn Student Ambassadors',
    weight: 1,
  },
  {
    src: '/images/brainstorming.jpeg',
    alt: 'A brainstorming session with students working around a table.',
    caption: 'Brainstorming session',
    org: 'Campus programme',
    weight: 1,
  },
  {
    src: '/images/netsim-coordinator.jpeg',
    alt: 'NetSim student coordinator programme session.',
    caption: 'Student coordinator',
    org: 'NetSim',
    weight: 1,
  },
  {
    src: '/images/podium.jpeg',
    alt: 'Siddharth Kumar speaking at a podium during a campus event.',
    caption: 'Speaking',
    org: 'Gautam Buddha University',
    weight: 2,
  },
]

export default gallery
