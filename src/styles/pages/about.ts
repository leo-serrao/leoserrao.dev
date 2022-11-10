import { keyframes, styled } from "..";

export const AboutContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  padding: '7rem 10rem',
  overflowX: 'hidden',
})

const orbit = keyframes({
  '0%': {
    transform: 'translatex(0rem) ',
    zIndex: 2,
  },
  '49%': {
    zIndex: 2,
  },
  '50%': {
    transform: 'translatex(-32rem)',
    zIndex: 0,
  },
  '99%': {
    zIndex: 0,
  },
  '100%': {
    transform: 'translatex(0rem)',  
    zIndex: 2, 
  },
});

export const AboutMe = styled('div', {
  display: 'flex',
  width: '100%',
  marginBottom: '18rem',

  '.photo-container': {
    width: '45%',
    position: 'relative',

    '.moon': {
      position: 'absolute',
      zIndex: 2,
      right: '3rem',
      top: '8rem',
      animation: `${orbit} 6s infinite`,
      boxShadow: '0 0 5px 3px rgba(0, 0, 0, 0.2)',
      borderRadius: 999,    
    },

    '.photo': {
      display: 'flex',
      justifyContent:'center',
      alignItems: 'center',
      overflow: 'hidden',
      borderRadius: 999,
      width: 350,
      height: 350,
      zIndex: 1,

      '.me': {
        zIndex: 1,
      },
      },
  },

  '.info': {
    width: '50%',
    color: '$white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',


    h2: {
      fontSize: '$2xl',
      color: '$purple300',
      marginTop: '-1rem',
      marginBottom: '1rem',
    },

    span: {
      color: '$purple350',
      display: 'flex',
      alignItems: 'center',

      img: {
        marginRight: '1rem',
      },
    },

    p: {
      maxWidth: 500,
    },

    '.downloads': {
      marginTop: 'auto',
      display: 'flex',
      gap: '1rem',

      a: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '15rem',
        fontSize: '$sm',
        padding: '0.5rem 0.5rem',
        color: '$white',
  
        border: 'none',
        borderRadius: 25,
        backgroundColor: '$purple500',
  
        '&:hover': {
          backgroundColor: '$purple300',
          transition: 'all 0.2s linear',
        },
  
        '.download-icon': {
          marginRight: '0.5rem',
          width: '1.5rem',
          height: '1.5rem',
        },
      },
    },

    
  },
})

export const Footer = styled('footer', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',

  '.quotation': {
    color: '$purple500'
  },

  '.quote': {
    p: {
      fontSize: '2.5rem',
      fontWeight: '700',
      maxWidth: 590,
      marginLeft: '4rem',
      marginTop: '-4rem',
      marginBottom: '5rem',
      color: '$white',
  
      span: {
       color: '$purple350',

      }
    },
  
    '.copyright': {
      marginLeft: '4rem',
    },
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    border: 'none',
    borderRadius: 100,
    backgroundColor: '$white',
    width: '6.25rem',
    height: '6.25rem',
    marginTop: '-18rem',

    '.arrow-up-icon': {
      width: '4rem',
      height: '4rem',
    },

    '&:hover': {
      backgroundColor: '$purple100',
      transition: 'all 0.2s linear'
    },
  },

  '.backgroundVector': {
    position: 'absolute',
    zIndex: -1,
    left: '-30rem',
    top: '-45rem',
  }
});