import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InfoIcon from '@material-ui/icons/Info';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';


export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <footer>

        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels


        >
            <BottomNavigationAction icon={<HomeIcon onClick={() => {
                window.location = "/"}}  />}/>
            <BottomNavigationAction icon={<ListIcon onClick={() => {
                window.location = "/list"}}   />}/>
            <BottomNavigationAction icon={<AddIcon onClick={() => {
                window.location = "/add"}}   />}/>
            <BottomNavigationAction icon={<InfoIcon />} />
        </BottomNavigation>
        </footer>
    );

}