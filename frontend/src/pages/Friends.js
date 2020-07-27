import React, {useContext, useState} from "react";

import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {UserStateContext} from "../context/user/UserContext";
import {addUserAsFriend} from "../utils/friends-utils";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: "1",
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

    paper:{
        margin: "10px 20px",
        backgroundColor:"white",
        padding: "10px 20px"
    }


}))


export default function Friends() {
    const classes = useStyles();
    const {userData} = useContext(UserStateContext);
    const [friendToAdd, setFriendToAdd] = useState("")
    const friendData= {
        userName: userData.userName,
        friendToAdd: friendToAdd,

    }
    function handleChangeUsernameToAdd(event) {
        setFriendToAdd(event.target.value)
    }

    function addFriend(){
        addUserAsFriend(friendData)
            .catch((e) => console.error(e))
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
                            disabled={friendToAdd.length<6 }
                            onClick={()=>{addFriend()}}>Add user as friend</Button>
                    </Grid>
                </Grid>
                <p className={classes.message}>Your friends</p>
                {
                    userData.friends && userData.friends.map((friend) => (
                        <Paper className={classes.paper} key={friendToAdd}>
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
                                    <DeleteIcon style={{color:'#c20909'}}/>
                                </Grid>
                            </Grid>
                        </Paper>))}

            </div>
        </>
    )

}