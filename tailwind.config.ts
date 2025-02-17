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
        'primary-lighter': '#758357',
        'primary-darker': '#5a6740',
        secondary: '#A4B465',
        'secondary-lighter': '#b3c373',
        'secondary-darker': '#98a75a',
        tertiary: '#FFCF50',
        'tertiary-lighter': '#ffd669',
        'tertiary-darker': '#f2c344',
        quaternary: '#FEFAE0',
        'quaternary-lighter': '#fffef4',
        'quaternary-darker': '#f6f2d2',
        alert: '#E07A5F',
        'alert-lighter': '#f08b71',
        'alert-darker': '#db7459',
      },
    },
  },
  plugins: [],
} satisfies Config
