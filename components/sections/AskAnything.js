'use client'

import { useEffect, useRef, useState } from 'react'
import { findAnswer, starterQuestions, knowledgeBase } from '@/data/knowledge'
import profile from '@/data/profile'
import styles from './AskAnything.module.css'

let seq = 0
const nextId = () => `m-${++seq}`

/**
 * Ask me anything.
 *
 * A real chat, not a card grid — type a question or pick one, and the
 * answer comes back from data/knowledge.js, which is built entirely from
 * fields already asserted in faq.js, projects.js, skills.js and research.js.
 * There is no model behind it: a question is scored against a small, honest
 * knowledge base and the best match wins, or the bot says plainly that it
 * does not have that on record.
 */
export default function AskAnything() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [askedIds, setAskedIds] = useState(() => new Set())
  const scrollRef = useRef(null)

  useEffect(() => {
    setMessages([{ id: nextId(), role: 'bot', text: profile.opening, intro: true }])
  }, [])

  useEffect(() => {
    const node = scrollRef.current
    if (!node) return
    node.scrollTo({ top: node.scrollHeight, behavior: 'smooth' })
  }, [messages, isTyping])

  function ask(question) {
    const text = question.trim()
    if (!text || isTyping) return

    setMessages((m) => [...m, { id: nextId(), role: 'user', text }])
    setInput('')
    setIsTyping(true)

    const match = findAnswer(text)
    // A short, length-proportional pause — long enough to read as a real
    // reply being composed, capped so nobody waits on a long answer.
    const delay = match ? Math.min(1300, 420 + match.a.length * 5) : 650

    window.setTimeout(() => {
      setIsTyping(false)
      if (match) {
        setAskedIds((prev) => new Set(prev).add(match.id))
        setMessages((m) => [
          ...m,
          { id: nextId(), role: 'bot', text: match.a, tone: match.tone, category: match.category },
        ])
      } else {
        setMessages((m) => [
          ...m,
          {
            id: nextId(),
            role: 'bot',
            text: "That one's not on the record yet — try a question about the projects, the research, the toolkit or how to reach him.",
            fallback: true,
          },
        ])
      }
    }, delay)
  }

  function handleSubmit(e) {
    e.preventDefault()
    ask(input)
  }

  function reset() {
    seq = 0
    setAskedIds(new Set())
    setMessages([{ id: nextId(), role: 'bot', text: profile.opening, intro: true }])
    setInput('')
  }

  const suggestions =
    messages.length <= 1
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
          <p className="m-label">Ask anything</p>
        </div>

        <h2 className={`d-title ${styles.title}`} data-reveal>
          Ask me anything.
        </h2>
        <p className={styles.subtitle} data-reveal>
          Type a real question. Every answer is pulled from this page — nothing invented, nothing off-record.
        </p>

        <div className={styles.chatCard} data-reveal>
          <div className={styles.chatHeader}>
            <span className={styles.avatar} aria-hidden="true">
              SK
            </span>
            <div className={styles.chatHeaderText}>
              <p className={styles.chatName}>Siddharth's record</p>
              <p className={styles.chatStatus}>
                <span className={styles.liveDot} aria-hidden="true" />
                Answering from the data on this page
              </p>
            </div>
            {messages.length > 1 && (
              <button type="button" className={styles.reset} onClick={reset}>
                Start over
              </button>
            )}
          </div>

          <div className={styles.messages} ref={scrollRef} aria-live="polite">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`${styles.bubbleRow} ${m.role === 'user' ? styles.userRow : styles.botRow}`}
              >
                {m.role === 'bot' && (
                  <span className={styles.botMark} aria-hidden="true">
                    SK
                  </span>
                )}
                <div
                  className={`${styles.bubble} ${m.role === 'user' ? styles.userBubble : styles.botBubble}`}
                  data-tone={m.tone}
                >
                  {m.category && <span className={styles.bubbleTag}>{m.category}</span>}
                  <p>{m.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className={`${styles.bubbleRow} ${styles.botRow}`}>
                <span className={styles.botMark} aria-hidden="true">
                  SK
                </span>
                <div className={`${styles.bubble} ${styles.botBubble} ${styles.typingBubble}`}>
                  <span className={styles.typingDot} />
                  <span className={styles.typingDot} />
                  <span className={styles.typingDot} />
                </div>
              </div>
            )}
          </div>

          {suggestions.length > 0 && !isTyping && (
            <div className={styles.chips}>
              {suggestions.map((q) => (
                <button key={q} type="button" className={styles.chip} onClick={() => ask(q)}>
                  {q}
                </button>
              ))}
            </div>
          )}

          <form className={styles.inputRow} onSubmit={handleSubmit}>
            <input
              type="text"
              className={styles.input}
              placeholder="Ask about projects, research, skills, contact…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Ask a question about Siddharth Kumar"
            />
            <button
              type="submit"
              className={styles.send}
              disabled={!input.trim() || isTyping}
              aria-label="Send question"
            >
              <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" focusable="false">
                <path d="M2.5 10 17 3l-5.5 7L17 17Z" fill="currentColor" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
