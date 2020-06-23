import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import {connect} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {Grid} from "./Styles"

const Page = () => {
    return (
        <>
            <GlobalStyles/>
            <BrowserRouter>
                <Grid>
                    <h1>Olaaaaa</h1>
                </Grid>
            </BrowserRouter>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
