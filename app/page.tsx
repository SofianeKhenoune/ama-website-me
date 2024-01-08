"use client"
import gsap from "gsap"
import { useEffect } from "react"
export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 })
    tl.to(".homepage", {
      opacity: 1,
      duration: 2,
    })
    tl.to(".homepage h1", {
      opacity: 1,
      y: 0,
      duration: 2,
    })
  })
  return (
    <main className="h-screen flex flex-col overflow-hidden">
      <h1 className="text-title1 font-bold text-center py-2 px-7 bg-light rounded-bl-full rounded-br-full">
        Bienvenue !
      </h1>
      <div
        className="homepage flex-1 opacity-0 flex justify-center items-center p-5"
        style={{
          background:
            "center / contain no-repeat url(/images/background-mosq.svg)",
        }}
      >
        <h1 className="text-title1 font-bold py-2 px-7 opacity-0 -translate-y-full bg-dark text-slate-50 max-w-max rounded-lg text-center">
          Aux côtés des Musulmans d&apos;Aubervilliers depuis 2001
        </h1>
        <h2></h2>
      </div>
    </main>
  )
}
