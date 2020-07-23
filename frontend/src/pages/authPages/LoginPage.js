import React, {useContext} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import {UserStateContext} from "../../context/user/UserContext";
import {Redirect} from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";
import {useLocation} from "react-router";


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: "1",
    },
    image: {
        padding: "60px 0px",
        width: "300px",
    },
    welcome: {
        fontFamily: 'Noto Sans',
        fontSize: "24px",
        letterSpacing: "1.5px",
        color:"#354ea0"
    },
    welcome2: {
        fontFamily: 'Noto Sans',
        fontSize: "24px",
        letterSpacing: "1.5px",
        color:"#354ea0",
        alignSelf:"center"
    },

}))

export default function LoginPage() {
    const classes = useStyles();

    const {authStatus} = useContext(UserStateContext);
    const location = useLocation();
    if (authStatus === 'SUCCESS') {
        const locationState = location.state || {from: {pathname: "/"}};
        return <Redirect to={locationState.from.pathname}/>;
    }
    return (

        <div className={classes.root}>

            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >

                <Grid item>
                    <img className={classes.image} src={"./cleanlogo.png"} alt="MoodBoost_Logo"/>
                </Grid>
                <Grid item>
                    <p className={classes.welcome}>Nice to have you here!</p>

                </Grid>
                <p className={classes.welcome2}> Please sign in</p>
                <LoginForm/>
            </Grid>

        </div>
    )
}

