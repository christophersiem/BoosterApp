import React, {useContext, useEffect} from "react";
import {UserDispatchContext} from "./context/user/UserContext";
import {getDecodedJWTToken, isJWTTokenValid} from "./utils/jwt-utils";
import {LOGIN_FAILED, LOGIN_SUCCESS} from "./context/user/UserContextProvider";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/navigation/Header";
import LoginPage from "./pages/authPages/LoginPage";
import LogoutPage from "./pages/authPages/LogoutPage";
import RegisterPage from "./pages/authPages/RegisterPage";
import PrivateRoute from "./components/navigation/PrivateRoute";
import ListBooster from "./pages/ListBooster";
import AddBooster from "./pages/AddBooster";
import Friends from "./pages/Friends";
import Main from "./pages/Main";
import FAQ from "./pages/FAQ";
import ShowBooster from "./pages/ShowBooster";
import Footer from "./components/navigation/Footer";

export default function Navigation() {
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
                        path="/friends"
                        component={Friends}
                        exact
                    />
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