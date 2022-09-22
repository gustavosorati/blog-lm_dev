import styled from "styled-components";

// export const HeroContainer = styled.div`
//     width: 100%;
//     height: 500px;
//     background: #eb01a5;

//     background-image: url('./src/assets/hero.png');
//     background-color: rgba(0,0,0,.4);
//     background-blend-mode: multiply;

//     background-position: center;
//     background-repeat: no-repeat;

//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

`
export const Left = styled.div`
  width: 600px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Right = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`

export const Tag = styled.div`
  color: #EF633E;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`
export const Title = styled.h1`
  color: #333333;
  font-family: "Elsie", Sans-serif;
  font-size: 72px;
  font-weight: 900;
  line-height: 1em;

  margin-bottom: 20px;
`
export const Description = styled.p`
  color: #54595F;
  font-size: 20px;
  line-height: 1.6em;
  `

