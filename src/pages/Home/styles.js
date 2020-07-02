import styled from "styled-components";

export const SearchArea = styled.div`
    background-color: var(--lightBlue);
    padding: 20px 0;
    
    .searchBox {
        display: flex;
        background-color: var(--lightBlue);
        padding: 20px 5px 10px 5px;
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
        padding: 20px 5px 0 5px;
        
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
    
    @media screen and (max-width: 468px) {
        .searchBox form {
            flex-wrap: wrap;
            justify-content: space-between;
            
            input {
                padding: 10px;
                margin-right: 0;
                margin-bottom: 10px;
                flex: 100%;
            }
        } 
        
        .categoryList {
            flex-wrap: wrap;
            
            .categoryItem {
                width: 50%;
                min-width: 140px;
                flex-direction: row;
                justify-content: flex-start;
                margin-bottom: 10px;
                
                img {
                    margin-right: 10px;
                    width: 35px;
                    height: 35px;
                }
                
                span {
                    font-size: 17px;
                }
            }
        }
    }
`;

export const PageArea = styled.div`
    text-align: center;

    h2 {
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
        }
    }
    
    .list {
        display: flex;
        flex-wrap: wrap;
        
        .aditem {
            width: 25%;
            min-width: 250px;
            flex: auto;
        }
    }
    
    .seeAllLink {
        background-color: var(--blue);
        color: var(--white);
        padding: 10px 20px;
        font-weight: 600;
        display: inline-block;
        margin: 40px 0 20px 0;
        border-radius: 5px;
        transition: background-color .3s;
        
        &:hover {
            background-color: var(--lightBlue);
        }
    }
`;
