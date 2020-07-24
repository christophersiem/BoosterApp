import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {fetchBoosterById} from "../utils/booster-utils";
import {useParams} from "react-router";
import YouTube from '@u-wave/react-youtube';
import Grid from "@material-ui/core/Grid";
import DeleteDialog from "../components/DeleteDialog";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: theme.typography.subtitle.fontFamily,
        fontSize: theme.typography.subtitle2.fontSize,
        letterSpacing: theme.typography.subtitle.letterSpacing,
        color: "white",
        marginLeft: "15px"
    },
    root: {
        flexGrow: "1",

    },
    info: {
        fontFamily: theme.typography.subtitle.fontFamily,
        color: "#1e2121",
        fontStyle: "italic",
        fontSize: "18px",
        marginTop: "5px",
        marginLeft: "15px"
    },
    video: {
        justifyContent: "center",
        margin: "20px, 20px",
    },

    textContent: {
        fontFamily: theme.typography.subtitle.fontFamily,
        fontSize: "18px",
        fontStyle: "italic",
        marginLeft: "15px"
    },
    delete: {
        color: "#c20909",
    },
    paperColor: {
        backgroundColor: "rgba(149,176,241,0.77)"
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
            <p className={classes.title}>Message:</p></Paper>}
            {boosterToDisplay.message &&
            <div className={classes.textContent}> {boosterToDisplay.message}</div>
            }
            {boosterToDisplay.image &&
            <Paper className={classes.paperColor}>
                <p className={classes.title}>Picutre from {boosterToDisplay.creatorName} </p> </Paper>}
            {boosterToDisplay.image &&
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="180"
                        image={boosterToDisplay.image}
                        title="Contemplative Reptile"
                    />
                </CardActionArea>
            </Card>}

            {boosterToDisplay.youtubeLink &&
            <Paper className={classes.paperColor}>

                <p className={classes.title}>Youtube Clip:</p>
            </Paper>}
            {boosterToDisplay.youtubeLink &&
                <YouTube
                    video={boosterToDisplay.youtubeLink}
                    allowFullscreen={true}
                    width={374}
                    height={260}
                    autoplay={false}
                />

            }
            <Grid
                container
                direction="row"
                justify="center"

            >
                <Grid item>
                    <DeleteDialog value={boosterToDisplay.id}/>
                </Grid>
            </Grid>

        </div>
    )

}