import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },

    drawerPaper: {
        backgroundColor: "lightblue",
        height: "50%"

    },

}));

export default function AppDrawerLeft(props) {
    const {container} = props;
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({...state, [anchor]: open});
    };
    const navLinks =[
        {text: "Home", link:"/",},
        {text: "My created Booster", link:"/list",},
        {text: "Add new Booster", link:"/add",},
        {text: "FAQ", link:"/faq",},
        {text: "Logout", link:"/logout",}
        ]
    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {navLinks.map((linkItem, ) => (

                    <ListItem onClick={() => {
                        window.location = linkItem.link

                    }
                    } button key={linkItem.text}>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText primary={linkItem.text}/>

                    </ListItem>

                ))}
            </List>

        </div>
    );


    return (

        <React.Fragment key={"left"}>
            <Button onClick={toggleDrawer("left", true)}>{<MenuIcon/>}</Button>
            <div className={classes.MuiDrawer}>
                <Drawer
                    container={container}
                    classes={{paper: classes.drawerPaper}}
                    anchor={"left"}
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}>
                    {list("left")}
                </Drawer>
            </div>
        </React.Fragment>

    );

}
