'use client'

import { useEffect } from 'react'

/**
 * One observer for every reveal on the page.
 *
 * A component-per-reveal would mean dozens of observers and dozens of client
 * components; this is a single instance walking `[data-reveal]` once. The page
 * itself stays a server component.
 *
 * The `reveal-ready` class is what arms the hidden state, and it is only added
 * once this has actually mounted — so if the script fails or is blocked, the
 * content is simply visible rather than permanently invisible.
 */
export default function RevealRoot() {
  useEffect(() => {
    const root = document.documentElement

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    root.classList.add('reveal-ready')

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    )

    const items = document.querySelectorAll('[data-reveal]')
    items.forEach((el) => io.observe(el))

    return () => {
      io.disconnect()
      root.classList.remove('reveal-ready')
    }
  }, [])

  return null
}
