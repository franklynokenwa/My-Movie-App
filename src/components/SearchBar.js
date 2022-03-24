import React from 'react'
import StyledSearchBar from '../styles/SearchBar.styled'


const SearchBar = (props) => {
  const {searchValue, setSearchValue} = props;
  console.log(searchValue);

  return (
    <StyledSearchBar>
      <p>Search</p>
      <input type='text'  onChange={(event) => setSearchValue(event.target.value)} />
      {console.log(searchValue)}
    </StyledSearchBar>
  )
}

export default SearchBar
