import styled from "styled-components";
import {Menu} from "styled-icons/heroicons-outline";

export const HeaderArea = styled.div`
    position: sticky;
    background-color: var(--white);
    height: 60px;
    box-shadow: 0 0 5px #00000070;
    width: 100%;
    z-index: 1;
    top: 0;

    .container {
        max-width: 1200px;
        height: 100%;
        display: flex;
        margin: auto;
        padding: 0 20px;        
    }
    
    .logo {
        flex: 1;
        display: flex;
        align-items: center;
    }
    
    nav {
        display: flex;
        padding: 10px 0;
        
        button {
            display: none;
        }
    
        ul {
            display: flex;
            align-items: center;
            height: 40px;
        }
        
        li {
            margin-left: 30px;
        }
        
        a, button {
            font-size: 16px;
            font-weight: 600;
            color: var(--black);     
            white-space: nowrap;  
            
            &:hover {
                color: var(--blue);
            }        
            
            &.button {
                white-space: nowrap;
                background-color: var(--blue);
                color: var(--white);
                border-radius: 5px;
                padding: 10px;
                transition: background-color .3s;  
                
                &:hover {
                    background-color: var(--gray);
                }
            }
        }    
    }
    
    @media screen and (max-width: 668px) {
        height: auto;
        
        .logo {
            padding: 10px 0 5px 0;
            width: 100%;
        }
        
        .logo.border {
            border-bottom: 1px solid #cecece;
        }
    
        .container {
            align-items: center;
        }
        
        .container.column {
            flex-direction: column!important;
        }
        
        nav {
            button {
                display: flex;
                position: absolute;
                right: 20px;
                top: 20px;
            }
            
            ul {
                flex-direction: column;
                height: auto;
                margin-bottom: 10px;
                display: none;
            }
            
            ul.show {
                display: flex!important;
                animation: downMenu .5s;
            }
            
            @keyframes downMenu {
                from {
                    transform: translateY(-20px);
                }
                to {
                    transform: translateY(0px);
                }
            }
            
            li {
                margin: 10px;
            }
           
            li:nth-child(3) {
                margin-top: 20px;
            }
        }
    }
`;

export const Toggle = styled(Menu)`
    width: 30px;
    height: 30px;
`;
