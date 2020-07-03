import styled from "styled-components";

export const Item = styled.div`
    a {
        display: block;
        border-radius: 5px;
        margin: 10px;
        padding: 10px;
        color: var(--black);
        background-color: var(--white);
        box-shadow: 0 1px 15px 1px rgba(62,57,107,.07);
        transition: transform .3s, box-shadow .3s;
        
        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 14px 24px rgba(62,57,107,.2);
        }
        
        .itemImage {
            height: 260px;
            background-color: var(--lightBlue);
            border-radius: 5px;
            overflow: hidden;
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        
        .itemName {
            font-weight: 600;
        }
        
    }
`;
