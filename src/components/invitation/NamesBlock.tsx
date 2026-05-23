'use client'

import { useFadeUp } from '@/hooks/useFadeUp'

type Props = {
  groomName: string
  brideName: string
}

export default function NamesBlock({ groomName, brideName }: Props) {
  const ref = useFadeUp<HTMLElement>()

  return (
    <section ref={ref} className="fade-up py-12 text-center bg-white px-6">
      <p className="font-calligraphy text-[52px] text-dark leading-snug">{groomName}</p>
      <p className="font-script text-[38px] text-gold">&</p>
      <p className="font-calligraphy text-[52px] text-dark leading-snug">{brideName}</p>
    </section>
  )
}
