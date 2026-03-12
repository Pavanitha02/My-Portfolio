export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Slate 900
        secondary: "#1e293b", // Slate 800
        accent: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
