'use client'

import { cloneElement, isValidElement } from 'react'
import { useReveal } from './useMotion'

/**
 * Wraps children in a reveal. `variant` picks the motion language — the
 * section decides which one belongs to it, so no two sections animate alike.
 *
 * `as="none"` attaches the behaviour to a single child element instead of
 * adding a wrapper div, which matters inside grids and flex rows.
 */
export default function Reveal({
  children,
  variant = 'rise',
  delay = 0,
  as: Tag = 'div',
  className = '',
  threshold,
  once = true,
  style,
  ...rest
}) {
  const ref = useReveal({ threshold, once })

  const props = {
    ref,
    'data-reveal': variant,
    style: { '--d': `${delay}ms`, ...style },
  }

  if (Tag === 'none' && isValidElement(children)) {
    return cloneElement(children, {
      ...props,
      className: [children.props.className, className].filter(Boolean).join(' '),
    })
  }

  return (
    <Tag {...props} className={className} {...rest}>
      {children}
    </Tag>
  )
}

/**
 * Splits a string into words and reveals them in sequence. Used for the
 * skills section, where the type itself is the composition.
 */
export function RevealWords({ text, variant = 'rise', step = 34, delay = 0, className = '' }) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.26em' }}>
          <Reveal
            as="span"
            variant={variant}
            delay={delay + i * step}
            style={{ display: 'inline-block' }}
          >
            {word}
          </Reveal>
        </span>
      ))}
    </span>
  )
}
