import React, {useContext, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {performLogin} from "../utils/auth-utils";
import {getDecodedJWTToken, setJWTToken} from "../utils/jwt-utils";
import {UserDispatchContext, UserStateContext} from "../context/user/UserContext";
import {LOGIN, LOGIN_FAILED, LOGIN_SUCCESS} from "../context/user/UserContextProvider";
import {Redirect} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: "1",
        padding: theme.spacing(0,3,0)
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

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    image: {

        padding: theme.spacing(5, 0, 5),
        width: "340px",
    },

    welcome:{
        fontFamily: 'Noto Sans',
        fontSize:"18px",
        letterSpacing:"1.5px",
        alignSelf:"start"
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

            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <img className={classes.image} src={"./logo_login.png"} alt="MoodBoost_Logo"/>

                    <h2 className={classes.welcome} >Nice to have you here!<br/> Please sign in</h2>
                    <form className={classes.form} noValidate>
                        <TextField
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

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                </Box>
            </Container>
        </div>

    )
}
