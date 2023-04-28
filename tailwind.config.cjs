/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        // kanit: ["Kanit", "sans-serif"],
        // maitree: ["Maitree", "serif"],
        bitter: ["Bitter", "serif"],
        worksans: ["Work Sans", "sans-serif"],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': colors.black,
      'white': colors.white,
      'gray': colors.gray,
      'blue': colors.blue,
      'yellow': colors.yellow,
      'indigo': colors.indigo,
      'pink': colors.pink,
      'purple': colors.purple,
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#07D58A",       
          "secondary": "#F000B8",      
          "accent": "#37CDBE",      
          "neutral": "#3D4451",     
          "base-100": "#FFFFFF",     
          "info": "#3ABFF8",     
          "success": "#36D399",     
          "warning": "#FBBD23",     
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
