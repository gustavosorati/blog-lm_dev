import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 0;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.div`
  width: 120px;
`


export const Logo = styled.img``


export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h6 {
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
  }

  span {
    cursor: pointer;
  }
`

export const Write = styled.span`
  background-color: #b9e7e7;
  width: 50px;;
  height: 50px;
  border-radius: 50%;
  border: 1px solid transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  
  &:hover {
    color: teal;
    background-color: white;
    border: 1px solid teal;
  }

  a {
    color: inherit;
  }
`
