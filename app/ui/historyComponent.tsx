export default function HistoryComponent({
  classNames,
  year,
  title,
  text,
}: {
  classNames: string
  year: number
  title: string
  text: string
}) {
  return (
    <div className={classNames}>
      <span className="text-title2 font-bold absolute bg-medium px-2 rounded-md left-[50%] translate-x-[-50%] translate-y-[calc(-50%-4px)] text-slate-50">
        {year}
      </span>
      <h2 className="text-title2 font-bold mt-6">
        {title.replace(/^\w/g, (l) => l.toUpperCase())}
      </h2>
      <p className="text-justify ">{text}</p>
    </div>
  )
}
