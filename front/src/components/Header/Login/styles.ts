import styled from "styled-components";

export const LoginContainer = styled.div`
    padding: 1rem;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    a, span {
    }

    a {
        color: ${({theme}) => theme.colors.white};
        background-color: ${({theme}) => theme.colors["red-100"]};
        padding: 1rem;

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }


        &:hover {
            filter: brightness(.8);
            transition: filter .2s;
        }
    }

    
    
`