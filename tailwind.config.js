module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        syne:"Syne",
        ubuntu:"UbuntuMono"
      },
      screens:{
        '2xl':'2000px'
        }
    },
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [],
}
