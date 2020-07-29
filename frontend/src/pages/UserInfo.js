import React, {useContext, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import PersonIcon from "@material-ui/icons/Person";
import {UserStateContext} from "../context/user/UserContext";

import UserDeleteDialog from "../components/dialogs/UserDeleteDialog";

import {fetchUserNumbers} from "../utils/user-utils";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        color: "#FFF3F0F0",
        backgroundColor: 'rgb(191,148,115)',
        height: "70px"
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
        marginTop: theme.spacing(2),
        color: "#f1eded",
    },
    style: {

    }

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function UserInfo() {
    const {userData} = useContext(UserStateContext);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [userNumbers, setUserNumbers] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        fetchUserNumbers(userData.userName)
            .then((data) => setUserNumbers(data))
            .catch((e) => console.error(e))

    }, [userData.userName])

    console.log(userNumbers)

    const userDetails = [
        {no: "1", heading: "Firstname", content: userData.firstName},
        {no: "2", heading: "Username", content: userData.userName},
        {no: "3", heading: "E-Mail", content: userData.email},
        {no: "4", heading: "Total created booster ", content: userNumbers.createdBooster},
        {no: "5", heading: "Number of friends", content: userNumbers && userNumbers.friends.length}

    ]

    return (
        <div>
            <IconButton onClick={handleClickOpen}>
                <PersonIcon style={{color: "#AD6B36"}}/>
            </IconButton>
            <div className={classes.style}>
                <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close"
                                        style={{marginTop: "16px"}}>
                                <CloseIcon/>
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Your Account Details
                            </Typography>
                            <Button autoFocus color="inherit" onClick={handleClose} style={{marginTop: "16px"}}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>

                    <List>

                        {userDetails.map((detail) => (
                            <div key={detail.no}>
                                <ListItem button key={detail.no}>
                                    <ListItemText primary={detail.heading} secondary={detail.content} key={detail.no}/>
                                </ListItem>

                                <Divider/>
                            </div>
                        ))}

                    </List>

                    <UserDeleteDialog/>
                </Dialog>
            </div>
        </div>

    );
}