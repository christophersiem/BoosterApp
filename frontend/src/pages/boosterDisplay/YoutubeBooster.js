import React from "react";
import ReactPlayer from "react-player";
import {makeStyles} from "@material-ui/core/styles";

export default function YoutubeBooster() {
    let url = "https://www.youtube.com/watch?v=p-Z3YrHJ1sU";
    let creator = "Michael"

    const useStyles = makeStyles(() => ({
        info: {
            color: "#0030A9",
            display: "inline",
        },

        video: {
            justifyContent: "center",
            marginTop: "20px",

        }
    }))


    const classes = useStyles();
    return (

        <div className={"booster"}>
            <h2>This is your Booster from <p className={classes.info}>{creator}</p></h2>

            <div className={classes.video}>
                <ReactPlayer url={url} width={355} height={280}
                />
            </div>

        </div>
    )

}