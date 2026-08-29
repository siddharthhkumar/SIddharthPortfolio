'use client'

import { createContext, useContext, useMemo, useState } from 'react'

/**
 * Which discipline the visitor is currently considering.
 *
 * Shared by the hero armature and the portals, so hovering a portal lights the
 * matching node in the object. The two halves of the page are describing the
 * same thing and should behave like it.
 */
const DomainFocusContext = createContext(null)

export function DomainFocusProvider({ children }) {
  const [focus, setFocus] = useState(-1)
  const value = useMemo(() => ({ focus, setFocus }), [focus])
  return <DomainFocusContext.Provider value={value}>{children}</DomainFocusContext.Provider>
}

export function useDomainFocus() {
  return useContext(DomainFocusContext) ?? { focus: -1, setFocus: () => {} }
}
