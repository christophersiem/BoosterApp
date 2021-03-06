import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { UserStateContext } from '../../context/user/UserContext';
import AppDrawerLeft from './AppDrawerLeft';
import Grid from '@material-ui/core/Grid';
import UserInfo from '../../pages/UserInfo';

const useStyles = makeStyles((theme) => ({
  root: {},

  menuButton: {
    color: 'black',
    padding: '0px',
    justifyContent: 'flex-start',
  },
  title: {
    flexGrow: 1,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Rock Salt',
    fontSize: '32px',
    display: 'inline',
  },

  mColor: {
    color: '#0030A9',
    display: 'inline-block',
  },
  accountButton: {
    color: 'black',
  },

  image: {
    padding: '5px 0px 10px',
  },
  logo: {
    fontFamily: theme.typography.subtitle2.fontFamily,
    fontSize: '32px',
    color: '#AD6B36',
    letterSpacing: '6px',
    margin: '20px 0px',
  },
}));

export default function Header() {
  const classes = useStyles();
  const { authStatus } = useContext(UserStateContext);

  if (authStatus !== 'SUCCESS') {
    return null;
  }

  return (
    <header className={classes.root}>
      <AppBar style={{ background: 'rgb(199,192,178)' }} position="static">
        <Toolbar className={classes.toolbar}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <div
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <Grid item>
                <AppDrawerLeft />
              </Grid>
            </div>
            <Grid item>
              <p className={classes.logo}>moodboost</p>
            </Grid>

            <Grid item>
              <UserInfo />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
}
