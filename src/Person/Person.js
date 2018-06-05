// We can use classes to create components, and we have to for handling the state, however
// most of the time we should use a JS function, because at its simplest form, a component
// is just a function that returns some JSX.
import React from 'react';


const person = () => {
    return <p>I'm a Person!</p>
}

export default person;