import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Reducers from "./Reducers";
import Page from "./App";

const store = createStore(Reducers);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Page/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
