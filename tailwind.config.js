/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors that will work in both light/dark modes
        primary: {
          light: '#2563eb', // blue-600
          dark: '#3b82f6',  // blue-500
        },
        background: {
          light: '#f3f4f6', // gray-100
          dark: '#111827',  // gray-900
        },
      },
      animation: {
        // For your icon hover animations
        'bounce-slow': 'bounce 1.5s infinite',
        'pulse-slow': 'pulse 2s infinite',
      },
      transitionProperty: {
        // For smooth theme transitions
        'colors': 'background-color, border-color, color, fill, stroke',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Optional: for better form styling
    require('@tailwindcss/typography'), // Optional: for prose content
  ],
}