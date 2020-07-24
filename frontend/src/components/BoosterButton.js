import React, {useContext} from 'react';
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import {fetchIdFromType} from "../utils/booster-utils";
import {useHistory} from "react-router";
import {UserStateContext} from "../context/user/UserContext";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";


const useStyles = makeStyles(() => ({
    button: {
        margin: "0px",
        padding:"0px",

    },
    root:{
        margin:"0px 0px 20px 0px"
    }

}));

export default function BoosterButton() {

    const {userData} = useContext(UserStateContext);

    const owner = userData.id
    const classes = useStyles();
    const history = useHistory();

    function redirect(boosterType) {
        fetchIdFromType(boosterType, owner)
            .then((randomId) => history.push(`/booster/${randomId}`))
            .catch((e) => console.error(e))
    };

    return (

        <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
        >

                <Grid>
                    <Card className={classes.root}>
                        <Button value={"JOY"} onClick={() => redirect("JOY")} variant="outlined" className={classes.button}>
                        <CardActionArea>

                            <CardMedia
                                component="img"
                                alt="Joy Picture"
                                height="180"
                                image="/joy_button.png"
                                title="Joy Picture"
                            />
                        </CardActionArea>
                        </Button>
                    </Card>
                </Grid>
                <Grid>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Calm Picture"
                                height="180"
                                image="/calm_button.png"
                                title="Calm Picture"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Confidence Picture"
                                height="180"
                                image="/confidence_button.png"
                                title="Confidence Picture"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>

        </Grid>

    )
}



