/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        wave: "wave 20s linear infinite",
      },
      keyframes: {
        wave: {
          "0%": {
            "background-position": "200% center",
          },
          "100%": {
            "background-position": "-200% center",
          },
        },
      },
      backgroundImage: {
        "gradient-wave": "linear-gradient(90deg, rgba(13, 130, 136, 0) 0%, teal 50%, rgba(252, 11, 11, 0) 100%)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};