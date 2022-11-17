/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "120px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "4600px" },
    },
  },
  darkMode: 'class'
};
