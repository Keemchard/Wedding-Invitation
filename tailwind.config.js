/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "brown",
        secondary: "gray",
        tertiary: "salmon",
      },
    },
  },
  plugins: [],
};
