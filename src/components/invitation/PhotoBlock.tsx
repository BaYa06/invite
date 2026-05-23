type Props = {
  url: string
  position?: string
  height?: string
}

export default function PhotoBlock({ url, position = 'center', height = '340px' }: Props) {
  return (
    <div
      className="w-full grayscale bg-cover"
      style={{ backgroundImage: `url('${url}')`, backgroundPosition: position, height }}
    />
  )
}
