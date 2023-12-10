import NavLinks from "@/app/ui/nav-links"
import Link from "next/link"
import Weather from "./weater"

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-3 bg-primary">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-40"
        href="/"
        style={{
          background: 'center / contain url("./images/logo.png") no-repeat',
        }}
      ></Link>
      <div className="flex justify-between flex-col md:grow">
        <NavLinks />
        <Weather />
      </div>
    </div>
  )
}
