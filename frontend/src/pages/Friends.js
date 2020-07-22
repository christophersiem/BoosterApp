import React, {useState} from "react";

import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: "1",
    },
    input: {
        width: "360px",
    },
    message: {
        fontFamily: theme.typography.subtitle2.fontFamily,
        fontSize: theme.typography.subtitle2.fontSize,
        letterSpacing: theme.typography.subtitle2.letterSpacing,
        lineHeight: theme.typography.subtitle2.lineHeight,
        paddingLeft: "16px",
    }


}))


export default function Friends() {
    const classes = useStyles();

    const [friendToAdd, setFriendToAdd] = useState("")
    // const [allFriends, setFriends] = useState([]);
    // const [userData, setUserData] = useState("")
    // useEffect(() => {
    //     const username = sessionStorage.getItem('UserName')
    //     getFriendListByUsername(username)
    //         .then((data) => setUserData(data))
    //         .catch((e) => console.error(e));


    // }, [])

    return (
        <>
            <div className={classes.root}>
                <p className={classes.message}>Add a Friend</p>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid>
                        <TextField
                            className={classes.input}
                            onChange={setFriendToAdd}
                            id="userToAdd"
                            label="enter username"
                            variant="outlined"/>
                    </Grid>
                    <Grid>
                        <Button>Add user as friend</Button>
                    </Grid>
                </Grid>
                <p className={classes.message}>Your friends</p>

            </div>
        </>
    )

}