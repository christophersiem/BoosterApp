import React, {useContext, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import BoosterPaper from "./BoosterPaper";
import {BoosterDispatchContext, BoosterStateContext} from "../context/booster/BoosterContext";
import {fetchBooster} from "../context/booster/booster-actions";


const useStyles = makeStyles((theme) => ({
    mainPage: {
        flexGrow: 1,
        padding: "0 20px",
        overflow:"scroll"

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

    const classes = useStyles();
    const {booster, fetchStatus} = useContext(BoosterStateContext);
    const dispatch = useContext(BoosterDispatchContext)
    const username = localStorage.getItem('UserName')
    useEffect(() => {
        if (!fetchStatus) {
            fetchBooster(dispatch, username)
                .catch((e) => console.error(e))
        }
    }, [fetchStatus, dispatch,username])


    return (

        <div className={classes.mainPage}>
            <p className={classes.title}>Your created booster</p>
            <img className={classes.image} src={"/jcc2.png"} alt="logo_medium"/>


                {booster.map(booster =>
                    booster.type === "JOY" ?
                        <BoosterPaper moodStyle={classes.paperJoy} booster={booster}/>
                        :
                        booster.type === "CALM" ?
                            <BoosterPaper moodStyle={classes.paperCalm} booster={booster}/>
                            :
                            <BoosterPaper moodStyle={classes.paperConf} booster={booster}/>
                )}
            </div>

    )

}








