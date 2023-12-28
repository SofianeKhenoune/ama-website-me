"use client"
import NavLinks from "@/app/ui/nav-links"
import Link from "next/link"
import { CgCloseO } from "react-icons/cg"
import useSetMenu from "../store/menuStore"

export default function SideNav() {
  const { open, setMenu } = useSetMenu()

  return (
    <div
      className={`h-screen px-3 py-4 md:px-3 bg-light fixed w-full flex flex-col md:relative transition-transform duration-500 md:translate-x-0 z-50 md:z-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-40"
        href="/"
        style={{
          background: 'center / contain url("./images/logo.png") no-repeat',
        }}
      ></Link>

      <div className="flex justify-between flex-col md:grow">
        <NavLinks />
      </div>
      <CgCloseO
        className="fixed md:hidden hover:scale-110 cursor-pointer bottom-5 right-5 bg-medium rounded-md p-1"
        size={50}
        color="white"
        onClick={() => setMenu()}
      />
    </div>
  )
}
