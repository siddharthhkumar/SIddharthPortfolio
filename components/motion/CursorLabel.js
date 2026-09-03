'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './CursorLabel.module.css'

/**
 * A label that follows the pointer, and only when it has something to say.
 *
 * Any element carrying `data-cursor="…"` shows that text in a small pill
 * beside the pointer while it is over it. Nothing else changes: the real
 * cursor stays visible, nothing is scaled, inverted, blurred or magnetised,
 * and the pill disappears the moment the pointer leaves.
 *
 * The restraint is the design. A large work feature is a link whose target is
 * not obvious from looking at it — the pill says where it goes. Everywhere
 * else on the page there is no pill, which is what makes it read as
 * information rather than as an effect.
 *
 * It does not exist at all for coarse pointers (no pointer to follow), for
 * anyone who has asked for reduced motion, or before the first pointer event.
 */
export default function CursorLabel() {
  const [label, setLabel] = useState(null)
  const el = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const frame = useRef(0)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    const still = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!fine.matches || still.matches) return

    // Position is written straight to the transform on an animation frame
    // rather than through React state — re-rendering on mousemove would be an
    // absurd amount of work for a 90px pill.
    const draw = () => {
      frame.current = 0
      const node = el.current
      if (node) node.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
    }

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (!frame.current) frame.current = requestAnimationFrame(draw)

      const target = e.target instanceof Element ? e.target.closest('[data-cursor]') : null
      setLabel(target ? target.getAttribute('data-cursor') : null)
    }

    // Leaving the window, or scrolling the target out from under a stationary
    // pointer, should both clear it.
    const clear = () => setLabel(null)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onMove, { passive: true })
    document.addEventListener('pointerleave', clear)
    window.addEventListener('blur', clear)

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onMove)
      document.removeEventListener('pointerleave', clear)
      window.removeEventListener('blur', clear)
      if (frame.current) cancelAnimationFrame(frame.current)
    }
  }, [])

  return (
    <div ref={el} className={styles.anchor} aria-hidden="true">
      <span className={styles.pill} data-on={label ? 'true' : 'false'}>
        {label}
        <span className={styles.arrow}>→</span>
      </span>
    </div>
  )
}
