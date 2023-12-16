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
        sideNavColor: "hsla(220,32%,90%,0.9)",
        primary: "hsla(220,32%,90%,1)",
        light: "hsla(220,32%,40%,1)",
        dark: "hsla(234, 84%, 10%,1)",
        medium: "hsla(215, 50%, 15%,1)",
        button: "hsla(82, 100%,20%,1)",
        buttonHover: "hsla(215, 50%, 70%,1)",
      },
      fontSize: {
        title1: "calc(1vw + 1vh + 2vmin)",
        title2: "calc(1vw + 1vh + 0.8vmin)",
        para: "calc(1vh + 1vmin)",
      },
    },
  },
  plugins: [],
}
export default config
