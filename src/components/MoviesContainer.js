import React from 'react'
import StyledMoviesContainer from '../styles/MoviesContainer.styled'
import Movies from './Movies'
import CategoryName from './CategoryName'



const MoviesContainer = () => {
  return (
    <StyledMoviesContainer>
      <CategoryName/>
      <div className='movies'>
        <Movies/>
      </div>
    </StyledMoviesContainer>
  )
}

export default MoviesContainer