import React from "react";
import Logo from "../../../assets/logo.svg";
import {HeaderArea} from "./styles";
import {Link} from "react-router-dom";
import {isLogged} from "../../../helpers/authHandler";

const Header = () => {
    const logged = isLogged();

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
                        {logged &&
                        <>
                            <li>
                                <Link to="/my-acount">Minha Conta</Link>
                            </li>
                            <li>
                                <Link to="/logout">Sair</Link>
                            </li>
                            <li>
                                <Link to="/post-an-ad" className="button">
                                    Publique um Anúncio
                                </Link>
                            </li>
                        </>
                        }
                        {!logged &&
                        <>
                            <li>
                                <Link to="/signin">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup">Cadastrar</Link>
                            </li>
                            <li>
                                <Link to="/signin" className="button">
                                    Publique um Anúncio
                                </Link>
                            </li>
                        </>
                        }
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
};

export default Header;
