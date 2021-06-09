import React, { FC, ChangeEvent } from 'react';
import { StyledSearchBar, StyledSearchIcon, StyledSpan, DeleteIcon, Wrapper, SearchBar } from './searchbar.styled';

type SearchbarProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  handleDelete: () => void;
};

const SearchbarComponent: FC<SearchbarProps> = ({ onChange, value, handleDelete }) => (
  <Wrapper>
    <StyledSearchBar>
      <StyledSearchIcon />
      <SearchBar placeholder='Search' onChange={onChange} value={value} />
      {value && (
        <DeleteIcon onClick={handleDelete}>
          <StyledSpan>&#10005;</StyledSpan>
        </DeleteIcon>
      )}
    </StyledSearchBar>
  </Wrapper>
);

export default SearchbarComponent;
