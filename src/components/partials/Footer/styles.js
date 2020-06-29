import styled from "styled-components";

export const FooterArea = styled.footer`
    height: 100px;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    font-size: 14px;
    margin-top: 30px;
    
    p {
        color: var(--gray);
    }
`;

export const Author = styled.p`
    margin-top: 10px;
`;
