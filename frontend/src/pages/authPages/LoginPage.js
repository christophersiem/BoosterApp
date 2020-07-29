import React, {useContext} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import {UserStateContext} from "../../context/user/UserContext";
import {Redirect} from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";
import {useLocation} from "react-router";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: "1",
        overflow: "scroll",


    },
    image: {
        padding: "45px 0px 15px",
        Width: "300px",
        marginBottom:"15px"
    },

    welcome2: {
        fontFamily: 'Lora',
        fontSize: theme.typography.subtitle2.fontSize,
        letterSpacing: theme.typography.subtitle2.letterSpacing,
        color:"#AD6B36",
        alignSelf: "center",
        margin: "25px 15px 20px"
    },
    mood: {
        maxWidth: "414px",

    },
    name: {
        fontFamily: 'Lora',
        fontSize:"42px",
        letterSpacing:theme.typography.subtitle2.letterSpacing,
        color:"#ad6b36"
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
                <img className={classes.image} src={"./login_logo.png"} alt="MoodBoost_Logo"/>


                <img className={classes.mood} src={"./mood.jpeg"} alt="MoodBoost_Logo"/>


                <Grid item>
                    <div className={classes.welcome2}> Please sign in</div>
                </Grid>
                <LoginForm/>
            </Grid>
            <Grid
                container
                justify="flex-end"
            >
            </Grid>
        </div>
    )
}

