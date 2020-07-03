import styled from "styled-components";

export const Template = styled.div`
   
`;

export const PageContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 0 20px;
`;

export const PageTitle = styled.h1`
    font-size: 23px;
        font-weight: 600;
        margin: 30px 10px 10px 10px;
        width: fit-content;
        
        &:after {
            content: '';
            display: block;
            height: 4px;
            background: var(--blue);
            border-radius: 10px;
            width: 60%;
            margin-top: 4px;
        }
`;

export const PageBody = styled.div`

`;

export const ErrorMessage = styled.div`
    margin: 10px 0;
    padding: 10px;
    background-color: var(--bgError);
    color: var(--black);
    border: 1px solid var(--red);
    border-radius: 4px;
`;



