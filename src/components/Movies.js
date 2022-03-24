import React, {useContext} from 'react'
import StyledMovies from '../styles/Movies.styled'
import dataContext from './DataContext'

const Movies = () => {
  const apiData = useContext(dataContext) || []
  console.log(apiData);
  const a =[]
 
  return (
    apiData.map((item,index) => {
      const {Title, Type} = item
      console.log(Type);
      a.push(Type)
     
      return(
        <StyledMovies key={index}>
          <p>{Title}</p>
        </StyledMovies>
      )
    })
  )
}

export default Movies
