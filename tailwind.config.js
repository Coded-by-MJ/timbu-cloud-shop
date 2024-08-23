/** @type {import('tailwindcss').Config} */

import scrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          sans: ['Helvetica', 'Arial', 'sans-serif']
        },
        colors: {
         'primary' : "#F5F5F5",
          'navy': "#0F1D40",
          'footer': "#DFE3E8"
        },
        keyframes: {
          alertIn: {
            to: { 
              transform: 'translate(-50%, 0)', 
              opacity: '1', 
            },
          },
          notifyIn: {
            to: { 
              transform: 'translate(-50%, 400%)', 
              opacity: '1', 
            },
          },
  
        },
        animation: {
          alertIn: 'alertIn 0.4s ease-in-out forwards',  
          notifyIn: 'notifyIn 0.3s ease-in-out forwards', 
        },
        gridTemplateColumns: {
          'auto-mobile': 'repeat(auto-fill, 180px)',
          'auto-desktop': 'repeat(auto-fill, 415px)',
        },
        boxShadow:{
           'inner':  "6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff",
        }
  },
  },
  plugins: [
    scrollbar,
  ],

}
