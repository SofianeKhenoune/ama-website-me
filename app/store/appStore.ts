import { create } from "zustand"

type WeatherIcon = {
  icon: string
  setIcon: (icon: string) => void
}

export const useWeatherStore = create<WeatherIcon>((set) => ({
  icon: "Sun",
  setIcon: (icon: string) => set({ icon: icon }),
}))
