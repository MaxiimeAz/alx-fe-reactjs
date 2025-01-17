/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Files to scan for Tailwind classes
  theme: {
    extend: {}, // Customize your theme (e.g., add new colors or spacing)
  },
  darkMode: "class", // Optional: Use "class" for manual dark mode toggling
  plugins: [], // Add Tailwind plugins here (if needed)
};
