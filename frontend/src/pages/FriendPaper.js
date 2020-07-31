import React from "react";
import Alert from "@material-ui/lab/Alert";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FriendDeleteDialog from "../components/dialogs/FriendDeleteDialog";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    alert: {
        justifyContent: "center",

    },
    paper: {
        margin: "10px 40px",
        backgroundColor: "#f5d3ae",
        padding: "10px 20px",
        borderRadius: "10px",
        width: "70%"
    },
    text: {
        fontFamily: theme.typography.subtitle
    },

}))

export default function FriendPaper(props) {
    const classes = useStyles();

    function handleDeleteSuccess(friendToRemove) {

        props.setallFriends(props.allFriends.filter(friend => friend !== friendToRemove))

    }

    return (
<>
        {
    !props.allFriends.length > 0 &&
    <Alert className={classes.alert} variant="outlined" severity="info">
        You have no friends in your list. <br/>
    </Alert>
}
    {
        props.allFriends && props.allFriends.map((friend) => (
            <Paper className={classes.paper} key={friend}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item className={classes.text}>
                        {friend}
                    </Grid>
                    <Grid item>
                        <FriendDeleteDialog friend={friend}
                                            handleDeleteSuccess={() => handleDeleteSuccess(friend)}/>
                    </Grid>
                </Grid>
            </Paper>))}

    </>
)}