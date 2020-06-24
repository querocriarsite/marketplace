import React, {useState} from "react";
import {PageArea} from "./styles";
import {PageContainer, PageTitle, ErrorMessage} from "../../Styles";
import useApi from "../../helpers/MarketplaceAPI";
import {doLogin} from "../../helpers/authHandler";

const SignIn = () => {
    const api = useApi();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);

        const json = await api.login(email, password);

        if (json.error) {
            setError(json.error);
        } else {
            doLogin(json.token, rememberPassword);
            window.location.href = '/';
        }
    };

    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>

                {error &&
                <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area-title">E-mail</div>
                        <div className="area-input">
                            <input type="email"
                                   disabled={disabled}
                                   value={email}
                                   onChange={e => setEmail(e.target.value)}
                                   required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area-title">Senha</div>
                        <div className="area-input">
                            <input type="password"
                                   disabled={disabled}
                                   value={password}
                                   onChange={e => setPassword(e.target.value)}
                                   required
                            />
                        </div>
                    </label>
                    <div className="area">
                        <div className="area-title"/>
                        <label className="area-input remember">
                            <input type="checkbox"
                                   disabled={disabled}
                                   checked={rememberPassword}
                                   onClick={() => setRememberPassword(!rememberPassword)}
                            />
                            Lembrar Senha
                        </label>
                    </div>
                    <div className="area">
                        <div className="area-title"/>
                        <div className="area-input">
                            <button disabled={disabled}>Fazer Login</button>
                        </div>
                    </div>
                </form>
            </PageArea>
        </PageContainer>
    );
};

export default SignIn;
