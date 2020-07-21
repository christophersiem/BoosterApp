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

const useStyles = makeStyles(() => ({
    field: {
        margin: "10px 40px",
        width: "80%",

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
    const [owner, setOwner] = useState("");
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [youtube, setYoutube] = useState("");

    const boosterToAdd = {
        creator: userData.id,
        creatorName: userData.firstName,
        owner: owner,
        type: type,
        name: name,
        message: message,
        youtubeLink: youtube,
    }
    const handleChangeOwner = (event) => {
        setOwner(event.target.value);
    };
    const handleChangeType = (event) => {
        setType(event.target.value);
    };
    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeMessage = (event) => {
        setMessage(event.target.value);
    };
    function youTubeGetID(url){
        let ID = '';
        url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if(url[2] !== undefined) {
            ID = url[2].split(/[^0-9a-z_\-]/i);
            ID = ID[0];
        }
        else {
            ID = url;
        }
        return ID;
    }

    const handleChangeYoutube = (event) => {
        let youtubeId = youTubeGetID(event.target.value)
        setYoutube(youtubeId)}

    function handleSubmit() {
        addNewBooster(boosterToAdd)
            .catch((e) => console.error(e));

    }

    return (
        <Grid
            container
            direction="column"
            justify="center"


        >

            <FormControl>
                <Grid item>
                    <FormControl fullWidth={true} variant="outlined" className={classes.field}>
                        <InputLabel id="type">Who is this Booster for?</InputLabel>
                        <Select

                            value={userData.id}
                            onChange={handleChangeOwner}
                            label="Who is this Booster for?"
                            id="type"
                            displayEmpty={true}
                            fullWidth={true}

                        >
                            <MenuItem value={userData.id}>Me</MenuItem>

                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl fullWidth={true} variant="outlined" className={classes.field}>
                        <InputLabel id="type">Booster Type</InputLabel>
                        <Select
                            value={type}
                            onChange={handleChangeType}
                            label="Type"
                            id="type"
                            displayEmpty={true}
                        >
                            <MenuItem value="JOY">Joy Booster</MenuItem>
                            <MenuItem value="CALM">Calm Booster</MenuItem>
                            <MenuItem value="CONFIDENCE">Confidence Booster</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <form noValidate autoComplete="off" className={classes.field}>
                        <TextField

                            id="name"
                            label="Name of Booster"
                            variant="outlined"
                            onChange={handleChangeName}
                            value={name}
                            fullWidth={true}
                            required
                            error={name.length > 20 && name.length > 0}
                            helperText={name.length < 5 && name.length > 0 && "Choose a name with a minimum of 5 characters"}
                        />
                    </form>
                </Grid>
                <Grid item>
                    <form noValidate autoComplete="off" className={classes.field}>
                        <TextField
                            id="youtube"
                            label="Youtube-Link (optional)"
                            variant="outlined"
                            onChange={handleChangeYoutube}
                            fullWidth={true}
                        />
                    </form>
                </Grid>
                <Grid item>
                    <form noValidate autoComplete="off" className={classes.field}>
                        <TextField
                            fullWidth={true}
                            id="message"
                            label="Your Message"
                            variant="outlined"
                            multiline rows={8}
                            onChange={handleChangeMessage}
                            value={message}
                            error={message.length < 10 && message.length > 0}
                            helperText={message.length < 10 && message.length > 0 && "Enter at least 10 characters"}
                            required={true}
                        />
                    </form>
                </Grid>
                <Grid item>
                    <Button
                        className={classes.field}
                        onClick={handleSubmit}
                        color="primary"
                        disabled={name.length < 5 || message.length < 0}
                    >
                        Create Booster
                    </Button>
                </Grid>
            </FormControl>
        </Grid>
    )
}