import { Container, Content, Links, Logo, Write } from "./styles";
import logoImg from '../../assets/logo.png'
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <Container className="container">
        <h1>Aqui vai a logo</h1>
        <Links>
          <Link to="/?cat=art">
            <h6>Art</h6>
          </Link>
          <Link to="/?cat=science">
            <h6>Science</h6>
          </Link>
          <Link to="/?cat=technology">
            <h6>Technology</h6>
          </Link>
          <Link to="/?cat=cinema">
            <h6>Cinema</h6>
          </Link>
          <Link to="/?cat=design">
            <h6>Design</h6>
          </Link>    
          <Link to="/?cat=food">
            <h6>Food</h6>
          </Link>    

          <span>Gustavo</span>
          <span>Logout</span>
          <Write>
            <Link to="/write">Write</Link>
          </Write>
        </Links>
    </Container>
  )
}