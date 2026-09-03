/**
 * The world.
 *
 * One environment behind the whole site, composed rather than generated. It
 * is a desk turned into a landscape: paper for ground, something in the sky,
 * a horizon, and the small marks left by working — registration crosses, a
 * grid fragment, a drawn line, a frame.
 *
 * ── THE FIVE MOTIFS ───────────────────────────────────────────────
 * Everything in here is one of these, and nothing else gets added. Five is
 * what makes it a vocabulary instead of a collection.
 *
 *   01  sun / moon      the one thing in the sky, and the day-night hinge
 *   02  paper           scraps, tape, torn edges, the studio note
 *   03  grid            plotted fragments — the data half of the desk
 *   04  frame           camera crop marks and registration crosses
 *   05  drawn line      one long imperfect stroke, by hand
 *
 * ── THE TWO STORIES ───────────────────────────────────────────────
 * Day is "I am exploring": open sky, a low sun, birds, a horizon a long way
 * off. Night is "I am still working": the same desk after dark, a moon, a
 * star field, and two warm lights still on at the horizon. They are not
 * inversions of each other — they are the same place at two times.
 *
 * ── SAFETY ────────────────────────────────────────────────────────
 * `keepClear` is the region the hero type occupies. Nothing with any
 * contrast is placed inside it. The composition is built around the words,
 * not the other way round.
 */
export const world = {
  // The sun and the moon sit in the same place, because it is the same sky.
  // Upper right, clear of the headline, clear of the nav pill.
  celestial: { x: 78, y: 17, r: 7.4 },

  // Kept clear of type: the hero headline runs from the left gutter to about
  // two-thirds across, between a fifth and a half of the way down.
  keepClear: { x: 0, y: 18, w: 68, h: 34 },

  /**
   * Birds by day. Three, uneven, drifting away from the sun — a flock is a
   * crowd, and three is a glance.
   */
  birds: [
    { x: 62, y: 12, s: 1, delay: 0 },
    { x: 68, y: 9.2, s: 0.78, delay: -3.4 },
    { x: 58.5, y: 8.4, s: 0.62, delay: -6.1 },
    { x: 45, y: 15, s: 0.9, delay: -2.1 },
    { x: 52, y: 10, s: 0.7, delay: -5.4 },
    { x: 75, y: 14, s: 0.85, delay: -1.2 },
    { x: 80, y: 8, s: 0.5, delay: -4.8 },
    { x: 40, y: 6, s: 0.6, delay: -8.0 },
    { x: 30, y: 18, s: 0.75, delay: -3.9 },
  ],

  /**
   * Stars by night. Placed, not scattered: dense toward the top and the right
   * where the sky is open, thinning to nothing over the headline. `t` is how
   * long one breath takes; a third of them do not breathe at all.
   */
  stars: [
    { x: 6, y: 6, r: 1.1, t: 0 }, { x: 13, y: 11, r: 0.7, t: 7 },
    { x: 19, y: 4, r: 0.9, t: 0 }, { x: 27, y: 9, r: 0.6, t: 5.5 },
    { x: 34, y: 5, r: 1, t: 0 }, { x: 41, y: 12, r: 0.7, t: 9 },
    { x: 47, y: 6.5, r: 0.85, t: 6.2 }, { x: 54, y: 3.5, r: 0.6, t: 0 },
    { x: 60, y: 10, r: 1, t: 8.1 }, { x: 66, y: 5, r: 0.7, t: 0 },
    { x: 71, y: 12.5, r: 0.9, t: 6.8 }, { x: 84, y: 7, r: 0.75, t: 0 },
    { x: 89, y: 13, r: 1.05, t: 7.6 }, { x: 94, y: 5.5, r: 0.65, t: 0 },
    { x: 97, y: 19, r: 0.85, t: 5.9 }, { x: 91, y: 26, r: 0.7, t: 0 },
    { x: 85, y: 33, r: 0.95, t: 8.7 }, { x: 96, y: 38, r: 0.6, t: 0 },
    { x: 89, y: 45, r: 0.8, t: 6.4 }, { x: 97, y: 52, r: 0.7, t: 0 },
    { x: 83, y: 57, r: 1, t: 7.2 }, { x: 93, y: 63, r: 0.65, t: 0 },
    { x: 4, y: 24, r: 0.8, t: 9.4 }, { x: 9, y: 34, r: 0.6, t: 0 },
    { x: 3, y: 44, r: 0.95, t: 6.6 }, { x: 11, y: 52, r: 0.7, t: 0 },
    { x: 5, y: 61, r: 0.85, t: 8.3 }, { x: 15, y: 66, r: 0.6, t: 0 },
    { x: 24, y: 62, r: 0.75, t: 7.9 }, { x: 35, y: 67, r: 0.6, t: 0 },
    { x: 46, y: 61, r: 0.8, t: 5.7 }, { x: 57, y: 66, r: 0.65, t: 0 },
    { x: 68, y: 60, r: 0.9, t: 8.9 }, { x: 76, y: 66, r: 0.6, t: 0 },
    { x: 10, y: 18, r: 0.9, t: 6.3 }, { x: 22, y: 15, r: 0.7, t: 0 },
    { x: 30, y: 20, r: 1.1, t: 8.5 }, { x: 38, y: 25, r: 0.6, t: 0 },
    { x: 45, y: 18, r: 0.8, t: 7.1 }, { x: 50, y: 28, r: 0.95, t: 0 },
    { x: 58, y: 22, r: 0.7, t: 9.2 }, { x: 65, y: 18, r: 0.85, t: 0 },
    { x: 75, y: 25, r: 1.0, t: 6.7 }, { x: 80, y: 15, r: 0.6, t: 0 },
    { x: 88, y: 22, r: 0.75, t: 8.4 }, { x: 20, y: 30, r: 0.9, t: 0 },
    { x: 28, y: 35, r: 0.65, t: 7.8 }, { x: 40, y: 32, r: 1.05, t: 0 },
    { x: 55, y: 38, r: 0.8, t: 6.9 }, { x: 70, y: 35, r: 0.7, t: 0 },
    { x: 85, y: 40, r: 0.95, t: 8.1 }, { x: 15, y: 45, r: 0.6, t: 0 },
    { x: 25, y: 50, r: 0.85, t: 7.5 }, { x: 40, y: 48, r: 1.1, t: 0 },
    { x: 55, y: 52, r: 0.75, t: 6.2 }, { x: 70, y: 45, r: 0.9, t: 0 },
    { x: 80, y: 50, r: 0.65, t: 8.8 }, { x: 20, y: 55, r: 1.0, t: 0 },
    { x: 35, y: 58, r: 0.7, t: 7.4 }, { x: 50, y: 55, r: 0.85, t: 0 },
    { x: 65, y: 58, r: 0.95, t: 6.6 }, { x: 85, y: 65, r: 0.6, t: 0 },
  ],

  /**
   * Two constellations, because a sky of loose points is noise. Both are
   * invented shapes rather than real asterisms — a plotted line and a small
   * frame, which are two of the five motifs drawn in stars.
   */
  constellations: [
    { points: '84,7 89,13 94,5.5 97,19', label: 'plot' },
    { points: '4,24 9,34 3,44 11,52 5,61', label: 'trace' },
  ],

  /**
   * The horizon. Three ridges, the furthest palest — the only place in the
   * composition with a hard edge, and it is at the very bottom where no text
   * goes.
   */
  ridges: [
    'M0,86 C12,83.4 21,88 33,85.6 C45,83.2 54,87.6 66,85.2 C78,82.8 88,86.6 100,84.4 L100,101 L0,101 Z',
    'M0,91 C14,88.6 24,93 38,90.8 C52,88.6 61,92.6 74,90.4 C86,88.4 92,91.4 100,90 L100,101 L0,101 Z',
    'M0,95.4 C16,93.6 27,96.8 42,95.4 C57,94 68,97 82,95.6 C90,94.8 96,96 100,95.4 L100,101 L0,101 Z',
  ],

  /** Two windows still lit at the horizon, at night. */
  lights: [
    { x: 23.5, y: 89.6 },
    { x: 71, y: 89.2 },
  ],

  /**
   * The studio note, pinned in the corner of the environment. Values come
   * from data/current.js so it goes out of date on its own.
   */
  note: {
    label: 'Site / 02',
    state: 'Currently refining',
    next: 'Next: more experiments',
  },
}

export default world
