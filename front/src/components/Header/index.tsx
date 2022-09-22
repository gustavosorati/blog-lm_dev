import { NavRight } from "./NavRight";
import { Center, HeaderContainer, Right, User } from "./styles";



export function Header() {
  return (
    <HeaderContainer>
      <strong>Foodfy</strong>

      <Center>
        <a href="/">Sobre</a>
        <a href="/">Receitas</a>
        <a href="/">Chefs</a>
      </Center>

      <Right>
        <User>
          <a href="/">Register</a>
          <span />
          <a href="/">Login</a>
        </User>

        <NavRight />
      </Right>

    </HeaderContainer>
  )
}
