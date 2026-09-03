'use client'

import { useEffect } from 'react'

/**
 * The world leans toward the pointer.
 *
 * Two custom properties on the root — how far the pointer is from the centre
 * of the screen, from -1 to 1 — and the stylesheet decides what each layer
 * does with them. The sky leans least, the doodles most, which is the same
 * ordering as the scroll parallax and for the same reason: things that are
 * further away move less.
 *
 * ── Why it costs nothing ─────────────────────────────────────────────
 * It writes two numbers to one element, once per animation frame, and never
 * reads layout. React is not involved after mount: this component renders
 * nothing at all and never re-renders. The layers themselves move on
 * `translate3d`, so the work lands on the compositor rather than in a repaint.
 *
 * ── Why it is restrained ─────────────────────────────────────────────
 * Total travel is a handful of pixels. It is meant to be felt as depth when
 * you move the mouse, not noticed as an effect — the same bar the scroll
 * parallax is held to.
 *
 * It does not exist for coarse pointers or for anyone who has asked for
 * reduced motion.
 */
export default function Pointer() {
  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    const still = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || still.matches) return

    const root = document.documentElement
    let frame = 0
    let x = 0
    let y = 0

    const draw = () => {
      frame = 0
      root.style.setProperty('--px', x.toFixed(3))
      root.style.setProperty('--py', y.toFixed(3))
    }

    const onMove = (e) => {
      x = (e.clientX / window.innerWidth) * 2 - 1
      y = (e.clientY / window.innerHeight) * 2 - 1
      if (!frame) frame = requestAnimationFrame(draw)
    }

    // Leaving the window settles it back to centre rather than freezing it
    // wherever the pointer happened to exit.
    const settle = () => {
      x = 0
      y = 0
      if (!frame) frame = requestAnimationFrame(draw)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', settle)
    window.addEventListener('blur', settle)

    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', settle)
      window.removeEventListener('blur', settle)
      if (frame) cancelAnimationFrame(frame)
      root.style.removeProperty('--px')
      root.style.removeProperty('--py')
    }
  }, [])

  return null
}
