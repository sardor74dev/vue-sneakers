/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    borderRadius: {
      large: '110px',
      small: '20px'
    },
    extend: {
      colors: {
        beige: '#F4EFE9',
        green: '#8BB43C',
        buttonGreen: '#A5D364'
      },
      padding: {
        '16px': '16px',
        '20px': '20px',
        '32px': '32px',
        '61px': '61px',
        '14px': '14px',
        '42px': '42px',
        '52px': '52px'
      },
      margin: {
        '20px': '20px'
      }
    }
  },
  plugins: []
}
