/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)"
      },
      fontSize: {
        "xl": "60px"
      },
      boxShadow: {
        'solid-white': '4px 4px 0px 0px white', // Customize the offset and spread here
      }
    },
  },
  plugins: [],
}

