'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import music from '@/data/music'
import styles from './Cassette.module.css'

/**
 * The cassette.
 *
 * A real transport — play, pause, scrub, timecode — drawn as a physical
 * object rather than an <audio controls> bar. The reels turn while it plays
 * and stop when it does not, and the tape actually moves between them as the
 * position changes, because a cassette where the spools stay the same size is
 * a picture of a cassette rather than one.
 *
 * What it deliberately does not do:
 *   Autoplay. Nothing makes noise until someone presses the button. Browsers
 *   would block it anyway, but the reason here is manners, not policy.
 *   Fake a track. With no source in data/music.js it renders as the printed
 *   inlay card — a real object with real information on it — instead of a
 *   dead play button wired to nothing. See the note in that file for how to
 *   put a track you own on the site.
 *
 * Position is remembered per session, so moving between the home page and a
 * case study does not restart the track.
 */
const KEY = 'sk:cassette'

const clock = (s) => {
  if (!Number.isFinite(s) || s < 0) return '00:00'
  const m = Math.floor(s / 60)
  const r = Math.floor(s % 60)
  return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`
}

export default function Cassette() {
  const { track, inlay } = music
  const hasTrack = Boolean(track?.src)

  const audio = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [length, setLength] = useState(0)
  const [failed, setFailed] = useState(false)

  // Restore where the tape was left, and pick up the duration.
  //
  // Never restores "playing" — resuming audio on a page load without a gesture
  // is exactly what nobody wants.
  //
  // The duration is read here rather than trusted to onLoadedMetadata alone:
  // with preload="metadata" the browser can finish loading it before React has
  // hydrated and attached the handler, in which case the event has already
  // fired and the rail would sit at max=0, disabled, showing 00:00 forever.
  useEffect(() => {
    const el = audio.current
    if (!hasTrack || !el) return

    if (Number.isFinite(el.duration) && el.duration > 0) setLength(el.duration)

    try {
      const at = Number(sessionStorage.getItem(KEY))
      if (Number.isFinite(at) && at > 0) {
        el.currentTime = at
        setTime(at)
      }
    } catch {
      /* blocked storage — starting at zero is a fine outcome */
    }
  }, [hasTrack])

  const remember = useCallback((at) => {
    try {
      sessionStorage.setItem(KEY, String(at))
    } catch {}
  }, [])

  const toggle = useCallback(async () => {
    const el = audio.current
    if (!el) return
    if (el.paused) {
      try {
        await el.play()
        setPlaying(true)
        setFailed(false)
      } catch {
        // Blocked, or the file could not be decoded. Say so on the object
        // rather than leaving a button that appears to do nothing.
        setFailed(true)
        setPlaying(false)
      }
    } else {
      el.pause()
      setPlaying(false)
    }
  }, [])

  const scrub = (e) => {
    const el = audio.current
    if (!el) return
    const at = Number(e.target.value)
    el.currentTime = at
    setTime(at)
    remember(at)
  }

  const progress = length > 0 ? time / length : 0

  return (
    <figure className={styles.case} data-playing={playing ? 'true' : 'false'}>
      <div className={styles.shell}>

        {/* ── The window, and the two spools behind it ──────────────── */}
        <div className={styles.window}>
          <Reel side="left" fill={1 - progress} spinning={playing} />
          <span className={styles.tape} aria-hidden="true" />
          <Reel side="right" fill={progress} spinning={playing} />
        </div>

        {/* ── The printed label ─────────────────────────────────────── */}
        <div className={styles.label}>
          <div className={styles.labelHead}>
            <span className={styles.side}>Side {inlay.side}</span>
            <span className={styles.stamp}>{inlay.footnote}</span>
          </div>

          {hasTrack ? (
            <>
              <p className={styles.title}>{track.title}</p>
              {track.artist && <p className={styles.artist}>{track.artist}</p>}
            </>
          ) : (
            <>
              <p className={styles.title}>{inlay.label}</p>
              <p className={styles.hand}>{inlay.line}</p>
            </>
          )}
        </div>

        {/* ── The transport. Only when there is something to transport ─ */}
        {hasTrack && (
          <div className={styles.transport}>
            <button
              type="button"
              className={styles.play}
              onClick={toggle}
              aria-label={playing ? `Pause ${track.title}` : `Play ${track.title}`}
            >
              <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
                {playing ? (
                  <path d="M3.5 2h3.2v12H3.5zM9.3 2h3.2v12H9.3z" fill="currentColor" />
                ) : (
                  <path d="M4 2.4 13.5 8 4 13.6z" fill="currentColor" />
                )}
              </svg>
            </button>

            <input
              type="range"
              className={styles.rail}
              min={0}
              max={length || 0}
              step={0.1}
              value={time}
              onChange={scrub}
              disabled={!length}
              aria-label={`Seek within ${track.title}`}
              aria-valuetext={`${clock(time)} of ${clock(length)}`}
              style={{ '--p': `${(progress * 100).toFixed(2)}%` }}
            />

            <span className={styles.clock}>
              {clock(time)} <span className={styles.slash}>/</span> {clock(length)}
            </span>

            <audio
              ref={audio}
              src={track.src}
              preload="metadata"
              onLoadedMetadata={(e) => setLength(e.currentTarget.duration || 0)}
              onDurationChange={(e) => setLength(e.currentTarget.duration || 0)}
              onTimeUpdate={(e) => {
                const at = e.currentTarget.currentTime
                setTime(at)
                remember(at)
              }}
              onEnded={() => {
                setPlaying(false)
                setTime(0)
                remember(0)
              }}
              onPause={() => setPlaying(false)}
              onPlay={() => setPlaying(true)}
              onError={() => setFailed(true)}
            />
          </div>
        )}

        {failed && (
          <p className={styles.failed} role="status">
            The tape will not play here — your browser blocked it.
          </p>
        )}
      </div>

      <figcaption className={styles.caption}>
        {hasTrack ? 'Currently playing' : 'Off the clock'}
      </figcaption>
    </figure>
  )
}

/**
 * A spool. `fill` is how much tape is wound onto it, 0 to 1 — the radius is
 * interpolated from that, so the left spool empties as the right one fills.
 */
function Reel({ side, fill, spinning }) {
  const r = 9 + Math.max(0, Math.min(1, fill)) * 9

  return (
    <span className={styles.reel} data-side={side} data-spinning={spinning ? 'true' : 'false'}>
      <svg viewBox="0 0 44 44" width="40" height="40" aria-hidden="true" focusable="false">
        <circle cx="22" cy="22" r={r} className={styles.wound} />
        <g className={styles.hub}>
          <circle cx="22" cy="22" r="8" />
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <rect key={a} x="21.1" y="14.4" width="1.8" height="4" transform={`rotate(${a} 22 22)`} />
          ))}
        </g>
      </svg>
    </span>
  )
}
