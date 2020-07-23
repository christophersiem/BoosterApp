import React, {useContext, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import BoosterPaper from "./BoosterPaper";
import {BoosterDispatchContext, BoosterStateContext} from "../context/booster/BoosterContext";
import {fetchBoosterItems,} from "../context/booster/booster-actions";
import {UserStateContext} from "../context/user/UserContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";


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
    }

}))

export default function ListBooster() {

    const {userData} = useContext(UserStateContext);
    const classes = useStyles();
    const {boosterItems, fetchStatus} = useContext(BoosterStateContext);
    const dispatch = useContext(BoosterDispatchContext)

    useEffect(() => {

        fetchBoosterItems(dispatch, userData.userName)

    },[dispatch,userData.userName])


    return (
        <div className={classes.mainPage}>
            {fetchStatus === 'PENDING' && <CircularProgress/>}
            {fetchStatus === 'FAILED' && (
                <Typography variant="body1" color="error" component="p">
                    Fetch Booster failed
                </Typography>
            )}
            <p className={classes.title}>Your created booster</p>
            <img className={classes.image} src={"/jcc2.png"} alt="logo_medium"/>


            {boosterItems && boosterItems.map((booster) => (
                booster.type === "JOY" ?
                    <BoosterPaper moodStyle={classes.paperJoy} booster={booster} key={booster.id}/>
                    :
                    booster.type === "CALM" ?
                        <BoosterPaper moodStyle={classes.paperCalm} booster={booster} key={booster.id}/>
                        :
                        <BoosterPaper moodStyle={classes.paperConf} booster={booster} key={booster.id}/>
            ))}
        </div>
    )
}








