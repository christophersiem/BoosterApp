import React from "react";

import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

import RegistrationForm from "../../components/forms/RegistrationForm";


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        overflow: "scroll",
    },
    image: {
        margin: "20px 0px",
        alignSelf: "center",
        justifyContent: "center",
    },

    welcome: {
        fontFamily: 'Noto Sans',
        fontSize: "18px",
        letterSpacing: "1.5px",
        textAlign: "start",
    }

}))

export default function RegisterPage() {


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <img className={classes.image} src={"/logo.png"} alt="logo_small" width={"100%"} height={"100%"}/>

                </Grid>
                <h2 className={classes.welcome}>Hello stranger!<br/> Who are you?</h2>
                <RegistrationForm/>

            </Grid>
        </div>

    )
}