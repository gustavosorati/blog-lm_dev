import { Container, Links, Write } from "./styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);

  async function handleLogout() {
    await logout();
  }
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

          <span>{currentUser?.username}</span>
          {currentUser ? <span onClick={handleLogout}>Logout</span> : <Link to="/login">Login</Link>}
          <Write>
            <Link to="/write">Write</Link>
          </Write>
        </Links>
    </Container>
  )
}