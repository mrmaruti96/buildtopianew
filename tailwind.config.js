/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--primary-rgb))',
          '20': 'rgba(var(--primary-rgb), 0.2)',
          '30': 'rgba(var(--primary-rgb), 0.3)',
          '50': 'rgba(var(--primary-rgb), 0.5)',
          '70': 'rgba(var(--primary-rgb), 0.7)',
          '80': 'rgba(var(--primary-rgb), 0.8)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary-rgb))',
          '20': 'rgba(var(--secondary-rgb), 0.2)',
          '30': 'rgba(var(--secondary-rgb), 0.3)',
          '50': 'rgba(var(--secondary-rgb), 0.5)',
          '70': 'rgba(var(--secondary-rgb), 0.7)',
        },
        tertiary: {
          DEFAULT: 'rgb(var(--tertiary-rgb))',
          '20': 'rgba(var(--tertiary-rgb), 0.2)',
          '30': 'rgba(var(--tertiary-rgb), 0.3)',
          '50': 'rgba(var(--tertiary-rgb), 0.5)',
          '70': 'rgba(var(--tertiary-rgb), 0.7)',
        },
        background: 'var(--background)',
        'dark-blue': 'var(--dark-blue)',
        'light-blue': 'var(--light-blue)',
        'dark-orange': 'var(--dark-orange)',
      }
    },
  },
  plugins: [],
}
