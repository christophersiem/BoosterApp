import React, {useContext, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import BoosterPaper from "./BoosterPaper";
import {BoosterDispatchContext, BoosterStateContext} from "../context/booster/BoosterContext";
import {fetchBoosterItems,} from "../context/booster/booster-actions";
import {UserStateContext} from "../context/user/UserContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    mainPage: {
        flexGrow: 1,
        padding: "0 20px",
        overflow: "scroll"

    },
    paperJoy: {
        backgroundColor: "#d0b3d5",
        paddingLeft: "10px",
    },

    paperCalm: {
        backgroundColor: "#b3bfee",
        paddingLeft: "10px"
    },
    paperConf: {
        backgroundColor: "#80c7c5",
        paddingLeft: "10px"
    },

    title: {
        textAlign: "center",
        margin: "24px 0px 15px",
        fontFamily: theme.typography.subtitle.fontFamily,
        fontSize: theme.typography.subtitle.fontSize,
        letterSpacing: theme.typography.subtitle.letterSpacing,
    },
    image: {
        width: "344px",
        paddingBottom: "15px",
        alignSelf: "center",
    },

    alert: {
        justifyContent: "center",
        marginTop: "50px"
    },


}))

export default function ListBooster() {

    const {userData} = useContext(UserStateContext);
    const classes = useStyles();
    const {boosterItems, fetchStatus} = useContext(BoosterStateContext);
    const dispatch = useContext(BoosterDispatchContext)

    useEffect(() => {

        fetchBoosterItems(dispatch, userData.userName)
            .catch((e) => console.error(e))

    }, [dispatch, userData.userName])

    return (
        <>
        <Grid className={classes.mainPage}>

            <p className={classes.title}>Your created booster</p>

            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
            <img className={classes.image} src={"/jcc2.png"} alt="logo_medium"/>


                {fetchStatus === 'PENDING' && <CircularProgress/>}
                {!boosterItems.length>0 &&
                <Alert className={classes.alert} variant="outlined" severity="info">
                    You have no created booster. <br/>
                </Alert>}
                {!boosterItems.length>0 &&
                <Button
                    className={classes.alert}
                    variant="contained"
                    color="primary"
                    href="/add">Create a booster now</Button>

                }
            </Grid>


    {
        boosterItems && boosterItems.map((booster) => (
            booster.type === "JOY" ?
                <BoosterPaper moodStyle={classes.paperJoy} booster={booster} key={booster.id}/>
                :
                booster.type === "CALM" ?
                    <BoosterPaper moodStyle={classes.paperCalm} booster={booster} key={booster.id}/>
                    :
                    <BoosterPaper moodStyle={classes.paperConf} booster={booster} key={booster.id}/>
        ))
    }
        </Grid>
</>
)
}








