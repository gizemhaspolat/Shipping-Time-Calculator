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
    plugins: [
      plugin(function ({ matchUtilities, theme }) {
        matchUtilities(
          {
            "bg-gradient": (angle) => ({
              "background-image": `linear-gradient(to ${angle}, var(--tw-gradient-stops))`,
            }),
          },
          {
            values: theme("bgGradientDeg"),
          }
        );
      }),
    ],
  },
};
