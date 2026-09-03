# Putting a track on the site

The cassette in the hero is a complete player — transport, seek, timecode,
keyboard control, session-persisted position. It is not wired to anything yet,
because nothing in this repository is a track we have the right to distribute.

To turn it on:

1. Drop an `.mp3` you own or are licensed to distribute into this folder, e.g.
   `public/audio/side-a.mp3`.
2. In `data/music.js`, set:

       track: {
         src: '/audio/side-a.mp3',
         title: 'Whatever it is called',
         artist: 'Whoever made it',
       }

That is the whole change. The transport, the timecode and the reels wake up on
their own.

**Do not put commercial music here.** Streaming a copyrighted track from a
personal site is distribution, not listening, and a portfolio is the last place
to be casual about it. Your own recording, something licensed, or nothing.

With `src` left as `null` the cassette renders as its printed inlay card — a
real object with real information on it, rather than a dead play button.
