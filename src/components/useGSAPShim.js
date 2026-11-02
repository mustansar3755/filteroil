import { useLayoutEffect } from 'react'
import gsap from 'gsap'

// Tiny replacement for @gsap/react so no extra package is needed.
export function useGSAP(fn, scope) {
  useLayoutEffect(() => {
    const ctx = gsap.context(fn, scope)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
