import heroImg from '../../../../assets/hero.png';
import { Description, HeroContainer, Left, Right, Tag, Title } from './styles';

interface HeroProps {
  id: number;
  title: string;
  description: string;
  tags?: string[];
  image: string;
}

export function Hero({id, title, image, description, tags}: HeroProps) {
    return (
        <HeroContainer>
          <Left>
            {tags && tags.map(tag=> (
              <Tag>{tag}</Tag>
            ))}
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Left>

          <Right>
            <img src={image} alt="" />
          </Right>
        </HeroContainer>
    )
}
