import React from 'react'

type GreetingsParams = {
    firstname: String,
    lastname?: String,
    age?: number
}

const Greeting = ( {firstname,lastname,age=5}: GreetingsParams ) => {
    return <h2>{firstname} {lastname} {(age+30)}</h2>
}

export default Greeting