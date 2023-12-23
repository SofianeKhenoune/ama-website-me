"use client"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaMosque } from "react-icons/fa6"
import {
  HiHome,
  HiMiniInformationCircle,
  HiOutlineNewspaper,
} from "react-icons/hi2"
import { MdContactMail } from "react-icons/md"
import useSetMenu from "../store/menuStore"

// Map of links to display in the side navigation.

// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Accueil", href: "/", icon: HiHome },
  { name: "À propos", href: "/about", icon: HiMiniInformationCircle },
  {
    name: "Actualités",
    href: "/news",
    icon: HiOutlineNewspaper,
  },
  {
    name: "Horaires de prières",
    href: "/prayer",
    icon: FaMosque,
  },
  { name: "Contact", href: "/contact", icon: MdContactMail },
]

export default function NavLinks() {
  const pathname = usePathname()
  const { setMenu } = useSetMenu()
  return (
    <div className={"navlinks flex flex-col space-x-0 w-full gap-2"}>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-12 grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-para font-medium md:hover:bg-button md:hover:scale-110 transition-transform duration-500 md:flex-none md:justify-start md:p-2 md:px-3 md:rounded-r-full",
              {
                "bg-light text-primary": pathname === link.href,
              }
            )}
            onClick={() => setMenu()}
          >
            <LinkIcon className="w-6" />
            <p>{link.name}</p>
          </Link>
        )
      })}
    </div>
  )
}
