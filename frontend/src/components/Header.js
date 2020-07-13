import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.css"

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {

        color: "black"
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
        color:"#0030A9",
    },
    accountButton: {

        color: "black"
    },
    toolbar: {
        minHeight: 80,
        padding: "0px 15px 0px 15px"
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <header className="height">
            <div className={classes.root}>
                <AppBar style={{background: 'white'}} position="static">
                    <Toolbar className={classes.toolbar}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            <p className={classes.mColor}>M</p>oodBoost
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </header>
    );
}