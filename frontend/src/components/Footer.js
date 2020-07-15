import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InfoIcon from '@material-ui/icons/Info';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import {makeStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(() => ({
    footer: {
        alignItems:"center",
        height: "64px",
    },
}))


export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <footer className={classes.footer}>
            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction label="Home" value="home" icon={<HomeIcon/>} />
                <BottomNavigationAction label="Booster" value="booster" icon={<ListIcon/>} />
                <BottomNavigationAction label="New" value="new" icon={<AddIcon/>} />
                <BottomNavigationAction label="FAQ" value="faq" icon={<InfoIcon/>} />
            </BottomNavigation>

        </footer>
    );

}