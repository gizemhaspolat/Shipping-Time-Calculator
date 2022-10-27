/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      bgGradientDeg: {
        60: "60deg",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-gradient": (angle) => ({
            "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          values: Object.assign(theme("bgGradientDeg", {}), {
            60: "60deg",
            90: "90deg",
            120: "120deg",
          }),
        }
      );
    }),
  ],
};
