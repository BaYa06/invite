'use client'

import { useFadeUp } from '@/hooks/useFadeUp'

type Props = {
  date: string    // '19 апреля 2026'
  time: string    // '18:00'
  venue: string
  address: string
  mapUrl: string
}

export default function DetailsBlock({ date, time, venue, address, mapUrl }: Props) {
  const ref = useFadeUp<HTMLElement>()

  return (
    <section ref={ref} className="fade-up py-12 px-6 text-center bg-white border-y border-border">
      <p className="font-serif text-2xl italic text-dark mb-1">{date}</p>
      <p className="font-ui text-sm tracking-[3px] text-muted uppercase mb-8">{time}</p>

      <p className="font-serif text-xl italic text-dark mb-2">{venue}</p>
      <p className="font-ui text-xs text-muted tracking-wide leading-relaxed mb-8">{address}</p>

      <div className="flex justify-center gap-6">
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 group"
        >
          <span className="w-10 h-10 rounded-full bg-[#34c759] flex items-center justify-center text-white text-lg">
            &#x2316;
          </span>
          <span className="text-[10px] tracking-wide text-muted group-hover:text-dark transition-colors">
            Карта
          </span>
        </a>
      </div>
    </section>
  )
}
