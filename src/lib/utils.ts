export function generateSlug(groom: string, bride: string): string {
  const clean = (str: string) =>
    str.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  const suffix = Math.random().toString(36).slice(2, 6)
  return `${clean(groom)}-${clean(bride)}-${suffix}`
}

export function generateGuestSlug(name: string): string {
  const clean = name.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  const suffix = Math.random().toString(36).slice(2, 6)
  return `${clean}-${suffix}`
}

export function formatDate(iso: string, locale: string = 'ru-RU'): string {
  return new Date(iso).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ')
}
