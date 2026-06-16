/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Brand
        indigo: {
          DEFAULT: '#42389E', // primary
          deep: '#171438', // dashboard gradient end
        },
        accent: '#F9A71E', // orange
        ink: '#1A1A2E', // dark headings / body
        // Neutrals from Figma
        body: '#5D5C5C',
        muted: '#868585',
        slate: {
          label: '#90A1B9',
        },
        // Tints
        tint: {
          indigo: '#EAE9F5',
          orange: '#FDF5E9',
          green: '#EEFAEC',
          step: '#F5F4F4',
          lav: '#EAE9F5', // footer base
        },
        line: '#E5E7EB',
        success: '#24BD2E',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"DM Sans"', 'Inter', 'sans-serif'],
        sora: ['Sora', '"DM Sans"', 'sans-serif'],
        mont: ['Montserrat', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '1680px',
      },
    },
  },
  plugins: [],
}
