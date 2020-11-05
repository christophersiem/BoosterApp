import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from '../../context/user/UserContextProvider';
import { performLogin } from '../../utils/auth-utils';
import { getDecodedJWTToken, setJWTToken } from '../../utils/jwt-utils';
import { UserDispatchContext } from '../../context/user/UserContext';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: '80%',
    margin: '2px',
    [theme.breakpoints.up('sm')]: {
      width: '20%',
    },
    fontSize: '10px',
  },
  signInButton: {
    margin: '24px 0px 16px',
    backgroundColor: 'rgb(191,148,115)',
    fontFamily: theme.typography.subtitle2.fontFamily,
    color: '#47392d',
    borderRadius: '20px',
    letterSpacing: theme.typography.subtitle2.letterSpacing,
    width: '40%',
    [theme.breakpoints.up('sm')]: {
      width: '20%',
    },
  },
  alert: {
    backgroundColor: 'rgb(186,84,38)',
    marginTop: '10px',
    color: '#d9d7ce',
  },
}));

export default function LoginForm() {
  const classes = useStyles();

  const [loginFail, setLoginFail] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useContext(UserDispatchContext);

  function login() {
    dispatch({ type: LOGIN });
    performLogin(username, password)
      .then((response) => {
        setJWTToken(response);
        const userData = getDecodedJWTToken();
        setLoginFail(false);
        dispatch({ type: LOGIN_SUCCESS, payload: userData });
      })
      .catch(() => {
        dispatch({ type: LOGIN_FAILED });
        setLoginFail(true);
      });
  }

  return (
    <>
      <TextField
        className={classes.inputField}
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoFocus
      />
      <TextField
        className={classes.inputField}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />

      {loginFail && (
        <Alert variant="filled" severity="error" className={classes.alert}>
          {' '}
          Check username and password{' '}
        </Alert>
      )}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        className={classes.signInButton}
        onClick={login}
      >
        Sign In
      </Button>

      <Link
        href="/register"
        variant="body2"
        style={{ color: '#47392d', fontFamily: 'Nora' }}
      >
        {'No Account? Sign Up!'}
      </Link>
    </>
  );
}
