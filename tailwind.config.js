export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'term-green': '#4af626',
            'term-bg': '#0d1117',
            'term-dark': '#001e00',
        },
        fontFamily: {
            mono: ['"Fira Code"', 'monospace'],
        },
        boxShadow: {
            'glow': '0 0 10px #4af626',
        }
    },
  },
  plugins: [],
}
