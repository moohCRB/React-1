import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"; // this has to be imported as an uppercase for it to be rendered.

class App extends Component {
  // What we're about to do can be only with classes that EXTENDS components
  state = {
    persons: [
      {
        name: "Bob",age:31
      },
      {
        name: "Manu",age:21
      },
      {
        name: "Lucy",age:23
      },
    ],
    showPersons:false
  }

  switchNameHandler = (newName)=>{ /*Good practice to call it handler to indicate that it is changed by an event handler*/
  // this.state.persons[0].name="Bobilian"; // This is also a NO NO as it changes the state directly
  this.setState({// Use this instead, a special method React gives you to update the state property and updates the DOM.
    persons:[
      {
        name: newName,age:31
      },
      {
        name: "Manuuuu",age:21
      },
      {
        name: "Lucaay",age:23
      },
    ]
  }) 
  }
  nameChangedHandler = (event)=>{
   this.setState({
      persons:[
      {
        name: "Max",age:31
      },
      {
        name: event.target.value,age:21
      },
      {
        name: "Lucaay",age:23
      },
    ]
  })
  }

togglePersonsHandler = ()=> {
  const show = this.state.showPersons;
this.setState({showPersons: !show});
}

  render() {
    const style = { // styling the hover state is hard using inline styles, one restriction of this method but good for scoping
      // as it you decide which components use this style
      backgroundColor: "white",
      font:"inherit",
      border:"1px solid blue",
      padding:"8px",
      cursor:"pointer"
    }
    return ( // This is gets compiled and is equivalent to the next return statement

      //in normal HTML we'd use the word class, but because this is JS we can't do that as its a reserved keyword. 
      <div className="App">  
     <h1>Hi, I'm a React App</h1>
     <button 
     style={style}
    //  onClick={()=>this.switchNameHandler("SecondWayToPassArguments")}>Switch Name</button> {/*onClick with a capital C as its JSX, miniscule for HTML*/}
    onClick={()=>this.togglePersonsHandler()}>Toggle Persons</button>
    {/*We can also send arguments to the event handler and there's two ways to do this:
      1: binding "this" and passing the argument. e.g  <button onClick={this.switchNameHandler.bind(this,"Name Based on this click")} />
      2: Arrow functions as shown above (this is conserved in arrow functions remember?) tends to be less efficient, use bind where possible
  */}
  {this.state.showPersons&&<div> {/*We'll wrap these in a div so we can show/hide all the content with a click of a button (literally)*/}
  {this.state.persons.map(person=> <Person name={person.name} age={person.age}/>)}
      </div>}
      </div>)
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App!'))// Equivalent to this
  // // takes at least 3 arguments, 
  // // first argument box type: component, div, h1, etc etc
  // // second arg is the configuration for this 
  // // Third argument is the number of children
  // // As we can see, using JSX can get quite ugly and its easier to use "HTML" Tags
  // // We see from the HTML that we have a className "App" that aligns the text to the center but it isn't being applied, the workaround is:
  // // 


}}

export default App;
