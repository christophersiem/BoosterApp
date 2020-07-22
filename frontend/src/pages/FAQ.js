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

    },
    text:{
        fontSize:"13px"
    }
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
                        <Typography className={classes.heading}>I've created a booster, but now it's gone</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.text}>
                            Stop crying like a little baby and create a new booster
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

        </div>

    )

}