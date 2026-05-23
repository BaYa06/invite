'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export function useAudio(url?: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!url) return
    audioRef.current = new Audio(url)
    audioRef.current.loop = true
    return () => {
      audioRef.current?.pause()
      audioRef.current = null
    }
  }, [url])

  const toggle = useCallback(() => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play()
      setPlaying(true)
    }
  }, [playing])

  const play = useCallback(() => {
    if (!audioRef.current || playing) return
    audioRef.current.play()
    setPlaying(true)
  }, [playing])

  return { playing, toggle, play }
}
