import React, {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import {fetchIdFromType} from "../utils/booster-utils";
import {useHistory} from "react-router";

const owner = "2";
const useStyles = makeStyles((theme) => ({
    button: {
        width: 120,
        height: 60,
        margin: "20px 0px",
        borderRadius: "10%"
    },

}));

export default function BoosterButton() {
    const [randomId, setRandomId] = useState([]);
    const classes = useStyles();
    const history = useHistory();


    function redirect(boosterType) {
        fetchIdFromType(boosterType, owner)
            .then((data) => setRandomId(data))
            .catch((e) => console.error(e))
            .then (history.push(`/booster/${randomId}`))

    };

    return (

        <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
        >
            <div className={classes.root}>
                <Grid>
                    <Button value={"JOY"} onClick={() => redirect("JOY")} variant="outlined" className={classes.button}>Joy
                        Booster</Button>
                </Grid>
                <Grid>
                    <Button value={"CALM"} onClick={() => redirect("CALM")} variant="outlined" className={classes.button}>Calm
                        Booster</Button>
                </Grid>
                <Grid>
                    <Button value={"CONFIDENCE"} onClick={() => redirect("CONFIDENCE")} variant="outlined" className={classes.button}>Confidence
                        Booster</Button>
                </Grid>
            </div>
        </Grid>

    )
}



