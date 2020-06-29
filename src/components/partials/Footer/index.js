import React from "react";
import {FooterArea, Author} from "./styles";

const Footer = () => {
    const ano = new Date().getFullYear();

    return (
        <FooterArea>
            <p>MARKETPLACE © {ano} - Todos os direitos reservados.</p>
            <Author>
                Desenvolvido por: <a href="https://querocriarsite.com">Éverton
                Toffanetto</a>
            </Author>
        </FooterArea>
    );
};

export default Footer;
