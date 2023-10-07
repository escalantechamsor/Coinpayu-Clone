/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        desk: "url('./img/desk.jpg')",
        coding: "url('./img/coding.jpg')",
        arq: "url('./img/arq.jpg')",
        hands: "url('./img/hands.jpg')",
        pared: "url('./img/pared.jpg')",
        white: "url('./img/white.jpg')",
        ny: "url('./img/ny.jpg')",
        coinpayu: "url('./img/coinpayu.jpng')",
        money: "url('./img/money.jpng')",
        carrito: "url('./img/carrito.jpng')",
        referal: "url('./img/referal.jpng')",
        uss: "url('./img/uss.jpng')",
      },
    },
  },
  plugins: [],
};
