import styled, { css } from "styled-components";

interface WidgetContainerProps {
  title: string;
}

export const WidgetContainer = styled.div<WidgetContainerProps>`
  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1px;

  background: ${({theme}) => theme.colors["red-100"]};
  color: ${({theme}) => theme.colors.white};
  font-family: 'Lora', serif;

  position: relative;

  transition: transform .3s ease;
  cursor: pointer;
  z-index: 10;

  &:hover {
    transform: translateX(10px);
  }

  &::after {
    content: '${({title}) => title}';
    position: absolute;
    top: 0;
    left: 55px;
    height: 100%;
    min-width: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 20px;

    font-size: .75rem;
    letter-spacing: 1px;

    opacity: 0;
    visibility: hidden;

    background-color: rgba(0,0,0,.9);
  }

  &:hover::after {
    opacity: 1;
    visibility: visible;
    transform: translateX(5px);
    transition: opacity .5s ease, visibility .3s ease, transform .3s ease;
  }
`
