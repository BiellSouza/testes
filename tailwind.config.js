/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'color-fundo': '#D9D9D9',
      },
      screens: {
        tela1: "320px",
        tela2: "375px",
        tela3: "425px",
        tela4: "640px",
        tela5: "768px",
        tela6: "1024px",
        tela7: "1280px",
        tela8: "1440px",
      },
    },
  },
  plugins: [],
}
