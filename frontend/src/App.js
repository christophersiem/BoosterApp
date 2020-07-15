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
import LoginPage from "./components/LoginPage";
import ListBooster from "./pages/ListBooster";
import AddBooster from "./pages/AddBoster";
import {UserDispatchContext} from "./context/user/UserContext";
import {getDecodedJWTToken, isJWTTokenValid} from "./utils/jwt-utils";
import UserContextProvider, {LOGIN_SUCCESS} from "./context/user/UserContextProvider";
import PrivateRoute from "./pages/PrivateRoute";


function Navigation() {
    const dispatch = useContext(UserDispatchContext);

    useEffect(() => {
        if (isJWTTokenValid()) {
            dispatch({type: LOGIN_SUCCESS, payload: getDecodedJWTToken()});
        }
    }, [dispatch]);

    return (

        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/login" exact component={LoginPage}/>

                    <PrivateRoute
                        path="/"
                        component={Main}
                        exact
                    />
                    <PrivateRoute
                        path="/list"
                        component={ListBooster}
                        exact/>

                    <PrivateRoute
                        path="/add"
                        component={AddBooster}
                        exact/>

                </Switch>
                <Footer/>
            </div>
        </Router>

    )
}

export default function App() {

    return (
        <UserContextProvider>
            <Navigation/>
        </UserContextProvider>
    );
}
