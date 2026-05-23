'use client'

import { useScrollReveal } from '@/hooks/useFadeUp'

type Props = {
  date: string
  time: string
  venue: string
  address: string
  mapUrl: string
}

export default function DetailsBlock({ date, time, venue, address, mapUrl }: Props) {
  const ref = useScrollReveal<HTMLElement>('fade-up')

  return (
    <section ref={ref} className="fade-up py-16 px-8 text-center bg-white">

      {/* Декор сверху */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <div className="w-12 h-px bg-gold/40" />
        <span className="font-calligraphy text-2xl text-gold leading-none">✦</span>
        <div className="w-12 h-px bg-gold/40" />
      </div>

      {/* Дата и время */}
      <p className="font-ui text-[11px] tracking-[5px] text-muted uppercase mb-3">Когда</p>
      <p className="font-calligraphy text-[48px] leading-tight text-dark">{date}</p>
      <div className="flex items-center justify-center gap-3 my-2">
        <div className="w-8 h-px bg-sand" />
        <p className="font-serif text-xl italic text-gold">{time}</p>
        <div className="w-8 h-px bg-sand" />
      </div>

      {/* Разделитель */}
      <div className="w-px h-10 bg-sand mx-auto my-8" />

      {/* Место */}
      <p className="font-ui text-[11px] tracking-[5px] text-muted uppercase mb-3">Где</p>
      <p className="font-calligraphy text-[36px] leading-tight text-dark mb-2">{venue}</p>
      <p className="font-serif text-sm italic text-muted leading-relaxed mb-10">{address}</p>

      {/* Кнопки */}
      <div className="flex justify-center items-center gap-6">

        {/* 2ГИС */}
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 group"
        >
          <div className="w-14 h-14 rounded-full bg-warm border border-border flex items-center justify-center overflow-hidden transition-all group-hover:border-gold group-hover:shadow-md">
            <img src="/gis.png" alt="2ГИС" className="w-8 h-8 object-contain" />
          </div>
          <span className="font-ui text-[10px] tracking-[2px] text-muted uppercase group-hover:text-dark transition-colors">2ГИС</span>
        </a>

        {/* Разделитель */}
        <div className="w-px h-10 bg-sand" />

        {/* Instagram */}
        <a
          href="https://www.instagram.com/jannat.regency?igsh=am53ZnAwbjk2a3hk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 group"
        >
          <div className="w-14 h-14 rounded-full bg-warm border border-border flex items-center justify-center overflow-hidden transition-all group-hover:border-gold group-hover:shadow-md">
            <img src="/inst.png" alt="Instagram" className="w-8 h-8 object-contain" />
          </div>
          <span className="font-ui text-[10px] tracking-[2px] text-muted uppercase group-hover:text-dark transition-colors">Instagram</span>
        </a>

      </div>

      {/* Декор снизу */}
      <div className="flex items-center justify-center gap-3 mt-10">
        <div className="w-12 h-px bg-gold/40" />
        <span className="font-calligraphy text-2xl text-gold leading-none">✦</span>
        <div className="w-12 h-px bg-gold/40" />
      </div>

    </section>
  )
}
