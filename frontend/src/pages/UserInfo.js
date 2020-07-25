import React, {useContext} from 'react';
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


const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        color:"#FFF3F0F0",
        backgroundColor:"rgb(109 144 199)",
        height:"70px"
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
        marginTop: theme.spacing(2),
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function UserInfo() {
    const {userData} = useContext(UserStateContext);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div>
            <IconButton onClick={handleClickOpen}>
                <PersonIcon style={{color: '#000000'}}/>
            </IconButton>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} >
                <AppBar className={classes.appBar}>
                    <Toolbar >
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close" style={{marginTop: "16px"}}>
                            <CloseIcon />
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
                    <ListItem button>
                        <ListItemText primary="Firstname" secondary={userData.firstName} />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Username" secondary={userData.userName}/>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="E-Mail" secondary={userData.email}/>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Total created booster" secondary=""/>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Number of friends" secondary=""/>
                    </ListItem>

                </List>
                <UserDeleteDialog/>
            </Dialog>
        </div>
    );
}