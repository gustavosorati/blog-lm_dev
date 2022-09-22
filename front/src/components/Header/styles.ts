import styled from "styled-components"

export const HeaderContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
height: 90px;

box-shadow: 0 .5px 4px 0  rgba(0,0,0,.1);

strong {
    font-size: 2rem;
    color: #333;
}
`

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  a {
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  gap: 3rem;
`

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: .75rem;
    text-transform: uppercase;
    color: #333;
    margin: 0 6px;
  }
`
