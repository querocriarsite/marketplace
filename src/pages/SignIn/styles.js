import styled from "styled-components";
import Image from "../../assets/mosaic.jpg";
import {LockPassword} from "styled-icons/remix-fill";
import {Email} from "styled-icons/material";

export const PageArea = styled.div`
    background: url(${Image});
    background-size: cover;
    padding: 100px 10px;
    box-shadow: 0 0 3px #999;
    border-radius: 5px;

    form {       
        margin: auto; 
        display: flex;
        width: fit-content;
        flex-direction: column;
        align-items: center;
        background-color: var(--white);
        padding: 20px 30px;
        box-shadow: 0 0 3px #999;
        border-radius: 5px;
    
        .area {
            display: flex;
            flex-direction: column;
            padding: 10px;
            max-width: 400px;
            
            .area-title {
                text-align: left;
                font-weight: 700;
                font-size: 14px;
                margin-bottom: 10px;
                display: flex;
            }
            
            .area-input {
                flex: 1;
                
                &.remember {
                    display: flex;
                    align-items: center;
                    font-size: 13px;
                }
                
                input {
                    width: 300px;
                    font-size: 14px;
                    padding: 5px;
                    border: 2px solid var(--dGray);
                    border-radius: 3px;
                    transition: border-color .4s ease;
                    
                    &[type=checkbox] {
                        width: min-content;
                        margin-right: 5px;
                    }
                    
                    &:focus {
                        border-color: var(--gray);
                        color: var(--gray);
                    }
                }
                
                button {
                    background-color: var(--blue);
                    padding: 5px 10px;
                    border-radius: 4px;
                    color: var(--white);
                    font-size: 15px;
                    transition: background-color .3s;
                
                    &:hover {
                        background-color: var(--gray);
                    }
                }
            }  
        }
    }
    
    @media screen and (max-width: 548px) {
        form {
            padding: 10px;
        }
    
        form .area-input input {
            width: 100%!important;
        }
        
        form .area-input:nth-child(1) {
            white-space: nowrap
        }
    }
`;

export const Password = styled(LockPassword)`
    width: 16px;
    height: 16px;
    margin-right: 5px;
    fill: var(--blue);
`;

export const User = styled(Email)`
    width: 16px;
    height: 16px;
    margin-right: 5px;
    fill: var(--blue);
`;
