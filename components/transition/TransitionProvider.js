'use client'

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useReducedMotion } from '@/components/motion/useMotion'
import styles from './Transition.module.css'

const TransitionContext = createContext(null)

const OUT = 620
const IN = 560

/**
 * World-change engine.
 *
 * Lives in the root layout, so it survives client navigation and can own both
 * halves of the move. Leaving, the destination's atmosphere expands from the
 * point the visitor actually clicked and its numeral settles into place;
 * arriving, that atmosphere dissolves off the new page. No fade, no loader —
 * the visitor watches one environment become another.
 *
 * Under reduced motion it degrades to a plain push.
 */
export function TransitionProvider({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const reduced = useReducedMotion()

  const [phase, setPhase] = useState('idle') // idle | out | in
  const [world, setWorld] = useState(null)
  const timers = useRef([])
  const pendingPath = useRef(null)

  const clearTimers = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  useEffect(() => () => clearTimers(), [])

  const enterWorld = useCallback(
    (domain, origin) => {
      if (!domain) return

      if (reduced) {
        router.push(domain.route)
        return
      }

      clearTimers()
      pendingPath.current = domain.route
      setWorld({ ...domain, origin })
      setPhase('out')

      // Navigate once the atmosphere has covered the page.
      timers.current.push(
        setTimeout(() => router.push(domain.route), OUT - 120)
      )
    },
    [reduced, router]
  )

  // When the destination has actually mounted, play the arrival.
  useEffect(() => {
    if (phase !== 'out') return
    if (!pendingPath.current || pathname !== pendingPath.current) return

    pendingPath.current = null
    setPhase('in')
    timers.current.push(
      setTimeout(() => {
        setPhase('idle')
        setWorld(null)
      }, IN)
    )
  }, [pathname, phase])

  // Safety valve: never leave the overlay stuck if a route fails to resolve.
  useEffect(() => {
    if (phase !== 'out') return
    const bail = setTimeout(() => {
      setPhase('idle')
      setWorld(null)
      pendingPath.current = null
    }, OUT + 2600)
    return () => clearTimeout(bail)
  }, [phase])

  const style = world
    ? {
        '--world-accent': world.accent,
        '--world-ground': world.ground,
        '--ox': `${world.origin?.x ?? 50}%`,
        '--oy': `${world.origin?.y ?? 50}%`,
      }
    : undefined

  return (
    <TransitionContext.Provider value={{ enterWorld, phase, world }}>
      {children}

      <div
        className={`${styles.veil} ${phase !== 'idle' ? styles[phase] : ''}`}
        style={style}
        aria-hidden="true"
      >
        <span className={styles.wash} />
        {world && (
          <span className={styles.plate}>
            <span className={`mono ${styles.numeral}`}>{world.numeral}</span>
            <span className={styles.label}>{world.label}</span>
          </span>
        )}
      </div>

      {/* Announce the move for anyone not watching it happen. */}
      <p className="sr" role="status" aria-live="polite">
        {phase === 'out' && world ? `Entering ${world.label}` : ''}
      </p>
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  const ctx = useContext(TransitionContext)
  if (!ctx) throw new Error('useTransition must be used within TransitionProvider')
  return ctx
}
