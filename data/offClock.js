/**
 * Off the clock.
 *
 * The one section on the page that is not evidence for a job. It is short on
 * purpose: enough to read as a person, not so much that it starts competing
 * with the work above it.
 *
 * Only what is actually true is here — guitar, ukulele, and an eye for other
 * people's work. No years played, no bands, no favourite artists, no
 * exhibitions. The film and photography societies are the one claim that is
 * already in the record, in data/leadership.js.
 *
 * `lines` is read by the About section. Nothing else reads this file.
 */
export const offClock = {
  label: 'Off the clock',
  title: 'Six strings, and four',
  lines: [
    'I play guitar, and a ukulele that gets more use than it probably should.',
    'Founding the film society and running the photography club came from the same place — I like looking closely at work other people have made, and most of what I know about composition I learned from doing that rather than from a course.',
  ],
  // Drawn, not photographed. Two instruments, and the count is the point.
  instruments: [
    { name: 'Guitar', strings: 6, note: 'Six strings' },
    { name: 'Ukulele', strings: 4, note: 'Four strings' },
  ],
}

export default offClock
