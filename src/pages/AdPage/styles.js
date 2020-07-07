import styled from "styled-components";
import {KeyboardArrowRight, KeyboardArrowLeft, Home} from "styled-icons/material";

export const Fake = styled.div`
    background-color: var(--lightGray);
    height: ${props => props.height || 20}px;
`;

export const PageArea = styled.div`
    display: flex;
    margin-top: 20px;
    
    [data-area] {
        background-color: var(--blue);
        color: var(--white);
        border-radius: 4px;
        padding: 5px 10px;
        
        &:hover {
            background-color: var(--lightBlue);
        }
    }
    
    .box {
        background-color: var(--white);
        border-radius: 5px;
        box-shadow: 0 0 9px -3px #54575a4d;
        margin-bottom: 20px;
        overflow: hidden;
        flex-direction: column;
    }
    
    .box-p {
        padding: 20px;
    }
    
    .slideThumb{
        cursor:grab;
    }
    .thumb{
        width:100px;
        height:100px;
        cursor:pointer;
        padding:0px 8px;
    }
    .thumb-footer{
        display:flex;
        justify-content:center;
        margin-top:10px;
    }
    .buttons-nav{
        width:740px;
        display:flex;
        justify-content:space-around;
        position:absolute;
        top:80%;
    }
    
    .leftSide {
        width: 70%;
        flex: 1;
        margin-right: 20px;        
        
        .box {
            display: flex;
            padding: 20px;
        }
        
        .adImage {
            width: 740px;
            height: 500px;
            max-width: 100%;
            
            .alice-carousel__dots {
                margin-top: -25px;
                position: absolute;
                width: 100%;
            }
            
            .alice-carousel__stage-item {
                text-align: center;
            }
            
            .thumb{
                width:10px;
                height:10px;
            }
        }
        
        .adInf {
            flex: 1;
            padding: 20px 0;
            margin-top: 30px;            
                           
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
        flex: 1;
        width: 30%;
        
        .price span {
            color: var(--green);
            display: block;
            font-size: 27px;
            font-weight: 600;
            text-align: center;
        }
        
        .contactSellerLink {
            background-color: var(--blue);
            color: var(--white);
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 0 9px -3px #54575a4d;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
            font-weight: 600;
            font-size: 18px;
            text-align: center;
            text-transform: uppercase;
        }
        
        .createdBy small {
            display: flex;
            color: var(--dGray);
            margin-top: 10px;
            word-break: break-word;
        }
        
        .createdBy strong {
            color: var(--gray);
            text-transform: capitalize;
            display: block;
        }
    }
    
    @media screen and (max-width:800px) {
        flex-direction: column;
        
        .leftSide {
            margin-right: 0;
            width: 100%;
            
            .alice-carousel__stage-item {
                width: 100%;
            }
        }
        
        .rightSide {
            width: 100%;
        }
    }
`;

export const OthersArea = styled.div`
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
    
    .list {
        display: flex;
        flex-wrap: wrap;
        
        .aditem {
            width: 25%;
            min-width: 240px;
        }
    }
    
    @media screen and (max-width: 1002px) {
        .list .aditem {
            width: 33%;
        }
    }
    
    @media screen and (max-width: 760px) {
        .list .aditem {
            width: 50%;
        }
    }
    
    @media screen and (max-width: 522px) {
        .list .aditem {
            width: 100%;
        }
    }
`;

export const RightArrow = styled(KeyboardArrowRight)`
    width: 16px;
    height: 16px;
    fill: var(--blue);
`;

export const LeftArrow = styled(KeyboardArrowLeft)`
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
