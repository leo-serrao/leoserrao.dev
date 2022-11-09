import { relative } from "node:path/win32";
import { keyframes, styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  padding: '7rem 10rem',
  overflowX: 'hidden',
});

export const Introduction = styled('div', {
  display: 'flex',
  width: '100%',
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
    animation: `${caret} .5s step-end infinite alternate, ${type} 5s steps(22, end)`,
  },

  h2: {
    fontSize: '$2xl',

    span: {
      color: '$purple300',
    }
  }, 

  p: {
    maxWidth: 500,
    marginTop: '1rem',
  },

  button: {
    marginTop: '5rem',
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
  marginBottom: '10rem',

  span: {
    color: '$purple300',
    marginBottom: '0.5rem',
  },

  h1: {
    marginBottom: '1rem',
  },

  '.skills-dots': {
    position: 'absolute',
    bottom: '-4rem',
    right: '-13rem',
    zIndex: '-1',
  },

  '.skills-planet': {
    position: 'absolute',
    top: '1rem',
    left: '-10rem',
    zIndex: '2',
    animation: `${levitate} 4s infinite`,
  }
});

export const SkillsContainer = styled('div', {
  width: '100%',
  display: 'flex',
  padding: '3rem 0rem',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '$gray800',
  borderRadius: 8,
  boxShadow: '0 0 5px 3px rgba(0, 0, 0, 0.2)',

  '.skill': {
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 0 1rem 3rem',
    marginBottom: '0.5rem',


    '.skillBar': {
      width: '85%',
      height: '5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginRight: '1rem',


      '.bar1': {
        width: '95%',
        height: '1rem',
        borderRadius: 8,
        backgroundColor: '$white',
      },

      '.bar2': {
        width: '90%',
        height: '1rem',
        borderRadius: 8,
        backgroundColor: '$purple500',
        marginTop: '-1rem',
        marginLeft: '-2px',
      }
    },
  },

  '.typescript': {

    '.skillBar': {

      '.bar2': {
        width: '75%',
      }
    },
  },

  '.react': {

    '.skillBar': {

      '.bar2': {
        width: '80%',
      }
    },
  },

  '.english': {

    '.skillBar': {

      '.bar2': {
        width: '95.5%',
      }
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

  width: '100%',
  color: '$white',

  span: {
    color: '$purple300',
  },

  '.skills-circle': {
    position: 'absolute',
    left: '-10rem',
    top: '-5rem',
    zIndex: '-1',
  },

  '.skills-circle2': {
    position: 'absolute',
    right: '-10rem',
    bottom: '-7rem',
    zIndex: '-1',
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

    '.card': {
      width: 470,
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

      header: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 'auto',

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
      },

    },
    
    '.two': {
      backgroundColor: '$purple350',

      '.background-circle': {
        position: 'absolute',
        zIndex: -1,
        bottom: '5.5rem',
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

    '.title': {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',

      a: {
        display: 'flex',
        alignItems: 'center',
        color: '$white',

        '&:hover': {
          color: '$purple300',
          transition: 'all 0.2s linear',
        },
      },

      '.arrow-icon': {
        width: '2rem',
        height: '3rem',
      }
    },
  },
});

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
      maxWidth: 600,
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

