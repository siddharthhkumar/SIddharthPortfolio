/**
 * The cassette.
 *
 * The player in the hero is real and complete — transport, seek, timecode,
 * keyboard control, persisted state. What it does NOT do is ship music that
 * is not ours to ship.
 *
 * ── TO PUT A TRACK ON THE SITE ─────────────────────────────
 *   1. Drop an .mp3 you own or are licensed to distribute into
 *      public/audio/  (e.g. public/audio/side-a.mp3)
 *   2. Set `src` below to '/audio/side-a.mp3' and fill in title/artist.
 *   3. That is the whole change. The cassette becomes playable; the
 *      transport, the timecode and the reels all wake up on their own.
 *
 * With `src` null the cassette still exists — it renders as its inlay card,
 * which is a real object with real information on it, rather than as a dead
 * play button. Nothing is faked and nothing is broken.
 */
export const music = {
  track: {
    src: null,
    title: '',
    artist: '',
  },

  // The printed card inside the case. This is what shows when there is no
  // track loaded, and it stays visible on the reverse when there is.
  //
  // ── ONE LINE, AND IT IS VOICE RATHER THAN RECORD ───────────────────
  // A note written on a cassette inlay is one line, not a paragraph. This is
  // an authored sentiment in the first person — the same category as
  // data/reflections.js, and worth Siddharth reading before it goes out under
  // his name. The fact underneath it is real: projects.js records that he
  // "independently created the initial prototype before it was handed to the
  // team" on Gnosis AI.
  //
  // The guitar and ukulele note that used to be here has not been lost: it is
  // in data/offClock.js and reads in the About section.
  inlay: {
    side: 'A',
    label: 'Notes to self:',
    line: 'It\'s just a "leap of faith" - quote from Spiderman Miles Morales',
    footnote: 'Side note',
  },
}

export default music
