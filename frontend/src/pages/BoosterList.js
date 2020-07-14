import React, {useEffect, useState} from "react";
import {fetchCreatedBooster} from "../utils/booster-utils";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    mainPage: {
        flexGrow: 1,
    }}))


export default function BoosterList() {
    const classes = useStyles();

    const [boosters, setBoosters] = useState([]);
    useEffect(() => {
        fetchCreatedBooster()
            .then((data) => setBoosters(data))
            .catch((e) => console.error(e));
    })

    return (
        <>
            <div>{boosters.map(booster => <div className={classes.mainPage}>{booster.name}</div>)}</div>
        </>

    )

}