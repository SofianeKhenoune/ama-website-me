import { fetchWeatherApi } from "openmeteo"

export type TempData = {
  time: string
  temperature: number
  isDay: number
  temMAx: number
  temMin: number
  rain: number
  cloudCover: number
  sunrise: any
  sunset: any
  daylightDuration: number
}

export type WeatherData = TempData[]

const params = {
  latitude: 48.9058,
  longitude: 2.3824,
  current: ["temperature_2m", "is_day", "rain"],
  hourly: ["temperature_2m", "rain", "cloud_cover", "is_day"],
  daily: [
    "temperature_2m_max",
    "temperature_2m_min",
    "sunrise",
    "sunset",
    "daylight_duration",
  ],
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
  const hourly = response.hourly()!
  const daily = response.daily()!

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      isDay: current.variables(1)!.value(),
      rain: current.variables(2)!.value(),
    },
    hourly: {
      time: range(
        Number(hourly.time()),
        Number(hourly.timeEnd()),
        hourly.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      temperature2m: hourly.variables(0)!.valuesArray()!,
      rain: hourly.variables(1)!.valuesArray()!,
      cloudCover: hourly.variables(2)!.valuesArray()!,
      isDay: hourly.variables(3)!.valuesArray()!,
    },
    daily: {
      time: range(
        Number(daily.time()),
        Number(daily.timeEnd()),
        daily.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      temperature2mMax: daily.variables(0)!.valuesArray()!,
      temperature2mMin: daily.variables(1)!.valuesArray()!,
      sunrise: daily.variables(2)!.valuesArray()!,
      sunset: daily.variables(3)!.valuesArray()!,
      daylightDuration: daily.variables(4)!.valuesArray()!,
    },
  }

  // `weatherData` now contains a simple structure with arrays for datetime and weather data
  let data: WeatherData = []
  for (let i = 0; i < weatherData.hourly.time.length; i++) {
    data.push({
      time: weatherData.hourly.time[i].toLocaleString(),
      temperature: weatherData.hourly.temperature2m[i],
      temMAx: weatherData.daily.temperature2mMax[0],
      temMin: weatherData.daily.temperature2mMin[0],
      rain: weatherData.hourly.rain[i],
      isDay: weatherData.hourly.isDay[i],
      cloudCover: weatherData.hourly.cloudCover[i],
      sunrise: weatherData.daily.sunrise,
      sunset: weatherData.daily.sunset,
      daylightDuration: weatherData.daily.daylightDuration[0],
    })
  }
  return data
}

export const getCurrentTimeObject = async (data: any) => {
  const now = new Date().toLocaleString().split(":")[0]
  let currentTimeObject: {
    time: string
    temperature: number
    isDay: number
  } = {
    time: "",
    temperature: 0,
    isDay: 1,
  }
  for (let index = 0; index < data.length; index++) {
    if (data) {
      currentTimeObject = data.find(
        (el: { time: string; temperature: number; isDay: number }) =>
          el.time.split(":")[0] === now
      ) || {
        time: "",
        temperature: 0,
        isDay: 1,
      }
    }
  }
  currentTimeObject.time = new Date(currentTimeObject.time).toLocaleDateString()
  return currentTimeObject
}

export function convertSecondsToHoursMinutes(seconds: number): string {
  const hours = Math.floor(seconds / 3600) // Calcul des heures
  const remainingSeconds = seconds % 3600 // Secondes restantes après la conversion en heures
  const minutes = Math.floor(remainingSeconds / 60) // Calcul des minutes

  // Construction de la chaîne de caractères avec un template string
  const result = `${hours}h${minutes}`

  return result
}
