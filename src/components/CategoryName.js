import React, {useContext, useState} from 'react'
import dataContext from './DataContext';


const CategoryName = () => {
  const apiData = useContext(dataContext) || []
  const [category, setcategory] = useState('')
  console.log(apiData);
  const a =[]
  let mostFreq = "";

    function findMostFrequent(arr) {
    let compare = "";
    
    
    arr.reduce((acc, val) => {
      if(val in acc){               // if key already exists
         acc[val]++;                // then increment it by 1
      }else{
         acc[val] = 1;      // or else create a key with value 1
      }
      if(acc[val] > compare){   // if value of that key is greater
                                // than the compare value.
         compare = acc[val];    // than make it a new compare value.
         mostFreq = val;        // also make that key most frequent.
      }
      return acc;
    }, {})
    console.log("Most Frequent Item is:", mostFreq);

}

  apiData.map((item,index) => {
    const {Type} = item
    console.log(Type);
    a.push(Type)
    console.log(a);
    // findMostFrequent(a);
    findMostFrequent(a)
    console.log('good');
    console.log(mostFreq);
   
    return mostFreq
  })

  return (
    <div>
      <p>{mostFreq}</p>
    </div>
   
  )
}

    // <div>
    //   <p>Movie Category Name</p>
    // </div>

export default CategoryName
