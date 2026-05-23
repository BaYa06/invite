'use client'

import { useAudio } from '@/hooks/useAudio'

type Props = {
  musicUrl?: string
  label?: string
}

export default function MusicButton({ musicUrl, label = 'БАСЫҢЫЗ' }: Props) {
  const { playing, toggle } = useAudio(musicUrl)

  if (!musicUrl) return null

  return (
    <section className="py-6 text-center bg-white border-b border-border">
      <p className="font-serif italic text-sm text-gold-dark mb-4 tracking-wide">
        Включите музыку
      </p>
      <button
        onClick={toggle}
        className="inline-flex items-center gap-4 px-8 py-3.5 bg-warm rounded-full border border-sand transition-all duration-300 hover:shadow-md"
        aria-label={playing ? 'Пауза' : 'Играть'}
      >
        <span className="relative w-9 h-9 flex items-center justify-center">
          {/* Vinyl icon */}
          <span className="w-9 h-9 rounded-full bg-dark flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-gold" />
          </span>
          {playing && (
            <span className="absolute inset-[-6px] rounded-full border border-dashed border-sand animate-spin-slow" />
          )}
        </span>
        <span className={`text-lg tracking-[6px] font-ui font-light uppercase transition-colors ${playing ? 'text-dark' : 'text-muted'}`}>
          {playing ? 'ИГРАЕТ' : label}
        </span>
      </button>
    </section>
  )
}
