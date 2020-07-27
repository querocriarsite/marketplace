import React from "react";
import {Switch} from "react-router-dom";
import RouteHandler from "./components/RouteHandler";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AdPage from "./pages/AdPage";
import AddAd from "./pages/AddAd";
import Ads from "./pages/Ads";

export default () => {
    return (
        <Switch>

            <RouteHandler exact path="/projetos/marketplace/">
                <Home/>
            </RouteHandler>

            <RouteHandler exact path="/projetos/marketplace/about">
                <About/>
            </RouteHandler>


            <RouteHandler exact path="/projetos/marketplace/signin">
                <SignIn/>
            </RouteHandler>

            <RouteHandler exact path="/projetos/marketplace/signup">
                <SignUp/>
            </RouteHandler>

            <RouteHandler path="/projetos/marketplace/ad/:id">
                <AdPage/>
            </RouteHandler>

            <RouteHandler private path="/projetos/marketplace/post-an-ad">
                <AddAd/>
            </RouteHandler>

            <RouteHandler path="/projetos/marketplace/ads">
                <Ads/>
            </RouteHandler>

            <RouteHandler>
                <NotFound/>
            </RouteHandler>

        </Switch>
    );
};
