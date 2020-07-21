import React, {useEffect, useState} from "react";
import {deleteBooster, fetchCreatedBooster} from "../utils/booster-utils";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    mainPage: {
        flexGrow: 1,
        overflow: "scroll",
        padding: "0 20px",
    },
    paper: {
        margin: "7px 0px",
        padding: "0px 10px",
        fontFamily: 'Noto Sans, sans-serif',
        fontSize:"14px",
        letterSpacing: "1.3px",
        fontWeight: "bold",

    },
    paperJoy: {
        backgroundColor: "#d0b3d5",
        paddingLeft: "10px",
    },

    paperCalm: {
        backgroundColor: "#b3bfee",
        paddingLeft: "10px"
    },
    paperConf: {
        backgroundColor: "#80c7c5",
        paddingLeft: "10px"
    },

    delIcon: {
        alignItems: "right",
    },
    title: {
        textAlign: "center",
        margin: "24px 0px 15px",
        fontFamily: theme.typography.subtitle.fontFamily,
        fontSize: theme.typography.subtitle.fontSize,
        letterSpacing: theme.typography.subtitle.letterSpacing,
    },
    image: {
        width: "344px",
        paddingBottom: "15px",
        alignSelf: "center",
    }

}))


export default function ListBooster() {

    useEffect(() => {


    }, [])
    const classes = useStyles();
    const [allBooster, setAllBoosters] = useState([]);


    useEffect(() => {
        const username = sessionStorage.getItem('UserName')
        fetchCreatedBooster(username)
            .then((data) => setAllBoosters(data))
            .catch((e) => console.error(e))
    }, [])


    function handleDelete(id) {
        deleteBooster(id)
            .catch((e) => console.error(e))
            .then(window.location.reload())
    }


    return (
        <>
            <p className={classes.title}>Your created booster</p>
            <img className={classes.image} src={"/jcc2.png"} alt="logo_medium"/>
            <div className={classes.mainPage}>

                {allBooster.map(booster =>

                    booster.type === "JOY" ?
                        <div className={classes.paper} key={booster.id}>
                            <Paper className={classes.paperJoy} elevation={10}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center"
                                >
                                    <Grid className={classes.paperJoy}>
                                        {booster.name}
                                    </Grid>
                                    <Grid>
                                        <IconButton>
                                            <EditIcon/>
                                        </IconButton>
                                        <IconButton className={classes.delIcon}
                                                    onClick={() => handleDelete(booster.id)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>
                        :
                        booster.type === "CALM" ?
                            <div className={classes.paper} key={booster.id}>
                                <Paper className={classes.paperCalm} elevation={10}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-between"
                                        alignItems="center"
                                    >
                                        <Grid className={classes.paperCalm}>
                                            {booster.name}
                                        </Grid>
                                        <Grid>
                                            <IconButton>
                                                <EditIcon/>
                                            </IconButton>
                                            <IconButton className={classes.delIcon}
                                                        onClick={() => handleDelete(booster.id)}>
                                                <DeleteIcon/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </div>
                            :
                            <div className={classes.paper} key={booster.id}>
                                <Paper className={classes.paperConf} elevation={10}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-between"
                                        alignItems="center"
                                    >
                                        <Grid className={classes.paperConf}>
                                            {booster.name}
                                        </Grid>
                                        <Grid>
                                            <IconButton>
                                                <EditIcon/>
                                            </IconButton>
                                            <IconButton className={classes.delIcon}
                                                        onClick={() => handleDelete(booster.id)}>
                                                <DeleteIcon/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </div>
                )}
            </div>
        </>
    )

}








