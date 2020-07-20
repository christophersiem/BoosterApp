import React, {useContext, useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LoginPage from "./pages/AuthPages/LoginPage";
import ListBooster from "./pages/ListBooster";
import AddBooster from "./pages/AddBoster";
import {UserDispatchContext} from "./context/user/UserContext";
import {getDecodedJWTToken, isJWTTokenValid} from "./utils/jwt-utils";
import UserContextProvider, {LOGIN_FAILED, LOGIN_SUCCESS} from "./context/user/UserContextProvider";
import PrivateRoute from "./pages/PrivateRoute";
import FAQ from "./pages/FAQ";
import LogoutPage from "./pages/AuthPages/LogoutPage";
import ShowBooster from "./pages/ShowBooster";
import RegisterPage from "./pages/AuthPages/RegisterPage";
import { ThemeProvider} from '@material-ui/core/styles';
import {theme} from "./MoodBoostTheme";



function Navigation() {
    const dispatch = useContext(UserDispatchContext);

    useEffect(() => {
        if (isJWTTokenValid()) {
            dispatch({type: LOGIN_SUCCESS, payload: getDecodedJWTToken()});
        } else {
            dispatch({type: LOGIN_FAILED})
        }

    }, [dispatch]);

    return (

        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/login" exact component={LoginPage}/>
                    <Route path="/logout" exact component={LogoutPage}/>
                    <Route path="/register" exact component={RegisterPage}/>
                    <PrivateRoute
                        path="/list"
                        component={ListBooster}
                        exact/>
                    <PrivateRoute
                        path="/add"
                        component={AddBooster}
                        exact/>
                    <PrivateRoute
                        path="/"
                        component={Main}
                        exact
                    />
                    <PrivateRoute
                        path="/faq"
                        component={FAQ}
                        exact/>
                    <PrivateRoute
                        path="/booster/:id"
                        component={ShowBooster}
                        exact
                    />
                </Switch>
                <Footer/>
            </div>
        </Router>

    )
}

export default function App() {

    return (
        <ThemeProvider theme={theme}>
        <UserContextProvider>
            <Navigation/>
        </UserContextProvider>
        </ThemeProvider>
    );
}
