import React from "react";
import BoosterButton from "../components/BoosterButton";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    title: {
        textAlign:"center",
        fontFamily: theme.typography.subtitle.fontFamily,
        fontSize: theme.typography.subtitle.fontSize,
        letterSpacing: theme.typography.subtitle.letterSpacing,
    },
}))


export default function Home() {
    const classes = useStyles();
    return (
            <>
                <p className={classes.title}>Choose a booster</p>
                    <BoosterButton/>
            </>

    )
}