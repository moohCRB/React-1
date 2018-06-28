import React from "react";
import Aux from "../../../hoc/Aux";

const orderSummary = props => {
  //transform the ingredients object to an array
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li>
        <span style={{ textTrabsform: "capitalize" }}>{igKey}</span>:{
          props.ingredients[igKey]
        }
      </li>
    );
  });
  return (
    <Aux>
      <h3> Your Order</h3>
      <p> A delicious burger wit hthe following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
