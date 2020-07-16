import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    colored: {
    color: "#0030A9",
    fontStyle: "italic",
},

message: {
    fontFamily: 'Noto Sans, sans-serif',
    paddingLeft: "16px",
    fontSize: "18px",
    letterSpacing:"1.5px",
    lineHeight:"30px",
}}
    ));

function greet() {


    const myDate = new Date();
    const hrs = myDate.getHours();
    let greeting;

    if (hrs < 12) {
        greeting = "Good Morning";

    } else if (hrs >= 12 && hrs <= 17) {
        greeting = "Good Afternoon";

    }
    else if (hrs >= 17 && hrs <= 24) {
        greeting = "Good Evening";
    }
    return greeting



}

export default function WelcomeMessage() {
    const classes = useStyles();
    return (

        <h2 className={classes.message}> {greet()},<span className={classes.colored}><br/> Christopher!</span></h2>

    )
}

