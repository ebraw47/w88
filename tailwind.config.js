/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
        logo: ['var(--font-logo)', 'Chakra Petch', 'sans-serif'],
      },
      colors: {
        // W88 official — charcoal dark / gold / sky blue
        primary: '#1f1f1f',
        secondary: '#2c2c2c',
        accent: '#fbdf03',
        cyan: '#6eb5e0',
      },
    },
  },
  plugins: [],
}
