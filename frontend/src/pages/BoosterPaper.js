import React, {useContext} from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import {makeStyles} from "@material-ui/core/styles";
import {BoosterDispatchContext} from "../context/booster/BoosterContext";
import {removeBooster} from "../context/booster/booster-actions";


const useStyles = makeStyles((theme) => ({

    paper: {
        margin: "7px 0px",
        padding: "0px 10px",
        fontFamily: theme.typography.subtitle2.fontFamily,
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
    const dispatch = useContext(BoosterDispatchContext)

    function handleDelete(id) {
        removeBooster(dispatch,id)
            .catch((e) => console.error(e))
    }

    return(
        <div className={classes.paper} key={props.booster.id}>
            <Paper className={props.moodStyle} elevation={10}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item className={props.moodStyle}>
                        {props.booster.name}
                    </Grid>


                        <IconButton className={classes.delIcon}
                                    onClick={() => handleDelete(props.booster.id)}>
                            <DeleteIcon/>
                        </IconButton>

                </Grid>
            </Paper>
        </div>

    )

}