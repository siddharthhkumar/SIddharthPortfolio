'use client'

import { useEffect, useRef, useState } from 'react'
import { useFinePointer, useReducedMotion } from '@/components/motion/useMotion'
import styles from './Cursor.module.css'

/**
 * Contextual cursor. Any element can declare its own affordance with
 * `data-cursor="view|open|resume|paper|expand|read|email"`; the dot reads the
 * nearest declaring ancestor on pointerover, so it works with content React
 * renders later. Never mounts without a fine pointer.
 */
export default function Cursor() {
  const fine = useFinePointer()
  const reduced = useReducedMotion()
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [label, setLabel] = useState('')
  const [mode, setMode] = useState('idle')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!fine || reduced) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Target position vs. eased ring position.
    let tx = window.innerWidth / 2
    let ty = window.innerHeight / 2
    let rx = tx
    let ry = ty
    let frame = 0

    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
      dot.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`
      if (!visible) setVisible(true)
    }

    const tick = () => {
      rx += (tx - rx) * 0.16
      ry += (ty - ry) * 0.16
      ring.style.transform = `translate3d(${rx.toFixed(2)}px, ${ry.toFixed(2)}px, 0) translate(-50%, -50%)`
      frame = requestAnimationFrame(tick)
    }

    const onOver = (e) => {
      const target = e.target instanceof Element ? e.target.closest('[data-cursor]') : null
      if (target) {
        const kind = target.getAttribute('data-cursor')
        setMode(kind)
        setLabel(LABELS[kind] ?? '')
        return
      }
      const interactive =
        e.target instanceof Element ? e.target.closest('a, button, input, textarea, select') : null
      setMode(interactive ? 'touch' : 'idle')
      setLabel('')
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    frame = requestAnimationFrame(tick)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerover', onOver, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    document.addEventListener('pointerenter', onEnter)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      document.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('pointerenter', onEnter)
    }
  }, [fine, reduced, visible])

  if (!fine || reduced) return null

  return (
    <div className={`cursor-root ${styles.root}`} aria-hidden="true">
      <div
        ref={ringRef}
        className={`${styles.ring} ${styles[mode] ?? ''} ${visible ? styles.on : ''}`}
      >
        {label && <span className={styles.label}>{label}</span>}
      </div>
      <div ref={dotRef} className={`${styles.dot} ${visible ? styles.on : ''}`} />
    </div>
  )
}

const LABELS = {
  view: 'View',
  enter: 'Enter',
  open: 'Open',
  resume: 'Résumé',
  paper: 'Paper',
  expand: 'More',
  read: 'Read',
  email: 'Write',
  touch: '',
  idle: '',
}
