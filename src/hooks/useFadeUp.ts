'use client'

import { useEffect, useRef } from 'react'

export function useFadeUp<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

export function useScrollReveal<T extends HTMLElement>(animClass: string, threshold = 0.15) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add(animClass)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          el.querySelectorAll<HTMLElement>('.fade-up,.fade-left,.fade-right,.zoom-in,.fade-in')
            .forEach(child => child.classList.add('visible'))
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [animClass, threshold])

  return ref
}
