import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return ( // This is gets compiled and is equivalent to:
    //   <div className="App">
    //  <h1>Hi, I'm a React App</h1>
    //   </div>
    // );
  return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App!'))// Equivalent to this
  // takes at least 3 arguments, 
  // first argument box type: component, div, h1, etc etc
  // second arg is the configuration for this 
  // Third argument is the number of children
  // As we can see, using JSX can get quite ugly and its easier to use "HTML" Tags
  // We see from the HTML that we have a className "App" that aligns the text to the center but it isn't being applied, the workaround is:
  // 
  }

}

export default App;
