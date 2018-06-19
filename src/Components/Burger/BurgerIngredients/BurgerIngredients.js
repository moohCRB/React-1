import React from "react";
import styled from "react-emotion";
import PropTypes from 'prop-types';

const BreadBottom = styled("div")`
  height: 13%;
  width: 80%;
  background: linear-gradient(#f08e4a, #e27b36);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #c15711;
  margin: 2% auto;
`;

const BurgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <BreadBottom />;
      break;
    case "bread-top":
      ingredient = (
        <BreadTop>
          <Seed1 />
          <Seed2 />
        </BreadTop>
      );
      break;

    case "meat":
      ingredient = <Meat/>;
      break;

    case "cheese":
    ingredient = <Cheese/>;
    break;

    case "lamb":
      ingredient = <Lamb/>;
      break;

    case "salad":
    ingredient = <Salad/>;
    break;

    default:
      ingredient=null;
  }
  return ingredient;
};

burgerIngredient.propTypes={
    
}

export default burgerIngredient;
