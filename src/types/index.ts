export type InvitationType = 'wedding' | 'birthday' | 'toy' | 'corporate'

export type InvitationData = {
  slug: string
  type: InvitationType
  templateId: string
  groomName: string
  brideName: string
  date: string        // ISO: '2026-04-19'
  time: string        // '18:00'
  venue: string
  address: string
  mapUrl: string
  photoHero: string
  photoCouple?: string
  musicUrl?: string
  inviteText?: string
}

export type Guest = {
  id: string
  invitationId: string
  name: string
  partnerName?: string
  uniqueSlug: string
  attending: boolean | null   // null = не ответил
  wishes?: string
  respondedAt?: string
  createdAt: string
}

export type GuestView = Guest & {
  invitationSlug: string
}

export type Invitation = {
  id: string
  clientId: string
  slug: string
  type: InvitationType
  templateId: string
  data: InvitationData
  isActive: boolean
  createdAt: string
}

export type Client = {
  id: string
  email: string
  name: string
  phone?: string
  createdAt: string
}

export type Template = {
  id: string
  name: string
  previewUrl: string
  type: InvitationType[]
}

export type RSVPFormData = {
  name: string
  partnerName?: string
  wishes?: string
  attending: boolean
}
