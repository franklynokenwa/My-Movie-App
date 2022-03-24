import React, {useContext} from 'react'
import StyledCategoryName from '../styles/CategoryName.styled';
import dataContext from './DataContext';


const CategoryName = () => {
  const apiData = useContext(dataContext) || []
  const categoryContainer =[]
  let mostFrequentCategory = "";


// The below function is used to get the category className

    function findMostFrequentCategory(array) {
    let compare = "";
    
    
    array.reduce((acc, val) => {
      if(val in acc){           
         acc[val]++;       
      }else{
         acc[val] = 1;     
      }
      if(acc[val] > compare){   
                                
         compare = acc[val];    
         mostFrequentCategory = val;
      }
      return acc;
    }, {})

}

  apiData.map((item) => {
    const {Type} = item
    categoryContainer.push(Type)
    findMostFrequentCategory(categoryContainer)
   
    return mostFrequentCategory
  })

  return (
    <StyledCategoryName>
      <p>{mostFrequentCategory}</p>
    </StyledCategoryName>
   
  )
}

export default CategoryName
