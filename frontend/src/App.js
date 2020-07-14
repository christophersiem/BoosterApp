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
            <Header/>
            <Router>
                <Switch>
                    <Route path="/login" exact>
                        <LoginPage/>
                    </Route>
                    <Route path="/list" exact>
                        <BoosterList/>
                    </Route>
                    <Route path="/" exact>
                        <Main/>
                    </Route>
                </Switch>
            </Router>
            <Footer/>
        </div>

    );
}

export default App;
