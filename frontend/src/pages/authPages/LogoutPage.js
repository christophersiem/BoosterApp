import React, { useEffect } from 'react';
import { removeJWTToken } from '../../utils/jwt-utils';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    height: '120px',
    width: '120px',
    margin: '25px 25px',
  },

  root1: {
    backgroundImage: 'url(logout_mood.jpeg)',
    backgroundSize: 'cover',
    height: '800px',
  },

  title: {
    fontFamily: theme.typography.subtitle.fontFamily,
    fontSize: theme.typography.subtitle2.fontSize,
    letterSpacing: theme.typography.subtitle.letterSpacing,
    marginTop: '50px',
  },

  button: {
    backgroundColor: '#d9c5c5',
    width: '60%',
  },
  goodBye: {
    fontFamily: theme.typography.subtitle.fontFamily,
    fontSize: theme.typography.subtitle2.fontSize,
    letterSpacing: theme.typography.subtitle.letterSpacing,
    paddingRight: '20px',
  },
  buttonPos: {
    justifyContent: 'center',
    display: 'flex',
    marginTop: '400px',
  },
}));

export default function LogoutPage() {
  const classes = useStyles();

  const history = useHistory();

  useEffect(() => {
    removeJWTToken();
  }, []);

  return (
    <div className={classes.root1}>
      <Grid container justify="center" alignItems="center">
        <img
          className={classes.image}
          src={'/logo.png'}
          alt="logo_small"
          width={'40%'}
          height={'40%'}
        />
        <div className={classes.goodBye}>
          Hope to see you
          <br /> soon again
        </div>
      </Grid>
      <div className={classes.buttonPos}>
        <Button
          fullWidth
          variant="contained"
          color=""
          className={classes.button}
          onClick={() => history.push('/login')}
        >
          Back to Log in
        </Button>
      </div>
    </div>
  );
}
