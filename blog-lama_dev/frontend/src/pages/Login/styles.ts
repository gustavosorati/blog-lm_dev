import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  background-color: #b9e7e7;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  background-color: white;

  padding: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  input {
    width: 200px;
    padding: 10px;
    border-bottom: 1px solid gray;
  }

  button {
    width: 100%;
    padding: 10px;
    color: white;
    background-color: teal;
    cursor: pointer;
  }

  p {
    font-size: 0.75rem;
    text-align: center;
    color: red;
  }

  span {
    font-size: 0.75rem;
    text-align: center;
  }
`;
