import { FaCloudMoon, FaMoon } from "react-icons/fa"
import {
  IoIosCloud as Cloud,
  IoIosPartlySunny as PartlySunny,
} from "react-icons/io"
import { IoRainySharp as Rain } from "react-icons/io5"
import { MdSunny as Sun } from "react-icons/md"
import { convertSecondsToHoursMinutes, fetchWeather } from "../lib/weather"

export default async function Weather() {
  const { current, daily } = await fetchWeather()
  const { time, temperature2m, isDay, rain, cloudCover } = current
  const {
    temperature2mMax: tempMax,
    temperature2mMin: tempMin,
    daylightDuration,
  } = daily
  const WeatherIcon =
    cloudCover >= 0 && cloudCover <= 20 && isDay
      ? Sun
      : cloudCover >= 0 && cloudCover <= 20 && !isDay
      ? FaMoon
      : cloudCover > 20 && cloudCover < 70 && isDay
      ? PartlySunny
      : cloudCover > 20 && cloudCover <= 70 && !isDay
      ? FaCloudMoon
      : cloudCover > 70 && rain > 0.4
      ? Rain
      : cloudCover > 70 && !isDay
      ? FaCloudMoon
      : Cloud

  return (
    <div className="bg-medium text-slate-100 p-3 rounded-lg w-full hidden md:block">
      <div className="flex justify-between mb-4">
        <p>{`${temperature2m.toFixed(1)} °C`}</p>
        {WeatherIcon === Sun ? (
          <WeatherIcon
            color="yellow"
            size={50}
            className="p-1 bg-primary rounded-b-2xl rounded-tl-2xl"
          />
        ) : (
          <WeatherIcon
            size={50}
            className="p-1 bg-primary text-dark rounded-b-2xl rounded-tl-2xl"
          />
        )}
      </div>
      <div className="flex justify-between">
        <p>{`${tempMax[0].toFixed(1)} °C max`}</p>
        <p>{`${tempMin[0].toFixed(1)} °C min`}</p>
      </div>
      <p>Aubervilliers</p>
      <p>{time.toLocaleDateString("fr-FR")}</p>
      <p className="hidden lg:block">{`Pluie : ${rain.toFixed(1)} mm`}</p>
      <p className="hidden lg:block">{`Nuages : ${cloudCover.toFixed(1)} %`}</p>
      <p>{`Duree du jour : ${convertSecondsToHoursMinutes(
        daylightDuration[0]
      )}`}</p>
    </div>
  )
}
