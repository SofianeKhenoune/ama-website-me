"use client"
import gsap from "gsap"
import { useEffect } from "react"
import { BiSolidBank } from "react-icons/bi"
import { FaCcPaypal, FaCreditCard, FaMoneyCheck } from "react-icons/fa"
import { ContributeIcon, ContributeIconProps } from "../ui/contributeIcon"
const contributeInfos: ContributeIconProps[] = [
  {
    index: 1,
    icon: BiSolidBank,
    type: "Virement Bancaire",
    text: "IBAN",
    copyText: "FR76 3000 3037 2000 0505 1064 725",
  },
  {
    index: 2,
    icon: FaCcPaypal,
    type: "Paypal",
    text: "Lien",
    copyText: "@AmaAssociation93",
    link: "https://www.paypal.com/paypalme/AmaAssociation93?country.x=FR&locale.x=fr_FR",
  },
  {
    index: 3,
    icon: FaMoneyCheck,
    type: "Chèque",
    text: "À l'ordre de l'AMA",
    copyText: "",
  },
  {
    index: 4,
    icon: FaCreditCard,
    type: "Carte Bancaire",
    text: "Sur place ou par l'envoi d'un lien (en cours de mise en place !)",
    copyText: "",
  },
]

export default function Contribute() {
  useEffect(() => {
    const tl = gsap.timeline()
    const blocs = gsap.utils.toArray(".contribute-bloc")

    blocs.forEach((element: any) => {
      tl.to(element, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "elastic.inOut",
      })
    })
  })
  return (
    <main className="min-h-screen flex flex-col overflow-hidden">
      <h1 className="text-title1 font-bold text-center py-2 px-7 bg-light rounded-bl-full rounded-br-full">
        Contribuer
      </h1>
      <section className="flex-1 flex flex-col gap-10 text-title1 justify-around py-20 md:py-10 pb-32">
        {contributeInfos.map((props) => (
          <ContributeIcon key={props.text} {...props} />
        ))}
      </section>
    </main>
  )
}
