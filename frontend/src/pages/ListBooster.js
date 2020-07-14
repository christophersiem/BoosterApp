import React, {useEffect, useState} from "react";
import {deleteBooster, fetchCreatedBooster} from "../utils/booster-utils";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
    mainPage: {
        flexGrow: 1,
    }}))


export default function ListBooster() {
    const classes = useStyles();
    const [allBooster, setAllBoosters] = useState([]);


    useEffect(() => {
        fetchCreatedBooster()
            .then((data) => setAllBoosters(data))
            .catch((e) => console.error(e));
    },[])

    return (

        <div  className={classes.mainPage}>
            {allBooster.map(booster =>
                <div id={"boosterList"} key={booster.id}>
                    {booster.name}
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon onClick={()=>deleteBooster(booster.id)}/>
                    </IconButton>
                </div>)}
        </div>

    )

}








