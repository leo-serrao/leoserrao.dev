import { createTheme, styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});


export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '2rem 10rem',
  
  '@bp1': {
    alignItems: 'center',
    justifyContent: 'center',
  },

  nav: {
  '@bp1': {
    fontSize: '$ssm',
  },

    a: {
      color: '$white',
      marginRight: '2rem',

      '&:hover': {
        color: '$purple300',
        transition: 'all 0.2s linear',
      }
    }
  },

  '.contact': {
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    padding: '0.2rem 1.5rem',
    color: '$white',
    backgroundColor: '$purple500',
    
    borderRadius: 20,
    border: 'none',
    
    '&:hover': {
      backgroundColor: '$purple300',
      transition: 'all 0.2s linear',
    },

    '@bp1': {
      fontSize: '$ssm',
    },

    '@bp01': {
      display: 'none',
    },
  }
});

