import { AxiosError } from "axios";
import { ChangeEvent, FormEvent, InputHTMLAttributes, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../utils/api";
import { Container, Form } from "./styles";

export function Register() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState<any>(null);

  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      await api.post('/auth/register', inputs);
      
      navigate('/login')
    } catch (error) {
      let e = error as AxiosError;
      setError(e.response?.data);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  return (
    <Container>
      <h1>Register</h1>

      <Form onSubmit={handleSubmit}>
        <input type="text" required placeholder="username" name="username" onChange={handleChange} value={inputs.username} />
        <input type="text" required placeholder="email" name="email" onChange={handleChange} value={inputs.email} />
        <input type="password" required placeholder="password" name="password" onChange={handleChange} value={inputs.password} />
        
        <button type="submit">Register</button>
        {error && <p>{error}</p>}
        
        <span>Do you have a account? <Link to="/login">Login</Link> </span>
      </Form>

    </Container>
  )
}