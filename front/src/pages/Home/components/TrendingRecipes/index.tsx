import heroImg from '../../../../assets/hero.png';
import { TrendingRecipesContainer } from './styles';

import cover from '../../../../assets/hero.png';

export function TrendingRecipes() {
    return (
        <TrendingRecipesContainer>
            <img src={cover} alt="" />
        </TrendingRecipesContainer>
    )
}