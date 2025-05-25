/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'kong-red': '#E50914',
        'kong-black': {
          900: '#121212',
          800: '#1A1A1A',
          700: '#222222',
          600: '#2A2A2A',
        },
        'kong-gray': {
          300: '#D1D1D1',
          200: '#E0E0E0',
          100: '#F5F5F5',
        }
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg')",
        'about-pattern': "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg')",
        'cta-pattern': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/28080/pexels-photo.jpg')",
      },
      height: {
        'screen-90': '90vh',
      }
    },
  },
  plugins: [],
}