import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: "1",
    },
    title: {
        textAlign:"center",
        margin:"24px",
        fontFamily:theme.typography.subtitle.fontFamily,
        fontSize:theme.typography.subtitle.fontSize,
        letterSpacing:theme.typography.subtitle.letterSpacing,
    },
}))

export default function FAQ(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
        <div className={classes.title}>
        <p>FAQ</p>
        </div>
        </div>
    )

}