import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "hsla(193, 20%, 80%,1)",
        dark: "hsla(199, 26%, 20%,1)",
        medium: "hsla(188, 76%, 31%,1)",
        button: "hsla(192, 24%, 60%,1)",
        buttonHover: "hsla(209, 19%, 56%,1)",
      },
      fontSize: {
        title1: "calc(1vw + 1vh + 1vmin)",
        title2: "calc(1vw + 1vh + 0.8vmin)",
        para: "calc(1vh + 1vmin)",
      },
    },
  },
  plugins: [],
}
export default config
