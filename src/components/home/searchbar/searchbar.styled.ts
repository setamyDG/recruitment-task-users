import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '@assets/icons/search.svg';

const StyledSearchBar = styled.div.attrs({
  'data-testid': 'searchbar-container',
})`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
`;

const SearchBar = styled.input<{ width?: string; height?: string }>`
  width: 100%;
  height: 25px;
  background: transparent;
  border: none;
  outline: none;
  font-weight: 300;
`;

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.white};
  transition: background 0.25s ease-in-out;
  :focus-within {
    background: ${({ theme }) => theme.colors.lightGray};
  }
`;

const DeleteIcon = styled.div`
  position: absolute;
  right: 10px;
  transform: translateY(-50%);
  top: 50%;
  height: 16px;
  width: 16px;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
  }
`;

const StyledSpan = styled.span`
  color: white;
  font-size: 0.75rem;
`;

const StyledSearchIcon = styled(SearchIcon)`
  margin-right: 10px;
`;

export { StyledSearchBar, StyledSearchIcon, StyledSpan, DeleteIcon, Wrapper, SearchBar };
