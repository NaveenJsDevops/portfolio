/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#090d16",
        primaryLight: "#f8fafc",
        cardDark: "#0f172a",
        cardBorder: "#1e293b",
        dimWhite: "rgba(226, 232, 240, 0.8)",
        brand: {
          blue: "#3b82f6",
          indigo: "#6366f1",
          purple: "#8b5cf6",
          cyan: "#06b6d4",
          teal: "#14b8a6",
          emerald: "#10b981",
          amber: "#f59e0b",
          rose: "#f43f5e",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        wave: "wave 12s linear infinite",
        float: "float 4s ease-in-out infinite",
        pulseSlow: "pulse 6s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "0%": { "background-position": "200% center" },
          "100%": { "background-position": "-200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      boxShadow: {
        "glass-light": "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glow-indigo": "0 0 30px -5px rgba(99, 102, 241, 0.25)",
        "glow-cyan": "0 0 30px -5px rgba(6, 182, 212, 0.25)",
        "glow-emerald": "0 0 30px -5px rgba(16, 185, 129, 0.25)",
      },
      backgroundImage: {
        "gradient-rainbow": "linear-gradient(135deg, #6366f1 0%, #06b6d4 50%, #10b981 100%)",
        "gradient-sunset": "linear-gradient(135deg, #f43f5e 0%, #8b5cf6 50%, #3b82f6 100%)",
        "gradient-aurora": "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)",
        "gradient-wave": "linear-gradient(90deg, #6366f1 0%, #06b6d4 35%, #10b981 70%, #8b5cf6 100%)",
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