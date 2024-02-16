import { relative } from "node:path/win32";
import { keyframes, styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  padding: '7rem 10rem',
  overflowX: 'hidden',

  
  '@bp1': {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Introduction = styled('div', {
  display: 'flex',
  width: '100%',
  minWidth: 350,
  position: 'relative',
  marginBottom: '10rem',

  '@bp1': {
    alignItems: 'center',
    justifyContent: 'center',
  },

  '@bp3': {
    marginBottom: '3rem',
  },

  
});

const type = keyframes ({
  '0%': {
    width: 0,
  },
});

const caret = keyframes({
  '50%': {
    boxShadow: '0.5rem 0 0 transparent',
  },
});


export const Info = styled('div', {
  width: '50%',
  minWidth: 250,


  '@bp1': {
    width: '100%',
  },

  '@bp01': {
    paddingLeft: '2rem',
  },

  '.intro': {
    color: '$purple300',
  },

  h1: {
    boxShadow: '0.5rem 0 0 #DFB5FF',
    marginTop: '1rem',
    width: '20rem',
    overflow: 'hidden',
    color: '$white',
    whiteSpace: 'nowrap',
    animation: `${caret} .3s step-end infinite alternate, ${type} 3s steps(22, end)`,

    '@bp1': {
      fontSize: '$xl',
      width: '15rem',
    },
  },

  h2: {
    fontSize: '$2xl',
    color: '$white',

    span: {
      color: '$purple300',
    },

    '@bp1': {
      fontSize: '$xl',
    },
  }, 

  p: {
    maxWidth: 500,
    marginTop: '1rem',
    marginBottom: '5rem',

    '@bp1': {
      fontSize: '$sm',
    },
  },

  a: {
    fontSize: '$md',
    padding: '0.5rem 1.5rem',
    color: '$white',

    border: 'none',
    borderRadius: 25,
    backgroundColor: '$purple500',

    '&:hover': {
      backgroundColor: '$purple300',
      transition: 'all 0.2s linear',
    }
  },

});

export const Illustration = styled('div', {
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    marginRight: '-13rem',
    marginTop: '-5rem',

    '@bp3': {
      width: '25rem',
      marginTop: '-8rem',
    },

    '@bp2': {
      width: '20rem',
      marginTop: '-8rem',
      marginLeft: '3rem',
    },

    '@bp1': {
      position: 'absolute',
      width: '15rem',
      top: '-10.5rem',
      left: '5rem',
      zIndex: -1,
      opacity: 0.7,
    },
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

export const Specializing = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '3rem 0',
  position: 'relative',
  marginBottom: '8rem',

  '@bp02': {
    marginBottom: '3rem',
  },

  '.title-container': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '8.5rem',
  },

  h1: {
    marginBottom: '1rem',
    fontSize: '10rem',
    color: '$purple500',
    opacity: '30%',

    '@bp3': {
      fontSize: '7rem',
    },

    '@bp02': {
      fontSize: '4.5rem',
      marginBottom: '1rem',
    },
  },

  span: {
    color: '$purple300',
    marginBottom: '0.5rem',
    fontSize: '1rem',
    position: 'absolute',
    bottom: '0.5rem',
    right: '1rem',

    '@bp3': {
      fontSize: '0.8rem',
      bottom: '1.5rem',
    },

    '@bp02': {
      bottom: '2.5rem',
      fontSize: '0.6rem',
    },
  },


  '.skills-planet': {
    position: 'absolute',
    top: '5rem',
    left: '0rem',
    zIndex: '2',
    animation: `${levitate} 4s infinite`,

    '@bp6': {
      width: '12rem',
      height: '12rem',
      bottom: '5rem',
      right: '-12rem',
    },

    '@bp3': {
      width: '10rem',
      height: '10rem',
      top: '4rem',
      left: '-7rem',
    },

    '@bp2': {
      width: '9rem',
      height: '9rem',
      top: '6rem',
    },

    '@bp02': {
      width: '8rem',
      height: '8rem',
      top: '9rem',
      left: '-12rem',
      zIndex: '-1',
    },


    '@media (max-width: 530px)': {
      left: '-10rem',
    },
  },

  '.skills-moon': {
    position: 'absolute',
    bottom: '-10rem',
    right: '1rem',
    zIndex: '2',
    animation: `${levitate} 4s infinite`,

    '@bp3': {
      width: '8rem',
      height: '8rem',
      bottom: '4rem',
      right: '-5rem',
    },

    '@bp2': {
      bottom: '-1rem',
      width: '7rem',
      height: '7rem',
    },

    '@bp02': {
      display: 'none',
    },


    '@media (max-width: 530px)': {
      left: '-10rem',
    },
  }
});

export const SkillsContainer = styled('div', {
  width: '100%',
  minWidth: 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '2rem',
  padding: '3rem 0rem',
  borderRadius: 8,
  marginTop: '6rem',

  '@bp3': {
    paddingRight: '1rem',
    marginTop: '0',
  },

  '.skill': {
    height: '5rem',
    maxWidth: '5rem',
    width: '100%',
    border: '1px solid $white',
    fontSize: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    boxShadow: '0 0 5px 3px rgba(0, 0, 0, 0.2)',

    '@bp3': {
      fontSize: '3rem',
      padding: '1rem',
    },

  },
});

export const Showcase = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  marginBottom: '10rem',
  color: '$white',

  '.showcase-title': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '8.5rem',

    h1: {
      marginBottom: '1rem',
      fontSize: '10rem',
      color: '$purple500',
      opacity: '30%',
 
      '@bp3': {
        fontSize: '7rem',
      },

      '@bp02': {
        fontSize: '4.5rem',
        marginBottom: '1rem',
      },
    },
  
    span: {
      color: '$purple300',
      marginBottom: '0.5rem',
      fontSize: '1rem',
      position: 'absolute',
      bottom: '0.5rem',
      right: '1rem',

      '@bp3': {
        fontSize: '0.8rem',
        bottom: '1.5rem',
      },

      '@bp02': {
        bottom: '2.5rem',
        fontSize: '0.6rem',
      },
    },
  },

  span: {
    color: '$purple300',
  },

  h1: {
    minWidth: 250,
    '@bp1': {
      fontSize: '$md',
    },

    '@bp02': {
      
    },
  },

  '.skills-circle': {
    position: 'absolute',
    left: '-10rem',
    top: '-5rem',
    zIndex: '-1',

    '@bp2': {
      width: '18rem',
      height: '18rem',
      top: 0
    },

    '@bp1': {
      top: '4rem',
    },

    '@bp02': {
      width: '11rem',
      height: '11rem',
      top: '4rem',
    },
  },

  '.skills-circle2': {
    position: 'absolute',
    right: '-10rem',
    bottom: '-7rem',
    zIndex: '-1',

    '@bp2': {
      width: '13rem',
      height: '13rem',
      bottom: '-7rem',
    },

    '@bp1': {
      width: '9rem',
      height: '9rem',
      bottom: '-5rem',
    },
  }
});

export const ShowcaseContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '5rem',

  '.cards-container': {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    marginBottom: '2rem',
    alignItems: 'center',

    '@bp4': {
      flexDirection: 'column  ',
    },

    '.card': {
      width: 430,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: 'rgba(55, 102, 244, 0.7)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 0 5px 3px rgba(0, 0, 0, 0.2)',
      height: 622,
      borderRadius: 30,
      padding: '2rem 3rem',
      position: 'relative',
      overflow: 'hidden',

      
      '@bp1': {
        width: 280,
        height: '25rem',
      },

      '@bp01': {
        width: 200,
        height: '25rem',
      },

      header: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 'auto',

        h1: {
          fontWeight: 600,
        },

        '.arrow-icon': {
          width: '4rem',
          height: '5rem',
        },

        a: {
          color: '$white',

          '&:hover': {
            color: '$purple300',
            transition: 'all 0.2s linear',
          }
        }
      },

      img: {
        marginBottom: 'auto',
        '@bp1': {
          width: 380,
        },

        '@bp01': {
          width: 300,
        },
      },

      '.dt-money-background': {
        position: 'absolute',
        zIndex: -1,
        bottom: '0',
        right: '-2rem',

        
        '@bp1': {
          bottom: '-10rem',
          right: '0rem',
        },
      }

    },
    
    '.two': {
      backgroundColor: '$purple350',

      '.background-circle': {
        position: 'absolute',
        zIndex: -1,
        bottom: '5.5rem',

        '@bp1': {
          width: '21rem',
          bottom: '-2rem',
        },

        '@bp01': {
          width: '17rem',
        },
      },
    }, 

  },

  '.view-more': {
    width: '92%',
    height: 196,
    backgroundColor: '$purple375',
    borderRadius: 30,
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 3rem',
    overflow: 'hidden',

    '@bp4': {
      width: 470,
    },

    '@bp1': {
      width: 280,
      flexDirection: 'column',
    },

    '@bp01': {
      width: 200,
    },

    img: {
      '@bp1': {
        width: '20rem',
        height: '10rem',
        marginTop: '1rem',
      },

      '@bp01': {
        width: '18rem',
        height: '10rem',
        marginTop: '1rem',
      },
    },

    '.title': {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',

      '@bp1': {
        marginBottom: 'auto',
        paddingTop: '1rem',
      },

      a: {
        display: 'flex',
        alignItems: 'center',
        color: '$white',
        fontSize: '$2xl',
        fontWeight: '600',

        '&:hover': {
          color: '$purple300',
          transition: 'all 0.2s linear',
        },

        '@bp4': {
          fontSize: '$md',
          minWidth: 250,
        },
      },

      '.arrow-icon': {
        width: '2rem',
        height: '3rem',
      },

      
    },
  },
});

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

