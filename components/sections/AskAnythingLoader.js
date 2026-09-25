'use client'

import dynamic from 'next/dynamic'
import styles from './AskAnything.module.css'

// The only thing this file does is defer AskAnythingWidget (and the ~55 KB
// of knowledge-base data it pulls in) into its own chunk, loaded after the
// critical page JS rather than bundled into it. ssr:false is only legal
// inside a client component, which is the whole reason this tiny wrapper
// exists rather than calling dynamic() straight from AskAnything.js.
//
// The fallback matches the widget's input row so there is no layout shift
// once the real chunk arrives.
const AskAnythingWidget = dynamic(() => import('./AskAnythingWidget'), {
  ssr: false,
  loading: () => (
    <div className={styles.desk}>
      <div className={styles.inputRow}>
        <span className={styles.inputStamp} aria-hidden="true">
          Q
        </span>
        <div className={styles.input} aria-hidden="true" />
        <button type="button" className={styles.pull} disabled>
          Pull the card
        </button>
      </div>
    </div>
  ),
})

export default function AskAnythingLoader() {
  return <AskAnythingWidget />
}
