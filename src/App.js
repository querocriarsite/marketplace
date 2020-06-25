import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import {connect} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import {Template} from "./Styles";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

const Page = (props) => {
    return (
        <>
            <GlobalStyles/>

            <BrowserRouter>
                <Template>
                    <Header/>

                    <Routes/>

                    <Footer/>
                </Template>
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
