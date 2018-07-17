import React, { Component } from "react";

import CounterControl from "../../Components/CounterControl/CounterControl";
import CounterOutput from "../../Components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState };
        });
        break;
        case "dec":
        this.setState((prevState)=> {return {counter:prevState}})
        break;
        case "add":
        this.setState((prevState)=> {return {counter:prevState}})
        break;
        
    }
  };
}
