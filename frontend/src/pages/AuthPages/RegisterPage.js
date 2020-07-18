import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {addNewUser} from "../../utils/auth-utils";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router";

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
    inputField: {
        width: "80%",
    },
    welcome: {
        fontFamily: 'Noto Sans',
        fontSize: "18px",
        letterSpacing: "1.5px",
        textAlign:"start",
    }

}))

export default function RegisterPage() {

    const history = useHistory();
    const classes = useStyles();
    const [registerState, setRegisterState] = useState({
        firstName: "",
        username: "",
        password: "",
        email: "",

    })

    function handleChange(event) {
        const {name, value} = event.target;
        setRegisterState({
            ...registerState,
            [name]: value
        });
    }
    function handleSubmit(event) {
        event.preventDefault();
        addNewUser(registerState)
            .catch((e) => console.error(e))
            .then(() =>history.push(`/login`))
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
                    <img className={classes.image} src={"/logo.png"} alt="logo_small" width={"100%"} height={"100%"}/>

                </Grid>
                <h2 className={classes.welcome}>Hello stranger!<br/> Who are you?</h2>
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
                    />
                    <Button onClick={handleSubmit}>REGISTER</Button>
                <Button onClick={history.goBack}>Go back to login</Button>

            </Grid>
        </div>

    )
}