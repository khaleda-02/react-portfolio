/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "navy" : "#0a192f" , 
        "green" : "#64ffda",
        "dark-navy" : "#020c1b",
        "light-navy" : "#112240",
        "navy-shadow" : "rgba(2,12,27,0.7)",
        "slate" : "#8892b0",
        "white" : "#e6f1ff",
        "blue" : "#57cbff",
        "green-tint" : "rgba(100,255,218,0.1)",
      }
    },
  },
  plugins: [],
}