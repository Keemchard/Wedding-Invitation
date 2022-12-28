/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "brown",
        secondary: "gray",
        tertiary: "salmon",
        wd_coffee: "#7F5946",
        wd_mikado_yellow: "#FFC301",
        wd_dark_siena: "#320300",
      },
    },
  },
  plugins: [],
};
