import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {fetchBoosterById} from "../utils/booster-utils";
import {useParams} from "react-router";
import YouTube from '@u-wave/react-youtube';
import Grid from "@material-ui/core/Grid";
import BoosterDeleteDialogButton from "../components/dialogs/BoosterDeleteDialogButton";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import {fade} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: theme.typography.subtitle.fontFamily,
        fontSize: theme.typography.subtitle2.fontSize,
        letterSpacing: theme.typography.subtitle.letterSpacing,
        color: "#fcfaeb",
        marginLeft: "20px"
    },
    root: {
        flexGrow: "1",
        overflow: "scroll",

    },

    info: {
        fontFamily: theme.typography.subtitle.fontFamily,
        color: "#43382c",
        fontSize: "18px",
        marginTop: "5px",
        marginLeft: "20px"
    },
    video: {
        justifyContent: "center",
        margin: "20px, 20px",
    },

    textContent: {
        fontFamily: theme.typography.subtitle.fontFamily,
        fontSize: "18px",
        fontStyle: "italic",
        color:"#43382c",
        margin: "0px 20px"
    },
    delete: {
        color: "#c20909",
    },
    paperColor: {
        backgroundColor: fade("rgb(222,150,93)",0.5)
    },
    image:{
        maxWidth: "374px",
        borderRadius:"10px"
    }
}))

export default function ShowBooster() {
    const classes = useStyles();
    const [fetchStatus, setFetchStatus] = useState("")
    const [boosterToDisplay, setBoosterToDisplay] = useState([]);
    let {id} = useParams();

    useEffect(() => {

        fetchBoosterById(id)
            .then((data) => {
                setBoosterToDisplay(data)
                setFetchStatus("SUCCESS")
            })

    }, [id])

    return (

        <div className={classes.root}>


            {fetchStatus === "FETCH_BOOSTER_FAILED" && <p>no booster to display</p>}

            <Paper className={classes.paperColor}>
                <p className={classes.title}>This is your Booster from</p>
            </Paper>
            <p className={classes.info}>{boosterToDisplay.creatorName}</p>

            {boosterToDisplay.message &&
            <Paper className={classes.paperColor}>
                <p className={classes.title}>Message</p></Paper>}
            {boosterToDisplay.message &&
            <div className={classes.textContent}> {boosterToDisplay.message}</div>
            }
            {boosterToDisplay.image &&
            <Paper className={classes.paperColor}>
                <p className={classes.title}>Picture</p></Paper>}
            {boosterToDisplay.image &&
            <Grid
                container
                direction="row"
                justify="center"

            >
                <Grid item>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Picture from your friend"
                            height="180"
                            image={boosterToDisplay.image}
                            title="Picture from your friend"
                            className={classes.image}

                        />
                    </CardActionArea>
                </Grid>
            </Grid>
            }

            {boosterToDisplay.youtubeLink &&
            <Paper className={classes.paperColor}>

                <p className={classes.title}>Youtube Clip</p>
            </Paper>}
            <Grid
                container
                direction="row"
                justify="center"

            >
                {boosterToDisplay.youtubeLink &&
                <Grid item>
                    <YouTube
                        video={boosterToDisplay.youtubeLink}
                        allowFullscreen={true}
                        width={374}
                        height={260}

                    />
                </Grid>
                }

                <Grid item>
                    <BoosterDeleteDialogButton value={boosterToDisplay.id}/>
                </Grid>
            </Grid>

        </div>
    )

}