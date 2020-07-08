import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InfoIcon from '@material-ui/icons/Info';
import AddIcon from '@material-ui/icons/Add';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';


export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels

        >
            <BottomNavigationAction label="Boosts" icon={<LibraryBooksIcon />} />
            <BottomNavigationAction label="New Boost" icon={<AddIcon />} />
            <BottomNavigationAction label="FAQ" icon={<InfoIcon />} />
        </BottomNavigation>
    );
}