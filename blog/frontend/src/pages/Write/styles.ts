import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

export const Content = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    padding: 10px;
    border: 1px solid lightgray;
  }
`

export const Menu = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const MenuItem = styled.div`
  border: 1px solid lightgray;
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  ;
  justify-content: space-between;
  font-size: 12px;
  color: #555;

  h1 {
     font-size: 20px;
  }

`

export const Input = styled.input``;

export const EditorContainer = styled.div`
  height: 300px;
  border: 1px solid lightgray;

  .editor {
    height: 100%;

    .ql-container {
      border: none !important;
    }

    .ql-toolbar {
      border: none;
      border-bottom: 1px solid lightgray;
    }
  } 
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    padding: 3px 5px;
    border: 1px solid teal;
    cursor: pointer;

    &:first-child {
      color: teal;
      background-color: white;
    }

    &:last-child {
      color: white;
      background-color: teal;
    }
  }
  
`

export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: teal;
`