import React, { FC, ChangeEvent } from 'react';
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

const SearchBar = styled.input.attrs({
  'data-testid': 'searchbar',
})<{ width?: string; height?: string }>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '25px'};
  background: transparent;
  border: none;
  outline: none;
`;

const Wrapper = styled.div<{ className?: string }>`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  transition: background 0.25s ease-in-out;
  :focus-within {
    background: ${({ theme }) => theme.colors.white};
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

type SearchbarProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  handleDelete: () => void;
  placeholder: string;
  className?: string;
  width?: string;
  height?: string;
};

const SearchbarComponent: FC<SearchbarProps> = ({
  onChange,
  value,
  handleDelete,
  placeholder,
  className,
  width,
  height,
}) => (
  <Wrapper className={className}>
    <StyledSearchBar>
      <StyledSearchIcon />
      <SearchBar width={width} height={height} placeholder={placeholder} onChange={onChange} value={value} />
      {value && (
        <DeleteIcon onClick={handleDelete}>
          <StyledSpan>&#10005;</StyledSpan>
        </DeleteIcon>
      )}
    </StyledSearchBar>
  </Wrapper>
);

export default SearchbarComponent;
