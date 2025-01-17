/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Backward compatibility
  variants: {
    extend: {}, // Add custom variants here if needed
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Used by v3.x
  theme: {
    extend: {},
  },
  darkMode: "class", // Optional: Use "class" for manual dark mode toggling
  plugins: [],
};
