/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./schemas/**/*.{js,ts}", // Add this line to include your schemas directory
  ],
  theme: {
    extend: {
      screens: {
        xs: "100px",
        se: "400px", // Custom breakpoint for 400px
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
