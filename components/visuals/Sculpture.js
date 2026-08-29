'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '@/components/motion/useMotion'
import { useDomainFocus } from '@/components/atlas/DomainFocus'
import domains from '@/data/domains'
import SculptureStill from './SculptureStill'
import styles from './Sculpture.module.css'

const ACCENTS = domains.map((d) => d.accent)

/**
 * Decides what this device should actually get, then gets out of the way.
 *
 * A capable desktop gets the lit scene. Everything else — phones, coarse
 * pointers, no WebGL, reduced motion — gets the still, which is a composition
 * rather than an apology. Hovering a form names its discipline; selecting one
 * from the atlas re-forms the whole object.
 */
export default function Sculpture() {
  const canvasRef = useRef(null)
  const sceneRef = useRef(null)
  const reduced = useReducedMotion()
  const { focus } = useDomainFocus()

  const [mode, setMode] = useState('pending') // pending | scene | still
  const [ready, setReady] = useState(false)
  const [label, setLabel] = useState(null)

  useEffect(() => {
    if (reduced) {
      setMode('still')
      return
    }
    // A phone should not be asked to run this, however capable it claims to be.
    if (window.innerWidth < 900 || window.matchMedia('(pointer: coarse)').matches) {
      setMode('still')
      return
    }
    const probe = document.createElement('canvas')
    if (!(probe.getContext('webgl2') || probe.getContext('webgl'))) {
      setMode('still')
      return
    }
    // A weak GPU is better served by the still than by a stuttering scene.
    const cores = navigator.hardwareConcurrency || 4
    setMode(cores <= 2 ? 'still' : 'scene')
  }, [reduced])

  const handleHover = useCallback(
    (hit) => {
      if (!hit || hit.index < 0) {
        setLabel(null)
        return
      }
      setLabel({ ...domains[hit.index], x: hit.x, y: hit.y })
    },
    []
  )

  useEffect(() => {
    if (mode !== 'scene') return
    let cancelled = false
    let idle = 0

    const boot = async () => {
      try {
        const { createSculpture } = await import('./sculptureScene')
        if (cancelled || !canvasRef.current) return
        sceneRef.current = await createSculpture(canvasRef.current, {
          accents: ACCENTS,
          quality: window.innerWidth < 1250 ? 'low' : 'high',
          onHover: handleHover,
          onReady: () => !cancelled && setReady(true),
        })
      } catch {
        if (!cancelled) setMode('still')
      }
    }

    // The type paints first. The object is never the LCP.
    if ('requestIdleCallback' in window) {
      idle = window.requestIdleCallback(boot, { timeout: 2200 })
    } else {
      idle = window.setTimeout(boot, 900)
    }

    return () => {
      cancelled = true
      if ('cancelIdleCallback' in window) window.cancelIdleCallback(idle)
      else clearTimeout(idle)
      sceneRef.current?.destroy()
      sceneRef.current = null
    }
  }, [mode, handleHover])

  // The atlas drives the composition.
  useEffect(() => {
    sceneRef.current?.setTarget(focus)
  }, [focus])

  if (mode === 'pending') return null

  if (mode === 'still') {
    return (
      <div className={`${styles.field} ${styles.ready} ${styles.stillField}`}>
        <SculptureStill />
      </div>
    )
  }

  return (
    <div className={`${styles.field} ${ready ? styles.ready : ''}`}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      {label && (
        <span
          className={styles.label}
          style={{ '--x': `${label.x}px`, '--y': `${label.y}px`, '--c': label.accent }}
          aria-hidden="true"
        >
          <span className={`mono ${styles.labelNum}`}>{label.numeral}</span>
          <span className={styles.labelName}>{label.label}</span>
        </span>
      )}
    </div>
  )
}
