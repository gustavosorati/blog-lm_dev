import { useEffect, useState } from "react";
import { Hero } from "../Hero";
import { Slide, SliderContainer, Title } from "./styles";
import img from '../../../../assets/hero.png'

export function Slider() {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleSlide = () => {
    setSlideIndex(slideIndex => slideIndex < 2 ? slideIndex + 1 : 0)
  }

  useEffect(() => {
    let interval = setInterval(handleSlide, 6000);

    return(() => {
      clearInterval(interval);
    })
  }, [])

  return (
    <SliderContainer>
      <Slide slide={slideIndex}>
          <Hero
            id={1}
            title="Welcome to Just Bakery"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image={img}
            tags={['Our Bakery']}
          />
      </Slide>

      <Slide style={{ background: 'red'}} slide={slideIndex}>
          <Title>
              Slide 2
          </Title>
      </Slide>

      <Slide style={{ background: 'blue'}} slide={slideIndex}>
          <Title>
              Slide 3
          </Title>
      </Slide>

    </SliderContainer>
  )
}
