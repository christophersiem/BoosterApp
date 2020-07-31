import React, {useContext, useEffect, useState} from "react";

import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {addUserAsFriend} from "../utils/friends-utils";
import {fetchUserNumbers} from "../utils/user-utils";
import Alert from "@material-ui/lab/Alert";
import FriendPaper from "./FriendPaper";
import {UserStateContext} from "../context/user/UserContext";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: "1",
    },
    input: {
        width: "240px",
    },
    message: {
        fontFamily: theme.typography.subtitle2.fontFamily,
        fontSize: theme.typography.subtitle2.fontSize,
        letterSpacing: theme.typography.subtitle2.letterSpacing,
        lineHeight: theme.typography.subtitle2.lineHeight,
        paddingLeft: "16px",
    },

    addFriendButton: {
        margin: "24px 0px 16px",
        padding: "10px 15px",
        backgroundColor: "rgb(191,148,115)",
        fontFamily: theme.typography.subtitle2.fontFamily,
        color: "#47392d",
        letterSpacing: theme.typography.subtitle2.letterSpacing,

    },

}))


export default function Friends() {
    const classes = useStyles();
    const [friendToAdd, setFriendToAdd] = useState("")
    const [allFriends, setAllFriends] = useState([])
    const [selfAdd, setSelfAdd] = useState(false)
    const {userData} = useContext(UserStateContext);

    useEffect(() => {

        fetchUserNumbers()
            .then((data) => setAllFriends(data.friends))

            .catch((e) => console.error(e))

    }, [])

    function handleChangeUsernameToAdd(event) {
        setFriendToAdd(event.target.value)
    }


    const [friendExists, setFriendExists] = useState(true)
    const [userExists, setUserExists] = useState()

    function addFriend() {
        setSelfAdd(false)
        setFriendExists(true)
        if (allFriends.includes(friendToAdd)) {
            setFriendExists(false)
        }
        if (userData.userName === friendToAdd) {
            setSelfAdd(true)
        } else {
            addUserAsFriend(friendToAdd)
                .then(() => {
                    setUserExists(true)
                    setAllFriends([...allFriends, friendToAdd])

                })
                .catch(() => setUserExists(false))
        }
    }

    return (

        <>
            <div className={classes.root}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <p className={classes.message}>Add a Friend</p>

                    <Grid>
                        <TextField
                            className={classes.input}
                            onChange={handleChangeUsernameToAdd}
                            id="userToAdd"
                            label="enter username"
                            variant="outlined"
                            helperText={friendToAdd.length > 0 && friendToAdd.length < 6 && "Please enter at least 6 characters"}
                        />
                    </Grid>
                    <Grid>
                        <Button
                            className={classes.addFriendButton}
                            disabled={friendToAdd.length < 6}
                            onClick={() => {
                                addFriend()
                            }}>Add user as friend</Button>

                    </Grid>
                    {selfAdd === true && <Alert
                        variant="filled"
                        severity="error">You can't put yourself to your friendlist</Alert>}
                    {userExists === false && <Alert
                        variant="filled"
                        severity="error">User doesn't exist</Alert>}
                    {!friendExists &&
                    <Alert
                        variant="filled"
                        severity="error">User is already your friend</Alert>}

                    <p className={classes.message}>Your friends</p>
                </Grid>
                <FriendPaper allFriends={allFriends} setallFriends={setAllFriends}/>

            </div>
        </>
    )

}