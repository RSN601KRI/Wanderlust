/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF385C',
        dark: {
          bg: '#121212',
          card: '#1E1E1E',
          text: '#E5E5E5'
        }
      },
    },
  },
  plugins: [],
};