'use client'

import { useScrollReveal } from '@/hooks/useFadeUp'


type Props = {
  date: string  // ISO: '2026-08-28'
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

function Heart() {
  return (
    <img
      src="/heart.png"
      alt=""
      className="pointer-events-none absolute w-14 h-14"
      style={{ top: '-6px', left: '50%', transform: 'translateX(-50%)' }}
    />
  )
}

export default function CalendarBlock({ date }: Props) {
  const ref = useScrollReveal<HTMLElement>('zoom-in')
  const d = new Date(date)
  const year = d.getFullYear()
  const month = d.getMonth()
  const day = d.getDate()
  const cells = buildCalendar(year, month)

  return (
    <section ref={ref} className="fade-up py-10 px-6 bg-white text-center">
      {/* Название месяца */}
      <p className="font-script text-[64px] leading-tight text-dark mb-1">{MONTHS_RU[month]}</p>
      <p className="font-ui text-[11px] tracking-[4px] text-muted uppercase mb-6">{year}</p>

      <div className="max-w-xs mx-auto">
        {/* Дни недели */}
        <div className="grid grid-cols-7 mb-2">
          {DAYS.map(d => (
            <span key={d} className="font-ui text-[10px] tracking-[1px] text-muted uppercase py-1 text-center">
              {d}
            </span>
          ))}
        </div>

        {/* Ячейки */}
        <div className="grid grid-cols-7">
          {cells.map((cell, i) => {
            const isHighlight = cell === day
            return (
              <span
                key={i}
                className={`relative flex items-center justify-center py-2 ${
                  cell === null ? 'invisible' : ''
                }`}
              >
                {isHighlight && <Heart />}
                <span className="relative z-10 font-serif text-base text-dark">
                  {cell}
                </span>
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
