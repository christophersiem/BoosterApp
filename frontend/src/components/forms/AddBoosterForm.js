import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, {useContext, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {BoosterDispatchContext, BoosterStateContext} from "../../context/booster/BoosterContext";
import {ADD_BOOSTER, addBooster} from "../../context/booster/booster-actions";
import {UserStateContext} from "../../context/user/UserContext";
import {fetchUserNumbers} from "../../utils/user-utils";
import ShowAlerts from "../alerts/ShowAlerts";

const useStyles = makeStyles((theme) => ({
    field: {
        margin: "6px 40px",
        width: "80%",
    },
    addBoosterButton: {
        backgroundColor: "rgb(191,148,115)",
        fontFamily: theme.typography.subtitle2.fontFamily,
        color: "#47392d",
        letterSpacing: theme.typography.subtitle2.letterSpacing,
        margin: "6px 40px",
        width: "80%",
    },
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#43382c",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#AD6B36"
        },
    },

}))
const initialState = {
    creator: "",
    creatorName: "",
    owner: "",
    type: "",
    name: "",
    message: "",
    youtubeLink: "",
    image: "",
}

export default function AddBoosterForm() {

    const {addStatus} = useContext(BoosterStateContext);
    const {userData} = useContext(UserStateContext);
    const dispatch = useContext(BoosterDispatchContext);
    const classes = useStyles();
    const [boosterToAdd, setBoosterToAdd] = useState(initialState)
    const [allFriends, setAllFriends] = useState([])

    function handleChange (event){
        setBoosterToAdd({...boosterToAdd, [event.target.name] : event.target.value});
    }

    function handleSubmit() {
        addBooster(dispatch, boosterToAdd)
            .catch((e) => console.error(e))
    }

    useEffect(() => {
        dispatch({type: ADD_BOOSTER})
        fetchUserNumbers(userData.userName)
            .then(data => setAllFriends(data.friends))
    }, [dispatch, userData.userName])

    return (
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
                                name="owner"
                                className={classes.root}
                                value={boosterToAdd.owner}
                                onChange={handleChange}
                                label="Who is this Booster for?"
                                id="owner"
                                fullWidth={true}
                            >
                                <MenuItem value={userData.userName} style={{fontFamily: "Lora"}}>Me</MenuItem>
                                {allFriends && allFriends.map((friend) => (
                                    <MenuItem value={friend} key={friend}
                                              style={{fontFamily: "Lora"}}>{friend}</MenuItem>))}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item>
                        {boosterToAdd.owner &&
                        <FormControl fullWidth={true} variant="outlined" className={classes.field}>
                            <InputLabel id="type">Booster Type</InputLabel>
                            <Select
                                name="type"
                                className={classes.root}
                                value={boosterToAdd.type}
                                onChange={handleChange}
                                label="Type"
                                id="type"
                                displayEmpty={true}
                            >
                                <MenuItem value="JOY" style={{fontFamily: "Lora"}}>Joy Booster</MenuItem>
                                <MenuItem value="CALM" style={{fontFamily: "Lora"}}>Calm Booster</MenuItem>
                                <MenuItem value="CONFIDENCE" style={{fontFamily: "Lora"}}>Confidence Booster</MenuItem>
                            </Select>
                        </FormControl>}

                    </Grid>
                    {boosterToAdd.type &&
                    <Grid item>
                        <form noValidate autoComplete="off" className={classes.field}>
                            <TextField
                                name="name"
                                className={classes.root}
                                value={boosterToAdd.name}
                                onChange={handleChange}
                                label="Name of Booster"
                                id="name"
                                variant="outlined"
                                fullWidth={true}
                                error={boosterToAdd.name.length > 30 && boosterToAdd.name.length > 0}
                                helperText={boosterToAdd.name.length > 30 && boosterToAdd.name.length > 0 && "Choose a name with maximum 30 characters"}
                            />
                        </form>
                    </Grid>}
                    {boosterToAdd.name &&
                    <Grid item>
                        <form noValidate autoComplete="off" className={classes.field}>
                            <TextField
                                name="youtube"
                                className={classes.root}
                                value={boosterToAdd.youtube}
                                onChange={handleChange}
                                label="Youtube-Link (optional)"
                                id="youtube"
                                variant="outlined"
                                fullWidth={true}
                            />
                        </form>
                    </Grid>}
                    {boosterToAdd.name && <Grid item>
                        <form noValidate autoComplete="off" className={classes.field}>
                            <TextField
                                name="image"
                                className={classes.root}
                                value={boosterToAdd.image}
                                onChange={handleChange}
                                label="Image-Link (optional)"
                                id="image"
                                variant="outlined"
                                fullWidth={true}
                            />
                        </form>
                    </Grid>}
                    {boosterToAdd.name &&
                    <Grid item>
                        <form noValidate autoComplete="off" className={classes.field}>
                            <TextField
                                name="message"
                                className={classes.root}
                                value={boosterToAdd.message}
                                onChange={handleChange}
                                label="Your Message"
                                id="message"
                                variant="outlined"
                                fullWidth={true}
                                multiline rows={4}
                            />
                        </form>
                    </Grid>}
                    <Grid item>
                        <ShowAlerts addStatus = {addStatus}/>
                        {boosterToAdd.name &&
                        <Button
                            className={classes.addBoosterButton}
                            onClick={handleSubmit}
                            disabled={
                                boosterToAdd.name.length > 30 ||
                                boosterToAdd.name.length < 1 ||
                                !boosterToAdd.owner ||
                                !boosterToAdd.type ||
                                (!boosterToAdd.youtube && !boosterToAdd.image && !boosterToAdd.message)}
                        >
                            Create Booster
                        </Button>}
                    </Grid>
                </FormControl>
            </Grid>
    )
}