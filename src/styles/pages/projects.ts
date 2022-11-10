import { styled } from ".."

export const ProjectsContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  padding: '7rem 10rem',
  overflowX: 'hidden',
})

export const Title = styled('div', {
  marginBottom: '5rem',

  span: {
    color: '$purple350',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    marginBottom: '1rem',

    img: {
      marginRight: '1rem',
    },
  },

  h1: {
    fontWeight: 600,
    maxWidth: 500,
  },

  h2: {
    fontWeight: 600,
    fontSize: '$2xl',
    maxWidth: 500,
  },
})

export const CardsContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '15rem',

  
  '.card2': {
    backgroundColor: '$purple350',

    '.info': {
      boxShadow: '0px 0px 20px 90px #81A4FF',
    },
  },

  '.card3': {
    backgroundColor: '#132742',

    '.info': {
      boxShadow: '0px 0px 20px 90px #132742',
    },
  },

  '.card4': {
    backgroundColor: '$purple500',

    '.info': {
      boxShadow: '0px 0px 20px 90px #5F49BF',
    },
  },

  '.card5': {
    backgroundColor: '$purple375',

    '.info': {
      boxShadow: `0px 0px 20px 90px #8072E0`,
    },
  },

  '.card6': {
    backgroundColor: '$purple350',

    '.info': {
      boxShadow: `0px 0px 20px 90px #81A4FF`,

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
        },
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



  '.info': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'left',
    width: '55%',
    color: '$white',
    padding: '1rem 0',
    boxShadow: '0px 0px 20px 90px #3766F4',
    zIndex: '1',

    h1: {
      fontWeight: 600,
      color: '$white',
    },

    span: {
      color: '$gray300',
      marginBottom: '2rem',
    },

    p: {
      maxWidth: '25rem',
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
  },

  '.background-img': {
    position: 'absolute',
    right: '-2.5rem',
    top: '-5rem',
  }
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
