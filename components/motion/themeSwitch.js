/**
 * Changing theme, as a wipe rather than a jump.
 *
 * The View Transitions API takes a snapshot of the page, runs the callback,
 * takes another, and lets CSS animate between them. That is what makes this
 * possible at all: the entire page — every colour token, the grain, the
 * pointer — changes in one frame, and the browser cross-fades the before and
 * after for us.
 *
 * On top of that the new snapshot is revealed through a growing circle
 * centred on whatever was pressed, so the theme appears to come out of the
 * button. The radius is the distance to the furthest corner, so the circle
 * always finishes by covering the viewport exactly once.
 *
 * Every part of this is optional. No View Transitions support, or reduced
 * motion, and the callback simply runs — the theme still changes, instantly,
 * which is the correct outcome in both cases.
 */
export function switchTheme(apply, origin) {
  const root = document.documentElement

  const still =
    typeof window === 'undefined' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (still || typeof document.startViewTransition !== 'function') {
    apply()
    return
  }

  // Centre of the control that was pressed, or the middle of the screen when
  // the change came from the keyboard.
  const x = origin?.x ?? window.innerWidth / 2
  const y = origin?.y ?? window.innerHeight / 2
  const reach = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )

  root.dataset.switching = 'true'
  const transition = document.startViewTransition(apply)

  transition.ready
    .then(() => {
      root.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${reach}px at ${x}px ${y}px)`],
        },
        {
          duration: 620,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          pseudoElement: '::view-transition-new(root)',
        }
      )
    })
    .catch(() => {
      // A transition can be skipped — by a second press, or by the tab going
      // to the background. The theme has still been applied.
    })

  transition.finished.finally(() => {
    delete root.dataset.switching
  })
}

/** The centre of an element, for the wipe to start from. */
export function centreOf(el) {
  if (!el) return null
  const r = el.getBoundingClientRect()
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 }
}
