import { PencilSimpleLine, Trash } from "phosphor-react";
import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {formatDistance} from 'date-fns';
import { api } from "../../utils/api";
import { Post } from "../Home";
import { Menu } from "./Menu";
import { Container, Content, DeleteButton, EditButton, ImagePost, ImageUser, Info, PostContainer, UserContainer } from "./styles";
import { AuthContext } from "../../context/authContext";


type ISinglePost = Post & {
  username: string;
  user_img: string;
}


export function Single() {
  const {currentUser} = useContext(AuthContext);
  const [post, setPost] = useState<ISinglePost>({} as ISinglePost);
  const { id } = useParams();
  const navigate = useNavigate();

  async function fetchPosts() {
    try {
      const response = await api.get(`/api/posts/${id}`);

      setPost(response.data);
    } catch(err) {
      console.log(err)
    }
  }

  async function handleDelete() {
    try {
      await api.delete(`/api/posts/${id}`);

      navigate("/");
    } catch(err) {
      console.log(err)
    } 
  }

  const getText = (html: string) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  useEffect(() => {
    fetchPosts();
  }, [id]);

  
  return (
    <Container className="container">
      <Content>
        <ImagePost src={`../public/${post.img}`} />

        <UserContainer>

            <ImageUser src={post.user_img} />
            <Info>
              <strong>{post.username}</strong>
              <span>Posted {post?.date ? formatDistance(new Date(post?.date), new Date(), {
                addSuffix: true
              }) : ''}</span>
            </Info>

            {currentUser && currentUser?.username === post.username && (
              <>
                <EditButton to={`/write?edit=${post.id}`} state={post}>
                  <PencilSimpleLine size={24} color="white" />
                </EditButton>

                <DeleteButton onClick={handleDelete}>
                  <Trash size={24} color="white" />
                </DeleteButton>
              </>
            )}
        </UserContainer>

        <PostContainer>
            <h1>{post.title}</h1>

            <p>{getText(post.desc)}</p>
        </PostContainer>
      </Content>

      <Menu category={post.cat} />
    </Container>
  )
}