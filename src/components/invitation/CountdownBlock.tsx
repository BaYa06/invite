'use client'

import { useFadeUp } from '@/hooks/useFadeUp'
import { useCountdown } from '@/hooks/useCountdown'

type Props = {
  targetDate: string  // ISO
}

function Pad(n: number) {
  return String(n).padStart(2, '0')
}

export default function CountdownBlock({ targetDate }: Props) {
  const ref = useFadeUp<HTMLElement>()
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  return (
    <section ref={ref} className="fade-up py-12 px-6 text-center bg-warm">
      <p className="font-script text-[40px] text-dark mb-1">До свадьбы</p>
      <p className="font-ui text-[11px] tracking-[3px] text-muted uppercase mb-8">осталось</p>

      <div className="flex justify-center items-center gap-3">
        {[
          { value: days,    label: 'Дней' },
          { value: hours,   label: 'Часов' },
          { value: minutes, label: 'Минут' },
          { value: seconds, label: 'Секунд' },
        ].map(({ value, label }, i) => (
          <div key={label} className="flex items-center gap-3">
            {i > 0 && <span className="font-serif text-2xl text-sand self-center mb-3">:</span>}
            <div className="bg-[#e8d5c4] rounded-lg py-4 px-3.5 min-w-[64px]">
              <span className="block font-serif text-[30px] text-white leading-none">{Pad(value)}</span>
              <span className="block font-ui text-[9px] tracking-[2px] text-white/80 uppercase mt-1.5">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
