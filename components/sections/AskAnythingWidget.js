'use client'

import { useEffect, useRef, useState } from 'react'
import { findAnswer, starterQuestions, knowledgeBase } from '@/data/knowledge'
import styles from './AskAnything.module.css'

let seq = 0
const nextId = () => ++seq

// A fixed, small set of static tilts so every card looks placed by hand
// rather than computed — the same trick Recognition's taped print and the
// paper scraps in components/world use.
const TILTS = [-0.6, 0.5, -0.4, 0.7, -0.5, 0.4]

/**
 * The interactive half of "Ask me anything" — everything that actually
 * needs the client: state, the free-text matcher, the knowledge base.
 *
 * Split out from AskAnything.js on purpose. The knowledge base (all of
 * faq.js, projects.js, skills.js pulled into data/knowledge.js) is real
 * weight — a ~55 KB chunk on its own — and every fact in it is already
 * server-rendered in plain HTML elsewhere on this page. Shipping it a
 * second time as part of the page's critical JS was pure cost with nothing
 * bought back: this widget is below the fold and a visitor can read the
 * whole page without ever touching it. AskAnything.js dynamic-imports this
 * file with ssr:false, so the chunk loads on its own rather than blocking
 * the initial bundle.
 */
export default function AskAnythingWidget() {
  const [turns, setTurns] = useState([])
  const [input, setInput] = useState('')
  const [askedIds, setAskedIds] = useState(() => new Set())
  const stackRef = useRef(null)

  useEffect(() => {
    const node = stackRef.current
    if (!node) return
    node.scrollTo({ top: node.scrollHeight, behavior: 'smooth' })
  }, [turns])

  function ask(question) {
    const text = question.trim()
    if (!text) return

    const id = nextId()
    setTurns((t) => [...t, { id, q: text, a: null, pending: true }])
    setInput('')

    const match = findAnswer(text)
    const delay = match ? Math.min(1200, 380 + match.a.length * 4) : 600

    window.setTimeout(() => {
      setTurns((t) =>
        t.map((turn) =>
          turn.id !== id
            ? turn
            : match
              ? { ...turn, a: match.a, tone: match.tone, category: match.category, pending: false }
              : {
                  ...turn,
                  a: "That one's not on the record — try a question about the projects, the research, the toolkit or how to reach him.",
                  fallback: true,
                  pending: false,
                }
        )
      )
      if (match) setAskedIds((prev) => new Set(prev).add(match.id))
    }, delay)
  }

  function handleSubmit(e) {
    e.preventDefault()
    ask(input)
  }

  function reset() {
    seq = 0
    setTurns([])
    setAskedIds(new Set())
    setInput('')
  }

  const suggestions =
    turns.length === 0
      ? starterQuestions
      : knowledgeBase
          .filter((k) => !askedIds.has(k.id))
          .slice(0, 4)
          .map((k) => k.q)

  return (
    <div className={styles.desk}>
      <form className={styles.inputRow} onSubmit={handleSubmit}>
        <span className={styles.inputStamp} aria-hidden="true">
          Q
        </span>
        <input
          type="text"
          className={styles.input}
          placeholder="Ask about the projects, the research, the toolkit, how to reach him…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Ask a question about Siddharth Kumar"
        />
        <button type="submit" className={styles.pull} disabled={!input.trim()}>
          Pull the card
        </button>
      </form>

      {suggestions.length > 0 && (
        <div className={styles.tabs}>
          {suggestions.map((q) => (
            <button key={q} type="button" className={styles.tab} onClick={() => ask(q)}>
              {q}
            </button>
          ))}
        </div>
      )}

      {turns.length > 0 && (
        <div className={styles.stackHead}>
          <p className="m-label">Pulled so far</p>
          <button type="button" className={styles.reset} onClick={reset}>
            Clear the drawer
          </button>
        </div>
      )}

      <div className={styles.stack} ref={stackRef}>
        {turns.map((t, i) => (
          <article
            key={t.id}
            className={styles.card}
            data-tone={t.tone}
            style={{ '--tilt': `${TILTS[i % TILTS.length]}deg` }}
          >
            <div className={styles.cardHead}>
              <span className={styles.serial}>N&deg; {String(i + 1).padStart(2, '0')}</span>
              {t.category && <span className={styles.category}>{t.category}</span>}
            </div>

            <p className={styles.cardQuestion}>{t.q}</p>
            <span className={styles.rule} aria-hidden="true" />

            {t.pending ? (
              <p className={styles.pending}>
                <span className={styles.pendingDot} />
                <span className={styles.pendingDot} />
                <span className={styles.pendingDot} />
                finding it in the record
              </p>
            ) : (
              <p className={`${styles.cardAnswer} ${t.fallback ? styles.fallbackAnswer : ''}`}>{t.a}</p>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
