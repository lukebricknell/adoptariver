/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./public/**/*.{html,js}",
    "./public/script.js",
  ],
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
      borderWidth: {
        1: "1px",
      },
      backgroundImage: {
        tufbag:
          "linear-gradient(to right bottom, rgba(0,0,0, 0.3), rgba(0,0,0, 0.3)), url('./public/images/tufbag.png')",
      },
    },
    plugins: [],
  },
};
