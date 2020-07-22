import React, {useEffect} from "react";
import {removeJWTToken} from "../../utils/jwt-utils";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    image: {
        height: "180px",
        width:"180px"
    },

    title:{
        fontFamily: theme.typography.subtitle.fontFamily,
        fontSize: theme.typography.subtitle2.fontSize,
        letterSpacing: theme.typography.subtitle.letterSpacing,
        marginTop:"50px",
    },

    button:{
        marginTop:"30px",
    }
}))

export default function LogoutPage() {
    const classes = useStyles();

    const history = useHistory();
    const handleChange = () => {
        history.push(`/login`);
    };

    useEffect(() => {
            removeJWTToken()

        }, []
    )

    return (
        <>
            <Grid container
                  direction="column"
                  justify="center"
                  alignItems="center">
                <Grid item>
                <p className={classes.title}>See you soon!</p>
                </Grid>
                <Grid item>
                <img className={classes.image} src={"/logo.png"} alt="logo_small" width={"40%"} height={"40%"}/>
                </Grid>
                <Grid item>
                <Button
                    className={classes.button}
                    onClick={handleChange}>Login again</Button>
                </Grid>
            </Grid>
        </>

    )

}