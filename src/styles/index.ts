import { createStitches } from '@stitches/react';

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',

      gray900: "#121214",
      gray800: '#202024',
      gray500: '#828282',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',
      gray50: '#F2F2F2',

      green500: '#00875f',
      green300: '#00b37e',

      purple500: '#5F49BF',
      purple400: '#3766F4',
      purple375: '#8072E0',
      purple350: '#81A4FF',
      purple300: '#DFB5FF',
      purple100: '#F6EAFF',


    },

    fontSizes: {
      ssm: '0.75rem',
      sm: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },

  media: {
    bp001: '(max-width: 330px)',
    bp01: '(max-width: 380px)',
    bp02: '(max-width: 425px)',
    bp1: '(max-width: 640px)',
    bp2: '(max-width: 768px)',
    bp3: '(max-width: 1024px)',
    bp4: '(max-width: 1250px)',
    bp5: '(max-width: 1300px)',
    bp6: '(max-width: 1440px)',
  },
});