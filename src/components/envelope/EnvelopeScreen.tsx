'use client'

import { useRef, useState } from 'react'

type Props = {
  groomName: string
  brideName: string
  date: string
  initial: string
  onOpen: () => void
}

export default function EnvelopeScreen({ groomName, brideName, date, initial, onOpen }: Props) {
  const [opened, setOpened] = useState(false)
  const screenRef = useRef<HTMLDivElement>(null)

  const handleOpen = () => {
    if (opened) return
    setOpened(true)

    setTimeout(() => {
      if (screenRef.current) {
        screenRef.current.style.opacity = '0'
        screenRef.current.style.pointerEvents = 'none'
      }
      setTimeout(() => {
        onOpen()
      }, 800)
    }, 1500)
  }

  return (
    <div ref={screenRef} className="env-screen">
      <p className="env-hint">Вам письмо</p>

      <button
        type="button"
        className={`env-wrap${opened ? ' open' : ''}`}
        onTouchStart={handleOpen}
        onClick={handleOpen}
        style={{ background: 'none', border: 'none', padding: 0 }}
      >
        <div className="env-flap">
          <div className="env-flap-tri" />
        </div>
        <div className="env-peek">
          <span className="env-peek-txt">{groomName} &amp; {brideName}</span>
          <div className="env-peek-divider" />
          <span className="env-peek-date">{date}</span>
        </div>
        <div className="env-body">
          <div className="env-sl" />
          <div className="env-sr" />
          <div className="env-sb" />
          <div className="env-seal">{initial}</div>
        </div>
      </button>

      <button
        type="button"
        className="env-open-btn"
        onTouchStart={handleOpen}
        onClick={handleOpen}
      >
        Открыть приглашение
      </button>
    </div>
  )
}
