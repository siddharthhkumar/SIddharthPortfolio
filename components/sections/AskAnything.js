import AskAnythingLoader from './AskAnythingLoader'
import styles from './AskAnything.module.css'

/**
 * Ask me anything.
 *
 * Not a chat widget — a record you pull a card from. This file is the
 * server-rendered shell: the heading and subtitle, present in the initial
 * HTML for search engines and screen readers with no JavaScript required.
 * The interactive part — the input, the matcher, the knowledge base built
 * from faq.js, projects.js, skills.js and research.js — lives in
 * AskAnythingWidget.js and is loaded through AskAnythingLoader, which
 * defers it into its own chunk rather than the page's critical JS. See the
 * note at the top of AskAnythingWidget.js for why that split exists.
 */
export default function AskAnything() {
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

        <div data-reveal>
          <AskAnythingLoader />
        </div>
      </div>
    </section>
  )
}
