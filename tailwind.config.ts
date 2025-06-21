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
        primary: '#F7C700',    // Amarillo principal
        secondary: '#174E8C',  // Azul secundario
        accent: '#EF4B3E',     // Rojo de acento/PDF
        gray: {
          50: '#F9FAFB',       // Gris claro fondo
        },
        blue: {
          900: '#174E8C',      // Para texto
        },
        yellow: {
          400: '#F7C700',
          500: '#e0b800',      // Para hover
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
