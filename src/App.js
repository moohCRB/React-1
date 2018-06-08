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

  switchNameHandler = ()=>{ /*Good practice to call it handler to indicate that it is changed by an event handler*/
  // console.log("Was clicked!");
  // this.state.persons[0].name="Bobilian"; // This is also a NO NO as it changes the state directly
  this.setState({// Use this instead, a special method React gives you to update the state property and updates the DOM.
    persons:[
      {
        name: "Bobilian",age:31
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
  render() {
    const a =4;
    return ( // This is gets compiled and is equivalent to the next return statement

      //in normal HTML we'd use the word class, but because this is JS we can't do that as its a reserved keyword. 
      <div className="App">  
     <h1>Hi, I'm a React App</h1>
     <button onClick={this.switchNameHandler}>Switch Name</button> {/*onClick with a capital C as its JSX, miniscule for HTML*/}
     <Person name={this.state.persons[0].name} age="31"/> {/* these names are hardcoded, we need to use state to make them more dynamic*/}
     <Person name="Alice" age="21">My Hobbies: Racing {a}</Person>
     <Person name={this.state.persons[2].name} age="23"/>
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
