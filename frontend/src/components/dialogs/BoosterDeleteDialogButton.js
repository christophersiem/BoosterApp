import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles} from "@material-ui/core/styles";
import {deleteBooster} from "../../utils/booster-utils";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(() => ({
    delete: {
        color: "#951010",
        margin:"15px 0px",

    },


}))

export default function BoosterDeleteDialogButton(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const idToDelete = (props.value)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleDelete(idToDelete) {
        deleteBooster(idToDelete)
    }


    return (
        <div>
            <Button className={classes.delete}
                    onClick={handleClickOpen}
                    fullWidth
                    variant="contained"
                    >
                Delete booster
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="caution"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="caution">{"Caution"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this Booster? This cannot be undone
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
                        onClick={() => {handleDelete(idToDelete)}}
                        href="/">
                        Delete
                    </Button>
                        </Grid>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Cancel
                    </Button>
                    </Grid>
                </DialogActions>
            </Dialog>
        </div>
    );
}