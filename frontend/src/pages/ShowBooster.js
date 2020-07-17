import React from "react";
import ReactPlayer from "react-player";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({

    root: {
        flexGrow:"1",
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
    const creator = 2;
    const url = "https://www.youtube.com/watch?v=ekIMGAmgXSI";


    return (

        <div className={classes.root}>
            <div className={"text"}>
                <h2>This is your Booster from <p className={classes.info}>{creator}</p></h2>

                <div className={classes.video}>
                    <ReactPlayer url={url} width={355} height={280}
                    />

                </div>
            </div>
        </div>
    )

}