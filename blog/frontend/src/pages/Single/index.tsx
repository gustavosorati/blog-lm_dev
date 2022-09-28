import { PencilSimpleLine, Trash } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "../../utils/api";
import { Menu } from "./Menu";
import { Container, Content, DeleteButton, EditButton, ImagePost, ImageUser, Info, PostContainer, UserContainer } from "./styles";

export function Single() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    const response = await api.post('/login', {
      username,
      password
    });

  }

  return (
    <Container className="container">
      <Content>
        <ImagePost src="https://via.placeholder.com/500" />

        <UserContainer>

            <ImageUser src="https://via.placeholder.com/50" />
            <Info>
              <strong>Gustavo</strong>
              <span>Posted 2 days ago</span>
            </Info>

            <EditButton to={`/write?edit=2`}>
              <PencilSimpleLine size={24} color="white" />
            </EditButton>

            <DeleteButton to={`/write?delete=2`}>
              <Trash size={24} color="white" />
            </DeleteButton>
        </UserContainer>

        <PostContainer>
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure autem cupiditate obcaecati molestiae, voluptatibus tempore laboriosam exercitationem recusandae quod maxime voluptates est qui esse deleniti repellendus magnam laudantium deserunt? Libero?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure autem cupiditate obcaecati molestiae, voluptatibus tempore laboriosam exercitationem recusandae quod maxime voluptates est qui esse deleniti repellendus magnam laudantium deserunt? Libero?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure autem cupiditate obcaecati molestiae, voluptatibus tempore laboriosam exercitationem recusandae quod maxime voluptates est qui esse deleniti repellendus magnam laudantium deserunt? Libero?

            </p>
        </PostContainer>
      </Content>

      <Menu />
    </Container>
  )
}