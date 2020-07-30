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
            answer: "In today’s fast-paced, stressed world, emotional resources such as joy, calm, and confidence are scarce. Broaden your resources with Moodboost and create individual boosters in form of personal messages, YouTube videos, or images for yourself and friends that lift your mood when you need it."
        },
        {
            question: "How can I create a booster for my friends",
            answer: "Simply go to the friends page, enter the username of your friend and add him/her to your friendlist. You now have the option to create a booster for your friend."
        },
        {
            question: "What kind of Booster can I create?",
            answer: "You have the option to create a booster with a personal message and/or send a picture or share a youtube video"
        },
        {
            question: "How can I delete a booster that I've created?",
            answer: "Go to the My Booster section and delete the booster of your choice. Caution: if the booster was made for a friend, he/she won't be able to see this booster anymore."
        },

    ]

    return (
        <>
            {faqQuestions.map((faqQuestion) => (
                <Accordion className={classes.accordion} key={faqQuestion.question}>
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