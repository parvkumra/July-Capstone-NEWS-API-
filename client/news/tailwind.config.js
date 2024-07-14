/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        parv:["Playwrite CL", 'cursive'],
        nishu:["Noto Sans", 'sans-serif'],
      }
    },
  },
  plugins: [],
};