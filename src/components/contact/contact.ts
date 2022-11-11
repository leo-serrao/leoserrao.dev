import { keyframes, styled } from "@stitches/react";

const slidein = keyframes({
  '0%': {
    transform: 'translatex(30rem)',
  },
  '100%': {
    transform: 'translatex(0)',
  },
});

const slideout = keyframes({
  '0%': {
    transform: 'translatex(0rem)',
  },
  '100%': {
    transform: 'translatex(30rem)',
  },
});

const tictac = keyframes({
  '0%': {
    width: '100%',
  },
  '100%': {
    width: '0',
  },
});

export const Contact = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginBottom: '5rem',
  position: 'relative',

  '.message': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
    backgroundColor: '$white',
    color: '$purple500',

    position: 'absolute',
    top: '20rem',

    padding: '1.5rem',
    borderRadius: 8,
    width: '15rem',
    

    '.progress-bar': {
      width: '100%',
      backgroundColor: '$purple500',
      height: '0.5rem',
      borderRadius: 30,
      marginTop: '1rem',
    }
  },

  '.active': {
    right: '-9rem',
    animation: `${slidein} 1s`,

    '.progress-bar': {
      animation: `${tictac} 5s`,
    }
  },

  '.inactive': {
    right: '-30rem',
    animation: `${slideout} 1s`,
  },

  '.fail': {
    color: 'red',
    
    h2: {
      fontSize: '$md',
    }, 
    
    '.progress-bar': {
      backgroundColor: 'red',
    }
  }
});

const levitate = keyframes({
  '0%': {
    transform: 'translateY(-0.5rem)',
  },
  '50%': {
    transform: 'translateY(0.5rem)',
  },
  '100%': {
    transform: 'translateY(-0.5rem)',
  },
});

const levitate2 = keyframes({
  '0%': {
    transform: 'translateY(0.5rem)',
  },
  '50%': {
    transform: 'translateY(-0.5rem)',
  },
  '100%': {
    transform: 'translateY(0.5rem)',
  },
});

export const ContactContainer = styled('div', {
  width: '60%',
  minWidth: 250,
  display: 'flex',
  backgroundColor: '$white',
  padding: '5rem 4rem',
  borderRadius: 30,
  boxShadow: '0 0 5px 3px rgba(0, 0, 0, 0.2)',
  color: "#000",

  '@media (max-width: 1024px)': {
    flexDirection: 'column  ',
  },

  '.info': {
    width: '60%',
    span: {
      color: '$purple500',

      '@media (max-width: 810px)': {
        fontSize: '$ssm',
      },
    },

    h1: {
      fontSize: '3rem',
      fontWeight: '700',
      lineHeight: 1,
      marginTop: '1rem',
      color: '$gray900',
      maxWidth: 300,

      '@media (max-width: 810px)': {
        fontSize: '$sm',
      },
    },

    '.feel-free-message': {
      marginTop: '2rem',
      maxWidth: 200,
      color: '$gray500',

      '@media (max-width: 810px)': {
        fontSize: '$ssm',
      },
    },

    '.contact-info': {
      display: 'flex',
      alignItems: 'center',
      marginTop: '1rem',
      color: '$gray500',
  
      a:{
        color: '$gray500',

        '&:hover': {
          color: '$purple500',
          transition: 'all 0.2s linear',
        },
      },

      '.contact-icon': {
        color: '$gray900',
        marginRight: '1rem',
        width: '1.5rem',
        height: '1.5rem',
      },

      '@media (max-width: 810px)': {
        fontSize: '$ssm',
        width: '15rem',
      },
    },

    '.first': {
      marginTop: '2rem',
    }
  },

  '.form-container': {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',

    '@media (max-width: 1024px)': {
      width: '100%',
    },

    '.big-planet': {
      position: 'absolute',
      top: '-10rem',
      right: '-12rem',
      animation: `${levitate} 4s infinite`,

      '@media (max-width: 1250px)': {
        width: 350,
        height: 350,
        top: '-5rem',
        right: '-6rem',
      },

      '@media (max-width: 1024px)': {
        top: '-30rem',
        right: '-9rem',
      },

      '@media (max-width: 768px)': {
        width: 250,
        height: 250,
        top: '-27rem',
        right: '-7rem',
      },
    },

    '.small-planet-1': {
      position: 'absolute',
      top: '-11rem',
      right: '9rem',  
      animation: `${levitate2} 4s infinite`,

      '@media (max-width: 1250px)': {
        width: 150,
        height: 150,
        top: '-7rem',
        right: '8rem',
      },

      '@media (max-width: 1024px)': {
        top: '-33rem',
        right: '5rem',
      },

      '@media (max-width: 768px)': {
        width: 100,
        height: 100,
        top: '-29rem',
        right: '2rem',
      },
    },

    '.small-planet-2': {
      position: 'absolute',
      top: '1rem',
      right: '-12rem',  
      animation: `${levitate2} 4s infinite`,

      '@media (max-width: 1250px)': {
        right: '-8rem',
      },

      '@media (max-width: 1024px)': {
        top: '-28rem',
        right: '-9rem',
      },

      '@media (max-width: 768px)': {
        width: 50,
        height: 50,
        top: '-22rem',
        right: '-7rem',
      },
    },

    form: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '24rem',
      alignItems: 'left',

      '@media (max-width: 1024px)': {
        marginTop: '2rem',
      },

      p: {
        color: 'red',
        marginBottom: '1rem',
      },

      input: {
        border: 'none',
        outline: 'none',
        backgroundColor: '$gray50',
        borderRadius: 8,
        marginBottom: '1rem',
        height: '1rem',
        padding: '1rem',

      },

      textarea: {
        border: 'none',
        outline: 'none',
        backgroundColor: '$gray50',
        borderRadius: 8,
        marginBottom: '1rem',
        padding: '1rem',
        resize: 'none',
      },

      button: {
        fontSize: '$sm',
        padding: '0.5rem 1.5rem',
        color: '$white',
        width: '8rem',
    
        border: 'none',
        borderRadius: 25,
        backgroundColor: '$purple500',
    
        '&:hover': {
          backgroundColor: '$purple300',
          transition: 'all 0.2s linear',
        }
      },
    }
  }
})