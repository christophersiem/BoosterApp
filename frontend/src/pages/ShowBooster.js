import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {fetchBoosterById} from "../utils/booster-utils";
import {useParams} from "react-router";
import YouTube from '@u-wave/react-youtube';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DeleteButton from "../components/DeleteButton";
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: theme.typography.subtitle.fontFamily,
        fontSize: theme.typography.subtitle2.fontSize,
        letterSpacing: theme.typography.subtitle.letterSpacing,
    },

    root: {
        flexGrow: "1",
        padding: "0px 20px"
    },
    info: {
        color: "#6675b8",
        fontStyle: "italic",
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
        fontFamily: "Courgette",
        fontSize: "18px",
    },

    delete: {
        color: "#c20909",
    }

}))


export default function ShowBooster() {
    const classes = useStyles();

    const [boosterToDisplay, setBoosterToDisplay] = useState([]);
    let {id} = useParams();

    useEffect(() => {
        fetchBoosterById(id)
            .then(data => setBoosterToDisplay(data))
    }, [id])


    return (

        <div className={classes.root}>
            <div className={"text"}>
                <h2>This is your Booster from <p
                    className={classes.info}>{boosterToDisplay && boosterToDisplay.creatorName}</p></h2>
                <p className={classes.title}>Message:</p>
                <div className={classes.textContent}>
                    <div>{boosterToDisplay.message ? boosterToDisplay.message : <Alert severity="info">{boosterToDisplay.creatorName} left no message </Alert>} </div>
                </div>
                {boosterToDisplay.youtubeLink &&
                <div>
                    <p className={classes.title}>Watch this video now:</p>
                    <YouTube
                        video={boosterToDisplay.youtubeLink}
                        allowFullscreen={true}
                        width={374}
                        height={260}
                        autoplay={false}
                    />
                </div>
                }
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                >
                    <Grid item>
                        <Button>Keep booster</Button>
                    </Grid>
                    <Grid item>
                        <DeleteButton value={boosterToDisplay.id}/>
                    </Grid>
                </Grid>

            </div>

        </div>
)

}