import React from "react";

import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

import RegistrationForm from "../../components/forms/RegistrationForm";


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        overflow: "scroll",
        paddingTop:"20px"
    },
    image: {
        margin: "20px 0px",
        height:"60%",
        width:"60%",
        alignSelf: "center",
        justifyContent: "center",
        paddingLeft:"20px",
    },

    welcome: {
        fontFamily: 'Noto Sans',
        fontSize: "18px",
        letterSpacing: "1.5px",
        textAlign: "start",
        paddingRight:"20px"
    }

}))

export default function RegisterPage() {


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
                container
                justify="center"
                alignItems="center"

            >
                <Grid item xs={4}>
                    <img className={classes.image} src={"/logo.png"} alt="logo_small" width={"100%"} height={"100%"}/>

                </Grid>
                <div className={classes.welcome}>Hello stranger!<br/> Who are you?</div>
            </Grid>
            <RegistrationForm/>
        </div>

    )
}