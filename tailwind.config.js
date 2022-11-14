/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        adopt: {
          light: "#4a8ac0",
          DEFAULT: "#1D6DB0",
          dark: "#17578d",
        },
        transparent: "transparent",
      },
    },
  },
  plugins: [],
};
