import React from 'react';
import './App.css';
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from "./theme/MoodBoostTheme";
import BoosterProvider from "./context/booster/BoosterContextProvider";
import Navigation from "./Navigation";
import UserContextProvider from "./context/user/UserContextProvider";




export default function App() {

    return (
        <ThemeProvider theme={theme}>
            <UserContextProvider>
                <BoosterProvider>
                    <Navigation/>
                </BoosterProvider>
            </UserContextProvider>
        </ThemeProvider>
    );
}
