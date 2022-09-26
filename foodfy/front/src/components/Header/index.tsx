import { NavRight } from "./NavRight";
import { Center, HeaderContainer, HeaderContent, Right, User } from "./styles";

export function Header() {
  return (
    <HeaderContainer >
      <HeaderContent className="container">
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
      </HeaderContent>

    </HeaderContainer>
  )
}
