import React from "react";
import Logo from "../../../assets/logo.svg";
import {HeaderArea, Link} from "./styles";

const Header = () => {
    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Marktplace"/>
                    </Link>
                </div>

                <nav>
                    <ul>
                        <li>
                            <Link to="">Login</Link>
                        </li>
                        <li>
                            <Link to="">Cadastrar</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
};

export default Header;
