import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {makeStyles} from "@material-ui/core/styles";
import {deleteBooster} from "../utils/booster-utils";

const useStyles = makeStyles((theme) => ({

    paper: {
        margin: "7px 0px",
        padding: "0px 10px",
        fontFamily: 'Noto Sans, sans-serif',
        fontSize: "14px",
        letterSpacing: "1.3px",
        fontWeight: "bold",
    },
        delIcon: {
            alignItems: "right",
        },}

))
export default function BoosterPaper(props) {
    const classes = useStyles();
    function handleDelete(id) {
        deleteBooster(id)
            .catch((e) => console.error(e))
            .then(window.location.reload())
    }


    return(
        <div className={classes.paper} key={props.id}>
            <Paper className={props.moodStyle} elevation={10}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item className={props.moodStyle}>
                        {props.name}
                    </Grid>
                    <Grid item>

                        <IconButton className={classes.delIcon}
                                    onClick={() => handleDelete(props.id)}>
                            <DeleteIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </div>

    )

}