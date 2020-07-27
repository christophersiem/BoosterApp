import React, {useContext, useState} from "react";
import {UserStateContext} from "../../context/user/UserContext";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import {deleteFriend} from "../../utils/friends-utils";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    delete: {
        color: "#c20909",
        margin: "15px 0px",

    },}))

export default function FriendDeleteDialog(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const {userData} = useContext(UserStateContext);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    function handleDelete(friend) {
        const dataForDelete = {
            userName: userData.userName,
            friend: friend,
        }
        console.log(friend)
        deleteFriend(dataForDelete)
            .catch((e) => console.error(e))
    }

    return (
        <>
            <DeleteIcon

                style={{color: '#c20909'}} onClick={handleClickOpen}/>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="caution"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="caution">{"Caution"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to remove {props.friend} from your friendlist?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <Button
                                className={classes.delete}
                                onClick={() =>
                                    handleDelete(props.friend)}
                                href="/">
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}