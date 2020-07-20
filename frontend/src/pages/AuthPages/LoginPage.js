import React, {useContext, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {performLogin} from "../../utils/auth-utils";
import {getDecodedJWTToken, setJWTToken} from "../../utils/jwt-utils";
import {UserDispatchContext, UserStateContext} from "../../context/user/UserContext";
import {LOGIN, LOGIN_FAILED, LOGIN_SUCCESS} from "../../context/user/UserContextProvider";
import {Redirect} from "react-router-dom";


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: "1",
    },
    title: {
        color: "black",
        textAlign: "center",
        fontFamily: "Rock Salt",
        fontSize: "32px",
        display: "inline"
    },
    mColor: {
        color: "#0030A9",
        display: "inline-block",
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    inputField: {
        width: "80%",
    },
    submit: {
        margin: "24px 0px 16px",
        width: "80%"
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

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useContext(UserDispatchContext);

    const classes = useStyles();

    function login() {
        dispatch({type: LOGIN});
        performLogin(username, password)
            .then((response) => {
                setJWTToken(response);
                const userData = getDecodedJWTToken();
                dispatch({type: LOGIN_SUCCESS, payload: userData});
            })
            .catch(() => {
                dispatch({type: LOGIN_FAILED});
            });
    }

    const {authStatus} = useContext(UserStateContext);
    if (authStatus === 'SUCCESS') {
        return <Redirect to={'/'}/>;
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

                <TextField
                    className={classes.inputField}
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoFocus
                />

                <TextField
                    className={classes.inputField}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />


                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={login}
                    >
                        Sign In
                    </Button>

            <Link href="/register" variant="body2">
                {"No Account? Sign Up!"}
            </Link>
            </Grid>

        </div>
    )
}

