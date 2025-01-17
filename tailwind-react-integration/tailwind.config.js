/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Example: Add custom colors
        secondary: "#9333EA",
      },
    },
  },
  darkMode: "class", // Optional: Use "class" for manual dark mode
  plugins: [], // Add plugins here if needed
};

