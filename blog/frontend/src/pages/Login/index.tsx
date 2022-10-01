import { AxiosError } from "axios";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { api } from "../../utils/api";
import { Container, Form } from "./styles";

export function Login() {
  const {login} = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState<any>(null);

  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      await login(inputs);
      
      navigate('/');
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
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" name="username" onChange={(e) => handleChange(e)} value={inputs.username} />
        <input type="text" placeholder="password" name="password" onChange={(e) => handleChange(e)} value={inputs.password} />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}

        <span>Don't you have a account? <Link to="/register">Register</Link> </span>
      </Form>

    </Container>
  )
}