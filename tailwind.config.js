/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Space Grotesk', 'sans-serif'],
        secondary: ['Quanta Grotesk Pro', 'sans-serif']
      },  
      colors: {
        background: '#18181A',
        primary: '#542D72',
        secondary: '#A566A6',
        drakGray: '#333333',
        lightGray: '#71706C'
      }
    },

  },
  plugins: [],
}