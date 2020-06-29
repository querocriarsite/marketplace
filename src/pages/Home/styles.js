import styled from "styled-components";

export const SearchArea = styled.div`
    background-color: var(--lightBlue);
    border-bottom: 1px solid var(--darkGray);
    padding: 20px 20px;
    
    .searchBox {
        display: flex;
        background-color: var(--lightBlue);
        padding: 20px 15px;
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
        padding: 0 15px;
        
        .categoryItem {
            //width: 25%;
            display: flex;
            align-items: center;
            height: 50px;
            margin-bottom: 10px;
            
            span {
                font-size: 20px;
                transition: color .3s;
                
                &:hover {
                    color: var(--blue);
                }
            }  
            
            img {
                width: 45px;
                height: 45px;
                margin-right: 10px;
            }
        }
    }
`;

export const PageArea = styled.div`
    h2 {
        font-size: 23px;
        font-weight: 600;
        margin: 10px 20px;
    }
    
    .list {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
        
        .aditem {
            width: 25%;
        }
    }
    
    .seeAllLink {
        color: var(--black);
        font-weight: 600;
        display: inline-block;
        margin: 10px 0;
    }
`;
