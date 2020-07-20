import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    colored: {
    color: "#0030A9",
    fontStyle: "italic",
},

message: {
    fontFamily: theme.typography.subtitle2.fontFamily,
    fontSize: theme.typography.subtitle2.fontSize,
    letterSpacing:theme.typography.subtitle2.letterSpacing,
    lineHeight:theme.typography.subtitle2.lineHeight,
    paddingLeft: "16px",
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

