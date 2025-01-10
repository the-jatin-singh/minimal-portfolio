/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightTxt: '#b1b1b1',
        darkTxt: '#333333',
        highlighter: '#EDE6FE',
        highlightedTxt: '#31313196',
      },
    },
  },
  plugins: [],
};
