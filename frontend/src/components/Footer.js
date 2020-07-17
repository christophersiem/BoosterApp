import React, {useContext} from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InfoIcon from '@material-ui/icons/Info';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import {makeStyles} from "@material-ui/core/styles";
import {UserStateContext} from "../context/user/UserContext";
import {useHistory} from "react-router";

const useStyles = makeStyles(() => ({
    footer: {
        alignItems:"center",
        height: "64px",
        backgroundColor:"#f7f5ed",



    },
}))


export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('home');
    const history = useHistory();

    const handleChange = (event, newValue) => {
        history.push(`/${newValue}`);
        setValue(newValue);
    };
    const { authStatus } = useContext(UserStateContext);

    if (authStatus !== 'SUCCESS') {
        return <div/>;
    }

    return (
        <footer>
            <BottomNavigation value={value} onChange={handleChange} className={classes.root} style={{background: '#f7f5ed'}}>
                <BottomNavigationAction label="Home" value="" icon={<HomeIcon/>} />
                <BottomNavigationAction label="Booster" value="list" icon={<ListIcon/>} />
                <BottomNavigationAction label="New" value="add" icon={<AddIcon/>} />
                <BottomNavigationAction label="FAQ" value="faq" icon={<InfoIcon/>} />
            </BottomNavigation>

        </footer>
    );

}