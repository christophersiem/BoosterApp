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
        overflow:"scroll",

    },
    image: {
        padding: "45px 0px 15px",
        Width: "300px",
    },
    welcome: {
        fontFamily: 'Noto Sans',
        fontSize: "18px",
        letterSpacing: "1.5px",
        color:"#354ea0",
        marginTop:"15px"
    },
    welcome2: {
        fontFamily: 'Noto Sans',
        fontSize: "18px",
        letterSpacing: "1.5px",
        color:"#354ea0",
        alignSelf:"center",
        margin:"25px 15px 20px"
    },
    mood:{
        maxWidth: "375px",
        opacity:"80"
    }

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
                justify="center"
                direction="column"
                alignItems="center"


            >

                <Grid item>
                    <img className={classes.image} src={"./cleanlogo.png"} alt="MoodBoost_Logo"/>
                </Grid>

                <img className={classes.mood} src={"./mood.jpeg"} alt="MoodBoost_Logo"/>

                <Grid item>
                    <div className={classes.welcome}>Nice to have you here!</div>
                </Grid>
                <Grid item>
                <div className={classes.welcome2}> Please sign in</div>
                </Grid>
                <LoginForm/>
            </Grid>

        </div>
    )
}

