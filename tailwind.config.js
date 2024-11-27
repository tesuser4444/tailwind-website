/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      keyframes:{
        slideDown:{
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out',
      },
      colors:{
        primary: '#FF6363',
        secondary:{
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontFamily:{
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}

