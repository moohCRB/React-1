import React, { Component } from "react";
import styled, { css } from "react-emotion";

const Header = styled("div")`
    width: 100%;
    background-color: green;
    height: 50px;
    position: fixed;
    z-index: 2;
    top: 50px;
    left: 0;
    border-bottom: 1px solid black;
`;
// const containerStyles = css`
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     height: 5rem;
//     justify-content: space-between;
// `;

class App extends Component {
  render() {
    console.log("Yes");
      return(
    <div>
          {/* <h1>Hi, I'm a React App</h1> */}
   
      <div>asdasdasd adsad asd sad sa</div>
      <Header>asdsa</Header>
    </div>
    
      )
  }
}

export default App;
