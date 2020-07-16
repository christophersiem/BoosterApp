import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import {addNewBooster} from "../utils/booster-utils";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


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


}))

export default function AddBooster() {
    const classes = useStyles();
    const [type, setType] = useState('JOY');
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
            justify="space-around"
            alignItems="center"
        >

    <FormControl>
        <Paper className={classes.paper} elevation={10}>
            <h3 className={classes.title}>Add a booster</h3>

        <Grid>

        <RadioGroup aria-label="type" name="type" row value={type} onChange={handleChangeType} required>
            <FormControlLabel value="JOY" control={<Radio />} label="Joy" />
            <FormControlLabel value="CALM" control={<Radio />} label="Calm" />
            <FormControlLabel value="CONFIDENCE" control={<Radio />} label="Confidence" />
        </RadioGroup>

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
            required/>
        </form>
        <br/>

        </Grid>
        <Grid>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="message" label="Your Message" variant="outlined" multiline rows={4} onChange={handleChangeMessage} value={message}/>
        </form>
        </Grid>
        <Button
            onClick={handleSubmit}
            color="primary"
            disabled={name.length < 5 || message.length<5}
        >
            Create Booster
        </Button>
        </Paper>
    </FormControl>
        </Grid>
    </div>
)

}