/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ebony: {
          50: '#f6f6f6',
          100: '#e7e7e8',
          200: '#c3c4c7',
          300: '#8b8e94',
          400: '#585c63',
          500: '#30343a',
          600: '#25282e',
          700: '#1e2025',
          DEFAULT: '#111827', 
          900: '#111827', 
          950: '#0b0c0e',
        },
        navy: {
          50: '#f4f7fa',
          100: '#e8eef4',
          200: '#cddce9',
          300: '#a2c1da',
          400: '#6fa0c6',
          500: '#4a82b2',
          600: '#376797',
          700: '#2d537b',
          800: '#284766',
          900: '#1e3247',
          DEFAULT: '#0f1e36',
        },
        warm: {
          cream: '#fdfbf7',
          sand: '#f8fafc',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}