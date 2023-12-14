"use client"
import NavLinks from "@/app/ui/nav-links"
import Link from "next/link"
import { CgCloseO } from "react-icons/cg"

export default function SideNav() {
  return (
    <div className="sidenav flex h-screen flex-col px-3 py-4 md:px-3 bg-primary justify-between">
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
        className="self-end md:hidden hover:scale-110 cursor-pointer"
        size={30}
      />
    </div>
  )
}
