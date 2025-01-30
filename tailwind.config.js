/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", 
            "./public/index.html",        // Include your HTML files
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '1536px',
      }
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: '72px',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 'bold',
              letterSpacing: '-0.02em', // Mimics fontSpace: "-2%",
            },
            h2: {
              fontSize: '64px',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 'bold',
              letterSpacing: '-0.02em',
            },
            h3: {
              fontSize: '54px',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 'bold',
              letterSpacing: '-0.02em',
            },
            h4: {
              fontSize: '36px',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 'bold',
              letterSpacing: '-0.02em',
            },
            h5: {
              fontSize: '28px',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 'bold',
              letterSpacing: '-0.02em',
            },
            p: {
              fontSize: '18px',
              fontFamily: '"Inter", sans-serif',
              letterSpacing: '-0.02em',
            },
          },
        },
      },},
  },
  plugins: [require('@tailwindcss/typography')],
}

