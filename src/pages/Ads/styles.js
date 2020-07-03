import styled from "styled-components";

export const PageArea = styled.div`
    display: flex;
    margin-top: 20px;
    
    .leftSide {
        width: 250px;
        margin-right: 10px;    
        
        .filterName {
            font-size: 15px;
            margin: 10px 0;
        }
        
        input, select {
            width: 100%;
            height: 40px;
            border: 2px solid var(--dGray);
            border-radius: 5px;
            font-size: 15px;
            color: var(--balck);
            padding: 10px;
            
            &:focus {
                border: 2px solid var(--gray);
            }
            
            &::placeholder {
                color: var(--dGray);
            }
        }
        
        .categoryItem {
            display: flex;
            align-items: center;
            padding: 10px 0 10px 5px;
            border-radius: 5px;
            color: var(--black);
            cursor: pointer;          
            
            img {
                width: 25px;
                height: 25px;
                margin-right: 5px;
                border: 1px solid var(--black);
                border-radius: 50%;
            }
            
            span {
                font-size: 14px;
            }
        } 
        
        .categoryItem:hover, .categoryItem.active {
            background-color: var(--lightBlue);
            
            img {
                border: 1px solid var(--white);
            }
            
            & span {
                color: var(--white);
            }
        }       
    }
    
    .rightSide {
        flex: 1;
        
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
                margin-top: 4px;
            }
        }
        
        .listWarning {
            padding: 30px;
            text-align: center;
        }
        
        .list {
            display: flex;
            flex-wrap: wrap;
            
            .aditem {
                width: 33%;
                min-width: 240px;
            }
        }
        
        .pagination {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            margin: 20px 0;
            
            .pagItem {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 25px;
                height: 25px;
                background-color: var(--blue);
                color: var(--white);
                font-size: 13px;
                margin: 0 2px 5px 2px;
                border-radius: 4px;
                transition: background-color .2s, transform .2s;
                
                &:hover {
                    background-color: var(--lightBlue);
                    cursor: pointer;
                    transform: translateY(-5px);
                }
                
                &.active {
                    background-color: var(--lightBlue);
                    cursor: pointer;
                }
            }
        }
    }
    
    @media screen and (max-width: 1020px) {        
        .rightSide {
            .list .aditem {
                width: 50%;
            }
        }
    }
    
    @media screen and (max-width: 781px) {        
        .rightSide {
            .list .aditem {
                width: 100%;
            }
        }
    }
    
    @media screen and (max-width: 548px) {        
        flex-direction: column;
        
        .leftSide {
            width: 100%;
            
            ul {
                display: flex;
                flex-wrap: wrap;
                
                li {
                    width: 50%;
                }
            }
        }       
    }
`;
