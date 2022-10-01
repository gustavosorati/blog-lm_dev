import { useEffect, useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { api } from "../../utils/api";
import { Post } from "./Post";
import { Container, PostsContainer} from "./styles";


export type Post = {
  id: number;
  title: string;
  desc: string;
  img: string;
  date: string;
  user_id: string;
  cat: string;
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const location = useLocation();
  const category = location.search;

 

  async function fetchPosts() {
    try {
      
      const response = await api.get(`/api/posts/${category}`);

      setPosts(response.data);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [category]);


  return (
    <Container className="container">
      <PostsContainer>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </PostsContainer>

    </Container>
  )
}