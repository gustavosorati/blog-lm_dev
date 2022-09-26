import styled from "styled-components";

export const InputContainer = styled.label`
    width: 100%;
    border: 3px solid ${({theme}) => theme.colors.dark};
    border-radius: 5px;

    display: flex;
    align-items: center;
    gap: .2rem;

    padding-left: .5rem;
    margin-bottom: 1rem;

    input {
        background-color: transparent;
        width: 100%;
        padding: 1rem;
    }

    &:hover, &:focus-within {
        border-color: ${({theme}) => theme.colors["red-100"]};
        transition: border-color 0.2s;
    }
`