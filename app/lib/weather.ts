import { fetchWeatherApi } from "openmeteo"

export type TempData = {
  time: string
  temperature: number
  isDay: number
  temMAx: number
  temMin: number
  rain: number
  cloudCover: number
  daylightDuration: number
}

const params = {
  latitude: 48.9072,
  longitude: 2.38,
  current: ["temperature_2m", "is_day", "rain", "cloud_cover"],
  daily: ["temperature_2m_max", "temperature_2m_min", "daylight_duration"],
  timezone: "auto",
  forecast_days: 1,
}
const url = "https://api.open-meteo.com/v1/meteofrance"

// Fetch weather data
export const fetchWeather = async () => {
  const responses = await fetchWeatherApi(url, params)

  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step)

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0]

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds()
  const timezone = response.timezone()
  const timezoneAbbreviation = response.timezoneAbbreviation()
  const latitude = response.latitude()
  const longitude = response.longitude()

  const current = response.current()!
  const daily = response.daily()!

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      isDay: current.variables(1)!.value(),
      rain: current.variables(2)!.value(),
      cloudCover: current.variables(3)!.value(),
    },
    daily: {
      time: range(
        Number(daily.time()),
        Number(daily.timeEnd()),
        daily.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      temperature2mMax: daily.variables(0)!.valuesArray()!,
      temperature2mMin: daily.variables(1)!.valuesArray()!,
      daylightDuration: daily.variables(2)!.valuesArray()!,
    },
  }

  return weatherData
}

export function convertSecondsToHoursMinutes(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const remainingSeconds = seconds % 3600
  const minutes = Math.floor(remainingSeconds / 60)
  const result = `${hours}h${minutes}`
  return result
}
