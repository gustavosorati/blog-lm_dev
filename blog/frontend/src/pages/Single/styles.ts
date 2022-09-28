import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 50px;
`;

export const Content = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Menu = styled.aside`
  flex: 2;
`

export const ImagePost = styled.img`
  width: 100%;
  height: 300px;
`;

export const UserContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ImageUser = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-weight: bolder;
  }
`;

export const EditButton = styled(Link)`
  background-color: teal;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DeleteButton = styled(Link)`
  background-color: lightcoral;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;  

  h1 {
    font-size: 2.75rem;
    color: #333;
  }

  p {
    text-align: justify;
    line-height: 30px;
  }

`