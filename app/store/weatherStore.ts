import { create } from "zustand"

interface WeatherIcon {
  icon: string
  setIcon: (icon: string) => void
}

export const useWeatherStore = create<WeatherIcon>((set) => ({
  icon: "Sun",
  setIcon: (icon: string) => set({ icon: icon }),
}))
