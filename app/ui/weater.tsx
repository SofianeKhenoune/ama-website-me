import { FaCloudMoon, FaMoon } from "react-icons/fa"
import {
  IoIosCloud as Cloud,
  IoIosPartlySunny as PartlySunny,
} from "react-icons/io"
import { IoRainySharp as Rain } from "react-icons/io5"
import { MdSunny as Sun } from "react-icons/md"
import {
  TempData,
  WeatherData,
  convertSecondsToHoursMinutes,
  fetchWeather,
  getCurrentTimeObject,
} from "../lib/weather"

export default async function Weather() {
  const data: WeatherData = await fetchWeather()
  const {
    time,
    temperature,
    isDay,
    temMAx,
    temMin,
    rain,
    cloudCover,
    sunrise,
    sunset,
    daylightDuration,
  }: TempData = await getCurrentTimeObject(data)
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
        <p>{`${temperature.toFixed(1)} °C`}</p>
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
        <p>{`${temMAx.toFixed(1)} °C max`}</p>
        <p>{`${temMin.toFixed(1)} °C min`}</p>
      </div>
      <p>Aubervilliers</p>
      <p>{time}</p>
      {/* <p>{`Pluie : ${rain.toFixed(1)} mm`}</p> */}
      {/* <p>{`Nuages : ${cloudCover.toFixed(1)} %`}</p> */}
      {sunrise && <p>{`Lever du soleil : ${sunrise}`}</p>}
      {sunset && <p>{`Sunset : ${sunset}`}</p>}
      <p>{`Duree du jour : ${convertSecondsToHoursMinutes(
        daylightDuration
      )}`}</p>
    </div>
  )
}
