import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import {addNewBooster} from "../utils/booster-utils";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(() => ({
    mainPage: {
        flexGrow: 1,
    }
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

    function handleSubmit(){
        addNewBooster(boosterToAdd);
    }
return(
    <div className={classes.mainPage}>
    <FormControl>
        <FormLabel>Booster Type</FormLabel>
        <RadioGroup aria-label="type" name="type" row value={type} onChange={handleChangeType} required>
            <FormControlLabel value="JOY" control={<Radio />} label="Joy" />
            <FormControlLabel value="CALM" control={<Radio />} label="Calm" />
            <FormControlLabel value="CONFIDENCE" control={<Radio />} label="Confidence" />
        </RadioGroup>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField
            id="name"
            error={name.length < 5}
            label="Name of Booster"
            variant="outlined"
            onChange={handleChangeName}
            value={name}
            required/>
        </form>
        <br/>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="name" label="Your Message" variant="outlined" multiline rows={4} onChange={handleChangeMessage} value={message}/>
        </form>
        <Button
            onClick={handleSubmit}
            color="primary"
        >
            Create Booster
        </Button>
    </FormControl>
    </div>
)

}