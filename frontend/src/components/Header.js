import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {UserStateContext} from "../context/user/UserContext";
import AppDrawerLeft from "./AppDrawerLeft";


const useStyles = makeStyles(() => ({
    root: {
        minHeight: "10vh",

    },
    menuButton: {

        color: "black",
        padding:"0px"
    },
    title: {
        flexGrow: 1,
        color: "black",
        textAlign: "center",
        fontFamily: "Rock Salt",
        fontSize: "32px",
        display: "inline",
    },

    mColor: {
        color: "#0030A9",
        display: "inline-block",
    },
    accountButton: {

        color: "black"
    },

}));

export default function Header() {
    const classes = useStyles();
    const { authStatus } = useContext(UserStateContext);

    if (authStatus !== 'SUCCESS') {
        return null;
    }

    return (

        <header className={classes.root}>

                <AppBar style={{background: 'white'}} position="static">
                    <Toolbar className={classes.toolbar}>
                        <div edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <AppDrawerLeft/>
                        </div>
                        <Typography variant="h6" className={classes.title}>
                            <p className={classes.mColor}>M</p>oodBoost
                        </Typography>
                    </Toolbar>
                </AppBar>

        </header>
    );
}