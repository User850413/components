import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#626F47',
        secondary: '#A4B465',
        tertiary: '#FFCF50',
        quaternary: '#FEFAE0',
        alert: '#E07A5F',
      },
    },
  },
  plugins: [],
} satisfies Config
