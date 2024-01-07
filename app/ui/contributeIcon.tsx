"use client"
import clsx from "clsx"
import Link from "next/link"
import { useState } from "react"
import { FaExternalLinkSquareAlt } from "react-icons/fa"
import { LuClipboardCopy } from "react-icons/lu"

export type ContributeIconProps = {
  index: number
  type: string
  text: string
  copyText: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  link?: string
}

export function ContributeIcon({
  copyText,
  index,
  type,
  text,
  icon,
  link,
}: ContributeIconProps) {
  const [isCopied, setIsCopied] = useState(false)
  const Icon = icon
  async function copyTextToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 1500)
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error)
    }
  }

  return (
    <div
      className={clsx(
        "contribute-bloc flex flex-col justify-center items-center gap-2 grow bg-dark p-8 text-slate-50 hover:bg-medium transition duration-300 w-[90%] md:w-[70%] opacity-0",
        {
          "translate-x-full self-end rounded-l-full": index % 2 === 0,
          "-translate-x-full self-baseline rounded-r-full": index % 2 !== 0,
        }
      )}
    >
      {link && (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx("absolute", {
            "top-3 right-3": index % 2 === 0,
            "top-3 left-3": index % 2 !== 0,
          })}
          title={`Aller sur notre page ${type}`}
        >
          <FaExternalLinkSquareAlt />
        </Link>
      )}
      <div className="flex justify-center items-center w-full gap-5">
        <Icon className="w-12 h-12" />
        <h2>{type}</h2>
      </div>
      <div className="flex justify-center items-center w-full gap-5">
        <div>
          {isCopied ? (
            <span className="bg-green-400 px-3 py-1 rounded-md min-w-max">
              Copié !
            </span>
          ) : (
            <div className="flex justify-center items-center w-full gap-5">
              <p className="text-center">
                {copyText !== "" ? `${text} : ${copyText}` : text}
              </p>
              {copyText !== "" && (
                <LuClipboardCopy
                  title={`Copier ${text}`}
                  onClick={() => copyTextToClipboard(copyText)}
                  className="cursor-pointer"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
