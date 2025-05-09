/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "olive-green": "#606c38",  /* A muted green */
        "dark-green": "#283618",  /* A deep forest green */
        "off-white": "#fefaed",   /* A soft off-white */
        "warm-yellow": "#dda15e", /* A warm earthy yellow */
        "burnt-orange": "#b65f36",  /* A rich burnt orange */
        "peach-orange": "#f29367",  /* A soft peach orange */
        "light-cream": "#ffca9b", 
      },
      fontSize: {
        "h1-font-size": "3.5rem",
        "h2-font-size": "2.25rem",
        "h3-font-size": "1.75rem",
        "normal-font-size": "1rem",
      },
    },
  },
  
  plugins: [],
};
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        typing: 'typing 3s steps(30, end) forwards',
        blink: 'blink 0.75s step-end infinite',
      },
    },
  },
  plugins: [],
};

