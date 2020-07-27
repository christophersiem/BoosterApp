import React, {useContext, useEffect, useState} from "react";

import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {UserStateContext} from "../context/user/UserContext";
import {addUserAsFriend} from "../utils/friends-utils";
import Paper from "@material-ui/core/Paper";
import {fetchUserNumbers} from "../utils/user-utils";
import Alert from "@material-ui/lab/Alert";
import FriendDeleteDialog from "../components/dialogs/FriendDeleteDialog";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: "1",
        overflow: "scroll"
    },
    input: {
        width: "360px",
    },
    message: {
        fontFamily: theme.typography.subtitle2.fontFamily,
        fontSize: theme.typography.subtitle2.fontSize,
        letterSpacing: theme.typography.subtitle2.letterSpacing,
        lineHeight: theme.typography.subtitle2.lineHeight,
        paddingLeft: "16px",
    },

    paper: {
        margin: "10px 20px",
        backgroundColor: "white",
        padding: "10px 20px"
    }


}))


export default function Friends() {
    const classes = useStyles();
    const {userData} = useContext(UserStateContext);
    const [friendToAdd, setFriendToAdd] = useState("")
    const [allFriends, setAllFriends] = useState([])
    const [friendExists, setFriendExists] = useState(true)


    const dataForFriendship = {
        userName: userData.userName,
        friend: friendToAdd,
    }


    useEffect(() => {
        fetchUserNumbers(userData.userName)
            .then((data) => setAllFriends(data.friends))

            .catch((e) => console.error(e))

    }, [userData.userName])

    function handleChangeUsernameToAdd(event) {
        setFriendToAdd(event.target.value)
    }

    function addFriend() {
        if (allFriends.includes(friendToAdd)) {
            setFriendExists(false)
        } else {
            addUserAsFriend(dataForFriendship)
                .then(window.location.reload())
                .catch((e) => console.error(e))
        }
    }


    return (
        <>
            <div className={classes.root}>
                <p className={classes.message}>Add a Friend</p>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid>
                        <TextField
                            className={classes.input}
                            onChange={handleChangeUsernameToAdd}
                            id="userToAdd"
                            label="enter username"
                            variant="outlined"/>
                    </Grid>
                    <Grid>
                        <Button
                            disabled={friendToAdd.length < 6}
                            onClick={() => {
                                addFriend()
                            }}>Add user as friend</Button>
                    </Grid>

                </Grid>
                {!friendExists &&
                <Alert
                    variant="filled"
                    severity="error">User is already your friend</Alert>}

                <p className={classes.message}>Your friends</p>
                {
                    allFriends && allFriends.map((friend) => (
                        <Paper className={classes.paper}>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                            >
                                <Grid item>
                                    {friend}
                                </Grid>
                                <Grid item>
                                    <FriendDeleteDialog friend={friend}/>
                                </Grid>
                            </Grid>
                        </Paper>))}

                    </div>
                    </>
                    )

                }