type Props = {
  url: string
  position?: string
  height?: string
}

export default function PhotoBlock({ url, position = 'center', height = '480px' }: Props) {
  return (
    <div
      className="w-full bg-cover"
      style={{
        backgroundImage: `url('${url}')`,
        backgroundPosition: position,
        height,
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
      }}
    />
  )
}
