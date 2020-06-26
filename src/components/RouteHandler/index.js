import React from "react";
import {Route} from "react-router-dom";

export default ({children, ...rest}) => {

    return (
        <Route
            {...rest}
            render={()=>children}
        />
    );
};
