'use client'

import { useRef, useState } from 'react'
import EnvelopeScreen from '@/components/envelope/EnvelopeScreen'
import HeroBlock from '@/components/invitation/HeroBlock'
import MusicButton from '@/components/invitation/MusicButton'
import NamesBlock from '@/components/invitation/NamesBlock'
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
  groomName: 'Айбек',
  brideName: 'Айгерим',
  initial: 'А',
  date: '2026-04-19',
  dateFormatted: '19 апреля 2026',
  dateDots: '19 · 04 · 2026',
  time: '18:00',
  venue: 'Ресторан «Корона»',
  address: 'г. Бишкек, ул. Манаса, 40',
  mapUrl: 'https://maps.google.com',
  photoHero: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80',
  photoCouple: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1200&q=80',
  musicUrl: undefined as string | undefined,
  guestName: undefined as string | undefined,
}

export default function InvitePage() {
  const [opened, setOpened] = useState(false)
  const landingRef = useRef<HTMLDivElement>(null)

  const handleOpen = () => {
    setOpened(true)
    // плавное появление лендинга
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

        <MusicButton musicUrl={MOCK.musicUrl} />
        <NamesBlock groomName={MOCK.groomName} brideName={MOCK.brideName} />
        <CalendarBlock date={MOCK.date} />
        <InviteTextBlock guestName={MOCK.guestName} />
        <PhotoBlock url={MOCK.photoHero} />
        <DetailsBlock
          date={MOCK.dateFormatted}
          time={MOCK.time}
          venue={MOCK.venue}
          address={MOCK.address}
          mapUrl={MOCK.mapUrl}
        />
        <CountdownBlock targetDate={MOCK.date} />
        <RSVPForm guestName={MOCK.guestName} onSubmit={handleRSVP} />
        <PhotoBlock url={MOCK.photoCouple} position="center 30%" />
        <FooterBlock
          groomName={MOCK.groomName}
          brideName={MOCK.brideName}
          date={MOCK.dateFormatted}
        />
      </div>
    </main>
  )
}
