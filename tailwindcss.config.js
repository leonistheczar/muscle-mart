/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#023047",       
        secondary: "#78d1fb",     
        accent: "#fcc230",
        main: "#212121",        
        background: "#f8f9fa",  
      },
    },
  },
  plugins: [],
}
