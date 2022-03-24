import React from 'react'
import StyledSearchBar from '../styles/SearchBar.styled'


const SearchBar = (props) => {
  const {setSearchValue} = props;

  return (
    <StyledSearchBar>
      <p>Search</p>
      <input type='text'  onChange={(event) => setSearchValue(event.target.value)} />
    </StyledSearchBar>
  )
}

export default SearchBar
