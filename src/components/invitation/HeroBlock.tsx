type Props = {
  groomName: string
  brideName: string
  date: string
  photoUrl: string
}

export default function HeroBlock({ groomName, brideName, date, photoUrl }: Props) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-dark">
      <div
        className="absolute inset-0 bg-cover bg-center grayscale"
        style={{
          backgroundImage: `linear-gradient(rgba(10,8,6,0.55),rgba(10,8,6,0.7)), url('${photoUrl}')`,
        }}
      />
      <div className="relative z-10 text-center px-6">
        <span className="block font-ui text-2xl font-light tracking-[6px] text-white uppercase mb-2">
          Save the Date
        </span>
        <span className="block font-calligraphy text-5xl text-gold my-1">&</span>
        <h1 className="font-calligraphy text-[72px] leading-tight text-gold-light">
          {groomName}
          <span className="block font-calligraphy text-[54px] text-gold italic my-1">&</span>
          {brideName}
        </h1>
        <p className="font-serif text-2xl italic text-gold-light mt-4 tracking-[4px]">{date}</p>
      </div>
    </section>
  )
}
