import React, {useEffect, useState} from "react";
import {deleteBooster, fetchCreatedBooster} from "../utils/booster-utils";
import {makeStyles} from "@material-ui/core/styles";
import BoosterPaper from "./BoosterPaper";

const useStyles = makeStyles((theme) => ({
    mainPage: {
        flexGrow: 1,
        padding: "0 20px",

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
    const [allBooster, setAllBoosters] = useState([]);


    useEffect(() => {
        const username = localStorage.getItem('UserName')
        fetchCreatedBooster(username)
            .then((data) => setAllBoosters(data))
            .catch((e) => console.error(e))
    }, [])


    return (
        <>
            <p className={classes.title}>Your created booster</p>
            <img className={classes.image} src={"/jcc2.png"} alt="logo_medium"/>
            <div className={classes.mainPage}>

                {allBooster.map(booster =>

                    booster.type === "JOY" ?
                      <BoosterPaper moodStyle={classes.paperJoy} id={booster.id} name={booster.name}/>
                        :
                        booster.type === "CALM" ?
                            <BoosterPaper moodStyle={classes.paperCalm} id={booster.id} name={booster.name}/>
                            :
                            <BoosterPaper moodStyle={classes.paperConf} id={booster.id} name={booster.name}/>
                )}
            </div>
        </>
    )

}








