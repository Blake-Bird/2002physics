/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          900: "#050814",
          800: "#090d1f",
          700: "#0f1629",
        },
        accent: {
          blue: "#38bdf8",
          purple: "#a855f7",
          pink: "#ec4899",
          gold: "#fbbf24",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.35)",
      },
    },
  },
  plugins: [],
};
