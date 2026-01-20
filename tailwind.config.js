/** @type {import('tailwindcss').Config} */
import colors from './src/styles/colors.js';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: colors.primary,
        accent: colors.accent,
        background: colors.background,
        text: colors.text,
        border: colors.border,
        success: colors.success,
        warning: colors.warning,
        error: colors.error,
        info: colors.info,
      },
    },
  },
  plugins: [],
}

