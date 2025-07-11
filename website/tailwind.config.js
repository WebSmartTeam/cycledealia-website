/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0B2C3D',
        'accent-yellow': '#FFC72C',
        'background': '#F5F5F5',
        'text-body': '#2C2C2C',
        'link-cta': '#007BBA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}