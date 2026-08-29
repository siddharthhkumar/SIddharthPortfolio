'use client'

import { useEffect, useRef, useState } from 'react'

/** True when the visitor has asked for reduced motion. Stays live. */
export function useReducedMotion() {
  // Read synchronously on the first client render. Components that consume
  // this are client-only or render null on the server, so there is no
  // hydration mismatch — and starting at `false` would let expensive work
  // boot for one frame before the preference was noticed.
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const set = () => setReduced(mq.matches)
    set()
    mq.addEventListener('change', set)
    return () => mq.removeEventListener('change', set)
  }, [])

  return reduced
}

/** True when a real pointer is available — gates the cursor and the 3D field. */
export function useFinePointer() {
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const set = () => setFine(mq.matches)
    set()
    mq.addEventListener('change', set)
    return () => mq.removeEventListener('change', set)
  }, [])

  return fine
}

/**
 * Adds `.in` once the element crosses the viewport. One observer per element,
 * disconnected as soon as it fires — no lingering scroll work.
 */
export function useReveal({ threshold = 0.16, rootMargin = '0px 0px -8% 0px', once = true } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      el.classList.add('in')
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          if (once) io.disconnect()
        } else if (!once) {
          el.classList.remove('in')
        }
      },
      { threshold, rootMargin }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}

/**
 * 0 -> 1 as the element travels through the viewport. Used to draw the
 * experience spine. rAF-throttled; one shared listener per element.
 */
export function useScrollProgress() {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1)
      return
    }

    let frame = 0

    const measure = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const total = rect.height + vh * 0.5
      const travelled = vh * 0.85 - rect.top
      setProgress(Math.min(1, Math.max(0, travelled / total)))
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return [ref, progress]
}

/**
 * Writes `--py` (px offset) onto the element as it scrolls. CSS decides what
 * to do with it, so the JS stays cheap and the effect is GPU-only.
 */
export function useParallax(strength = 60) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0

    const measure = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const centre = rect.top + rect.height / 2
      const offset = (centre - vh / 2) / vh
      el.style.setProperty('--py', `${(offset * strength).toFixed(2)}px`)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [strength])

  return ref
}
