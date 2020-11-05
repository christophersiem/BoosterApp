import React from 'react';
import Home from './Home';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: '1',
    padding: '0 20px',
    overflow: 'auto',
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Home />
    </main>
  );
}
