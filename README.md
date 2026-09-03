# Siddharth Kumar — portfolio

A personal site positioned for **product and operations** roles. Next.js App
Router, no CSS framework, no animation library, and no 3D.

    npm install
    npm run dev        # http://localhost:3000
    npm run build      # production build
    npm start          # serve the production build

## The idea

**A stranger should understand it in five seconds.** The first screen says
who he is, what he does and where he is, in words with no jargon in them:
*Hello — **I'm Siddharth Kumar**. I figure out **what to build**.* Then one
sentence naming the two roles and the three pieces of evidence for them.
Everything clever is further down.

**The positioning is an edit, not a rewrite.** Nothing was invented to aim the
site at product and operations — the sequence was reordered and the framing
changed. The two shipped products open Selected Work; the ledger leads with
what was shipped and what was run before the audience and research figures;
the résumés are regrouped so *Product & Operations* is the first drawer; the
toolkit leads with Product and Operations; and the metadata, structured data
and share card say the same thing. Every figure and claim still traces to the
same file in `data/` it always did.

The screen is the whole screen: a rail of printed facts across the top, the
disciplines set vertically up the left margin, the sentence at full measure
with one changing word, a cassette on the right, and the survey counted out in
110 marks along the floor. Then the figures set large, five pieces of work
presented as features rather than cards, and three case studies.

**The tally is the hero's argument.** 110 ticks, one per student in the study,
with the 32 who disagreed with the stress scale drawn in the accent. Hover the
line of text and the 32 rise. It is a count, not a plot: the marks are evenly
spaced because the positions carry no information and are not pretending to.

Two rules run through the whole thing:

**Nothing is claimed that is not recorded.** Every figure on the page traces
back to a file in `data/`. Where no evidence exists, the design works around
the absence — there are no invented screenshots, no fabricated dashboards, no
placeholder metrics and **no guessed URLs**. A contact channel with no link in
`data/profile.js` is simply absent from the footer rather than pointing
somewhere wrong; the same is true of the newsletter link on a leadership card.

**The honest reading wins over the flattering one.** The research paper's
higher accuracy figure (0.739) belongs to its worse-balanced model, so both
configurations are always shown together. Each case study ends with what was
difficult and what he would change.

## Where things live

    data/            the single source of truth — every claim on the site
    app/             routes: the home page, three case studies, OG image,
                     sitemap, robots, the view-counter API
    components/
      chrome/        nav, theme toggle, footer, keyboard shortcuts, views,
                     the section rail
      hero/          the hero, the tagline, the cassette, the tally
      work/          the selected-work features
      sections/      everything between the work and the footer
      case/          the shared case-study furniture
      visual/        Anatomy, ResultChart, ContactSheet
      motion/        the reveal observer, and the pointer label
    styles/globals.css   the whole design system: colour, type, layout

## Editing it

Almost everything is a data file, not a component.

| To change | Edit |
| --- | --- |
| the hero — greeting, sentence, rotating words, the plain-English line | `data/taglines.js` |
| the Medium profile | `data/profile.js` → `social.medium` |
| the GDSC newsletter link | `data/leadership.js` → the `gdsc` entry's `link.href` |
| the photographs on the contact sheet | `data/gallery.js` |
| what he is currently doing, the version, the "last updated" date | `data/current.js` |
| the music on the cassette | `data/music.js` (and see `public/audio/README.md`) |
| which work appears, in what order | `data/work.js` |
| projects, research, experience, leadership, skills, résumés | the file of that name |
| the case-study reflections | `data/reflections.js` — **the one file written in his voice; read the note at the top of it** |

`data/current.js` drives the printed date in three places at once. There is one
date to change, not three.

## Design system

**One family, three registers.** The whole page is set in the system face —
**SF Pro** on macOS and iOS, Inter everywhere else — with **SF Mono** (falling
back to JetBrains Mono) for anything stamped rather than written. There is no
brand typeface: hierarchy comes from weight, size and tracking, which is how
Apple sets its own pages. Headlines run at **weight 800** with tracking pulled
to −0.04em, because at that weight a headline is a shape before it is a
sentence.

The pointer is the macOS one, drawn as inline SVG: black fill, white outline,
correct hotspots, arrow / hand / I-beam. Fine pointers only — on a touch
screen it is dead weight.

**Colour is a system, not decoration.** Five hues, one per discipline —
blue for data, teal for product, red for research, amber for growth, purple
for people — and each one means the same thing everywhere it appears: the
number on a project, the rule down a card, the figure in the ledger, the
changing word in the hero. A project's case study inherits its feature's hue,
so the two are visibly the same piece of work. Nothing is coloured because a
section needed brightening; the two shipped products share a colour precisely
because they are both products.

Mechanically it is one attribute and one variable: any element with
`data-tone="…"` sets `--tone`, and everything inside it uses `var(--tone)`
without knowing which discipline it belongs to. Every hue clears 4.5:1 on the
tightest ground it sits on, in both themes.

**The background moves.** Four large fields of colour, drawn from the same
five discipline hues, drift on their own paths behind the whole page —
between forty and seventy seconds for a circuit, so nothing is ever seen
moving; the page simply looks slightly different whenever you come back to
it. Only `transform` is animated: the softness is in the gradients, which
rasterise once, rather than in a `filter: blur()` that would have to be
recomputed every frame. It is a server component and ships no JavaScript.
Under `prefers-reduced-motion` the drift stops and the composition holds
still. It is what keeps warm paper from reading as beige, and it is edited in
`data/backdrop.js` — which also takes a background **image**, currently
`null`, ready for one to be dropped into `public/images/`.

Built for a large screen first. The container runs to 1780px and the gutter
grows with the viewport, so a 1440 laptop uses nearly all of it and a 1920
desktop still has a margin rather than a void. Objects that are objects — the
contact sheet, the tally — ignore the container and run to the window edges.
The hero holds exactly one screen: every vertical measurement in it is capped
against viewport height as well as width, and below 800px tall it stops trying
and lets itself run long rather than be crushed.

Colour is warm paper and warm charcoal rather than white and black, with a
single ink red used as punctuation and a quieter green reserved for live-status
dots. Three typefaces, each with one job: **Fraunces** for display, **Inter**
for sentences, **JetBrains Mono** for anything that would be stamped rather
than written.

**Four theme states, not two.** Paper, Charcoal, Auto — and **Leap**, a
comic-book night of indigo ground and halftone dots, where the pointer becomes
a web-shooter reticle. It is an homage rather than a licence: no character, no
logo, and it is named after the note on the cassette rather than after the
film. An explicit choice stamps `data-theme` on the root; Auto stamps nothing
and follows the OS. Every hue in every theme clears 4.5:1 on the tightest
ground it sits on. The stored choice is
re-applied by an inline script before first paint, so a dark-mode visitor never
gets a paper-white flash.

## Interaction

Four things move, and each one is answering a question rather than performing.

- **The theme wipe.** Changing theme changes every colour token, the grain and
  the pointer in a single frame. The View Transitions API snapshots the page
  before and after, and the new snapshot is revealed through a circle growing
  out of the control that was pressed — so the theme looks like it comes from
  the button rather than simply replacing the page. The radius is the distance
  to the furthest corner, so the circle finishes by covering the viewport
  exactly once. No support, or reduced motion, and the theme just changes.

- **The pointer label.** Anything with `data-cursor="…"` shows that text in a
  small pill beside the cursor. A work feature is an enormous link with no
  button on it, so the pointer says where it goes. Nothing is scaled, inverted
  or magnetised, and the real cursor stays visible.
- **The section rail.** Ticks down the right edge, one per band, naming
  themselves on hover and marking where you are. Every tick is a real button.
  It stays out of the hero and disappears below 1100px.
- **The tally.** Hovering the caption raises the 32 marks it is talking about.

The rotating word is capped at about 22 characters so the hero reserves exactly
one line for it — which is why nothing on the page ever shifts as it changes.

All of them are absent for coarse pointers, reduced motion, or both. Every
control also gives slightly under the pointer and springs back — two lines of
CSS, and most of what makes an interface feel answered rather than merely
responsive.

## Accessibility and motion

- axe-core reports **zero violations** on all four pages in both themes.
- The rotating tagline is `aria-hidden`; one complete static sentence sits in
  the accessible tree, so a screen reader hears a sentence rather than
  interruptions. Under `prefers-reduced-motion` it does not rotate at all.
- Every reveal, diagram animation and spinning reel stops under reduced motion,
  and content is visible by default — a blocked script cannot leave the page
  empty.
- Keyboard shortcuts (`?`, `T`, `W`, `R`, `C`) are single unmodified keys and
  are ignored entirely while focus is in a field.
- Three navigation landmarks (primary, menu, section rail) carry distinct
  accessible names.

## Performance

Measured, not asserted. The home page is **290 KB over 29 requests**, of which
164 KB is JavaScript — and **212 KB on macOS and iOS**, because neither webfont
is preloaded and neither is needed there: both stacks put the system face
first, so Apple visitors fetch no font files at all. Below-the-fold images load
when they are reached, and the view counter is only mounted when a store is
actually configured, rather than fetching on every load to be told `null`.

No CSS framework, no animation library, no 3D, no icon package. The grain, the
favicon, the column rules, the sprocket rails, the 110 tally marks and every
diagram are inline SVG or CSS — none of them costs a request. The home page is
a server component; the only client JavaScript is the nav, the theme toggle,
the tagline, the cassette transport, the view counter, the keyboard shortcuts,
the pointer label, the section rail and one shared IntersectionObserver.

## The view counter

Optional, and hidden rather than faked when it is not configured. See
[VIEWS.md](VIEWS.md).

## Deploying

Vercel, from the repository root, with no configuration. `npm run build` is the
only build step. The view counter is the one thing that needs environment
variables, and the site works without them.
