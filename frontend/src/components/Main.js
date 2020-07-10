import React from "react";
import "./Main.css";
import Home from "../pages/Home";
import DisplayBooster from "../pages/boosterDisplay/DisplayBooster";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Main() {

return(
    <main className="flex-grow">
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact>
        <Home/>
                </Route>
                <Route path ={"/youtube"}>
        <DisplayBooster/>
            </Route>
            </Switch>
        </BrowserRouter>
    </main>
)
}