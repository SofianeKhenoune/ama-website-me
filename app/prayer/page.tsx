"use client"

import clsx from "clsx"
import { useState } from "react"

export default function Prayer() {
  const [changeMosque, setChangeMosque] = useState(false)

  return (
    <main className="md:w-[70vw] m-auto p-10">
      <h1 className={"text-title1 font-bold text-center pb-5"}>
        Horaires de prières dans nos deux mosquées
      </h1>
      <div className="flex text-title2 font-bold">
        <p
          className={clsx(
            "grow p-3 cursor-pointer text-center font-bold rounded-tl-2xl border-t border-l border-dark",
            {
              "bg-medium text-slate-50": !changeMosque,
            }
          )}
          onClick={() => {
            if (changeMosque) setChangeMosque(!changeMosque)
          }}
        >
          La Fraternité
        </p>
        <p
          className={clsx(
            "grow p-3 cursor-pointer text-center font-bold rounded-tr-2xl border-t border-r border-dark",
            {
              "bg-medium text-slate-50": changeMosque,
            }
          )}
          onClick={() => {
            if (!changeMosque) setChangeMosque(!changeMosque)
          }}
        >
          Al Ansar
        </p>
      </div>
      <div className="relative pb-5">
        <div className="xl:hidden">
          <div
            className={clsx("absolute top-0 left-0 right-0 bottom-0", {
              "z-20": !changeMosque,
            })}
          >
            <iframe
              src="https://mawaqit.net/en/m/mosquee-de-la-fraternite-aubervilliers?showNotification=0&showSearchButton=0&showFooter=0&showFlashMessage=0&view=mobile"
              className="mobile w-full rounded-b-2xl h-[550px]"
              scrolling="no"
            ></iframe>
          </div>
          <div
            className={clsx("absolute top-0 left-0 right-0 bottom-0", {
              "z-20": changeMosque,
            })}
          >
            <iframe
              src="https://mawaqit.net/en/m/mosquee-al-ansar-aubervilliers?showNotification=0&showSearchButton=0&showFooter=0&showFlashMessage=0&view=mobile"
              className="mobile w-full rounded-b-2xl h-[550px]"
              scrolling="no"
            ></iframe>
          </div>
        </div>
        <div className="hidden xl:block">
          <div
            className={clsx("absolute top-0 left-0 right-0", {
              "z-20": !changeMosque,
            })}
          >
            <iframe
              src="https://mawaqit.net/en/w/mosquee-de-la-fraternite-aubervilliers?showOnly5PrayerTimes=0"
              className="mawaqit w-full rounded-b-2xl h-[600px]"
            />
          </div>
          <div
            className={clsx("absolute top-0 left-0 right-0", {
              "z-20": changeMosque,
            })}
          >
            <iframe
              src="https://mawaqit.net/en/w/mosquee-al-ansar-aubervilliers?showOnly5PrayerTimes=0"
              className="mawaqit w-full rounded-b-2xl h-[600px]"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
