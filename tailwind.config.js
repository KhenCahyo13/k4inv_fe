/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif']
    },
    extend: {
      colors: {
        'form-100': '#91BCE5',
        'form-200': '#7FA5C9',
        'cream-100': '#FEFCF3',
        'cream-200': '#F5EBE0',
        'sidebar-100': '#5584AC',
      },
    },
  },
  plugins: [],
}