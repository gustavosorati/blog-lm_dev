import styled from "styled-components";

export const Container= styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 25px;
`
export const Title= styled.h1`
  font-size: 1.25rem;
  color: #555;
`

export const Post= styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h2 {
    color: #555;
  }

  button {
    width: max-content;
    padding: 7.5px 15px;
    border: none;
    cursor: pointer;
    color: teal;
    background-color: white;
    border: 1px solid teal;

    &:hover {
      border-color: white;
      background-color: #b9e7e7;
      color: black;
    }
  }
`