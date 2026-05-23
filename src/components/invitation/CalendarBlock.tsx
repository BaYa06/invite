'use client'

import { useFadeUp } from '@/hooks/useFadeUp'

type Props = {
  date: string  // ISO: '2026-04-19'
}

const DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const MONTHS_RU = [
  'Январь','Февраль','Март','Апрель','Май','Июнь',
  'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь',
]

function buildCalendar(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay()
  const offset = firstDay === 0 ? 6 : firstDay - 1
  const totalDays = new Date(year, month + 1, 0).getDate()
  const cells: (number | null)[] = []
  for (let i = 0; i < offset; i++) cells.push(null)
  for (let d = 1; d <= totalDays; d++) cells.push(d)
  return cells
}

export default function CalendarBlock({ date }: Props) {
  const ref = useFadeUp<HTMLElement>()
  const d = new Date(date)
  const year = d.getFullYear()
  const month = d.getMonth()
  const day = d.getDate()
  const cells = buildCalendar(year, month)

  return (
    <section ref={ref} className="fade-up py-8 px-6 bg-white text-center">
      <p className="font-script text-[44px] text-dark mb-6">{MONTHS_RU[month]}</p>
      <div className="max-w-xs mx-auto">
        <div className="grid grid-cols-7 mb-1">
          {DAYS.map(d => (
            <span key={d} className="font-serif text-xs text-muted italic py-1.5 text-center">{d}</span>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {cells.map((cell, i) => {
            const isHighlight = cell === day
            return (
              <span
                key={i}
                className={`font-serif text-base py-2 text-center relative ${
                  cell === null ? 'invisible' : ''
                } ${isHighlight ? 'text-gold font-medium' : 'text-dark'}`}
              >
                {isHighlight && (
                  <span className="absolute inset-[-2px] m-auto w-9 h-9 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold opacity-60 pointer-events-none" />
                )}
                {cell}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
