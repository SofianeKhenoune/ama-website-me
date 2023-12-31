import Link from "next/link"

export type AboutIconProps = {
  index: number
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  text: string
  direction: "rounded-r-full" | "rounded-l-full"
  position?: "self-baseline" | "self-end"
  slug?: string
}
export function AboutIcon({
  icon,
  text,
  position,
  direction,
  index,
  slug,
}: AboutIconProps) {
  const classNames = `about-bloc flex flex-col justify-center items-center gap-2 grow bg-dark p-3 text-slate-50 hover:bg-medium hover:scale-105 transition duration-300 w-[90%] md:w-[70%] opacity-0 ${position} ${direction} ${
    index % 2 === 0 ? "translate-x-full" : "-translate-x-full"
  }`
  const Icon = icon
  return (
    <Link className={classNames} href={`/about/${slug}`}>
      <Icon className="w-12 h-12" />
      <h2>{text}</h2>
    </Link>
  )
}
