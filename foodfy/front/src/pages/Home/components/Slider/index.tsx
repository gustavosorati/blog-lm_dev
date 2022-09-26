import { useEffect, useState } from "react";
import { Hero } from "./Slide";
import { Slide, SliderContainer } from "./styles";
import data from '../../../../../data.json';

export function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = data.slides.length - 1;

  const slide = () => {
    setSlideIndex(slideIndex => slideIndex < totalSlides ? slideIndex + 1 : 0)
  }

  useEffect(() => {
    let interval = setInterval(slide, 10000);

    return(() => {
      clearInterval(interval);
    });
  }, []);

  return (
    <SliderContainer>
      {data.slides.map(slide => (
        <Slide slide={slideIndex} key={slide.id}>
          <Hero
            title={slide.title}
            description={slide.description}
            image={slide.img}
            tags={slide.tags}
          />
        </Slide>
      ))}
    </SliderContainer>
  )
}
