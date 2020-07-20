import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import {addNewBooster} from "../utils/booster-utils";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    field: {
        alignItems: "center",
        margin: "10px 0px",
    },
    paper: {
        margin: "5px 0px",
        padding: "0px 10px"

    },
    formControl: {
        minWidth: 320,
    },


    title:{
        textAlign:"center",
        margin:"24px",
        fontFamily:theme.typography.subtitle.fontFamily,
        fontSize:theme.typography.subtitle.fontSize,
        letterSpacing:theme.typography.subtitle.letterSpacing,
    }


}))

export default function AddBooster() {
    const classes = useStyles();
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [youtube, setYoutube] = useState("");

    const boosterToAdd = {
        creator: "2", //ID mit der ich eingeloggt bin
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
        <div className={classes.root}>
            <p className={classes.title}>Add a booster</p>
            <Grid
                container
                direction="column"
                alignItems="center"
            >
                <FormControl>

                    <Grid>
                        <FormControl fullWidth={true} variant="outlined" className={classes.formControl}>
                            <InputLabel id="type">Booster Type</InputLabel>
                            <Select
                                value={type}
                                onChange={handleChangeType}
                                label="Type"
                                id="type"
                                displayEmpty ={true}
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
            </Grid>
        </div>
    )

}