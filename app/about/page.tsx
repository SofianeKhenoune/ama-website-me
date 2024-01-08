"use client"
import gsap from "gsap"
import { useEffect } from "react"
import { AiFillProject } from "react-icons/ai"
import { FaHistory } from "react-icons/fa"
import { FaPeopleGroup } from "react-icons/fa6"
import { AboutIcon, AboutIconProps } from "../ui/aboutIcon"

type AboutIconsPropsArray = AboutIconProps[]

const aboutIconProps: AboutIconsPropsArray = [
  {
    index: 1,
    icon: FaPeopleGroup,
    text: "Qui sommes nous !",
    direction: "rounded-r-full",
    slug: "who-are-we",
  },
  {
    index: 2,
    icon: FaHistory,
    text: "Notre histoire",
    position: "self-end",
    direction: "rounded-l-full",
    slug: "history",
  },
  {
    index: 3,
    icon: AiFillProject,
    text: "Nos activités",
    direction: "rounded-r-full",
    slug: "activities",
  },
]
const About = () => {
  useEffect(() => {
    const tl = gsap.timeline()
    const blocs = gsap.utils.toArray(".about-bloc")

    blocs.forEach((element: any) => {
      tl.to(element, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "back.inOut",
      })
    })
  })
  return (
    <main className="h-screen flex flex-col overflow-hidden">
      <h1 className="text-title1 font-bold text-center py-2 px-7 bg-light rounded-bl-full rounded-br-full">
        À propos de l&apos;Association
      </h1>
      <section className="h-full flex flex-col gap-10 text-title1 justify-around py-20 md:py-10 pb-32">
        {aboutIconProps.map((props) => (
          <AboutIcon key={props.text} {...props} />
        ))}
      </section>
    </main>
  )
}

export default About
