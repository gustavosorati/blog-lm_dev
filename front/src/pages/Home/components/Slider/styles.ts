import styled from "styled-components";

export const SliderContainer = styled.div`
    width: 100%;
    height: 830px;


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
`

interface SlideProps {
  slide: number;
}

export const Slide = styled.div<SlideProps>`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  top: 0;
  left: 0;

  transform: translateX(${({slide}) => slide * - 100}%);
  transition: all .5s ease-in-out;
`

export const Title = styled.h1``
