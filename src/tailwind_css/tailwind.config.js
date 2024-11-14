/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../../dis/markup/*.html"],
  theme: {
    extend: {
      boxShadow: {
        customDropshadow: '0 4px 0px rgb(120 120 120 / 84%)', // Custom drop-shadow
      },
    },
  },
  plugins: [],
}

