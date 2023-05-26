/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,md}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
