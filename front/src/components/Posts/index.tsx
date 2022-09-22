import { Info, Post, PostsContainer, Title } from "./styles";
import data from '../../../data.json'
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css';

export function Posts() {

  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  return (
    <PostsContainer data-aos="fade-up">
      <Title>Popular Recipes</Title>

      <div className="posts-grid">
        {data.posts.map((post) => {
          return (
            <Post className="item" key={post.id}>
              <img src={post.img} alt="" />

              <Info>
                <strong>{post.title}</strong>
                <span>{post.time}</span>
              </Info>
            </Post>
          )
        })}
      </div>
    </PostsContainer>
  )
}
