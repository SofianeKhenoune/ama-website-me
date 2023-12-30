import { AiFillProject } from "react-icons/ai"
import { FaHistory } from "react-icons/fa"
import { FaPeopleGroup } from "react-icons/fa6"
import { AboutIcon, AboutIconProps } from "../ui/aboutIcon"

type AboutIconsPropsArray = AboutIconProps[]

const aboutIconProps: AboutIconsPropsArray = [
  {
    icon: FaPeopleGroup,
    text: "Qui sommes nous !",
    direction: "rounded-r-full",
  },
  {
    icon: FaHistory,
    text: "Notre histoire",
    position: "self-end",
    direction: "rounded-l-full",
  },
  {
    icon: AiFillProject,
    text: "Nos activités",
    direction: "rounded-r-full",
  },
]
const About = () => {
  return (
    <main className="h-screen flex flex-col overflow-hidden">
      <h1 className="text-title1 font-bold text-center py-2 px-7 self-end bg-light rounded-bl-xl">
        À propos de l&apos;Association
      </h1>
      <section className="h-full flex flex-col gap-10 text-title1 justify-around py-20 md:py-10">
        {aboutIconProps.map((props) => (
          <AboutIcon key={props.text} {...props} />
        ))}
      </section>
    </main>
  )
}

export default About
