import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css"
import Backdrop from "../../UI/Backdrop/backdrop";
import Aux from "../../../hoc/Aux";

// The tab that appears on the LHS.
const sideDrawer = props => {
    let attachedClasses = [classes.SideDrawer,classes.Close];
    if (props.open){
attachedClasses=[classes.SideDrawer,classes.Open]
    }
  return (
      <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
    <div className={attachedClasses.join(' ')}>
    <div className={classes.Logo}>
      LOGO
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </div>
    </Aux>
  );
};

export default sideDrawer;
