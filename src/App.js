import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import {connect} from "react-redux";
import {Grid} from "./Styles"

const App = () => {
    return (
        <Grid>
            <GlobalStyles/>
            <h1>Olaaaaa</h1>
        </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
