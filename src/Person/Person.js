// We can use classes to create components, and we have to for handling the state, however
// most of the time we should use a JS function, because at its simplest form, a component
// is just a function that returns some JSX.
import React from 'react';


const person = (props) => { 
    return (
    <div>
        <p>My name is {props.name} and I am {props.age} years old!</p>
        {/* Children are a special property given to us by react which is the text in between the <> </> tags that are passed into this component */}
       <p> {props.children}</p> 
        </div>
    )
}

export default person;