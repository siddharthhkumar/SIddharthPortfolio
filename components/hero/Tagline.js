'use client'

import { useEffect, useState } from 'react'
import tagline from '@/data/taglines'
import styles from './Tagline.module.css'

/**
 * The sentence that changes.
 *
 * One fixed frame, one moving phrase. Three things make it not a gimmick:
 *
 *   It holds. Nearly three seconds per phrase — long enough to read twice.
 *   It does not type. The old phrase leaves and the new one arrives as whole
 *   words; no character-by-character crawl, no blinking caret.
 *   It does not move the page. The phrase line reserves the height of its
 *   longest possible state, so nothing below it ever shifts.
 *
 * Accessibility. The rotating text is aria-hidden, and a single static copy
 * of the anchor phrase sits in the accessible tree — a screen reader hears
 * one complete, sensible sentence rather than a string of interruptions.
 *
 * Reduced motion. It does not cycle at all. The anchor phrase renders and
 * stays. That is the honest reading of the preference: no motion, not less.
 *
 * Every phrase is edited in data/taglines.js.
 */
export default function Tagline() {
  const [i, setI] = useState(0)
  const [moving, setMoving] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let out
    const tick = setInterval(() => {
      // Two stages: let the current phrase leave, then swap the text under
      // the incoming animation. A single state would cross-fade two strings
      // on top of each other, which reads as a smudge at this size.
      setMoving(true)
      out = setTimeout(() => {
        setI((n) => (n + 1) % tagline.phrases.length)
        setMoving(false)
      }, 340)
    }, tagline.hold)

    return () => {
      clearInterval(tick)
      clearTimeout(out)
    }
  }, [])

  // Tell the environment which motif the current word is about. It is a
  // separate attribute from data-tone on purpose: data-tone sets --tone for
  // everything inside it, and this must not repaint the page's colours.
  useEffect(() => {
    const motif = tagline.phrases[i]?.tone
    if (motif) document.documentElement.dataset.motif = motif
  }, [i])

  const phrase = tagline.phrases[i] ?? { text: tagline.anchor, tone: 'data' }

  return (
    <h1 className={`d-hero ${styles.line}`} data-tone={phrase.tone}>
      {/* The one copy that assistive technology reads: a whole sentence. */}
      <span className="sr">
        {[tagline.before, tagline.anchor, tagline.after].filter(Boolean).join(' ')}
      </span>

      <span aria-hidden="true">
        <span className={styles.frame}>{tagline.before}</span>{' '}
        <span className={styles.slot}>
          <span
            className={`${styles.phrase} ${moving ? styles.out : ''}`}
            key={phrase.text}
          >
            {phrase.text}
          </span>
        </span>
        {/* The sentence may end at the changing phrase, in which case there is
            no tail to render and no stray space to leave behind. */}
        {tagline.after ? <span className={styles.frame}> {tagline.after}</span> : null}
      </span>
    </h1>
  )
}
