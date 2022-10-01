import { Link, useNavigate, useNavigation } from "react-router-dom";
import { Post as IPost } from "..";
import { Container, Content, Description, Image, ImageContainer, Title } from "./styles";

type Props = {
  post: IPost;
}

export function Post({post}: Props) {
  const navigation = useNavigate();

  function handleRedirectToPost() {
    navigation(`/post/${post.id}`)
  }

  const getText = (html: string) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <Container>
      <ImageContainer>
        <Image src={`../public/${post.img}`} alt="" />
      </ImageContainer>
      <Content>
        <Link to={`/post/${post.id}`}>
          <Title>{post.title}</Title>
        </Link>
        <Description>{getText(post.desc)}</Description>
        <button onClick={handleRedirectToPost}>Read Mode</button>
      </Content>
    </Container>
  )
}