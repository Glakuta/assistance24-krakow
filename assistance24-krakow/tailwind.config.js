/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter']

    },
    colors: {
      'primary-bg': '#F9F6EE',
      'primary-yellow': '#FFCC01',
      'white': '#FFFFFf',
      'blue': '#0084FF',
      'grey': '#323232',
      'black': '#000000'
    },

    backgroundImage: {
      'hero': "url('/image8.webp')",
    },
  },
  plugins: [],
}