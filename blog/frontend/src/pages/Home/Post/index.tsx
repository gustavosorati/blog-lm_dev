import { Link } from "react-router-dom";
import { Container, Content, Description, Image, ImageContainer, Title } from "./styles";

type IPost = {
  id: number;
  title: string;
  desc: string;
  img: string;
}

type Props = {
  post: IPost;
}

export function Post({post}: Props) {

  return (
    <Container>
      <ImageContainer>
        <Image src={post.img} alt="" />
      </ImageContainer>
      <Content>
        <Link to={`/post/${post.id}`}>
          <Title>{post.title}</Title>
        </Link>
        <Description>{post.desc}</Description>
        <button>Read Mode</button>
      </Content>
    </Container>
  )
}