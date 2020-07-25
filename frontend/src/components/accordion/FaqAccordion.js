import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";

import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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

export default function FaqAccordion() {
    const classes = useStyles();

    const faqQuestions = [
        {
            question: "What is MoodBoost?",
            answer: "Whenever there is a moment in which you feel like you could have a bit more Joy, Calm or Confidence, give yourself a boost! In such situations MoodBoost gives you a booster that you or your friends have created for you."
        },
        {
            question: "How does a booster look like?",
            answer: "Your booster can contain a private message, a song, a youtube video or a picture"
        },
        {
            question: "What kind of Booster should I create?",
            answer: "You know your friends and yourself best. Probably you share nice memories together - send your friend a picture to remind him or her. Blabla etc"
        },

    ]

    return (
        <>
            {faqQuestions.map((faqQuestion) => (
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="faq-content"
                        id="faq-header"
                    >
                        <Typography className={classes.heading}>{faqQuestion.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.text}>
                            {faqQuestion.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    )

}