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
        --bgColor: #f4f5fa;
        --black: #333;
        --gray: #54575a;
        --darkGray: #ccc;
        --lightGray: #ddd;
        --blue: #316faf;
        --lightBlue: #49aeef;
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
        background: none;
        cursor: pointer;
    }

`;
