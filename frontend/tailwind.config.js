/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#2A9DA6',  // main
        spark: '#F67608',  // accent touch
        deep: '#044F58',
        teal: '#1C7C84',
        ink: '#021A1E',    // page background (darkened from deep)
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        drift: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(40px,-30px) scale(1.12)' },
        },
        spin: { to: { transform: 'rotate(360deg)' } },
        pulseDot: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.4 } },
      },
      animation: {
        drift: 'drift 16s ease-in-out infinite',
        orbit: 'spin 14s linear infinite',
        ring: 'spin 22s linear infinite',
        pulseDot: 'pulseDot 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
