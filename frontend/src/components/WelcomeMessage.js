import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UserStateContext } from '../context/user/UserContext';

const useStyles = makeStyles((theme) => ({
  colored: {
    color: '#AD6B36',
  },

  message: {
    fontFamily: theme.typography.subtitle2.fontFamily,
    fontSize: theme.typography.subtitle.fontSize,
    letterSpacing: theme.typography.subtitle.letterSpacing,
    lineHeight: theme.typography.subtitle.lineHeight,
    paddingLeft: '16px',
  },
}));

function greet() {
  const myDate = new Date();
  const hrs = myDate.getHours();
  let greeting;

  if (hrs < 12) {
    greeting = 'Good Morning';
  } else if (hrs >= 12 && hrs <= 17) {
    greeting = 'Good Afternoon';
  } else if (hrs >= 17 && hrs <= 24) {
    greeting = 'Good Evening';
  }
  return greeting;
}

export default function WelcomeMessage() {
  const classes = useStyles();
  const { userData } = useContext(UserStateContext);

  return (
    <h2 className={classes.message}>
      {' '}
      {greet()},
      <span className={classes.colored}>
        <br /> {userData.firstName}
      </span>
    </h2>
  );
}
