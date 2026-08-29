'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'

export const ThemeContext = createContext()

/**
 * Four accents, one active at a time. All are muted enough to read as
 * punctuation against the warm charcoal ground rather than as decoration —
 * the page never carries more than one of them.
 */
export const themes = {
  signal: { name: 'Signal', key: 'signal', primary: '#ff5c35' },
  cobalt: { name: 'Cobalt', key: 'cobalt', primary: '#5679f0' },
  acid: { name: 'Acid', key: 'acid', primary: '#c3e14a' },
  copper: { name: 'Copper', key: 'copper', primary: '#c88a52' },
}

export const DEFAULT_THEME = 'signal'

function hexToRgb(hex) {
  const c = hex.replace('#', '')
  return `${parseInt(c.slice(0, 2), 16)}, ${parseInt(c.slice(2, 4), 16)}, ${parseInt(c.slice(4, 6), 16)}`
}

function applyTheme(key) {
  const theme = themes[key] || themes[DEFAULT_THEME]
  const root = document.documentElement
  root.style.setProperty('--accent', theme.primary)
  root.style.setProperty('--accent-rgb', hexToRgb(theme.primary))
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(DEFAULT_THEME)

  useEffect(() => {
    let stored = null
    try {
      stored = localStorage.getItem('sk-accent')
    } catch {
      stored = null
    }
    const next = stored && themes[stored] ? stored : DEFAULT_THEME
    setThemeState(next)
    applyTheme(next)
  }, [])

  const setTheme = useCallback((next) => {
    if (!themes[next]) return
    setThemeState(next)
    try {
      localStorage.setItem('sk-accent', next)
    } catch {
      /* storage blocked — the accent still applies for this session */
    }
    applyTheme(next)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
