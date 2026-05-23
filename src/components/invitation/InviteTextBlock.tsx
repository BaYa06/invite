'use client'

import { useScrollReveal } from '@/hooks/useFadeUp'

type Props = {
  guestName?: string
  text?: string
}

export default function InviteTextBlock({ guestName, text }: Props) {
  const ref = useScrollReveal<HTMLElement>('fade-up')

  return (
    <section ref={ref} className="fade-up py-16 px-8 text-center bg-warm">

      {/* Верхний декор */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <div className="w-12 h-px bg-gold/40" />
        <span className="font-calligraphy text-2xl text-gold leading-none">♡</span>
        <div className="w-12 h-px bg-gold/40" />
      </div>

      {/* Обращение */}
      <p className="font-calligraphy text-[42px] leading-tight text-dark mb-8">
        {guestName ? `Дорогой(-ая) ${guestName}` : 'Дорогие гости'}
      </p>

      {/* Основной текст */}
      <div className="max-w-sm mx-auto space-y-5">
        <p className="fade-up font-serif text-[17px] italic text-[#444] leading-[1.9] delay-1">
          {text || <>
            В жизни каждого человека есть момент,{' '}
            когда сердце находит своё место рядом с другим.
          </>}
        </p>
        <p className="fade-up font-serif text-[17px] italic text-[#444] leading-[1.9] delay-2">
          Мы нашли друг друга — и хотим отпраздновать это
          вместе с самыми близкими и дорогими людьми.
        </p>
        <p className="fade-up font-serif text-[17px] italic text-[#444] leading-[1.9] delay-3">
          Ваше присутствие станет для нас
          самым тёплым и ценным подарком в этот день.
        </p>
      </div>

      {/* Подпись */}
      <p className="font-calligraphy text-[28px] text-gold mt-10 leading-tight">
        С любовью и теплом
      </p>

      {/* Нижний декор */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <div className="w-8 h-px bg-gold/30" />
        <span className="font-calligraphy text-xl text-gold/50 leading-none">✦</span>
        <div className="w-8 h-px bg-gold/30" />
      </div>

    </section>
  )
}
