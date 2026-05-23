'use client'

import { useRef, useState } from 'react'
import { useAudio } from '@/hooks/useAudio'
import EnvelopeScreen from '@/components/envelope/EnvelopeScreen'
import HeroBlock from '@/components/invitation/HeroBlock'
import MusicButton from '@/components/invitation/MusicButton'
import CalendarBlock from '@/components/invitation/CalendarBlock'
import InviteTextBlock from '@/components/invitation/InviteTextBlock'
import PhotoBlock from '@/components/invitation/PhotoBlock'
import DetailsBlock from '@/components/invitation/DetailsBlock'
import CountdownBlock from '@/components/invitation/CountdownBlock'
import RSVPForm from '@/components/invitation/RSVPForm'
import FooterBlock from '@/components/invitation/FooterBlock'
import type { RSVPFormData } from '@/types'

// TODO: заменить на fetch из Supabase по slug
const MOCK = {
  groomName: 'Батый',
  brideName: 'Жибек',
  initial: 'А',
  date: '2026-08-28',
  dateFormatted: '28 августа 2026',
  dateDots: '28 · 08 · 2026',
  time: '18:00',
  venue: 'Jannat Regency',
  address: 'г. Бишкек',
  mapUrl: 'https://2gis.kg/bishkek/geo/70000001019360746/74.617387,42.820464',
  photoHero: '/hero.jpg',
  photoCouple: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1200&q=80',
  musicUrl: '/music.mp3',
  guestName: undefined as string | undefined,
}

export default function InvitePage() {
  const [opened, setOpened] = useState(false)
  const landingRef = useRef<HTMLDivElement>(null)
  const { playing, toggle, play } = useAudio(MOCK.musicUrl)

  const handleOpen = () => {
    setOpened(true)
    play()
    setTimeout(() => {
      if (landingRef.current) {
        landingRef.current.style.opacity = '1'
      }
    }, 50)
  }

  const handleRSVP = async (data: RSVPFormData) => {
    await fetch('/api/rsvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  return (
    <main>
      {!opened && (
        <EnvelopeScreen
          groomName={MOCK.groomName}
          brideName={MOCK.brideName}
          date={MOCK.dateDots}
          initial={MOCK.initial}
          onOpen={handleOpen}
        />
      )}

      <div
        ref={landingRef}
        style={{ opacity: 0, transition: 'opacity 0.9s', display: opened ? 'block' : 'none' }}
      >
        <HeroBlock
          groomName={MOCK.groomName}
          brideName={MOCK.brideName}
          date={MOCK.dateFormatted}
          photoUrl={MOCK.photoHero}
        />

        <MusicButton musicUrl={MOCK.musicUrl} playing={playing} onToggle={toggle} />
        <CalendarBlock date={MOCK.date} />
        <InviteTextBlock guestName={MOCK.guestName} />
        <PhotoBlock url="/photo2.jpg" />
        <DetailsBlock
          date={MOCK.dateFormatted}
          time={MOCK.time}
          venue={MOCK.venue}
          address={MOCK.address}
          mapUrl={MOCK.mapUrl}
        />
        <CountdownBlock targetDate={MOCK.date} />
        <RSVPForm guestName={MOCK.guestName} onSubmit={handleRSVP} />
        <PhotoBlock url="/photo3.jpg" position="center 30%" />
        <FooterBlock
          groomName={MOCK.groomName}
          brideName={MOCK.brideName}
          date={MOCK.dateFormatted}
        />
      </div>
    </main>
  )
}
