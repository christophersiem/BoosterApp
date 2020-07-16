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


const useStyles = makeStyles(() => ({
    mainPage: {
        flexGrow: 1,
    },

    field:{
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


}))

export default function AddBooster() {
    const classes = useStyles();
    const [type, setType] = useState('');
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const boosterToAdd = {
        creator: "2",
        owner: "2",
        type: type,
        name: name,
        message: message,
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
    const nameElement = document.getElementById("name")
    const messageElement = document.getElementById("message")

    function handleSubmit(){
        addNewBooster(boosterToAdd);
        nameElement.value="";
        messageElement.value="";

    }
return(
    <div className={classes.mainPage}>
        <Grid
            container
            direction="column"
            alignItems="center"
        >
    <FormControl>
            <h3 className={classes.title}>Add a booster</h3>
        <Grid>
            <FormControl fullWidth={true} variant="outlined" className={classes.formControl}>
                <InputLabel id="type">Booster Type</InputLabel>
                <Select
                    value={type}
                    onChange={handleChangeType}
                    label="Type"
                    id="type"
                    required
                >
                    <MenuItem value="">
                        <em>Booster Type</em>
                    </MenuItem>
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
            error={name.length < 5}
            label="Name of Booster"
            variant="outlined"
            onChange={handleChangeName}
            value={name}
            fullWidth={true}
            required/>
        </form>
        <br/>
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
                error={message.length < 10}
                required={true}
            />
        </form>
        </Grid>
        <Button
            onClick={handleSubmit}
            color="primary"
            disabled={name.length < 5 || message.length<5}
        >
            Create Booster
        </Button>
    </FormControl>
        </Grid>
    </div>
)

}