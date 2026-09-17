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
 * Ask me anything.
 *
 * Not a chat widget — a record you pull a card from. Ask a question and a
 * card drops in already carrying it, stamped with a serial and a category,
 * the way a ledger row or a contact-sheet frame is. The answer fills in a
 * beat later, the way an index card takes a moment to find.
 *
 * The matching underneath is the same honest kind as before: a small
 * knowledge base built from fields already asserted in faq.js, projects.js,
 * skills.js and research.js (see data/knowledge.js), scored against free
 * text. No model, no network call — it cannot answer with anything that is
 * not already recorded on this page.
 */
export default function AskAnything() {
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
    <section className="band" id="ask-me">
      <div className="wrap">
        <div className="marker">
          <span className="dot" />
          <p className="m-label">The record</p>
        </div>

        <h2 className={`d-title ${styles.title}`} data-reveal>
          Ask me anything.
        </h2>
        <p className={styles.subtitle} data-reveal>
          Type a real question and pull the card for it. Every answer is sourced from the record above —
          nothing guessed, nothing off it.
        </p>

        <div className={styles.desk} data-reveal>
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
      </div>
    </section>
  )
}
