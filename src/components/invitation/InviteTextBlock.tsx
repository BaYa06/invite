'use client'

import { useFadeUp } from '@/hooks/useFadeUp'

type Props = {
  guestName?: string
  text?: string
}

const DEFAULT_TEXT = `С радостью сообщаем о нашей свадьбе
и с искренней теплотой приглашаем вас
разделить с нами этот особенный день.`

export default function InviteTextBlock({ guestName, text }: Props) {
  const ref = useFadeUp<HTMLElement>()

  return (
    <section ref={ref} className="fade-up py-12 px-8 text-center bg-white">
      <p className="font-script text-[34px] text-dark mb-6 leading-snug">
        {guestName ? `Дорогой(-ая) ${guestName},` : 'Дорогие друзья,'}
      </p>
      <p className="font-serif text-lg text-[#333] leading-loose italic whitespace-pre-line">
        {text || DEFAULT_TEXT}
      </p>
    </section>
  )
}
