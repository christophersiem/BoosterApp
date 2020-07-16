import React, {useEffect, useState} from "react";
import {deleteBooster, fetchCreatedBooster} from "../utils/booster-utils";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
    mainPage: {
        flexGrow: 1,
        overflow: "auto",
        padding: "0 20px",
    },
    paper: {
        margin: "5px 0px",
        padding: "0px 10px"

    },
    delIcon: {
        alignItems: "right",
        color: "#F7A396"
    },
    title: {
        padding: "10px"
    }
}))


export default function ListBooster() {
    const classes = useStyles();
    const [allBooster, setAllBoosters] = useState([]);


    useEffect(() => {
        fetchCreatedBooster()
            .then((data) => setAllBoosters(data))
            .catch((e) => console.error(e));
    }, [])

    return (

        <div className={classes.mainPage}>
            <Paper className={classes.paper} elevation={10}>
            <h3 className={classes.title}>Your created booster</h3>
            </Paper>
            {allBooster.map(booster =>
                <div id={"boosterList"} key={booster.id}>
                    <Paper className={classes.paper} elevation={10}>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <Grid>
                                {booster.name}
                            </Grid>
                            <Grid>
                                <IconButton>
                                    <EditIcon/>
                                </IconButton>
                                <IconButton className={classes.delIcon} onClick={() => deleteBooster(booster.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>)}
                </div>

                )

            }








