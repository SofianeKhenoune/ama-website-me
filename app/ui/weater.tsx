"use client"
import { useEffect, useState } from "react"
import { FaCloudMoon, FaMoon } from "react-icons/fa"
import {
  IoIosCloud as Cloud,
  IoIosPartlySunny as PartlySunny,
} from "react-icons/io"
import { IoRainySharp as Rain } from "react-icons/io5"
import { MdSunny as Sun } from "react-icons/md"
import { convertSecondsToHoursMinutes, fetchWeather } from "../lib/weather"

export default function Weather() {
  const [tempData, setTempData] = useState({
    time: "",
    temperature2m: 0,
    isDay: 0,
    tempMax: 0,
    tempMin: 0,
    rain: 0,
    cloudCover: 0,
    daylightDuration: 0,
    WeatherIcon: Sun,
  })
  const [isLoading, setIsLoading] = useState(true)
  const getTempObject = async () => {
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
    return {
      time: time.toLocaleDateString("fr-FR"),
      temperature2m,
      isDay,
      tempMax: tempMax[0],
      tempMin: tempMin[0],
      rain,
      cloudCover,
      daylightDuration: daylightDuration[0],
      WeatherIcon,
    }
  }
  useEffect(() => {
    const data = async () =>
      await getTempObject().then((data) => {
        setTempData(data)
        setIsLoading(false)
      })
    data()
  }, [])

  return (
    <div className="bg-medium text-slate-100 p-3 rounded-lg w-full hidden md:block">
      {!isLoading ? (
        <>
          <div className="flex justify-between mb-4">
            <p>{`${tempData.temperature2m.toFixed(1)} °C`}</p>
            {tempData.WeatherIcon === Sun ? (
              <tempData.WeatherIcon
                color="yellow"
                size={50}
                className="p-1 bg-primary rounded-b-2xl rounded-tl-2xl"
              />
            ) : (
              <tempData.WeatherIcon
                size={50}
                className="p-1 bg-primary text-dark rounded-b-2xl rounded-tl-2xl"
              />
            )}
          </div>
          <div className="flex justify-between">
            <p>{`${tempData.tempMax.toFixed(1)} °C max`}</p>
            <p>{`${tempData.tempMin.toFixed(1)} °C min`}</p>
          </div>
          <p>Aubervilliers</p>
          <p>{tempData.time}</p>
          <p className="hidden lg:block">{`Pluie : ${tempData.rain.toFixed(
            1
          )} mm`}</p>
          <p className="hidden lg:block">{`Nuages : ${tempData.cloudCover.toFixed(
            1
          )} %`}</p>
          <p>{`Duree du jour : ${convertSecondsToHoursMinutes(
            tempData.daylightDuration
          )}`}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
