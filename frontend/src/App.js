import React from 'react';
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
import BoosterList from "./pages/BoosterList";


function App() {
    return (
        <div className="App">

            <Router>
                <Switch>
                    <Route path="/login" exact>
                        <LoginPage/>
                    </Route>
                    <Route path="/list" exact>
                        <BoosterList/>
                        <Footer/>
                    </Route>
                    <Route path="/" exact>
                        <Header/>
                        <Main/>
                        <Footer/>
                    </Route>
                </Switch>
            </Router>
        </div>

    );
}

export default App;
