import { styled } from "../../styles/index";

// export const CardsContainer = styled('main', {})

export const Card = styled('main', {
  display: 'flex',
  width: '94%',
  position: 'relative',
  backgroundColor: '$purple500',
  padding: '0 2rem',
  borderRadius: 20,
  marginBottom: '2rem',
  overflow: 'hidden',
  

   '@bp3': {
     flexDirection: 'column  ',
     minWidth: 350,
     alignItems: 'center',
   },

   '@bp02': {
    minWidth: 310,
   },



  '.info': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'space-between',
    width: '55%',
    color: '$white',
    padding: '1rem 0',
    position: 'relative',
    zIndex: '1',
    minWidth: 320,
    
    '@bp3': {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },

    h1: {
      fontWeight: 600,
      color: '$white',

      '@bp02': {
        fontSize: '$xl',
        marginTop: '1rem',
       },
    },

    span: {
      color: '$gray300',
      marginBottom: '2rem',

      '@bp02': {
        fontSize: '$sm',
       },
    },

    p: {
      maxWidth: '25rem',

      '@bp02': {
        fontSize: '$sm',
        width: 250,
        textAlign: 'center',
        marginBottom: '1rem',
       },

       '@bp3': {
        marginBottom: '1rem',
       },
    },

    '.buttons-container': {
      width: '100%',
      padding: '1rem 0',
      marginTop: '2rem',
        
        a: {
          color: '$white',
          fontWeight: 'bold',
          marginTop: 'auto',
          padding: '1rem 1.5rem',
          border: '1px solid $white',
          background: 'transparent',
          borderRadius: 8,
    
          ".arrow-icon": {
            marginRight: '0.5rem',
            width: '2rem',
            height: '2rem',
          },
    
          '&:hover': {
            backgroundColor: '$purple300',
            transition: 'all 0.3s ease-in-out',
            color: '$purple500',
            border: '1px solid $purple500',
          },

          '& + &' : {
            marginLeft: '1rem', 
          },
  
          '@bp02': {
            fontSize: '$sm',
            padding: '0.5rem 1rem',
  
            
            '& + &' : {
              marginLeft: '0.5rem', 
            },
          },
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
     },

    '.device': {
      '@bp4': {
        width: '20rem',
      },

      '@bp02': {
        width: '18rem',
       },
    },
  },

  '.background-img': {
    position: 'absolute',
    right: '-2.5rem',
    top: '-5rem',
    width: '50rem',
    height: '30rem',

    '@bp5': {
      display: 'none',
    },
  }
});