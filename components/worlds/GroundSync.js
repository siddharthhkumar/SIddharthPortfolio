'use client'

import { useEffect } from 'react'

/**
 * Tells the shared chrome which ground it is standing on.
 *
 * Nav, the side rail and the accent switch live outside <main>, so a world
 * that inverts its own colours would otherwise leave them unreadable — light
 * text on light paper. This flips a root attribute; globals.css re-grounds
 * only the chrome, because <main> declares its own values and wins inside.
 */
export default function GroundSync({ ground = 'dark' }) {
  useEffect(() => {
    const root = document.documentElement
    const previous = root.getAttribute('data-ground')
    root.setAttribute('data-ground', ground)
    return () => {
      if (previous) root.setAttribute('data-ground', previous)
      else root.removeAttribute('data-ground')
    }
  }, [ground])

  return null
}
