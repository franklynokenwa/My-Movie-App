import { useState, useEffect } from 'react';

import Hero from './components/Hero';
import MoviesContainer from './components/MoviesContainer';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import axios from 'axios'
import dataContext from './components/DataContext';
import CategoryName from '../src/components/CategoryName'



function App() {

  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getUserData = async (searchValue) => {
   await axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`)
   .then(
     response => {
       setData(response.data.Search)
     }
   )
  }

  useEffect(() => {
    getUserData(searchValue);
  },[searchValue])
  
  return (
    <dataContext.Provider value={data}>
      <NavBar/>
      <Hero/>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
      
      <MoviesContainer/>
    </dataContext.Provider>
  );
}

export default App;
