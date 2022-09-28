import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../utils/api";
import { Container, Form } from "./styles";

export function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

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
        <input type="text" required placeholder="username" onChange={(e) => setUsername(e.target.value)} value={username} />
        <input type="text" required placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" required placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        
        <button type="submit">Register</button>
        
        <p>This is a Error!</p>
        <span>Do you have a account? <Link to="/login">Login</Link> </span>
      </Form>

    </Container>
  )
}