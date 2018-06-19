import React, {Component} from "react";
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

const BreadTop = styled("div")`
height: 20%;
width: 80%;
background: linear-gradient(#bc581e,#e27b36);
border-radius: 50% 50% 0 0;
box-shadow: inset -15px 0 #c15711;
margin: 2% auto;
position: relative;
`;

const Seed1 = styled("div")`
width: 10%;
height: 15%;
position: absolute;
background-color:white;
left: 30%;
top: 50%;
border-radius: 40%;
transform: rotate(20deg);
box-shadow: inset -2px -3px #c9c9c9;
`;


class BurgerIngredient extends Component { // class to access propTypes
    render(){
        let ingredient = null;

        switch (this.props.type) { // access props in class using this
          case "bread-bottom":
            ingredient = <BreadBottom />;
            break;
          case "bread-top":
            ingredient = (
              <BreadTop>
                <Seed1 />
              </BreadTop>
            );
            break;
      
        //   case "meat":
        //     ingredient = <Meat/>;
        //     break;
      
        //   case "cheese":
        //   ingredient = <Cheese/>;
        //   break;
      
        //   case "lamb":
        //     ingredient = <Lamb/>;
        //     break;
      
        //   case "salad":
        //   ingredient = <Salad/>;
        //   break;
      
          default:
            ingredient=null;
        }
        return ingredient;
    }
}
 


BurgerIngredient.propTypes={
    type: PropTypes.string.isRequired
}


export default BurgerIngredient;
