'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import s from './World.module.css'

/**
 * The sound of the shore, synthesised rather than sampled.
 *
 * There is no audio file here and there does not need to be. Surf is
 * broadband noise with a slow swell on it, and the Web Audio API can build
 * that from first principles: white noise through a low-pass filter, with two
 * very slow oscillators opening the filter and riding the gain. That is a
 * wave — a rise, a break, and a long draw back.
 *
 * The two oscillators run at 0.06 Hz and 0.043 Hz, which do not divide into
 * each other, so the swell never falls into a pattern you can hear repeating.
 * A sampled loop of any sensible size does not manage that.
 *
 * ── The rules it keeps ──────────────────────────────────────────────
 * It is off. Nothing on this site makes a sound until someone asks it to, and
 * the AudioContext is not constructed until the first press — which is also
 * what every browser's autoplay policy requires.
 *
 * It fades: four seconds in, three out, so it never arrives or leaves as a
 * click.
 *
 * It stops when you look away. Switching tab suspends the context, so a
 * forgotten background tab is not still playing the sea.
 */
const NOISE_SECONDS = 3

export default function Ambience() {
  const [on, setOn] = useState(false)
  const [failed, setFailed] = useState(false)
  const ctx = useRef(null)
  const gain = useRef(null)
  const nodes = useRef([])

  const teardown = useCallback(() => {
    nodes.current.forEach((n) => {
      try {
        n.stop?.()
        n.disconnect?.()
      } catch {
        /* already stopped */
      }
    })
    nodes.current = []
    if (ctx.current) {
      ctx.current.close().catch(() => {})
      ctx.current = null
      gain.current = null
    }
  }, [])

  useEffect(() => teardown, [teardown])

  useEffect(() => {
    const onVisibility = () => {
      if (!ctx.current) return
      if (document.hidden) ctx.current.suspend().catch(() => {})
      else if (on) ctx.current.resume().catch(() => {})
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [on])

  const start = useCallback(async () => {
    const Ctx = window.AudioContext || window.webkitAudioContext
    if (!Ctx) throw new Error('no web audio')

    const ac = new Ctx()
    ctx.current = ac
    await ac.resume().catch(() => {})

    // Three seconds of white noise, looped. Long enough that the seam is
    // inaudible underneath a filter that is always moving.
    const frames = ac.sampleRate * NOISE_SECONDS
    const buffer = ac.createBuffer(1, frames, ac.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < frames; i += 1) data[i] = Math.random() * 2 - 1

    const source = ac.createBufferSource()
    source.buffer = buffer
    source.loop = true

    // Surf is almost entirely low frequency. Much above 900 Hz and it stops
    // sounding like water and starts sounding like static.
    const filter = ac.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 520
    filter.Q.value = 0.7

    const master = ac.createGain()
    master.gain.value = 0
    gain.current = master

    const swell = ac.createOscillator()
    swell.frequency.value = 0.06
    const swellDepth = ac.createGain()
    swellDepth.gain.value = 320
    swell.connect(swellDepth).connect(filter.frequency)

    const breathe = ac.createOscillator()
    breathe.frequency.value = 0.043
    const breatheDepth = ac.createGain()
    breatheDepth.gain.value = 0.05
    breathe.connect(breatheDepth).connect(master.gain)

    source.connect(filter).connect(master).connect(ac.destination)
    source.start()
    swell.start()
    breathe.start()

    // Four seconds in. Faster than that reads as a switch rather than a tide.
    master.gain.setValueAtTime(0, ac.currentTime)
    master.gain.linearRampToValueAtTime(0.1, ac.currentTime + 4)

    nodes.current = [source, swell, breathe]
  }, [])

  const toggle = useCallback(async () => {
    if (on) {
      const ac = ctx.current
      if (ac && gain.current) {
        gain.current.gain.cancelScheduledValues(ac.currentTime)
        gain.current.gain.setValueAtTime(gain.current.gain.value, ac.currentTime)
        gain.current.gain.linearRampToValueAtTime(0, ac.currentTime + 3)
        setTimeout(teardown, 3200)
      } else {
        teardown()
      }
      setOn(false)
      return
    }

    try {
      await start()
      setOn(true)
      setFailed(false)
    } catch {
      setFailed(true)
      teardown()
    }
  }, [on, start, teardown])

  return (
    <button
      type="button"
      className={s.ambience}
      onClick={toggle}
      data-on={on ? 'true' : 'false'}
      aria-pressed={on}
      aria-label={on ? 'Turn off the sound of the shore' : 'Play the sound of the shore'}
    >
      <span className={s.ambienceWave} aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      {failed ? 'No audio here' : on ? 'Shore — on' : 'Shore'}
    </button>
  )
}
