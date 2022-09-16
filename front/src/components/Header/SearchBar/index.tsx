import {MagnifyingGlass} from 'phosphor-react';
import { useTheme } from 'styled-components';
import { SearchBarContainer } from './styles';

export function SearchBar() {
    const theme = useTheme();

    return (
        <SearchBarContainer>
                <MagnifyingGlass size={16} weight={'bold'} color={theme.colors['red-100']} />
            <input type="text" placeholder='Hit enter to search'/>
        </SearchBarContainer>
    )
}