module.exports = {
  content: [
    "./dist/*.html",
    "./dist/js/*.js"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px'
    },
    container: {
      center: true
    },
    extend: {
      spacing: {
        0.75: '3px',
        1.75: '7px',
        2.25: '9px',
        2.5: '10px',
        2.75: '11px',
        3.25: '13px',
        3.5: '14px',
        3.65: '14.6px',
        4.5: '18px',
        4.75: '19px',
        5.4325: '21.73px',
        5.75: '23px',
        6.25: '25px',
        6.5: '26px',
        6.75: '27px',
        7.25: '29px',
        7.5: '30px',
        8.25: '33px',
        8.5: '34px',
        9.75: '39px',
        12.5: '50px',
        14.5: '58px'
      },
      fontFamily: {
        'nunito-sans': "'Nunito Sans', sans-serif"
      },
      fontSize: {
        '40': '40px',
        '56': '56px'
      },
      lineHeight: {
        12: '48px',
        16: '64px',
        20: '80px'
      },
      opacity: {
        '29.51': '0.2951',
        '49.56': '0.4956'
      },
      letterSpacing: {
        '1': '1px'
      },
      height: {
        0.5: '2px',
        219.75: '879px'
      },
      width: {
        110.5: '442px'
      },
      borderRadius: {
        '15': '15px'
      },
      colors: {
        '2c4664': '#2c4664',
        '333333': '#333333',
        'c8ff8c': '#c8ff8c',
        '21364e': '#21364e',
        '192c42': '#192c42'
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '668px'
          },
          '@screen md': {
            maxWidth: '796px'
          },
          '@screen lg': {
            maxWidth: '1052px'
          },
          '@screen xl': {
            maxWidth: '1198px'
          },
          '@screen 2xl': {
            maxWidth: '1198px'
          },
        }
      })
    }
  ],
}