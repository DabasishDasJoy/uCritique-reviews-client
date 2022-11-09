const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#00B3CC",
      secondary: "#005b88",
      tertiary: "#0087AA",
      textPrimary: "#000A38",
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      bree: ["Bree Serif", "serif"],
      merriweather: ["Merriweather", "serif"],
    },
  },
  plugins: [],
});
