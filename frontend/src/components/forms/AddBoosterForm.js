import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import {addNewBooster} from "../../utils/booster-utils";
import {makeStyles} from "@material-ui/core/styles";
import {getUserByUsername} from "../../utils/auth-utils";

const useStyles = makeStyles((theme) => ({
    field: {
        alignItems: "center",
        margin: "10px 0px",
    },
    formControl: {
        minWidth: 320,
    },
}))
export default function AddBoosterForm() {
    const [userData, setUserData] = useState("")
    useEffect(() => {
        const username = sessionStorage.getItem('UserName')
        getUserByUsername(username)
            .then((data) => setUserData(data))
            .catch((e) => console.error(e));


    }, [])

    const classes = useStyles();
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [youtube, setYoutube] = useState("");
    const boosterToAdd = {
        creator: userData.id,
        creatorName: userData.firstName,
        owner: "2",
        type: type,
        name: name,
        message: message,
        youtubeLink: youtube,
    }

    const handleChangeType = (event) => {
        setType(event.target.value);
    };
    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeMessage = (event) => {
        setMessage(event.target.value);
    };
    const handleChangeYoutube = (event) => {
        setYoutube(event.target.value);
    };




    function handleSubmit() {
        addNewBooster(boosterToAdd)
            .catch((e) => console.error(e));
    }

    return (
        <FormControl>

            <Grid>
                <FormControl fullWidth={true} variant="outlined" className={classes.formControl}>
                    <InputLabel id="type">Booster Type</InputLabel>
                    <Select
                        value={type}
                        onChange={handleChangeType}
                        label="Type"
                        id="type"
                        displayEmpty={true}
                        className={classes.field}
                    >
                        <MenuItem value="JOY">Joy Booster</MenuItem>
                        <MenuItem value="CALM">Calm Booster</MenuItem>
                        <MenuItem value="CONFIDENCE">Confidence Booster</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        className={classes.field}
                        id="name"
                        label="Name of Booster"
                        variant="outlined"
                        onChange={handleChangeName}
                        value={name}
                        fullWidth={true}
                        required
                        error={name.length < 5 && name.length > 0}
                        helperText={name.length < 5 && name.length > 0 && "Choose a name with a minimum of 5 characters"}
                    />
                </form>
            </Grid>
            <Grid>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        className={classes.field}
                        id="youtube"
                        label="Youtube-Link (optional)"
                        variant="outlined"
                        onChange={handleChangeYoutube}
                        value={youtube}
                        fullWidth={true}
                    />
                </form>
            </Grid>
            <Grid>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="message"
                        label="Your Message"
                        variant="outlined"
                        multiline rows={8}
                        onChange={handleChangeMessage}
                        value={message}
                        fullWidth={true}
                        error={message.length < 10 && message.length > 0}
                        helperText={message.length < 10 && message.length > 0 && "Enter at least 10 characters"}
                        required={true}
                    />
                </form>
            </Grid>

            <Button
                onClick={handleSubmit}
                color="primary"
                disabled={name.length < 5 || message.length < 5}
            >
                Create Booster
            </Button>
        </FormControl>
    )
}