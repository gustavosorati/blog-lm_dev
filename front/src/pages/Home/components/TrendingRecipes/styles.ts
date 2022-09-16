import styled from "styled-components";

export const TrendingRecipesContainer = styled.div`
    width: 285px;
    height: 230px;
    background-color: ${({theme}) => theme.colors.white};
    padding: 5px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.15);
    
    &:hover {
        background: linear-gradient(${({theme}) => theme.colors.white} 0%, ${({theme}) => theme.colors["red-100"]} 100%)
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`