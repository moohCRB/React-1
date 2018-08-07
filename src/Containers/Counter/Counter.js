import React, { Component } from "react";
import { connect } from "react-redux"; // A function which returns a HOC function for the export

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
        this.setState(prevState => {
          return { counter: prevState };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState };
        });
        break;
      default:
        return null;
    }
  };
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={()=>null} />
        <CounterControl label="Decrement" clicked={()=>null} />
        <CounterControl label="Add 5" clicked={()=>null} />
        <CounterControl label="Subtract 5" clicked={()=>null} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
ctr: state.counter
  };
}

export default connect(mapStateToProps)(Counter);
