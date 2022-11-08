import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '2rem 10rem',
  
  nav: {
    a: {
      color: '$white',
      marginRight: '2rem',

      '&:hover': {
        color: '$purple300'
      }
    }
  },

  button: {
    padding: '0.2rem 1.5rem',
    color: '$white',

    borderRadius: 20,
    backgroundColor: '$purple500',

    '&:hover': {
      backgroundColor: '$purple300',
    }
  }
});