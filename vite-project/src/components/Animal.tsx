import React from 'react'

function Animal() {
    let animals:string[] = ['Lion', "Tiger"]
  return (<>
    <div>
      Animal
    </div>
    <ul>
        {animals.map((animal,index) => 
        <li key={`animal-${index}`}>{ animal }</li>)} 
    </ul>
    </> )
}

export default Animal
