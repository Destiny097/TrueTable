/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scans all React files for Tailwind classes
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        bitcount : ["Bitcount Prop Single Ink"]
      },
    },
  },
  plugins: [],
}
