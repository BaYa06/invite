import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, partnerName, wishes, attending } = body

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    return NextResponse.json({ error: 'Bot not configured' }, { status: 500 })
  }

  const partner = partnerName
    ? `👫 Со спутником/спутницей: Да — ${partnerName}`
    : `👫 Со спутником/спутницей: Нет`
  const wishesLine = wishes ? `\n💬 Пожелание:\n«${wishes}»` : ''

  const text =
    `📩 Новый ответ на приглашение!\n\n` +
    `👤 Гость: ${name}\n` +
    `✅ Придёт: ${attending ? 'Да' : 'Нет'}\n` +
    `${partner}` +
    `${wishesLine}`

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Telegram error' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
