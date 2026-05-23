'use client'

import { useState } from 'react'
import { useFadeUp } from '@/hooks/useFadeUp'
import type { RSVPFormData } from '@/types'

type Props = {
  guestName?: string
  onSubmit: (data: RSVPFormData) => Promise<void>
}

export default function RSVPForm({ guestName, onSubmit }: Props) {
  const ref = useFadeUp<HTMLElement>()
  const [form, setForm] = useState<RSVPFormData>({
    name: guestName || '',
    partnerName: '',
    wishes: '',
    attending: true,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await onSubmit(form)
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <section ref={ref} className="fade-up py-12 px-6 bg-white">
      <p className="font-script text-[44px] text-dark text-center mb-1">Анкета гостя</p>
      <p className="font-serif text-base italic text-muted text-center leading-relaxed mb-8">
        Пожалуйста, подтвердите ваше присутствие
      </p>

      {submitted ? (
        <div className="text-center py-8">
          <p className="font-script text-[30px] text-gold">Спасибо!</p>
          <p className="font-serif text-base italic text-muted mt-2">Ваш ответ получен ♡</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <label className="block text-[11px] tracking-[2px] text-muted uppercase mt-5 mb-2">
            Имя и фамилия
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className="w-full border-0 border-b border-sand bg-transparent py-2.5 px-1 font-serif text-lg text-dark focus:border-gold outline-none transition-colors"
            placeholder="Имя и фамилия"
          />

          <label className="block text-[11px] tracking-[2px] text-muted uppercase mt-5 mb-2">
            Спутник / Спутница
          </label>
          <input
            type="text"
            value={form.partnerName}
            onChange={e => setForm(f => ({ ...f, partnerName: e.target.value }))}
            className="w-full border-0 border-b border-sand bg-transparent py-2.5 px-1 font-serif text-lg text-dark focus:border-gold outline-none transition-colors"
            placeholder="Если придёте вдвоём"
          />

          <label className="block text-[11px] tracking-[2px] text-muted uppercase mt-5 mb-2">
            Пожелания
          </label>
          <textarea
            rows={3}
            value={form.wishes}
            onChange={e => setForm(f => ({ ...f, wishes: e.target.value }))}
            className="w-full border-0 border-b border-sand bg-transparent py-2.5 px-1 font-serif text-lg text-dark focus:border-gold outline-none transition-colors resize-none"
            placeholder="Напишите ваши пожелания..."
          />

          <div className="flex gap-8 mt-6">
            {[
              { label: 'Приду ♡', value: true },
              { label: 'Не смогу', value: false },
            ].map(opt => (
              <label key={String(opt.value)} className="flex items-center gap-3 cursor-pointer">
                <span
                  onClick={() => setForm(f => ({ ...f, attending: opt.value }))}
                  className={`w-5 h-5 rounded-full border transition-all flex items-center justify-center cursor-pointer ${
                    form.attending === opt.value
                      ? 'border-gold bg-gold'
                      : 'border-sand'
                  }`}
                >
                  {form.attending === opt.value && (
                    <span className="w-2 h-2 rounded-full bg-white block" />
                  )}
                </span>
                <span className="font-serif text-lg italic text-[#333]">{opt.label}</span>
              </label>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 py-4 bg-dark text-white font-ui text-xs tracking-[4px] uppercase hover:bg-gold transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? 'Отправляем...' : 'Отправить'}
          </button>
        </form>
      )}
    </section>
  )
}
