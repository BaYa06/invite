type Props = {
  groomName: string
  brideName: string
  date: string
  photoUrl: string
}

export default function HeroBlock({ groomName, brideName, date, photoUrl }: Props) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${photoUrl}')`,
        }}
      />
      {/* тёмный градиент поверх фото */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 text-center px-8 flex flex-col items-center">

        {/* Метка */}
        <span className="font-ui text-[10px] tracking-[6px] text-white/60 uppercase mb-10">
          Save the Date
        </span>

        {/* Имя жениха */}
        <h1 className="font-calligraphy text-[86px] leading-none text-white">
          {groomName}
        </h1>

        {/* Разделитель */}
        <div className="flex items-center gap-4 my-3">
          <div className="w-16 h-px bg-gold/60" />
          <span className="font-calligraphy text-[32px] text-gold leading-none">&amp;</span>
          <div className="w-16 h-px bg-gold/60" />
        </div>

        {/* Имя невесты */}
        <h2 className="font-calligraphy text-[72px] leading-none text-white">
          {brideName}
        </h2>

        {/* Дата */}
        <p className="font-serif text-xl italic text-gold-light tracking-[4px] mt-10">
          {date}
        </p>

        {/* Стрелки вниз */}
        <div className="mt-10 flex flex-col items-center gap-1">
          <span className="block w-5 h-5 border-r-2 border-b-2 border-gold/70 rotate-45 animate-[bounce_1.5s_ease-in-out_infinite]" />
          <span className="block w-5 h-5 border-r-2 border-b-2 border-gold/50 rotate-45 animate-[bounce_1.5s_ease-in-out_0.2s_infinite]" />
          <span className="block w-5 h-5 border-r-2 border-b-2 border-gold/30 rotate-45 animate-[bounce_1.5s_ease-in-out_0.4s_infinite]" />
        </div>

      </div>
    </section>
  )
}
