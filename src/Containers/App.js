import React, { Component } from "react";
// import styled, { css } from "react-emotion";
import Layout from "../Components/Layout/Layout";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Checkout from "./Checkout/Checkout";

// const Header = styled("div")`
//   width: 100%;
//   background-color: green;
//   height: 50px;
//   position: fixed;
//   z-index: 2;
//   top: 50px;
//   left: 0;
//   border-bottom: 1px solid black;
// `;
// const containerStyles = css`
//     display: flex; v
//     flex-direction: column;
//     width: 100%;
//     height: 5rem;
//     justify-content: space-between;
// `;



class App extends Component {
  render() {
    return (
      <div>
        <Layout>
         <BurgerBuilder />
         <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
