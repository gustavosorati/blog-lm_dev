import { Link } from "react-router-dom";

import logoImg from '../../assets/logo.svg'

import { LoginContainer, } from "./styles";

export function Login() {


    return (
        <LoginContainer>
            <Link to="/signIn">Sign In</Link>
            {/* <span>/</span> */}
            <Link to="/signUp">Sign Up</Link>
        </LoginContainer>
    )
}