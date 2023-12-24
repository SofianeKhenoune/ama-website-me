export type AboutIconProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  text: string
  direction: "l" | "r"
  position?: "baseline" | "end"
}
export function AboutIcon({ icon, text, position, direction }: AboutIconProps) {
  const Icon = icon
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 grow bg-light p-3 text-slate-50 hover:scale-105 cursor-pointer transition-transform duration-500 w-[90%] md:w-[70%] self-${position} rounded-${direction}-full`}
    >
      <Icon className="w-12 h-12" />
      <h2>{text}</h2>
    </div>
  )
}
