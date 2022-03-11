const { spacing, fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js",
    "./layouts/**/*.js",
    "./safelist.txt",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "blue-opaque": "rgb(13 42 148 / 18%)",
        cyan: colors.cyan,
      },
      boxShadow: {
        custom: "3px 3px 0px 0px rgba(33,33,33)",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  }
};
