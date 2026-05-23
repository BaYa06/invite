'use client'

import { useScrollReveal } from '@/hooks/useFadeUp'

type Props = {
  groomName: string
  brideName: string
  date: string
}

export default function FooterBlock({ groomName, brideName, date }: Props) {
  const ref = useScrollReveal<HTMLElement>('fade-in')

  return (
    <footer ref={ref} className="fade-up py-12 px-8 text-center bg-white">
      <p className="font-serif text-base italic text-muted mb-3">С уважением,</p>
      <p className="font-calligraphy text-[40px] leading-none text-dark">
        {groomName} &amp; {brideName}
      </p>
    </footer>
  )
}
