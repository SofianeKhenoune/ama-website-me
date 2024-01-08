"use client"
import { AmaHistory } from "@/app/data/history"
import HistoryComponent from "@/app/ui/historyComponent"
import clsx from "clsx"
import gsap from "gsap"
import { useEffect } from "react"

const History = () => {
  const oddElemClassnames =
    "rounded-tl-xl rounded-bl-xl border-t-8 border-l-8 -mb-2 -mt-2 -ml-2 relative pb-8 px-6 opacity-0 -translate-x-full"
  const evenElemClassnames =
    "rounded-tr-xl rounded-br-xl border-r-8 border-t-8 -mr-2 relative pb-8 px-6 opacity-0 translate-x-full"
  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 })
    const blocs = gsap.utils.toArray("section > *")
    blocs.forEach((element: any) => {
      tl.to(element, {
        opacity: 1,
        duration: 1,
        x: 0,
      })
      tl.to(element, {
        borderColor: "hsla(188, 76%, 31%,1)",
        duration: 1,
      })
    })
  })
  return (
    <main className="min-h-screen flex flex-col overflow-hidden">
      <h1 className="text-title1 font-bold text-center py-2 px-7 bg-light rounded-bl-full rounded-br-full">
        Notre Histoire
      </h1>
      <section className="flex-1 flex flex-col p-10">
        {AmaHistory.map((history, index) => (
          <HistoryComponent
            key={index + history.year}
            classNames={clsx(
              index % 2 === 0 ? oddElemClassnames : evenElemClassnames,
              index === AmaHistory.length - 1 && "border-b-8"
            )}
            {...history}
          />
        ))}
      </section>
    </main>
  )
}

export default History
