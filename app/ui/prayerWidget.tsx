import clsx from "clsx"
import { useState } from "react"

export default function PrayerWidget() {
  const [changeMosque, setChangeMosque] = useState(false)
  return (
    <div>
      <div
        className={clsx("absolute top-0 left-0 right-0 bottom-0", {
          "z-20": !changeMosque,
        })}
      >
        <iframe
          src="https://mawaqit.net/en/m/mosquee-de-la-fraternite-aubervilliers?showNotification=0&showSearchButton=0&showFooter=0&showFlashMessage=0&view=mobile"
          className="mobile w-full rounded-b-2xl h-[550px] z-20"
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
          className="mobile w-full rounded-b-2xl h-[550px] z-20"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  )
}
