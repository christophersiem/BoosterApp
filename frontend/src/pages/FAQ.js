import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import FaqAccordion from "../components/accordion/FaqAccordion";

const useStyles = makeStyles((theme) => ({

    title: {
        textAlign: "center",
        margin: "24px",
        fontFamily: theme.typography.subtitle.fontFamily,
        fontSize: theme.typography.subtitle.fontSize,
        letterSpacing: theme.typography.subtitle.letterSpacing,
    },
    root: {
        width: '100%',
        flexGrow: "1",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,

    },
    accordion: {
        marginBottom: "5px",
        backgroundColor: "white",

    },
    text: {
        fontSize: "13px"
    },
}))

export default function FAQ() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <p className={classes.title}>FAQ</p>
            <FaqAccordion/>
        </div>

    )

}