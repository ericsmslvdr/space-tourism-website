/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#0b0d17',
        'light-blue': '#d0d6f9',
        'white': '#ffffff'
      },
      // backgroundImage: {
      //   'bgHomeDesktop': ,
      //   'bgHomeTablet': ,
      //   'bgHomeMobile'
      // }
    },
    fontFamily: {
      'barlow': ['Barlow', 'sans-serif'],
      'barlow-c': ['"Barlow Condensed"', 'sans-serif'],
      'bellefair': ['Bellefair', 'serif']
    }
  },
  plugins: [],
}

