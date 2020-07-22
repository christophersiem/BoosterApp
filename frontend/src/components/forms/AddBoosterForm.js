import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, {useContext, useState} from "react";
import {youTubeGetID} from "../../utils/booster-utils";
import {makeStyles} from "@material-ui/core/styles";
import {BoosterDispatchContext, BoosterStateContext} from "../../context/booster/BoosterContext";
import {addBooster} from "../../context/booster/booster-actions";
import {UserStateContext} from "../../context/user/UserContext";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
    field: {
        margin: "6px 40px",
        width: "80%",
    },
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#8b95ba"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "purple"
        },
    }
}))

export default function AddBoosterForm() {

    const { addStatus } = useContext(BoosterStateContext);
    const {userData} = useContext(UserStateContext);

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
        console.log(owner)
    };

    const handleChangeType = (event) => {
        setType(event.target.value);
        console.log(type)
    };
    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeMessage = (event) => {
        setMessage(event.target.value);
    };
    const handleChangeYoutube = (event) => {
        let youtubeId = youTubeGetID(event.target.value)
        setYoutube(youtubeId)
    };

    const dispatch = useContext(BoosterDispatchContext);
    function handleSubmit() {
        addBooster(dispatch,boosterToAdd)
            .catch((e) => console.error(e))

    }

    return (
        <>
        <Grid
            container
            direction="column"
            justify="center"
        >
            <FormControl>
                <Grid item>
                    <FormControl fullWidth={true} variant="outlined" className={classes.field}>
                        <InputLabel id="owner">Who is this Booster for?</InputLabel>
                        <Select
                            className={classes.root}
                            value={owner}
                            onChange={handleChangeOwner}
                            label="Who is this Booster for?"
                            id="owner"
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
                            className={classes.root}
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
                            className={classes.root}
                            id="name"
                            label="Name of Booster"
                            variant="outlined"
                            onChange={handleChangeName}
                            value={name}
                            fullWidth={true}
                            required
                            error={name.length > 20 && name.length > 0}
                            helperText={name.length > 20 && name.length > 0 && "Choose a name with maximum 20 characters"}
                        />
                    </form>
                </Grid>
                <Grid item>
                    <form noValidate autoComplete="off" className={classes.field}>
                        <TextField
                            className={classes.root}
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
                            className={classes.root}
                            fullWidth={true}
                            id="message"
                            label="Your Message"
                            variant="outlined"
                            multiline rows={4}
                            onChange={handleChangeMessage}
                            value={message}
                        />
                    </form>
                </Grid>
                <Grid item>
                    {addStatus === "SUCCESS" &&<Alert
                        variant="filled" severity="success"
                    > Booster successfully created :) </Alert>}
                    {addStatus === "FAIL" &&<Alert
                        variant="filled" severity="error"
                    > Check entries! </Alert>}
                    <Button
                        className={classes.field}
                        onClick={handleSubmit}
                        color="primary"
                        disabled={name.length > 20 || name.length < 1 || !owner || !type}
                    >
                        Create Booster
                    </Button>

                </Grid>
            </FormControl>
        </Grid>

        </>
    )
}