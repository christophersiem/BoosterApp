import React from "react";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    mainPage: {
        flexGrow: 1,
    },
}))

export default function FAQ(){
    const classes = useStyles();

    return(
        <div className={classes.mainPage}>
        <Paper elevation={10}><h3>FAQ</h3></Paper>
        </div>
    )

}