/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inconsolata", "monospace", ...defaultTheme.fontFamily.sans],
        karla: ["Karla", "sans-serif", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        dgreen: {
          100: "#b9c5c2",
          200: "#9eaea9",
          300: "#829791",
          400: "#687d78",
          500: "#51615d",
          600: "#3a4543",
          700: "#232a28",
        },
        pista: {
          100: "#d9d2df",
          200: "#c0b5ca",
          300: "#a797b5",
          400: "#a797b5",
          500: "#746086",
        },
        gray: {
          100: "#d8d8da",
          200: "#bebec1",
          300: "#bebec1",
          400: "#bebec1",
          500: "#bebec1",
        },
      },
    },
  },
  plugins: [],
};
