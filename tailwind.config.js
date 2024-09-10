/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bgChange: {
          "0%, 100%": { backgroundColor: "#FFA6A1" }, // Red
          "25%": { backgroundColor: "#FF6961" }, // Green
          "50%": { backgroundColor: "#FFA6A1" }, // Blue
          "75%": { backgroundColor: "#FF2C21" }, // Yellow
        },
      },
      animation: {
        bgChange: "bgChange 2s infinite", // Loop every 2 seconds
      },
    },
  },
  plugins: [],
};
