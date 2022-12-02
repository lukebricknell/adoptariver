/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./public/**/*.{html,js}"],
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
          "url('../public/images/tufbag.png'), linear-gradient(to left, rgb(0,0,0,0.2), rgb(0,0,0,0.2))",
        "black-hover":
          "linear-gradient(to left, rgb(0,0,0,0.2), rgb(0,0,0,0.2))",
      },
    },
    plugins: [],
  },
};
