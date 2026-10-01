import { useEffect } from 'react'

/**
 * Locks background scroll while `active` is true and calls `onEscape`
 * when the Escape key is pressed. Shared by the site's portal modals
 * (news feed modal, add-news form) so each doesn't reimplement it.
 */
export default function useLockBodyScroll(active, onEscape) {
  useEffect(() => {
    if (!active) return undefined
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onEscape?.()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [active, onEscape])
}
