'use client'

import { useFadeUp } from '@/hooks/useFadeUp'

type Props = {
  groomName: string
  brideName: string
  date: string
  instagramUrl?: string
}

export default function FooterBlock({ groomName, brideName, date, instagramUrl }: Props) {
  const ref = useFadeUp<HTMLElement>()

  return (
    <footer ref={ref} className="fade-up py-12 px-6 text-center bg-white">
      <p className="font-script text-[34px] text-dark leading-snug">
        {groomName}
        <br />& {brideName}
      </p>
      <p className="font-ui text-lg tracking-[2px] text-dark my-4">♡ · · · ♡</p>
      <p className="font-serif text-sm italic text-muted tracking-widest">{date}</p>

      {instagramUrl && (
        <div className="mt-8">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-1 group"
          >
            <span className="w-10 h-10 rounded-full flex items-center justify-center text-white text-base"
              style={{ background: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}
            >
              IG
            </span>
            <span className="text-[10px] tracking-wide text-muted group-hover:text-dark transition-colors">
              Instagram
            </span>
          </a>
        </div>
      )}

      <p className="mt-10 text-[10px] tracking-[2px] text-[#ccc] uppercase">
        invites.kg
      </p>
    </footer>
  )
}
