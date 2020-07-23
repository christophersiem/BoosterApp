import React from 'react';
import './App.css';
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from "./theme/MoodBoostTheme";
import Navigation from "./Navigation";
import UserContextProvider from "./context/user/UserContextProvider";
import BoosterContextProvider from "./context/booster/BoosterContextProvider";




export default function App() {

    return (
        <ThemeProvider theme={theme}>
            <UserContextProvider>
                <BoosterContextProvider>
                    <Navigation/>
                </BoosterContextProvider>
            </UserContextProvider>
        </ThemeProvider>
    );
}
