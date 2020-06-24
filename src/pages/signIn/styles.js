import styled from "styled-components";

export const PageArea = styled.div`
    form {
        background-color: var(--white);
        border-radius: 3px;
        padding: 10px;
        box-shadow: 0 0 3px #999;
    
        .area {
            display: flex;
            align-items: center;
            padding: 10px;
            max-width: 500px;
            
            .area-title {
                width: 200px;
                text-align: right;
                padding-right: 20px;
                font-weight: 700;
                font-size: 14px;
            }
            
            .area-input {
                flex: 1;
                
                &.remember {
                    display: flex;
                    align-items: center;
                    font-size: 13px;
                }
                
                input {
                    width: 100%;
                    font-size: 14px;
                    padding: 5px;
                    border: 1px solid #ddd;
                    border-radius: 3px;
                    transition: border-color .4s ease;
                    
                    &[type=checkbox] {
                        width: min-content;
                        margin-right: 5px;
                    }
                    
                    &:focus {
                        border-color: var(--black);
                        color: var(--black);
                    }
                }
                
                button {
                    background-color: var(--gray);
                    padding: 5px 10px;
                    border-radius: 4px;
                    color: var(--white);
                    font-size: 15px;
                    transition: background-color .3s;
                
                    &:hover {
                        background-color: var(--blue);
                    }
                }
            }  
        }
    }
`;
