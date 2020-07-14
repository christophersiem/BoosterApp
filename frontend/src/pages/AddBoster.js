import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
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
    const handleChange = (event) => {
        setType(event.target.value);
    };

    function handleSubmit(){
        addNewBooster(type);
    }
return(
    <div className={classes.mainPage}>
    <FormControl>
        <FormLabel>Booster Type</FormLabel>
        <RadioGroup aria-label="type" name="type" value={type} onChange={handleChange} required>
            <FormControlLabel value="JOY" control={<Radio />} label="Joy" />
            <FormControlLabel value="CALM" control={<Radio />} label="Calm" />
            <FormControlLabel value="CONFIDENCE" control={<Radio />} label="Confidence" />
        </RadioGroup>
        <Button
            onClick={handleSubmit}
            color="primary"
        >
            Create
        </Button>
    </FormControl>
    </div>
)

}