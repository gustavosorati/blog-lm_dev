import styled, { css, keyframes } from "styled-components"

interface AnimationProps {
  status: boolean;
}

// Animações
const slide = keyframes`
  to {
    width: 100%;
    visibility: visible;
    opacity: 1;
  }
`;

const contentSlideUp = keyframes`
  to {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
  }
`;

// Componentes
export const Wrapper = styled.div<AnimationProps>`
  position: fixed;
  top: 0;
  right: 0;

  width: 0;
  height: 100%;

  background-color: rgba(0,0,0,0.3);

  visibility: hidden;
  opacity: 0;
  transition: all ease;

  z-index: 20;

  ${({status}) => status && css`
    animation: ${slide} .4s ease-in forwards;
  `}

  display: flex;
  align-items: flex-end;
  justify-content: end;
`

export const MenuContainer = styled.div<AnimationProps>`
  max-width: 350px;
  width: 0;
  height: 100vh;
  background-color: white;

  opacity: 0;
  visibility: hidden;
  transition: all ease;

  ${({status}) => status && css`
    animation: ${slide} .2s ease-in .6s forwards;
  `}

  padding: 1rem;
`

export const Content = styled.div<AnimationProps>`
  background-color: white;
  width: 100%;
  height: 800px;

  transform: translateY(200px);

  ${({status}) => status && css`
    animation: ${contentSlideUp} .2s ease .8s both;
  `}
  transition: all ease;

  display: flex;
  flex-direction: column;
`

export const CloseModal = styled.button`
  height: 40px;
  width: 40px;

  align-self: flex-end;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  margin-bottom: 5rem;
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.colors["red-100"]};
    color: ${({theme}) => theme.colors.white};
    border-radius: 0;
  }

  transition: border-radius .2s ease;
`

export const BtnOpenModal = styled.button`
  cursor: pointer;
  background-color: transparent;
`
