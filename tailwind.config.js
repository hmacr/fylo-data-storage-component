import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    colors: {
      'pale-blue': 'hsl(243, 100%, 93%)',
      'grayish-blue': 'hsl(229, 7%, 55%)',
      'dark-blue': 'hsl(228, 56%, 26%)',
      'very-dark-blue': 'hsl(229, 57%, 11%)',
      'soft-orange': 'hsl(6, 100%, 80%)',
      'soft-pink': 'hsl(335, 100%, 65%)',
      white: 'hsl(0, 0%, 100%)',
      transparent: 'hsla(0, 0%, 100%, 0)',
    },
    fontFamily: {
      raleway: ['Raleway', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        'body-desktop': "url('/images/bg-desktop.png')",
        'body-mobile': "url('/images/bg-mobile.png')",
      },
    },
  },
};
