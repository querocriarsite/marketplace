import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/notFound";
import SignIn from "./pages/signIn";

export default () => {
    return (
        <Switch>

            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/about">
                <About/>
            </Route>

            <Route exact path="/signin">
                <SignIn/>
            </Route>

            <Route>
                <NotFound/>
            </Route>

        </Switch>
    );
};
