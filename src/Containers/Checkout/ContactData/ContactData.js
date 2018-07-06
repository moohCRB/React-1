import React, {Component} from "react";

import Button from "../../../Components/UI/Button/Button";
import classes from "./ContactData.css"

class ContactData extends Component {
state = {
    name: "",
    email: "",
    address: {
        street: "",
        postCode: ""
    }
}

render(){

    return(
        <div className={classes.ContactData}>
            <h4> Enter your Contact Details </h4>
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="text" name="email" placeholder="Your e-mail" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="postcode" placeholder="Post Code" />
                </form>
                <Button btnType="Success"> ORDER</Button>
        </div>
    )
}
}

export default ContactData;