/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        bluergb: {
          DEFAULT: "rgb(33 150 243)",
          15: "rgb(33 150 243 / 15%)",
          50: "rgb(33 150 243 / 50%)",
          60: "rgb(33 150 243 / 60%)",
          80: "rgb(33 150 243 / 80%)",
        },
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      fontFamily: {
        "source-code-pro": '"Source Code Pro", monospace',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
