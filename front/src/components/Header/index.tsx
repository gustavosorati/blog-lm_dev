import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";

import logoImg from '../../assets/logo.svg'

import { HeaderContainer, MenuContainer } from "./styles";
import { useEffect } from "react";
import { Login } from "./Login";

export function Header() {

    function setEffectHeader() {

    }


    useEffect(() => {

        window.removeEventListener('scrollY', setEffectHeader);
    }, []);

    window.addEventListener('scrollY', setEffectHeader);

    return (
        <HeaderContainer>
            <div className="container">
                <img src={logoImg} alt="" />

                <MenuContainer>
                    <Link to="/">Blog</Link>
                    <Link to="/">Posts</Link>
                    <Link to="/">Pages</Link>
                </MenuContainer>

                <SearchBar />

                <Login />
            </div>
        </HeaderContainer>
    )
}