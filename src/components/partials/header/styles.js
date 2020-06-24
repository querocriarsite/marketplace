import styled from "styled-components";

export const HeaderArea = styled.div`
    background-color: var(--white);
    height: 60px;
    border-bottom:  1px solid #ccc;

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
    
        ul {
            display: flex;
            align-items: center;
            height: 40px;
        }
        
        li {
            margin-left: 30px;
        }
        
        a {
            font-size: 16px;
            font-weight: 600;
            color: var(--black);       
            
            &:hover {
                color: var(--blue);
            }        
            
            &.button {
                white-space: nowrap;
                background-color: var(--blue);
                color: var(--white);
                border-radius: 4px;
                padding: 10px;
                transition: background-color .3s;  
                
                &:hover {
                    background-color: var(--gray);
                }
            }
        }    
    }
`;

