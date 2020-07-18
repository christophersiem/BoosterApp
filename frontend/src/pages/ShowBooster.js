import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {fetchBoosterById} from "../utils/booster-utils";
import {useParams} from "react-router";


const useStyles = makeStyles(() => ({

    root: {
        flexGrow: "1",
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
    }
}))


export default function ShowBooster() {
    const classes = useStyles();

    const [boosterToDisplay, setBoosterToDisplay] = useState([]);
    let {id} = useParams();

    useEffect(() => {

        fetchBoosterById(id)
            .then(data => setBoosterToDisplay(data))
            .then(console.log(boosterToDisplay))
    }, [])


    return (

        <div className={classes.root}>
            <div className={"text"}>
                <h2>This is your Booster from <p className={classes.info}>{boosterToDisplay.creator}</p></h2>
                <div>{boosterToDisplay.message} </div>

            </div>
        </div>
    )

}