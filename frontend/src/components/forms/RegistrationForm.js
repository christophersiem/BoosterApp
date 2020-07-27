import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, {useContext, useState} from "react";
import {useHistory} from "react-router";
import {addNewUser} from "../../utils/auth-utils";
import {makeStyles} from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

import {UserDispatchContext, UserStateContext} from "../../context/user/UserContext";
import {REGISTRATION, REGISTRATION_FAILED, REGISTRATION_SUCCESS} from "../../context/user/UserContextProvider";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
    inputField: {
        width: "80%",
        margin:"3px"
    },
    submit: {
        margin: "24px 0px ",
        width: "40%"
    },
    submit2: {
        margin: "10x 0px ",
        width: "40%",
        backgroundColor:"#80c7c5"
    },
    alert:{
        marginBottom:"12px"
    },
    grid:{
        marginTop:"35px"
    }
}))


export default function RegistrationForm() {
    const dispatch = useContext(UserDispatchContext);
    const {registrationStatus} = useContext(UserStateContext);
    const history = useHistory();
    const classes = useStyles();
    const [passwordState, setPasswordState] = useState("");
    const [registerState, setRegisterState] = useState({
        firstName: "",
        username: "",
        password: "",
        email: "",
    })
    const validation = registerState.username.length > 5 && registerState.username.length > 0 &&
        registerState.password.length > 5 &&
        passwordState.length > 0 && registerState.password === passwordState &&
        registerState.email.length > 0 && ((registerState.email.includes("@")) && (registerState.email.includes(".de") ||
            registerState.email.includes(".com") || registerState.email.includes(".net")))


    function handleChange(event) {
        const {name, value} = event.target;
        setRegisterState({
            ...registerState,
            [name]: value
        });
    }

    function handleConfirmPassword(event) {
        setPasswordState(event.target.value);
    }


    function handleSubmit(event) {
        event.preventDefault();
        dispatch({type: REGISTRATION});
        addNewUser(registerState)
            .then(data => {
                dispatch({type: REGISTRATION_SUCCESS, payload: data});
            })
            .catch(() => {
                dispatch({type: REGISTRATION_FAILED});
            })
    }

    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            className={classes.grid}
        >

            <TextField
                className={classes.inputField}
                margin={"normal"}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="firstname"
                label="Firstname"
                name="firstName"

            />

            <TextField
                className={classes.inputField}
                margin={"normal"}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                name="username"
                label="Username"
                id="username"
                error={registerState.username.length < 6 && registerState.username.length > 0}
                helperText={registerState.username.length > 0 && registerState.username.length < 6 && "Please enter at least 6 characters"}
            />
            <TextField
                className={classes.inputField}
                margin={"normal"}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                error={registerState.password.length < 6 && registerState.password.length > 0}
                helperText={registerState.password.length > 0 && registerState.password.length < 6 && "Please enter at least 6 characters"}
            />
            <TextField
                className={classes.inputField}
                margin={"normal"}
                onChange={handleConfirmPassword}
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Enter Password again"
                type="password"
                id="password2"
                error={passwordState.length > 0 && registerState.password !== passwordState}
                helperText={passwordState.length > 0 && registerState.password !== passwordState && "Passwords don't match"}

            />
            <TextField
                className={classes.inputField}
                margin={"normal"}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                name="email"
                label="E-Mail"
                type="email"
                id="email"
                error={registerState.email.length > 0 && ((!registerState.email.includes("@")) || !(registerState.email.includes(".de") || registerState.email.includes(".com") || registerState.email.includes(".net")))}
                helperText={registerState.email.length > 0 && ((!registerState.email.includes("@")) || !(registerState.email.includes(".de") || registerState.email.includes(".com") || registerState.email.includes(".net"))) && "Please enter a valid E-Mail address"}
            />
            {registrationStatus === "SUCCESS" && <Alert
                className={classes.alert}
                variant="filled" severity="success"
            > Success! Welcome :) </Alert>}

            {registrationStatus !== "SUCCESS" &&
            <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
                disabled={!validation}
            >
                REGISTER
            </Button>}
            <Button
                fullWidth
                variant="contained"
                color=""
                className={classes.submit2}
                onClick={()=>history.push("/login")}>Go to Log in
            </Button>
        </Grid>
    )
}