import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {fetchBoosterById} from "../utils/booster-utils";
import {useParams} from "react-router";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: theme.typography.subtitle.fontFamily,
        fontSize: theme.typography.subtitle.fontSize,
        letterSpacing: theme.typography.subtitle.letterSpacing,
    },

    root: {
        flexGrow: "1",
        padding:"0px 20px"
    },
    info: {
        color: "#0030A9",
        display: "inline",
    },

    video: {
        justifyContent: "center",
        margin: "20px, 20px",

    },

    text: {
        fontFamily: "Noto Sans",
        fontSize: "24px",
    },
    textContent: {
        fontFamily: "Noto Sans",
        fontSize: "18px",
    }
}))


export default function ShowBooster() {
    const classes = useStyles();

    const [boosterToDisplay, setBoosterToDisplay] = useState([]);
    let {id} = useParams();

    useEffect(() => {

        fetchBoosterById(id)
            .then(data => setBoosterToDisplay(data))
    }, [])


    return (

        <div className={classes.root}>
            <div className={"text"}>
                <h2>This is your Booster from <p className={classes.info}>{boosterToDisplay.creator}</p></h2>
                <p className={classes.title}>Message:</p>
                <Paper className={classes.textContent}>
                    <div>{boosterToDisplay.message} </div>
                </Paper>
                {boosterToDisplay.youtubeLink &&
                <p className={classes.title}>Watch this video now:</p> }
                <div>{boosterToDisplay.youtubeLink}</div>

            </div>
        </div>
    )

}