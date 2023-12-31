import Link from "next/link"

export type ContactIconProps = {
  index: number
  text: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  target: string
  direction: "rounded-r-full" | "rounded-l-full"
  position?: "self-baseline" | "self-end"
}
export function ContactIcon({
  icon,
  target,
  text,
  position,
  direction,
  index,
}: ContactIconProps) {
  const classNames = `about-bloc flex flex-col justify-center items-center gap-2 grow bg-dark p-3 text-slate-50 hover:bg-medium hover:scale-105 transition duration-300 w-[90%] md:w-[70%] opacity-0 ${position} ${direction} ${
    index % 2 === 0 ? "translate-x-full" : "-translate-x-full"
  }`
  const Icon = icon
  return (
    <Link className={classNames} href={target} target="_blank">
      <Icon className="w-12 h-12" />
      <h2>{text}</h2>
    </Link>
  )
}
