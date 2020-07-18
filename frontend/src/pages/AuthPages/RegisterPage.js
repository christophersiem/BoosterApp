import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {addNewUser} from "../../utils/auth-utils";
import Button from "@material-ui/core/Button";

export default function LoginPage() {
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
    }


    return (

        <form noValidate>
            <TextField
                margin={"normal"}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="firstname"
                label="Firstname"
                name="firstName"
                autoFocus
            />
            <TextField
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
        </form>


    )
}