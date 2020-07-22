import React, {useContext} from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import {makeStyles} from "@material-ui/core/styles";
import {UserStateContext} from "../../context/user/UserContext";
import {useHistory} from "react-router";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import MoodIcon from "@material-ui/icons/Mood";


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
                <BottomNavigationAction label="Home" value="" icon={<HomeOutlinedIcon/>} />
                <BottomNavigationAction label="Booster" value="list" icon={<MoodIcon/>} />
                <BottomNavigationAction label="New" value="add" icon={<PostAddOutlinedIcon/>} />
                <BottomNavigationAction label="FAQ" value="faq" icon={<HelpOutlineOutlinedIcon/>} />
            </BottomNavigation>

        </footer>
    );

}