import { useEffect, useState } from "react";
import { api } from "../../../utils/api";
import { Post as IPost } from "../../Home";
import { Container, Post, Title } from "./styles";


type MenuProps = {
  category: string;
}

export function Menu({category}: MenuProps) {
  const [posts, setPosts] = useState<IPost[]>([]);

  console.log(category)
  async function fetchPosts() {
    try {
      const response = await api.get(`/api/posts/?cat=${category}`);

      setPosts(response.data);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [category]);

  return (
    <Container>
      <Title>Other posts you may like</Title>

      {posts.map(post => (
        <Post key={post.id}>
          <img src={`../public/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </Post>
      ))}
    </Container>
  )
}