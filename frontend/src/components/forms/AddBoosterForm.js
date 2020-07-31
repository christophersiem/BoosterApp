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
import Alert from "@material-ui/lab/Alert";
import {fetchUserNumbers} from "../../utils/user-utils";

const useStyles = makeStyles((theme) => ({
    field: {
        margin: "6px 40px",
        width: "80%",
    },
    addBoosterButton:{
        backgroundColor: "rgb(191,148,115)",
        fontFamily: 'Lora',
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

export default function AddBoosterForm() {

    const {addStatus} = useContext(BoosterStateContext);
    const {userData} = useContext(UserStateContext);
    const dispatch = useContext(BoosterDispatchContext);

    const classes = useStyles();
    const [owner, setOwner] = useState("");
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [youtube, setYoutube] = useState("");
    const [image, setImage] = useState("");
    const [allFriends, setAllFriends] = useState([])

    const boosterToAdd = {
        creator: userData.id,
        creatorName: userData.firstName,
        owner: owner,
        type: type,
        name: name,
        message: message,
        youtubeLink: youtube,
        image: image,
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
    const handleChangeYoutube = (event) => {
        setYoutube(event.target.value)
    };
    const handleChangeImage = (event) => {
        setImage(event.target.value)
    };

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

                                <MenuItem value={userData.userName} style={{fontFamily: "Lora"}}>Me</MenuItem>
                                {allFriends && allFriends.map((friend) => (
                                    <MenuItem value={friend} key={friend}
                                              style={{fontFamily: "Lora"}}>{friend}</MenuItem>))}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item>
                        {owner &&
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
                                <MenuItem value="JOY" style={{fontFamily: "Lora"}}>Joy Booster</MenuItem>
                                <MenuItem value="CALM" style={{fontFamily: "Lora"}}>Calm Booster</MenuItem>
                                <MenuItem value="CONFIDENCE" style={{fontFamily: "Lora"}}>Confidence Booster</MenuItem>
                            </Select>
                        </FormControl>}

                    </Grid>
                    {type &&
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
                                error={name.length > 30 && name.length > 0}
                                helperText={name.length > 30 && name.length > 0 && "Choose a name with maximum 30 characters"}
                            />
                        </form>
                    </Grid>}
                    {name &&
                    <Grid item>
                        <form noValidate autoComplete="off" className={classes.field}>
                            <TextField
                                className={classes.root}
                                id="youtube"
                                value={youtube}
                                label="Youtube-Link (optional)"
                                variant="outlined"
                                onChange={handleChangeYoutube}
                                fullWidth={true}
                            />
                        </form>
                    </Grid>}
                    {name && <Grid item>
                        <form noValidate autoComplete="off" className={classes.field}>
                            <TextField
                                className={classes.root}
                                id="image"
                                value={image}
                                label="Image-Link (optional)"
                                variant="outlined"
                                onChange={handleChangeImage}
                                fullWidth={true}
                            />
                        </form>
                    </Grid>}
                    {name &&
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
                    </Grid>}
                    <Grid item>
                        {addStatus === "SUCCESS" && <Alert
                            variant="filled" severity="success"
                        > Booster successfully created :) </Alert>}
                        {addStatus === "FAIL" && <Alert
                            variant="filled" severity="error"
                        > Check entries! </Alert>}
                        {name &&
                        <Button
                            className={classes.addBoosterButton}
                            onClick={handleSubmit}
                            disabled={name.length > 30 || name.length < 1 || !owner || !type || (!youtube && !image && !message)}
                        >
                            Create Booster
                        </Button>}

                    </Grid>
                </FormControl>
            </Grid>

        </>
    )
}