import styled from "styled-components"

export const Button = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    background-color: ${({theme}) => theme.colors.dark};
    color: ${({theme}) => theme.colors.white};
    border-radius: 5px;

    cursor: pointer;
`