import { styled } from ".."

export const ProjectsContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  padding: '7rem 10rem',
  overflowX: 'hidden',

  '@bp3': {
    alignItems: 'center',
  },
})

export const Title = styled('div', {
  marginBottom: '5rem',
  width: '100%',
  textAlign: 'left',
  
  '@bp1': {
    width: '15rem',
  }, 

  span: {
    color: '$purple350',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    marginBottom: '1rem',

    img: {
      marginRight: '1rem',
    },

    '@bp1': {
      fontSize: '$sm',

      img: {
        width: '3rem',
        heigh: '3rem',
      },
    },
  },

  h1: {
    fontWeight: 600,
    maxWidth: 500,

    '@bp1': {
      fontSize: '$md',
    },
  },

  h2: {
    fontWeight: 600,
    fontSize: '$2xl',
    maxWidth: 500,
    '@bp1': {
      fontSize: '$md',
    },
  },
})

export const CardsContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '15rem',

  '@bp2': {
    alignItems: 'center',
  },

  
  '.card2': {
    backgroundColor: '$purple350',

    span: {
      color: '$gray50'
    },

  },

  '.card3': {
    backgroundColor: '#132742',

   
  },

  '.card4': {
    backgroundColor: '$purple500',

   
  },

  '.card5': {
    backgroundColor: '$purple375',

  },

  '.card6': {
    backgroundColor: '$purple350',

    '.info': {
      a: {
        marginBottom: 'auto',
        marginTop: '1rem',
        fontSize: '$2xl',
        fontWeight: '600',
      },
    },

    '.device-image': {
        alignItems: 'right',
        justifyContent: 'right',
        marginLeft: '0',
        width: '60%',
        paddingTop: '0',
        
        img: {
          marginTop: '4rem',

          '@bp3': {
            alignItems: 'center',
            justifyContent: 'center',
            width: '25rem',
            height: '25rem',
            marginTop: '-3rem'
          },  
           
          '@bp02': {
            width: '17rem',
            height: '17rem',
            marginTop: '6rem'
          },
        },

        '@bp3': {
          alignItems: 'center',
          justifyContent: 'center',
        },

       
      },

    '@bp3': {
      height: '25rem',
    },

    
  },
})

export const Card = styled('div', {
  display: 'flex',
  width: '94%',
  height: '20rem',
  position: 'relative',
  backgroundColor: '$purple400',
  padding: '0 2rem',
  borderRadius: 20,
  marginBottom: '2rem',
  overflow: 'hidden',

   '@bp3': {
     flexDirection: 'column  ',
     height: '45rem',
     minWidth: 350,
     alignItems: 'center',
   },

   '@bp02': {
    minWidth: 200,
    height: '32rem',
   },



  '.info': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'left',
    width: '55%',
    color: '$white',
    padding: '1rem 0',
    position: 'relative',
    zIndex: '1',
    minWidth: 320,
    
    '@bp3': {
      width: '100%',
    },

    '@bp02': {
      justifyContent: 'center',
      alignItems: 'center',
     },

    h1: {
      fontWeight: 600,
      color: '$white',

      '@bp02': {
        fontSize: '$md',
       },
    },

    span: {
      color: '$gray300',
      marginBottom: '2rem',

      '@bp02': {
        fontSize: '$ssm',
       },
    },

    p: {
      maxWidth: '25rem',

      '@bp02': {
        fontSize: '$ssm',
        width: 250,
        textAlign: 'center',
        marginBottom: '1rem',
       },

       '@bp3': {
        marginBottom: '1rem',
       },
    },

    a: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'left',
      color: '$white',
      fontWeight: '300',
      marginTop: 'auto',

      ".arrow-icon": {
        marginRight: '0.5rem',
        width: '2rem',
        height: '2rem',
      },

      '&:hover': {
        color: '$purple300',
        transition: 'all 0.2s linear',
      },
    },
    
  },

  '.device-image': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '37%',
    paddingTop: '2rem',
    marginLeft: '-6rem',
    zIndex: '1',

    '@bp5': {
      marginLeft: '0',
    },

    '@bp02': {
      paddingTop: '0',
      marginTop: '-3rem',
     },

    '.device': {
      '@bp4': {
        width: '20rem',
      },

      '@bp02': {
        width: '16rem',
       },
    },
  },

  '.background-img': {
    position: 'absolute',
    right: '-2.5rem',
    top: '-5rem',
    width: '50rem',
    height: '26rem',

    '@bp5': {
      display: 'none',
    },
  }
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
