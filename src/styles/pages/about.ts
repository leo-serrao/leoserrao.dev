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

const smallOrbit = keyframes({
  '0%': {
    transform: 'translatex(0rem) ',
    zIndex: 2,
  },
  '49%': {
    zIndex: 2,
  },
  '50%': {
    transform: 'translatex(-25rem)',
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

const superSmallOrbit = keyframes({
  '0%': {
    transform: 'translatex(-4rem) ',
    zIndex: 2,
  },
  '49%': {
    zIndex: 2,
  },
  '50%': {
    transform: 'translatex(-22rem)',
    zIndex: 0,
  },
  '99%': {
    zIndex: 0,
  },
  '100%': {
    transform: 'translatex(-4rem)',  
    zIndex: 2, 
  },
});

export const AboutMe = styled('div', {
  display: 'flex',
  width: '100%',
  marginBottom: '18rem',

  '@bp2': {
    flexDirection: 'column  ',
    alignItems: 'center',
    justifyContent: 'center',
  },


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

      '@bp4': {
        top: '5rem',
        width: 70,
        height: 70,
        animation: `${smallOrbit} 6s infinite`,
        right: '2rem',
      },

      '@bp3': {
        right: '0'
      },

      '@bp2': {
        right: '-15rem',
      },

      '@bp01': {
        animation: `${superSmallOrbit} 6s infinite`,
      },
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
      position: 'absolute',
      right: '11rem',

      '@bp4': {
        width: 250,
        height: 250,
        right: '8rem',
      },

      
      '@bp3': {
        right: '6rem',
      },

      '@bp2': {
        right: '-8rem',
      },

      '@bp01': {
        width: 200,
        height: 200,
        right: '-6rem',
      },
  
      '.me': {
        position: 'absolute',
        zIndex: 1,

        '@bp4': {
          width: 250,
          height: 250,
        },

        '@bp01': {
          width: 200,
          height: 200,
        },

      },
      },
  },

  '.info': {
    width: '50%',
    height: '23rem',
    color: '$white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    
    '@bp2': {
      width: '100%',
      marginTop: '20rem',
      minWidth: 250,

    },

    '.title-container': {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'left',
      height: '6.5rem',
      maxWidth: 600,
      padding: '0',
      marginBottom: '2rem',

      '@bp2': {
        width: '78%',
      },
    },
  
    h1: {
      fontSize: '7rem',
      color: '$purple500',
      opacity: '30%',

      '@bp3': {
        fontSize: '4rem',
      },

      '@bp02': {
        fontSize: '3rem',
      },
    },
  
    span: {
      color: '$purple300',
      fontSize: '1rem',
      position: 'absolute',
      bottom: '0.5rem',
      right: '0.5rem',

      '@bp3': {
        fontSize: '0.8rem',
        bottom: '1.5rem',
        
      },

      '@bp02': {
        bottom: '1rem',
        right: '-3.5rem',
        fontSize: '0.7rem',
      },
    },

    p: {
      maxWidth: 500,
      marginLeft: '0.5rem',

      '@bp4': {
        fontSize: '$ssm',
      },

      '@bp02': {
        marginBottom: '3rem',
        textAlign: 'center',
      },

    },

    '.downloads': {
      marginTop: 'auto',
      display: 'flex',
      gap: '1rem',

      '@bp4': {
        flexDirection: 'column',
      },

      a: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '15rem',
        fontSize: '$sm',
        padding: '0.5rem 0.5rem',
        color: '$white',
        marginLeft: '0.5rem',
  
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

        '@bp4': {
          fontSize: '$ssm',
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

  '@media (max-width: 810px)': {
    justifyContent: 'center',
  },

  '.quotation': {
    color: '$purple500',

    '@media (max-width: 810px)': {
      width: '4rem',
      height: '4rem',
    },
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
      },

      '@media (max-width: 810px)': {
        fontSize: '$md',
        marginTop: '-2rem',
        marginLeft: '2rem',
        width: 250,
      },
    },
  
    '.copyright': {
      marginLeft: '4rem',
      whiteSpace: 'nowrap',

      '@media (max-width: 810px)': {
        fontSize: '0.6rem',
        marginLeft: '2rem'
      },
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

      '@media (max-width: 810px)': {
        width: '3rem',
        height: '3rem',
      },
    },

    '&:hover': {
      backgroundColor: '$purple100',
      transition: 'all 0.2s linear'
    },

    '@media (max-width: 810px)': {
      width: '4rem',
      height: '4rem',
      minWidth: '4rem',
      marginTop: '-10rem',
    },
  },

  '.backgroundVector': {
    position: 'absolute',
    zIndex: -1,
    left: '-30rem',
    top: '-45rem',
  }
});