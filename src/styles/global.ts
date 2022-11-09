import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  html: {
    scrollBehavior: 'smooth',
  },

  a: {
    textDecoration: 'none',
  },

  button: {
    cursor: 'pointer',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100',

    /* width */
  '&::-webkit-scrollbar': {
    width: 20,
  },

/* Track */
  '&::-webkit-scrollbar-track': {
    background: '$gray900',
  },

/* Handle */
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$purple500',
    borderRadius: 25,
    border: '8px solid $gray900'
  },

/* Handle on hover */
  '&::-webkit-scrollbar-thumb:hover': {
    background: '$purple300',
    cursor: 'pointer,'
  },
},

  'body, input, textarea, button': {
    fontFamily: 'Poppins',
    fontWeight: 400,
  }
}) 