import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => {
  return {
    wrapper: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    paper: {
      padding: 40,
      '& h6': {
        paddingLeft: 15,
      },
    },
    buttons: {
      marginTop: 30,
    },
  };
});

export default useStyles;
