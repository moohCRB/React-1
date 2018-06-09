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
    ]
  }

  switchNameHandler = (newName)=>{ /*Good practice to call it handler to indicate that it is changed by an event handler*/
  // console.log("Was clicked!");
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
  render() {
    const a =4;
    return ( // This is gets compiled and is equivalent to the next return statement

      //in normal HTML we'd use the word class, but because this is JS we can't do that as its a reserved keyword. 
      <div className="App">  
     <h1>Hi, I'm a React App</h1>
     <button onClick={()=>this.switchNameHandler("SecondWayToPassArguments")}>Switch Name</button> {/*onClick with a capital C as its JSX, miniscule for HTML*/}
    {/*We can also send arguments to the event handler and there's two ways to do this:
      1: binding "this" and passing the argument. e.g  <button onClick={this.switchNameHandler.bind(this,"Name Based on this click")} />
      2: Arrow functions as shown above (this is conserved in arrow functions remember?) tends to be less efficient, use bind where possible
  */}
     <Person 
     name={this.state.persons[0].name} age="31"/> {/* these names are hardcoded, we need to use state to make them more dynamic*/}
     <Person 
     name={this.state.persons[1].name} age="21" 
     click={this.switchNameHandler.bind(this,"FirstWayToPassArguments")}
     changed={this.nameChangedHandler}
     > {/*You can send a reference to the method that updates the state to a component
     functional component so it can update the state,
    There are two ways of sending arguments to the even handler method: 
    1: using bind as above
    2: arrow functions as shown in the button onClick (less efficient use bind functions where possible)
    */}

     My Hobbies: Racing {a}</Person> 
     <Person 
     name={this.state.persons[2].name} age="23"
     changed={this.nameChangedHandler}/>
      </div>
    );
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App!'))// Equivalent to this
  // // takes at least 3 arguments, 
  // // first argument box type: component, div, h1, etc etc
  // // second arg is the configuration for this 
  // // Third argument is the number of children
  // // As we can see, using JSX can get quite ugly and its easier to use "HTML" Tags
  // // We see from the HTML that we have a className "App" that aligns the text to the center but it isn't being applied, the workaround is:
  // // 
  }

}

export default App;
