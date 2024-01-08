"use client"
import gsap from "gsap"
import { useEffect } from "react"
import { FaLocationDot, FaPhone, FaSquareFacebook } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { ContactIcon, ContactIconProps } from "../ui/contactIcon"

type ContactIconsPropsArray = ContactIconProps[]

const contactIconProps: ContactIconsPropsArray = [
  {
    index: 1,
    target:
      "https://www.google.fr/maps/place/112+Bd+F%C3%A9lix+Faure,+93300+Aubervilliers/@48.9072363,2.3770143,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66c25a0669351:0xefc7c32ecf684e6e!8m2!3d48.9072363!4d2.3795892!16s%2Fg%2F11c14qk204?entry=ttu",
    icon: FaLocationDot,
    text: "112 Bd Félix Faure, 93300 Aubervilliers",
    direction: "rounded-r-full",
  },
  {
    index: 2,
    target: "tel:+33986738218",
    icon: FaPhone,
    text: "09 86 73 82 18",
    position: "self-end",
    direction: "rounded-l-full",
  },
  {
    index: 3,
    target: "mailto:contact.ama93@gmail.com",
    icon: MdEmail,
    text: "contact.ama93@gmail.com",

    direction: "rounded-r-full",
  },
  {
    index: 4,
    target: "https://www.facebook.com/mosquee.aubervilliersama",
    icon: FaSquareFacebook,
    text: "Notre Page Facebook",
    position: "self-end",
    direction: "rounded-l-full",
  },
]
const Contact = () => {
  useEffect(() => {
    const tl = gsap.timeline()
    const blocs = gsap.utils.toArray(".about-bloc")

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
        Nous contacter
      </h1>
      <section className="flex-1 flex flex-col gap-10 text-title1 justify-around py-20 md:py-10 pb-32">
        {contactIconProps.map((props) => (
          <ContactIcon key={props.text} {...props} />
        ))}
      </section>
    </main>
  )
}

export default Contact
