"use client"
import { lusitana } from "@/app/ui/fonts"
import { CgMenuRound } from "react-icons/cg"
import "./globals.css"
import useSetMenu from "./store/menuStore"
import SideNav from "./ui/sidenav"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { open, setMenu } = useSetMenu()

  const newLocal =
    "fixed md:hidden hover:bg-dark hover:scale-110 cursor-pointer bottom-5 right-5 bg-medium rounded-md p-1"
  return (
    <html lang="fr">
      <head>
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="Site de l'Association des Musulmans d'Aubervilliers, venez découvrir nos activités"
        />
        <title>Association des Musulmans d&apos;Aubervilliers</title>
      </head>
      <body className={`${lusitana.className} text-para`}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow md:overflow-y-auto">{children}</div>
          {!open && (
            <CgMenuRound
              className={newLocal}
              size={50}
              color="#fff"
              onClick={() => setMenu()}
            />
          )}
        </div>
      </body>
    </html>
  )
}
