/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Petrol = die Software arbeitet */
        brand: {
          50:  '#f2faf8',
          100: '#e5f1ef',
          200: '#cfe6e1',
          300: '#b8d6d1',
          400: '#83b9b4',
          500: '#2a8d88',
          600: '#176b68',
          700: '#125c59',
          800: '#123f3d',
          900: '#102c2b',
          950: '#0b211f',
        },
        /* Gold = ein Mensch muss entscheiden */
        approve: {
          50:  '#fdf6e3',
          100: '#fbeecd',
          300: '#e2bd60',
          600: '#b8860b',
          /* 700: Icons und Text auf approve-50 mit ausreichendem Kontrast (ca. 4,4:1) */
          700: '#946c09',
          800: '#7a5c07',
        },
        ink: '#102322',
        offwhite: '#f8faf9',
        /* Petrol-Variante (Option A): Petrol = ANVERO handelt, Gold = Ihr Team handelt.
           Kontraste (ca.): petrol auf weiss 7,8:1 · gold auf gold-tint 5,0:1 · muted auf paper 5,3:1 */
        av: {
          paper: '#FAFAF7',
          ink: '#0E1F1E',
          body: '#3D4B4A',
          muted: '#5E6B6A',
          line: '#E3E6E3',
          petrol: '#0F5C58',
          'petrol-dark': '#0B4744',
          'petrol-tint': '#E8F0EE',
          gold: '#8A5A0B',
          'gold-tint': '#F6EBD3',
          night: '#0F2928',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
