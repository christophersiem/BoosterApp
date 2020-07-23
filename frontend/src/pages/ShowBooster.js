import React, {useContext, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {fetchBoosterById} from "../utils/booster-utils";
import {useParams} from "react-router";
import YouTube from '@u-wave/react-youtube';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DeleteButton from "../components/DeleteButton";

import {BoosterDispatchContext, BoosterStateContext} from "../context/booster/BoosterContext";
import {

    FETCH_BOOSTER_ITEMS, FETCH_BOOSTER_ITEMS_FAILED, FETCH_BOOSTER_ITEMS_SUCCESS,

} from "../context/booster/booster-actions";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

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
        fontSize: "24px",
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
        fontSize: "14px",
        fontStyle:"italic",
    },
    delete: {
        color: "#c20909",
    }
}))

export default function ShowBooster() {
    const classes = useStyles();
    const {fetchStatus} = useContext(BoosterStateContext);
    const dispatch = useContext(BoosterDispatchContext)
    const [boosterToDisplay, setBoosterToDisplay] = useState([]);
    let {id} = useParams();

    useEffect(() => {
        dispatch({type: FETCH_BOOSTER_ITEMS});
        fetchBoosterById(id)
            .then((data) => {
                setBoosterToDisplay(data)
                dispatch({type: FETCH_BOOSTER_ITEMS_SUCCESS, payload: fetchStatus});
            })
            .catch(() => {
                dispatch({type: FETCH_BOOSTER_ITEMS_FAILED})
            })
    }, [])

    return (

        <div className={classes.root}>

            {fetchStatus === "FETCH_BOOSTER_FAILED" && <p>no booster to display</p>}


            <p className={classes.title}>This is your Booster from</p>
            <p className={classes.info}>{boosterToDisplay.creatorName}</p>

                {boosterToDisplay.message &&
                <p className={classes.title}>Message:</p>}
                <div className={classes.textContent}> {boosterToDisplay.message}</div>
                <p className={classes.title}>Yay! {boosterToDisplay.creatorName} sent you a picture </p>
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
                </Card>

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
)

}