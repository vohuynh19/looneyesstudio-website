import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        sky_1: "url('/images/star-sky-1.png')",
        sky_2: "url('/images/star-sky-2.png')",
        sky_3: "url('/images/star-sky-3.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            primary: "#524FFF",
            // foreground: "#FFFFFF",
          }, // light theme colors
        },
      },
    }),
  ],
};
