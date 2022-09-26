import styled from "styled-components";

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .posts-grid {
    column-count: 3;
  }
`

export const Title = styled.h1`
  margin: 4rem 0 6rem 0;
  color: #333;
  font-family: "Elsie", Sans-serif;
  font-size: 3rem;
`

export const Post = styled.div`
  border-radius: 8px;
  overflow: hidden;

  margin-bottom: 20px;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform .5s ease;
  }

  img {
    display: block;
    width: 100%;
    border-radius: 8px;
  }
`

export const Info = styled.div`
  padding: 2rem 0 ;

  display: flex;
  flex-direction: column;

  strong {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  span {
    color: gray;
    font-size: .875rem;
  }
`

