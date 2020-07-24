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
    },
    iconColor:{
        color:"white"
    },
    root: {
        "& .MuiBottomNavigationAction-root.Mui-selected ": {
            color: "#ffffff"}
}}))

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
            <BottomNavigation value={value} onChange={handleChange} className={classes.root} style={{background: 'rgb(109 144 199)'}}>
                <BottomNavigationAction label="Home" value="" icon={<HomeOutlinedIcon className={classes.iconColor}/>} />
                <BottomNavigationAction label="Booster" value="list" icon={<MoodIcon className={classes.iconColor}/>} />
                <BottomNavigationAction label="New" value="add" icon={<PostAddOutlinedIcon className={classes.iconColor}/>} />
                <BottomNavigationAction label="FAQ" value="faq" icon={<HelpOutlineOutlinedIcon className={classes.iconColor}/>} />
            </BottomNavigation>

        </footer>
    );

}