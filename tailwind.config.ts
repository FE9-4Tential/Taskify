import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#171717",
        "black-400": "#000",
        "black-300": " #171717",
        " black-200": "#333236",
        " black-100": "#4b4b4b",
        " gray-500": "#787486",
        " gray-400": "#9fa6b2",
        "gray-300": "#d9d9d9",
        "gray-200": "#eeeeee",
        " grat-100": "#fafafa",
        white: "#ffffff",
        violet: "#5534da",
        "violet-8": "#f1effd",
        red: "#d6173a",
        green: "#7ac555",
        purple: "#760dde",
        orange: "#ffa500",
        blue: "#76a5ea",
        pink: "#e876ea",
        "mandy-500": "#d25b68",
        "vanillaIce-200": "#f4d7da"
      },
    },
  },
  plugins: [],
};
export default config;
