import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 6rem;

  &:nth-child(2n+1) {
    flex-direction: row-reverse
  }
`

export const ImageContainer = styled.div`
  flex: 2;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: #b9e7e7;
    position: absolute;
    top: 20px;
    left: -20px;
    z-index: -1;
  }
`


export const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
`

export const Content = styled.div`
  flex: 3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    width: max-content;
    padding: 10px 20px;
    color: teal;
    background-color: white;
    border: 1px solid teal;
    cursor: pointer;

    &:hover {
      border-color: white;
      background-color: #b9e7e7;
      color: black;
    }
  }
`

export const Title = styled.h1`
  font-size: 3rem;
`

export const Description = styled.p`
  font-size: 1.125rem;
`