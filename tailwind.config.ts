import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3a8a', // Navy blue
          dark: '#172554',
          light: '#3b82f6',
        },
        accent: {
          DEFAULT: '#06b6d4', // Turquoise
          light: '#67e8f9',
          dark: '#0891b2',
        },
        neutral: {
          light: '#f8fafc',
          gray: '#e2e8f0',
          dark: '#334155',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
