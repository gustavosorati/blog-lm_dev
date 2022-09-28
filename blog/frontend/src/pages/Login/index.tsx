import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../utils/api";
import { Container, Form } from "./styles";

export function Login() {
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
    <Container>
      <h1>Login</h1>

      <Form onSubmit={handleLogin}>
        <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} value={username} />
        <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button type="submit">Login</button>
        
        <p>This is a Error!</p>
        <span>Don't you have a account? <Link to="/register">Register</Link> </span>
      </Form>

    </Container>
  )
}