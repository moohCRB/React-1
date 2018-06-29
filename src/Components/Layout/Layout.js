import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";
import styled from "react-emotion";
import Toolbar from "../Navigation/Toolbar/Toolbar";
const Header = styled("div")`
margin-top: 50px;
`;

const layout = props => (
  <Aux>
    <Toolbar />
    <div>Toolbar,SideDrawer,Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
