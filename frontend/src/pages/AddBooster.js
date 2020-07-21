import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import AddBoosterForm from "../components/forms/AddBoosterForm";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    paper: {
        margin: "5px 0px",
        padding: "0px 10px"

    },

    title: {
        textAlign: "center",
        margin: "24px",
        fontFamily: theme.typography.subtitle.fontFamily,
        fontSize: theme.typography.subtitle.fontSize,
        letterSpacing: theme.typography.subtitle.letterSpacing,
    }


}))

export default function AddBooster() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <p className={classes.title}>Add a booster</p>

                <AddBoosterForm/>

        </div>
    )

}