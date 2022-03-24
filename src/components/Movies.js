import React, {useContext, useState} from 'react'
import StyledMovies from '../styles/Movies.styled'
import dataContext from './DataContext'

const Movies = () => {
  const apiData = useContext(dataContext) || []
  const [category, setcategory] = useState('')
  console.log(apiData);
  const a =[]
 
  return (
    apiData.map((item,index) => {
      const {Title, imdbID, Poster, Type} = item
      console.log(Type);
      a.push(Type)
      console.log(a);
      console.log(category);
     
      return(
        <StyledMovies key={index}>
          <p>{Title}</p>
        </StyledMovies>
      )
    })
  )
}

export default Movies

/*
apiData.Search.map((item) => {
      const {Title} = item;
      return(
        <p>{Title}</p>
      )
    })
    width: 300px;
    height: 300px;

*/
