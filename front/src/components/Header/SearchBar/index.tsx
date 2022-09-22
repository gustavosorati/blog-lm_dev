import { MagnifyingGlass } from 'phosphor-react';
import { SearchBarContainer } from './styles';

export function SearchBar() {
  return (
    <SearchBarContainer>
      <input type="text" placeholder="Pesquise..." />
      <button><MagnifyingGlass size={18} color="#fff" weight='bold' /></button>
    </SearchBarContainer>
  )
}
