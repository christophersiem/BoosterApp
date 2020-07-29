import React, {useContext, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles} from "@material-ui/core/styles";
import {deleteUser} from "../../utils/auth-utils";
import {removeJWTToken} from "../../utils/jwt-utils";
import {LOGIN_FAILED} from "../../context/user/UserContextProvider";
import {UserDispatchContext, UserStateContext} from "../../context/user/UserContext";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    delete: {
        color: theme.palette.first,
        margin: "15px 0px",

    },
    delButton: {
        color: "red",
        alignSelf: "center",
        marginTop: "20px"
    },
    text:{
        fontFamily:theme.typography.subtitle2.fontFamily
    }


}))

export default function UserDeleteDialog() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const dispatch = useContext(UserDispatchContext);
    const {userData} = useContext(UserStateContext);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleClickDelete() {
        console.log(userData.userName)
        deleteUser(userData.userName)
            .then(removeJWTToken())
            .catch((e) => console.error(e))
        dispatch({type: LOGIN_FAILED})

    }


    return (
        <>
            <Button className={classes.delButton} onClick={handleClickOpen}>Delete Your Account

            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="caution"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="caution">{"Caution"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" className={classes.text}>
                        Are you sure you want to delete your Account? This cannot be undone
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Grid
                        container
                        justify="space-around"
                        alignItems="center"
                    >
                        <Grid item>
                            <Button
                                className={classes.delete}
                                onClick={() => {
                                    handleClickDelete()
                                }}
                                href="/">
                                Delete
                            </Button>
                        </Grid>

                    <Button onClick={handleClose} style={{color:"#47392d"}} autoFocus>
                        Cancel
                    </Button>
                    </Grid>
                </DialogActions>
            </Dialog>
        </>
    );
}