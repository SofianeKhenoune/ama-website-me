"use client"
import gsap from "gsap"
import { useEffect } from "react"
export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 })
    const blocs = gsap.utils.toArray(".homepage > *")
    tl.to(".homepage", {
      opacity: 1,
      duration: 2,
    })
    blocs.forEach((element: any) => {
      tl.to(element, {
        opacity: 1,
        duration: 1,
        y: 0,
        x: 0,
      })
    })
  })
  return (
    <main className="h-screen flex flex-col overflow-hidden">
      <h1 className="text-title1 font-bold text-center py-2 px-7 bg-light rounded-bl-full rounded-br-full">
        Bienvenue !
      </h1>
      <div
        className="homepage flex-1 opacity-0 flex flex-col justify-evenly gap-5 p-5"
        style={{
          background:
            "center / contain no-repeat url(/images/background-mosq.svg)",
        }}
      >
        <h1 className="text-title1 font-bold py-2 px-7 opacity-0 -translate-y-full -translate-x-full bg-dark text-slate-50 max-w-max rounded-lg text-center self-baseline">
          Association des Musulmans d&apos;Aubervilliers
        </h1>
        <h2 className="text-title1 font-bold py-2 px-7 opacity-0 -translate-y-full -translate-x-full bg-dark text-slate-50 max-w-max rounded-lg text-center self-center">
          Aux côtés des Musulmans d&apos;Aubervilliers depuis 2001
        </h2>
        <p className="text-title1 font-bold py-2 px-7 opacity-0 -translate-y-full -translate-x-full bg-dark text-slate-50 max-w-max rounded-lg text-center self-end">
          Acquisition de 2 lieux de cultes
        </p>
      </div>
    </main>
  )
}
