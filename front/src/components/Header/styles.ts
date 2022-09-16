import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    background-color: ${({theme}) => theme.colors.white};

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between; 
        gap: 1rem;
        height: 80px;
    }
`

export const MenuContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    a {
        font-size: 1.125rem;
        text-transform: uppercase;

        &:hover {
            color: ${({theme}) => theme.colors["red-100"]};
            transition: color 0.2s;
        }
    }
`