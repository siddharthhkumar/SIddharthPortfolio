import styles from './ResultChart.module.css'

/**
 * The two model configurations, side by side.
 *
 * This exists because the honest reading of the result needs a picture:
 * accuracy alone favours the USS-only model, and Matthews correlation — which
 * does not reward guessing the common class — favours the combined one. Two
 * numbers next to each other make that visible in a way a sentence does not.
 *
 * Both bars are scaled on the same 0–1 axis, so the comparison is real. Values
 * come from the published tables; nothing here is rounded for effect.
 */
export default function ResultChart({ rows }) {
  if (!rows?.length) return null

  return (
    <figure className={styles.figure} data-reveal>
      <div className={styles.grid}>
        {rows.map((r, i) => (
          <div key={r.name} className={styles.config} style={{ '--i': i }}>
            <p className={styles.name}>{r.name}</p>
            <p className={styles.note}>{r.note}</p>

            <Metric label="Accuracy" value={r.acc} strong={false} />
            <Metric label="MCC" value={r.mcc} strong={r.best} />
          </div>
        ))}
      </div>

      <figcaption className={styles.caption}>
        Both scales run 0 to 1. Matthews correlation is the harder measure: it
        does not reward a model for guessing the most common class.
      </figcaption>
    </figure>
  )
}

function Metric({ label, value, strong }) {
  return (
    <div className={styles.metric}>
      <div className={styles.metricHead}>
        <span className={styles.metricLabel}>{label}</span>
        <span className={`${styles.metricValue} ${strong ? styles.strong : ''}`}>
          {value.toFixed(3)}
        </span>
      </div>
      <div className={styles.rail}>
        <span
          className={`${styles.bar} ${strong ? styles.barStrong : ''}`}
          style={{ '--w': `${(value * 100).toFixed(1)}%` }}
        />
      </div>
    </div>
  )
}
