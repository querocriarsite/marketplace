import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-weight: 500;
        text-decoration: none;
        outline: none;
        -webkit-font-smoothing: antialiased!important;
        font-family: 'Montserrat', sans-serif;
        color: var(--black);
    }

    :root {
        --white: #fff;
        --black: #555;
        --bgColor: #f4f5fa;
        --blue: #316faf;
        --gray: #54575a;
        --bgError: #ffcaca;
        --red: #f00;
    }
    
    html, body, #root {
        background-color: var(--bgColor);
        height: 100%;
    }

    button, input {
        border: 0;
        outline: 0;
    }

    button, a {
        cursor: pointer;
    }

`;
