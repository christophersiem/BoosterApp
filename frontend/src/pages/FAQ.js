import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    accordion:{
        marginBottom:"5px",
        backgroundColor:"white",

    },
    text:{
        fontSize:"13px"
    },
}))

export default function FAQ() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <p className={classes.title}>FAQ</p>

                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>What is MoodBoost?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.text}>
                            Whenever there is a moment in which you feel like you could have a bit more Joy, Calm or Confidence, give yourself a boost! In such situations MoodBoost gives you a booster that you or your friends have created for you.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>How does a booster look like?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.text}>
                            Your booster can contain a private message, a song, a youtube video or a picture
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            <Accordion className={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>What kind of Booster should I create?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.text}>
                        You know your friends and yourself best. Probably you share nice memories together - send your friend
                        a picture to remind him or her. Blabla etc

                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>

    )

}