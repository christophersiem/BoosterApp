import React from 'react';
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    button: {
        width: 335,
        height: 160,
        margin: "20px 0px"
    },


}));

export default function BoosterButton(props) {
    const classes = useStyles();
    return (


        <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
        >
            <div className={classes.root}>
                <Grid><Link to="/youtube"><Button variant="outlined" className={classes.button}>Joy
                    Booster</Button></Link></Grid>
                <Grid> <Button variant="outlined" className={classes.button}>Calm Booster</Button></Grid>
                <Grid><Button variant="outlined" className={classes.button}>Confidence Booster</Button></Grid>
            </div>
        </Grid>

    )
}



