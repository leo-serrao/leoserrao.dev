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

// '@use postcss-preset-env': {
//   stage: 0, 
//   autoprefixer: {
//     grid: 'true',
//   },

//   browsers: [
//     "last 1 Chrome versions",
//     "last 1 Firefox versions",
//     "last 1 Safari versions",
//     "last 1 Edge versions",
//   ],
// },


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

export const Specializing = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '3rem 0',

  span: {
    color: '$purple300',
    marginBottom: '0.5rem',
  },

  h1: {
    marginBottom: '1rem',
  },

  '.skills-dots': {
    marginRight: '-80rem',
    marginTop: '-15rem',
    zIndex: '-1',
  }
});

export const SkillsContainer = styled('div', {
  width: '100%',
  display: 'flex',
  padding: '3rem 2rem',
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