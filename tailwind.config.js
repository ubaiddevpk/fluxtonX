/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#0052cc",
        sec: "#FBCC14",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        dacingscript: ["Dancing Script", "cursive"],
        exo2: ["Exo 2", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        alegreya: ["Alegreya Sans SC", "sans-serif"],
      },
    },
    screens: {
      max1190: "1190px",
      max900: "900px",
      max1000: "1000px",
      max820: "820px",
      max720: "720px",
      max520: "520px",
      max400: "400px",
      max300: "300px",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
