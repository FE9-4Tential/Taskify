import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-right":
          "slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
      },
      keyframes: {
        "slide-right": {
          "0%": {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(100px)",
          },
        },
      },
      colors: {
        background: "#ffffff",
        foreground: "#171717",
        "black-400": "#000",
        "black-300": " #171717",
        "black-200": "#333236",
        "black-100": "#4b4b4b",
        "gray-500": "#787486",
        "gray-400": "#9fa6b2",
        "gray-300": "#d9d9d9",
        "gray-200": "#eeeeee",
        "grat-100": "#fafafa",
        white: "#ffffff",
        violet: "#5534da",
        "violet-8": "#f1effd",
        red: "#d6173a",
        green: "#7ac555",
        purple: "#760dde",
        orange: "#ffa500",
        blue: "#76a5ea",
        pink: "#e876ea",
      },
    },
  },
  plugins: [],
};
export default config;
