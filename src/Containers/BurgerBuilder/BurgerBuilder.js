import React, {Component} from 'react';
import Aux from "../../hoc/Aux"
import Burger from "../../Components/Burger/Burger";

class BurgerBuilder extends Component{
state = {
    ingredients:{
        salad: 0,
        lamb: 0,
        cheese: 0,
        meat: 2
    }
}
    render(){

        return(
            <Aux>
               <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
                </Aux>
        );
    }
}

export default BurgerBuilder