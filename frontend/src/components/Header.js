import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.css"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        padding:"15px",
        color:"black"
    },
    title: {
        flexGrow: 1,
        color: "black",
        textAlign:"center"
    },
    accountButton:{
        padding:"15px",
        color:"black"
    },
    toolbar:{
        minHeight: 80,
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <header className="height">
        <div className={classes.root}>
            <AppBar style= {{ background: 'white' }}position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        MoodBoost
                    </Typography>
                    <AccountCircleIcon className={classes.accountButton}>

                    </AccountCircleIcon>
                </Toolbar>
            </AppBar>
        </div>
        </header>
    );
}