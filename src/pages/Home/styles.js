import styled from "styled-components";

export const SearchArea = styled.div`
    background-color: var(--lightBlue);
    padding: 20px 0;
    
    .searchBox {
        display: flex;
        background-color: var(--lightBlue);
        padding: 20px;
        border-radius: 5px;
        
        form {
            flex: 1;
            display: flex;
            
            input, select {
                height: 40px;
                border: 0;
                border-radius: 5px;
                font-size: 15px;
                color: var(--black);
                margin-right: 20px;
            }
            
            input {
                flex: 1;
                padding: 0 10px;
            }
            
            select {
                padding: 0 5px;
            }
            
            button {
                background-color: var(--black);
                font-size: 15px;
                border-radius: 5px;
                color: var(--white);
                padding: 0 20px;
                transition: background-color .3s;
                
                &:hover {
                    background-color: var(--gray);
                }
            }
        }
    }
    
    .categoryList {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 20px;
        padding: 0 20px;
        
        .categoryItem {
            flex-direction: column;
            justify-content: center;
            display: flex;
            align-items: center;
            height: 50px;
            margin-bottom: 30px;
            
            span {
                font-size: 20px;
                color: var(--white);
                transition: color .2s;
                
                &:hover {
                    color: var(--black);
                }
            }  
            
            img {
                width: 45px;
                height: 45px;
                margin-bottom: 5px;
                border: 2px solid #fff;
                border-radius: 50%;
                transition: border .2s, transform .3s;
                
                &:hover {
                    border-color: var(--black);
                    transform: scale(1.1);
                }
            }
        }
    }
`;

export const PageArea = styled.div`
    h2 {
        font-size: 23px;
        font-weight: 600;
        margin: 30px 20px 10px 20px;
        width: fit-content;
        
        &:after {
            content: '';
            display: block;
            height: 4px;
            background: var(--blue);
            border-radius: 10px;
        }
    }
    
    .list {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
        
        .aditem {
            width: 25%;
            min-width: 250px;
            flex: auto;
        }
    }
    
    .seeAllLink {
        color: var(--black);
        font-weight: 600;
        display: inline-block;
        margin: 10px 0;
    }
`;
