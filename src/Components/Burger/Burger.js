import React from "react";
import styled from "react-emotion";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const Burger = styled("div")`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

const burger = props => {
  return (
    <Burger className={"Burger"}>
       <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />

      <BurgerIngredient type="bread-bottom" />
    </Burger>
  );
};

export default burger;
