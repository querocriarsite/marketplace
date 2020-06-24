import React from "react";
import {Switch, Route} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

const Routes = () => {
    return (
        <Switch>

            <Route exact path="/">
                <Home/>
            </Route>

            <Route path="/sobre">
                <About/>
            </Route>

            <Route path="*">
                <h4 style={{
                    padding: '30px 0',
                    background: '#ffa456',
                    height: '70vh'
                }}>Página Não Encontrada</h4>
            </Route>

        </Switch>
    );
};

export default Routes;
