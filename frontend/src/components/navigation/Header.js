import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import {UserStateContext} from "../../context/user/UserContext";
import AppDrawerLeft from "./AppDrawerLeft";


const useStyles = makeStyles(() => ({
    root:{
        backgroundColor:"#f7f5ed",
    },

    menuButton: {

        color: "black",
        padding:"0px",
        justifyContent:"flex-start",
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

    image:{
        paddingTop:"5px",

    },
    toolbar:{
        justifyContent:"center"
    }

}));

export default function Header() {
    const classes = useStyles();
    const { authStatus } = useContext(UserStateContext);

    if (authStatus !== 'SUCCESS') {
        return null;
    }

    return (

        <header className={classes.root}>

                <AppBar style={{background: '#f7f5ed'}} position="static">
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.menuButton} color="inherit" aria-label="menu">
                            <AppDrawerLeft/>
                        </div>
                        <img className={classes.image} src={"/logo_med.png"} alt="logo_medium" />
                    </Toolbar>
                </AppBar>

        </header>
    );
}