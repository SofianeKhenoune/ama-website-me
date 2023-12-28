export type AboutIconProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  text: string
  direction: "l" | "r"
  position?: "baseline" | "end"
}
export function AboutIcon({ icon, text, position, direction }: AboutIconProps) {
  const classNames = `h-36 flex flex-col justify-center items-center gap-2 grow bg-medium p-3 text-slate-50 hover:scale-105 cursor-pointer transition-transform duration-500 w-[90%] md:w-[70%] self-${position} rounded-${direction}-full`
  const Icon = icon
  return (
    <div className={classNames}>
      <Icon className="w-12 h-12" />
      <h2>{text}</h2>
    </div>
  )
}
