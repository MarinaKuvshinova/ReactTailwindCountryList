/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      aspectRatio: {
        '4/2.6': '4 / 2.6',
      },
      boxShadow: {
        'xxs': '0 0 5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins:[]
}

