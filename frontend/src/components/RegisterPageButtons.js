import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  registerButton: {
    margin: '24px 0px ',
    width: '40%',
    [theme.breakpoints.up('sm')]: {
      width: '20%',
    },
  },

  goToLoginButton: {
    margin: '10x 0px ',
    width: '40%',
    backgroundColor: 'rgb(191,148,115)',
    fontFamily: theme.typography.subtitle2.fontFamily,
    color: '#47392d',
    [theme.breakpoints.up('sm')]: {
      width: '20%',
    },
  }}));

export default function RegisterPageButtons({ handleSubmit, registrationStatus, registerState, passwordState }) {

  const validation =
    registerState.username.length > 5 &&
    registerState.username.length > 0 &&
    registerState.password.length > 5 &&
    passwordState.length > 0 &&
    registerState.password === passwordState &&
    registerState.email.length > 0 &&
    registerState.email.includes('@') &&
    (registerState.email.includes('.de') ||
      registerState.email.includes('.com') ||
      registerState.email.includes('.net'));

  const history = useHistory();
  const classes = useStyles();
  return (
    <>
      {registrationStatus !== 'SUCCESS' && (
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.registerButton}
          onClick={handleSubmit}
          disabled={!validation}
        >
          REGISTER
        </Button>
      )}
      <Button
        fullWidth
        variant="contained"
        color=""
        className={classes.goToLoginButton}
        onClick={() => history.push('/login')}
      >
        Go to Log in
      </Button>
    </>
  );
};