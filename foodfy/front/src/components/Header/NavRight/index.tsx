import { List, X } from "phosphor-react";
import { useState } from "react";
import { SearchBar } from "../SearchBar";
import { BtnOpenModal, CloseModal, Content, MenuContainer, Wrapper } from "./styles";

export function NavRight() {
  const [active, setActive] = useState(false);

  return (
    <>
      <BtnOpenModal onClick={() => setActive(!active)}><List size={24} /></BtnOpenModal>
      <Wrapper status={active}>
        <MenuContainer status={active}>
          <Content status={active} className="content">
            <CloseModal onClick={() => setActive(!active)}><X /></CloseModal>

            <SearchBar />
          </Content>
        </MenuContainer>
      </Wrapper>
    </>


  )
}
