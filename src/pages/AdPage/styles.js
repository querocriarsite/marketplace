import styled from "styled-components";
import {KeyboardArrowRight, Home} from "styled-icons/material";

export const Fake = styled.div`
    background-color: var(--lightGray);
    height: ${props => props.height || 20}px;
`;

export const PageArea = styled.div`
    display: flex;
    margin-top: 20px;
    
    .box {
        background-color: var(--white);
        border-radius: 5px;
        box-shadow: 0 0 9px -3px #54575a4d;
        margin-bottom: 20px;
        overflow: hidden;
    }
    
    .box-p {
        padding: 10px;
    }
    
    .leftSide {
        flex: 1;
        margin-right: 20px;
        
        .box {
            display: flex;
        }
        
        .adImage {
            width: 320px;
            height: 320px;
            margin-right: 20px;
            
            .each-slide img {
                display: flex;
                align-items: center;
                justify-content: center;
                background-size: cover;
                height: 320px;
            }
        }
        
        .adInf {
            flex: 1;
            padding: 20px 20px 20px 0;
                           
            .adName {
                margin-bottom: 20px;
                
                small {
                    color: var(--dGray);
                }
            }
            
            .adDescription {
                small {
                    color: var(--dGray);
                }
                
                hr {
                    border: none;
                    background-color: var(--dGray);
                    height: 1px;
                    margin: 10px 0 0 0;
                }
            }
        }
    }
    
    .rightSide {
        width: 250px;
        
        .price span {
            color: var(--green);
            display: block;
            font-size: 27px;
            font-weight: 600;
        }
        
        .contactSellerLink {
            background-color: var(--blue);
            color: var(--white);
            padding: 12px 10px;
            border-radius: 5px;
            box-shadow: 0 0 9px -3px #54575a4d;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .createdBy small {
            display: block;
            color: var(--dGray);
            margin-top: 10px;
        }
        
        .createdBy strong {
            color: var(--gray);
            text-transform: capitalize;
            display: block;
        }
    }
`;

export const OthersArea = styled.div`
    h2 {
        font-size: 20px;
    }
    
    .list {
        display: flex;
        flex-wrap: wrap;
        
        .aditem {
            width: 25%;
        }
    }
`;

export const RightArrow = styled(KeyboardArrowRight)`
    width: 16px;
    height: 16px;
    fill: var(--blue);
`;

export const HomePag = styled(Home)`
    width: 16px;
    height: 16px;
    fill: var(--lightBlue);
`;

export const BreadChumb = styled.div`
    margin-top: 20px;
    font-size: 14px;
    font-weight: 600;
    color: var(--blue);
    
    a {
        color: var(--lightBlue);
    }
`;