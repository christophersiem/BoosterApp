import TextField from '@material-ui/core/TextField';
import React, { useContext, useState } from 'react';
import { addNewUser } from '../../utils/auth-utils';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

import {
  UserDispatchContext,
  UserStateContext,
} from '../../context/user/UserContext';
import {
  REGISTRATION,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
} from '../../context/user/UserContextProvider';
import Grid from '@material-ui/core/Grid';
import RegisterPageButtons from '../RegisterPageButtons';

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: '80%',
    margin: '3px',

    '.MuiFormHelperText-root.Mui-error': {
      color: theme.palette.second,
    },

    [theme.breakpoints.up('sm')]: {
      width: '30%',
    },
  },
  registerButton: {
    margin: '24px 0px ',
    width: '40%',
    [theme.breakpoints.up('sm')]: {
      width: '20%',
    },
  },

  alert: {
    marginBottom: '12px',
  },
  grid: {
    marginTop: '35px',
  },
}));

export default function RegistrationForm() {
  const dispatch = useContext(UserDispatchContext);
  const { registrationStatus } = useContext(UserStateContext);
  const classes = useStyles();
  const [passwordState, setPasswordState] = useState('');
  const [registerState, setRegisterState] = useState({
    firstName: '',
    username: '',
    password: '',
    email: '',
  });
  const isError= registerState.email.length > 0 &&
    (!registerState.email.includes('@') ||
      !(
        registerState.email.includes('.de') ||
        registerState.email.includes('.com') ||
        registerState.email.includes('.net')))

  function handleChange(event) {
    const { name, value } = event.target;
    setRegisterState({
      ...registerState,
      [name]: value,
    });
  }

  function handleConfirmPassword(event) {
    setPasswordState(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: REGISTRATION });
    addNewUser(registerState)
      .then((data) => {
        dispatch({ type: REGISTRATION_SUCCESS, payload: data });
      })
      .catch(() => {
        dispatch({ type: REGISTRATION_FAILED });
      });
  }

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.grid}
    >
      <TextField
        className={classes.inputField}
        margin={'normal'}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label="Firstname"
        name="firstName"
      />

      <TextField
        className={classes.inputField}
        margin={'normal'}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        name="username"
        label="Username"
        error={
          registerState.username.length < 6 && registerState.username.length > 0
        }
        helperText={
          registerState.username.length > 0 &&
          registerState.username.length < 6 &&
          'Please enter at least 6 characters'
        }
      />
      <TextField
        className={classes.inputField}
        margin={'normal'}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        error={
          registerState.password.length < 6 && registerState.password.length > 0
        }
        helperText={
          registerState.password.length > 0 &&
          registerState.password.length < 6 &&
          'Please enter at least 6 characters'
        }
      />
      <TextField
        className={classes.inputField}
        margin={'normal'}
        onChange={handleConfirmPassword}
        variant="outlined"
        required
        fullWidth
        name="password2"
        label="Enter Password again"
        type="password"
        id="password2"
        error={
          passwordState.length > 0 && registerState.password !== passwordState
        }
        helperText={
          passwordState.length > 0 &&
          registerState.password !== passwordState &&
          "Passwords don't match"
        }
      />
      <TextField
        className={classes.inputField}
        margin={'normal'}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        name="email"
        label="E-Mail"
        type="email"
        id="email"
        error={isError}
        helperText={ isError &&
          'Please enter a valid E-Mail address'
        }
      />
      {registrationStatus === 'SUCCESS' && (
        <Alert className={classes.alert} variant="filled" severity="success">
          {' '}
          Success! Welcome :){' '}
        </Alert>
      )}

      {registrationStatus === 'FAILED' && (
        <Alert className={classes.alert} variant="filled" severity="error">
          {' '}
          Username already exists{' '}
        </Alert>
      )}
 <RegisterPageButtons
   handleSubmit={handleSubmit}
   registrationStatus={registrationStatus}
   registerState={registerState}
   passwordState={passwordState}
 />
    </Grid>
  );
}
