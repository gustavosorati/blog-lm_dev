import styled from "styled-components";

export const SearchBarContainer = styled.div`
    border-radius: 30px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);

    display: flex;
    align-items: center;
    gap: .6rem;
    padding: 0 1rem;

    input {
        border: 0;
        background: transparent;
        width: 120px;
        height: 35px;
    }
`