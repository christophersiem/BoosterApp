import React from "react";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AddIcon from '@material-ui/icons/Add';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles((theme) => ({
    listIcon: {
        padding: "15px",
    },
    addIcon:{
        padding: "15px",
    },
    helpIcon:{
        padding: "15px",
    }

}));

export default function Footer() {
    const classes = useStyles();
    return (
        <footer>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Grid>
            <FormatListBulletedIcon className={classes.listIcon} fontSize={"large"}/>
                </Grid>
                <Grid>
            <AddIcon className={classes.addIcon}fontSize={"large"}/>
                </Grid>
                <Grid>
                    <HelpIcon className={classes.helpIcon}fontSize={"large"}/>
                </Grid>
            </Grid>
        </footer>

    )
}