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
                border: 2px solid var(--black);
            }
            
            &::placeholder {
                color: var(--dGray);
            }
        }
        
        .categoryItem {
            display: flex;
            align-items: center;
            padding: 10px;
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
            font-size: 18px;
            margin: 0 10px 10px 10px;
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
            }
        }
        
        .pagination {
            display: flex;
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
                margin-right: 5px;
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
`;
