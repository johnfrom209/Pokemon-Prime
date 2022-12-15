/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#0A2672',
          100: '#030A1C',
          200: "#06184A",
          300: "#0B3199",
          400: "#0742E4",
          500: "#066A9B",
        },
        red: {
          50: '#830000',
          100: "#1E0202",
          200: "#3D0000",
          300: "#BC0000",
          400: "#FF0000",
        },
        black: {
          50: '#000000',
        },
        white: {
          50: '#FFFFFF',
        },

      }
    },




  },
  plugins: [],
}
