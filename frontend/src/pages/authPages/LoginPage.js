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
        padding: "40px 0px",
        width: "340px",
    },
    welcome: {
        fontFamily: 'Noto Sans',
        fontSize: "18px",
        letterSpacing: "1.5px",
    }
}))

export default function LoginPage() {
    const classes = useStyles();

    const {authStatus} = useContext(UserStateContext);
    const location = useLocation();
    if (authStatus === 'SUCCESS') {
        const locationState = location.state || {from:{pathname: "/"}};
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


                <img className={classes.image} src={"./logo_login_2.png"} alt="MoodBoost_Logo"/>
                <h2 className={classes.welcome}>Nice to have you here!<br/> Please sign in</h2>

                <LoginForm/>
            </Grid>

        </div>
    )
}

